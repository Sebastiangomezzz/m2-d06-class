// ROUTES FILE NEEDS TO BE REQUIRED IN THE APP.JS IN ORDER NOT TO GIVE 404
// APP NEEDS TO KNOW YOU CREATED A NEW ROUTE FILE, THAT'S THE ONLY WAY FOR IT TO KNOW WHICH ROUTES YOU WANT TO HIT

const express = require('express');
const router = express.Router();//Router class inside the express library.

// ********* require Book model in order to use it *********
const Book = require('../models/Book.model');

// ****************************************************************************************
// GET route to display all the books
// ****************************************************************************************

router.get('/', (req, res) => { //**1 we don't have to put /books in here, it's set in app.js
  Book.find()
  .then(allBooks => res.render("books", {allBooks}))
  .catch(err => console.log("There was an error", err))
   // You have to continue coding the route
});

// ****************************************************************************************
// GET route for displaying the book details page
// ****************************************************************************************

router.get('/books/:id', (req, res) => {
  const id = req.params.id;
  Book.findById(id)
   // You have to continue coding the route
});

module.exports = router;
