const express = require('express');
const mongoose = require('mongoose');
const path = require('path');
const config = require('config');
const exphbs = require('express-handlebars');
const syteRotes = require('./routes/syte_routes');
const cardsRoutes = require('./routes/cards_routes');

const PORT = config.get('port') || 3000;

const app = express();

app.use(express.json({ extended:true }))

//Обработка запросов
app.use(syteRotes)
app.use(cardsRoutes)

app.use(express.urlencoded({ extended: true }))
app.use(express.static(path.join(__dirname, 'public')))

async function start() {
    try {
        await mongoose.connect(
            config.get('mongoUrl'),
            {
                useNewUrlParser: true,
                useUnifiedTopology: true,
                useFindAndModify: false
            })
        app.listen(PORT, () => {
            console.log(`Server has been started at ${PORT}`)
        })
    } catch (e) {
        console.log('Server Error', e.message)
        process.exit(1);
    }
}

start()