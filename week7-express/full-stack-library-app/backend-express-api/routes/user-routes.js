const express = require('express');
const router  = express.Router();
const User    = require('../models/User');
const bcrypt  = require('bcryptjs');




router.post('/signup', (req, res, next)=>{

    const salt  = bcrypt.genSaltSync(10);
    const hash = bcrypt.hashSync(req.body.password, salt);
    const username = req.body.username;

    
    User.create({username: username, password: hash})
    .then((result)=>{
        res.json({message: 'success', user: result})
    })
    .catch((err)=>{
        next(err)
    })
})


router.post('/login', (req, res, next)=>{
    const theUsername = req.body.username;
    const thePassword = req.body.password;
  

  
    User.findOne({ "username": theUsername })
    .then(user => {
        if (!user) {
            console.log('USER DOES NOT EXIST!')
            res.json({message: 'Username not found, please check and try again', code:1})
          return;
        }
        if (bcrypt.compareSync(thePassword, user.password)) {
          // Save the login in the session!
          req.session.currentUser = user;// this is the line of code that actually logs us in
          res.json(user);
        } else {
          res.json({errorMessage: "Incorrect password", code: 1});
        }
    })
    .catch(error => {
      next(error);
    })
})


router.post('/logout', (req, res, next)=>{
    req.session.destroy()
    res.json({message: 'success'})
})


router.get('/get-user-info', (req, res, next)=>{
  if(req.session.currentUser){
    res.json(req.session.currentUser);
  } else {
    res.json(null)
  }
})



module.exports = router;