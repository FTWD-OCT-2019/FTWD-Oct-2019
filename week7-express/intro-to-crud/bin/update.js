const Book    = require('../models/Book');
const Author  = require('../models/Author');
const mongoose = require('mongoose')




mongoose.Promise = Promise;
mongoose
  .connect('mongodb://localhost/intro-to-crud', {useMongoClient: true})
  .then(() => {
    console.log('Connected to Mongo!')

    Book.update({}, {donor: '5de7cbed97f7c052299968e4'},  {"multi": true})
    .then((x)=>{
        console.log('it worked', x)
    })



  }).catch(err => {
    console.error('Error connecting to mongo', err)
  });


