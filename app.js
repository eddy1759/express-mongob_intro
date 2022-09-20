const express = require('express');
const {connectToMongoDb} = require('./db')

const {bookRoute} = require('./routes/books');

require('dotenv').config();



const PORT = process.env.PORT

const app = express()

// connecting to mongodb instance
connectToMongoDb()


app.use(express.json())

app.use("/books", bookRoute)

app.get('/', (req, res) => {
    res.send('Welcome Home')
});

app.listen(PORT, () => {
    console.log(`Server Started on http://localhost:${PORT}`)
});