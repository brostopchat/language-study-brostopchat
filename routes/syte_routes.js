const { Router } = require('express');
const { check, validationResult } = require('express-validator');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const config = require('config');
const User = require('../models/User');
const router = Router();

//register
router.post(
    '/register',
    [
        check('email', 'Incorrect email').isEmail(),
        check('password', 'Minimum password length 6 characters')
            .isLength({ min: 6 })
    ],
    async (req, res) => {
        try {
            const errors = validationResult(req)

            if (!errors.isEmpty()) {
                res.status(400).json({
                    errors: errors.array(),
                    message: 'Incorrect registration data'
                })
            }

            const { email, password } = req.body

            const candidate = await User.findOne({ email: email })

            if (candidate) {
                return res.status(400).json({ message: 'This user already exists' })
            }
            
            const hashedPassword = await bcrypt.hash(password, 12)
            const user = new User({
                email,
                password: hashedPassword
            })
            await user.save()

            res.status(201).json({ message: 'User created' })

        } catch (e) {
            res.status(500).json({ message: 'Something get wrong, try again' })
        }
    })

//login
router.post(
    '/login',
    [
        check('email', 'Enter correct email').normalizeEmail().isEmail(),
        check('password', 'Enter correct password').exists()
    ],
    async (req, res) => {
        try {
            const errors = validationResult(req)

            if (!errors.isEmpty()) {
                res.status(400).json({
                    errors: errors.array(),
                    message: 'Incorrect data when logging into account'
                })
            }

            const { email, password } = req.body

            const user = await User.findOne({ email })

            if (!user) {
                res.status(400).json({ message: 'User not found' })
            }

            const isMatch = await bcrypt.compare(password, user.password)

            if (!isMatch) {
                res.status(400).json({ messsage: 'Wrong password, try again' })
            }

            const token = jwt.sign(
                { userId: user.id }, 
                config.get('jwtSecret'),
                { expiresIn: '1h' }
            )

            res.json({ token, userId: user.id })

        } catch (e) {
            res.status(500).json({ message: 'Something get wrong, try again' })
        }
    })

//view cards

module.exports = router;