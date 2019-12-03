const mongoose = require('mongoose');
const Schema = mongoose.Schema;



const bookSchema = new Schema({
    title: {type: String},
    author: String,
    // shorthand  ^ and regular version 
    image: String
})

const Book = mongoose.model("Book", bookSchema)
// name of the model should ALWAYS be capitalized and ALWAYS be singular
// this will create a collection called 'books'


module.exports = Book;
