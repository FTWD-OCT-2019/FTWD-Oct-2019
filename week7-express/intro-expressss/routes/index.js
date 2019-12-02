const express = require('express');
const router  = express.Router();

/* GET home page */
router.get('/', (req, res, next) => {

// typically we will either perform an action toward a Database or an API right here
// and then pass in the information we get into the view we are about to show
  res.render('index', 
  {secretWord: 'hello',
   begginingPhrase: 'helloworld',
   number: 09751349,
   someStuff: `<h2>this is a strong heading </h2>`
  });
});



router.get('/coolpage', (req, res, next)=>{
  res.render('cool')
})




router.get('/user-profile/:theUsername/:secondparam', (req, res, next)=>{

  let theVariable = req.params.theUsername;
  let second = req.params.secondparam;

res.render('user-page', {theThing: theVariable, other: second})

})



router.get('/blah', (req, res, next)=>{
  res.send(req.query)
})

module.exports = router;
