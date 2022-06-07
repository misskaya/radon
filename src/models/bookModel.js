const mongoose = require('mongoose');

const bookSchema = new mongoose.Schema( {
    bookNmae: String,
Price: {
	indianPrice: String,
	europeanPrice: String
	},
Year: Number,

Tags : [ String ],
authorName: string,
totalPages: Number,
stockAvilable: Boolean,

} )


module.exports = mongoose.model('Book', bookSchema) //users

//Validation:
//require:true
//unique
// default

//String
//Number
//Date
//Boolean
// Arrays
// Object
// ObjectId
// Buffer - not cover
