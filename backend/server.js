import express from 'express'
import mongoose from 'mongoose'

// App config
const app = express(); // created an instance
const port = process.env.PORT || 8001;
const connection_url = `mongodb+srv://admin:*********@cluster0.hrsea.mongodb.net/tinderdb?retryWrites=true&w=majority`

// Middlewares

// DB config
mongoose.connect(connection_url, {
    useNewUrlParser: true,
    useCreateIndex: true,
    useUnifiedTopology: true,
})

// API Endpoints
app.get('/', (req, res) => res.status(200).send("Hello Pragrammers!!!"));

  //post: to upload the data
app.post('/tinder/card', (req, res) => {  
    const dbCard = req.body;
})

// Listener
app.listen(port, () => console.log(`Listening on localhost: ${port}`));