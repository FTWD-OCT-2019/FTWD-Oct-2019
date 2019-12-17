const mongoose = require('mongoose');
const Schema = mongoose.Schema;



const bookSchema = new Schema({
    title: {type: String, required: true},
    author: {type: Schema.Types.ObjectId, ref: "Author"},
    // shorthand  ^ and regular version 
    image: String,
    donor: {type: Schema.Types.ObjectId, ref: "User", required: true},
})

const Book = mongoose.model("Book", bookSchema)
// name of the model should ALWAYS be capitalized and ALWAYS be singular
// this will create a collection called 'books'


module.exports = Book;
