import express from 'express'
import mongoose from 'mongoose'

// App config
const app = express(); // created an instance
const port = process.env.PORT || 8001;
const connection_url = 'mongodb+srv://admin:<password>@cluster0.hrsea.mongodb.net/<dbname>?retryWrites=true&w=majority'

// Middlewares

// DB config

// API Endpoints
app.get('/', (req, res) => res.status(200).send("Hello Pragrammers!!!"));

// Listener
app.listen(port, () => console.log(`Listening on localhost: ${port}`))