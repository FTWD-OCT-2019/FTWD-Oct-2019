const express = require('express');
const router  = express.Router();
const Book = require('../models/Book');

/* GET home page */
router.get('/', (req, res, next) => {
  Book.find()
  .then((allThebooks)=>{
    res.render('book-views/bunchaBooks', {theBooks: allThebooks});
  })
  .catch((err)=>{
    next(err);
  })



});


router.get('/add-new-book', (req, res, next)=>{
  res.render('book-views/new');
})


router.post('/create-the-book', (req, res, next)=>{
  let theTitle = req.body.theNewBookTitle;
  let auth = req.body.theAuthorForNewBook
  let img = req.body.img;


  Book.create({
    title: theTitle,
    author: auth,
    image: img
  })
  .then((response)=>{
    res.redirect('/')
  })
  .catch((err)=>{
    next(err)
  })


})


router.get('/books/:theIdOfTheBook', (req, res, next)=>{
  let id = req.params.theIdOfTheBook;

  Book.findById(id)
  .then((theBook)=>{
    res.render('book-views/singleBook', {book: theBook})
  })
  .catch((err)=>{
    next(err);
  })




})

module.exports = router;
