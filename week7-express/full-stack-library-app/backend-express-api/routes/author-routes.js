const express = require('express');
const router  = express.Router();
const Book    = require('../models/Book');
const Author  = require('../models/Author');


// remember that we put a prefix on this route inside app.js
// so this route is actually '/authors/:id'
// router.get('/:id', async (req, res, next)=>{
//     try{ 
//         let author = await Author.findById(req.params.id)
        
//         let books = await Book.find({author: req.params.id})

//         res.render('author-views/details', {author, books})

//     }catch(err){
//         next(err);
//     }
// })


router.get('/all-authors', (req, res, next)=>{
    Author.find()
    .then((authors)=>{
        res.json(authors)
    })
    .catch((err)=>{
        next(err)
    })
})



module.exports = router;