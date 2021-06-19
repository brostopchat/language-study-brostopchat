const { Router } = require('express');
const config = require('config');
const Card = require('../models/Card');
const auth = require('../middleware/auth.middlware');
const router = Router();

router.post('/create', auth, async (req, res) => {
    try {
        const {from} = req.body

        const card = new Card({
            title: from.title,
            subtitle: from.subtitle,
            owner: req.user.userId
        })
        console.log(card)

        await card.save()
        
        res.status(201).json({ card })
    } catch (e) {
        res.status(500).json({ message: 'Something get wrong, try again' })
    }
})

router.get('/cards', auth, async (req, res) => {
    try {
        const cards = await Card.find({ owner: req.user.userId })
        res.json(cards)
    } catch (e) {
        res.status(500).json({ message: 'Something get wrong, try again' })
    }
})

router.get('/:id', auth, async (req, res) => {
    try {
        const card = await Card.findById(req.params.id)
        res.json(card)
    } catch (e) {
        res.status(500).json({ message: 'Something get wrong, try again' })
    }
})

module.exports = router;