const express = require('express');
const router  = express.Router();
const Book    = require('../models/Book');
const Author  = require('../models/Author');

/* GET home page */
router.get('/books', (req, res, next) => {
  console.log(req.session)
  Book.find().populate('author')
  .then((allThebooks)=>{
      res.json(allThebooks);
      })
  .catch((err)=>{
    next(err);
  })
});





router.post('/create-the-book', (req, res, next)=>{
  if(!req.session.currentUser){
    res.json({message: 'sorry hacker, not allowed'})
    return;
  }
  let theTitle = req.body.theNewBookTitle;
  let auth = req.body.theAuthorForNewBook
  let img = req.body.img;
  // when we're tranforming this app to an api, keep in mind the keys inside req.body will not longer be names after the inputs in the form, instead you create the keys when you make an axios request


  Book.create({
    title: theTitle,
    author: auth,
    image: img,
    donor: req.session.currentUser._id
  })
  .then((response)=>{
    res.json({message: 'success', response:response})
  })
  .catch((err)=>{
    next(err)
  })
})




router.post('/books/update', (req, res, next)=>{
  
  let id = req.body.theID;

  Book.findById(id)
  .then((theBook)=>{

    if(req.session.currentUser._id != theBook.donor && !req.session.currentUser.admin){
      res.json({message: "Unauthorized Injection", code:1})
      return
    }




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
    res.json({message: 'success'})
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
    res.json({message: 'success'});
  })
  .catch((err)=>{
    next(err)
  })

})



module.exports = router;
