const express = require("express");
const bookModel = require('../model/books');

const bookRoute = express.Router()

// CRUD == CREATE READ UPDATE DELETE

// READ
bookRoute.get("/", (req, res) => {
    bookModel.find()
        .then((books) => {
            res.status(200).send(books)
        }).catch((err)=> {
            console.log(err)
            res.status(500).send(err.message)
        })
});

// READ BY ID
bookRoute.get("/:id", (req, res) => {
    const id = req.params.id
    bookModel.findById(id)
        .then(book => {
            res.status(200).send(book)
        }).catch(err => {
            console.log(err)
            res.status(400).send(err)
        })
});

// CREATE
bookRoute.post("/", (req, res) => {
    const book = req.body
    book.lastUpdateAt = new Date()
    bookModel.create(book)
        .then(book => {
            res.status(201).send({
                message: "Book added successfully",
                data: book
            })
        }).catch((err) => {
            res.status(500).send(err)
        })
});


// UPDATE
bookRoute.put("/:id", (req, res) => {
    const id = req.params.id
    const dataToUpdate = req.body

    bookModel.findByIdAndUpdate(id, dataToUpdate, {new: true})
        .then(book => {
            res.status(200).send(book)
        }).catch(err => {
            console.log(err)
            res.status(400).send(err)
        })
});

// DELETE
bookRoute.delete("/:id", (req, res) => {
    const id = req.params.id
    bookModel.findByIdAndDelete(id)
        .then(book => {
            res.status(200).send({
                message: "Book Deleted Successfuly",
                data: ""
            })
        }).catch(err => {
            console.log(err)
            res.status(400).send(err)
        })
});

module.exports = {bookRoute}