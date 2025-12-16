require('./config/db.config');
const express = require('express');
const Book = require("./model/book.model");

const PORT = 8000;
const app = express();

app.set('view engine', 'ejs');

// Middleware
app.use(express.urlencoded());

app.get('/', (req, res) => {
    return res.render('form');
});

// Insert Book
app.post('/addBook', async (req, res) => {
    console.log(req.body);

    // const bookData = req.body

    // Book.create(req.body).then(() => {
    //     console.log("Book insrted Successfully...");
    // }).catch(err => {
    //     console.log("Book insertion failed");
    //     console.log("Error", err);
    // });

    const bookAdded = await Book.create(req.body);

    console.log(bookAdded);

    if (bookAdded) {
        console.log("Book inserted Successfully...");

        return res.redirect('/');
    } else {
        console.log("Book insertion failed...");
    }


});

/**
 * MVC Pattern: 
 *  
 *  M - Model => Schema == Structure / Design
 *  V - Views
 *  C - Controllers
 */

app.listen(PORT, (err) => {
    if (err) {
        console.log("Server is not started..", err);
        return;
    }
    console.log("Server is strated 😂");
})