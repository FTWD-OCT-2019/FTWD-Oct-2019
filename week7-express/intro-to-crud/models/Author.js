const mongoose = require('mongoose');
const Schema = mongoose.Schema;




const authorSchema = new Schema({
    name: {type: String, required: true, unique: true},
    birthdate: {type: String, required: true},
    // shorthand  ^ and regular version 
    image: {type: String, required: true},
    hometown: {type: String, required: true}
})

const Author = mongoose.model("Author", authorSchema)
// name of the model should ALWAYS be capitalized and ALWAYS be singular
// this will create a collection called 'authors' (it knows to lower case and put an s at the end)


module.exports = Author;
