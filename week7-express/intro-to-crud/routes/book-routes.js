const express = require('express');
const router  = express.Router();
const Book    = require('../models/Book');
const Author  = require('../models/Author');

/* GET home page */
router.get('/', (req, res, next) => {
  console.log(req.session)
  Book.find().populate('author')
  .then((allThebooks)=>{

    if(req.session.currentUser){ 
      allThebooks.forEach((thisBook)=>{
        if(thisBook.donor.equals(req.session.currentUser._id) || req.session.currentUser.admin){
          thisBook.isMine = true;
        }
      })
    }
      
    res.render('book-views/bunchaBooks', {theBooks: allThebooks});
      })
  .catch((err)=>{
    next(err);
  })



});


router.get('/books/create', (req, res, next)=>{
  if(!req.session.currentUser){
    res.redirect('/login');
    return;
  }
  Author.find()
  .then((allAuthors)=>{
    res.render('book-views/new', {allAuthors});
    //                            ^ this is the same as {allAuthors:allAuthors}
  })
  .catch((err)=>{
    next(err)
  })
})




router.get('/books/:theIdOfTheBook', (req, res, next)=>{
  let id = req.params.theIdOfTheBook;

  Book.findById(id).populate('author').populate('donor')
  .then((theBook)=>{
    res.render('book-views/singleBook', {book: theBook})
  })
  .catch((err)=>{
    next(err);
  })
})



router.post('/create-the-book', (req, res, next)=>{
  if(!req.session.currentUser){
    res.json({message: 'sorry hacker, not allowed'})
    return;
  }
  let theTitle = req.body.theNewBookTitle;
  let auth = req.body.theAuthorForNewBook
  let img = req.body.img;


  Book.create({
    title: theTitle,
    author: auth,
    image: img,
    donor: req.session.currentUser._id
  })
  .then((response)=>{
    res.redirect('/')
  })
  .catch((err)=>{
    next(err)
  })
})





router.get('/books/edit/:randomVariableIMadeToHoldTheID', (req, res, next)=>{


Book.findById(req.params.randomVariableIMadeToHoldTheID)
    .then((theBook)=>{

      if(req.session.currentUser._id != (theBook.donor) && !req.session.currentUser.admin){
        res.redirect('/login')
        return
      }

      Author.find()
            .then((bunchaAuthors)=>{


                bunchaAuthors.forEach((thisAuthor)=>{
                  if(thisAuthor._id.equals(theBook.author)){
                    thisAuthor.isThecorrectAuthor = true;
                  }
                })



                 res.render('book-views/edit', {theActualBook: theBook, authors: bunchaAuthors})

            })
            .catch((err)=>{
              next(err)
            })
      })
  .catch((err)=>{
    next(err);
  })
})


router.post('/books/update/:id', (req, res, next)=>{

  Book.findById(req.params.id)
  .then((theBook)=>{

    if(req.session.currentUser._id != theBook.donor && !req.session.currentUser.admin){
      res.json({message: "Unauthorized Injection"})
      return
    }




  let id = req.params.id;
  id = req.body.theID;
  // i put the ID in 2 places, you can do it either way


// i dont want you to blindly copy this route because it is fancy
// take a hard look at whats happening or, just cblindly copy and paste the commented code
  // Book.findByIdAndUpdate(id, {
  //   title: req.body.title,
  //   author: req.body.author,
  //   image: req.body.image
  // })
  let update = {...req.body};
 
  
  
  // this stupid {new:true} thing is so that after we edit the book the response we get back shows us the new info isntead of the old info, not sure why this isnt the default
  Book.findByIdAndUpdate(id, update, {new: true})
  .then((response)=>{
    console.log(response)
    res.redirect('/books/'+id)
  })
  .catch((err)=>{
    next(err)
  })


})
.catch((err)=>{
  next(err);
})


})



router.post('/books/delete/:theID', (req, res, next)=>{
  Book.findByIdAndRemove(req.params.theID)
  .then((wnvefih)=>{
    res.redirect('/');
  })
  .catch((err)=>{
    next(err)
  })

})



module.exports = router;
