require('./config/db.config');
const express = require('express');
const Book = require("./model/book.model");
const multer = require('multer');
const path = require('path')

const PORT = 8000;
const app = express();

app.set('view engine', 'ejs');

// Middleware
app.use(express.urlencoded());
app.use(express.static(path.join(__dirname, "public")));
app.use("/uploads", express.static(path.join(__dirname, "uploads")));

// Table Route
app.get('/', async (req, res) => {

    // All Book Fetch
    const allBooks = await Book.find();

    // console.log(allBooks);

    return res.render('table', { allBooks });
});

// Add Book Roate (Form.ejs)
app.get('/addBookPage', (req, res) => {
    return res.render('form');
});

// Multer
const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, "uploads/");
    },
    filename: (req, file, cb) => {
        cb(null, Date.now() + "-" + file.originalname);
    }
});

// Image Middleware
const upload = multer({ storage });

// Insert Book Logic
app.post('/addBook', upload.single('book_image'), async (req, res) => {
    console.log(req.body);

    // const bookData = req.body

    // Book.create(req.body).then(() => {
    //     console.log("Book insrted Successfully...");
    // }).catch(err => {
    //     console.log("Book insertion failed");
    //     console.log("Error", err);
    // });

    console.log(req.file);

    req.body.book_image = req.file.path;

    const bookAdded = await Book.create(req.body);

    console.log(bookAdded);

    if (bookAdded) {
        console.log("Book inserted Successfully...");
    } else {
        console.log("Book insertion failed...");
    }
    return res.redirect('/');

});

// Edit Route
app.get('/editBook/:bookId', async (req, res) => {
    console.log(req.params); // { bookId : 69422b90e1e121e49b97c3b6 }

    // const allBooks = await Book.find();

    // const book = allBooks.find((book) => book.id == req.params.bookId);

    const book = await Book.findById(req.params.bookId);

    console.log(book);

    if (book) {
        return res.render('edit', { book });
    } else {
        return res.redirect('/');
    }
});

// Update Book Logic
app.post('/updateBook', async (req, res) => {
    console.log(req.body);

    const updatedData = await Book.findByIdAndUpdate(req.body.id, req.body, { new: true });

    console.log("Update : ", updatedData);

    return res.redirect('/');
});

// Delete Book Logic
app.get('/deleteBook', async (req, res) => {
    console.log(req.query);

    const deletedBook = await Book.findByIdAndDelete(req.query.bookId);
    if (deletedBook) {
        console.log("Book deleted successfully...");
    } else {
        console.log("Book deletion failed...");
    }
    return res.redirect('/');
});

/**
 * MVC Pattern: 
 *  
 *  M - Model => Schema == Structure / Design
 *  V - Views
 *  C - Controllers
 * 
 * 
 *  CRUD -
 *      C - Create / Insert
 *      R - Read / Fetch / Retrive
 *      U - Update
 *      D - Delete
 * 
 *  Mongoose (Model) :
 *  Insert : create(body)
 *          body :- object {name: "ABC", age: 12}
 *          return : Added Single Data  
 *          not insertion : return null
 * 
 *  Fetch : find() 
 *          return : Array of Objects [{}, {}]
 *          not inserted : return Empty Array []
 * 
 *  Delete : findByIdAndDelete(id)
 *          return : Delete Single Data
 *          not deletion : return null
 * 
 *  Update : findByIdAndUpdate(id, body , {new : true});
 *          return : new Updated Data
 *          not updation : return null 
 * 
 *  Single Data Fetch Using Id : findById(id)
 *          return : Single Data (Match ID)
 *          not match : return null
 */

app.listen(PORT, (err) => {
    if (err) {
        console.log("Server is not started..", err);
        return;
    }
    console.log("Server is strated 😂");
});