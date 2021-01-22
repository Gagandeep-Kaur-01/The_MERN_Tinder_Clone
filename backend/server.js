import express from 'express'
import mongoose from 'mongoose'
import Cors from 'cors'

import Cards from "./dbCards.js"

// App config
const app = express(); // created an instance
const port = process.env.PORT || 8001;
const connection_url = `mongodb+srv://admin:*******@cluster0.hrsea.mongodb.net/tinderdb?retryWrites=true&w=majority`

// Middlewares
app.use(express.json());

// DB config
mongoose.connect(connection_url, {
    useNewUrlParser: true,
    useCreateIndex: true,
    useUnifiedTopology: true,
})

// API Endpoints
  // get: is to take the information
app.get('/', (req, res) => res.status(200).send("Hello Pragrammers!!!"));

  //post: to upload the data, push the information into the database
app.post('/tinder/cards', (req, res) => {  
    const dbCard = req.body;

    Cards.create(dbCard, (err, data) => {
        if(err) {
            res.status(500).send(err)
        } else {
            res.status(201).send(data)
        }
    })
});

//retriving everything from the database
app.get('/tinder/cards', (req, res) => {
    Cards.find((err, data) => {
        if(err) {
            res.status(500).send(err)
        } else {
            res.status(200).send(data)
        }
    })
})

// Listener
app.listen(port, () => console.log(`Listening on localhost: ${port}`));