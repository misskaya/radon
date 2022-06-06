const mongoose = require('mongoose');

const bookSchema = new mongoose.Schema( {

bookName:{
    type:String,
    required:true
},
authorName:{
    type:String,
    require:true
},
year:Number,
category:String

}, { timestamps: true});

module.exports = mongoose.model('Book', bookSchema ) //books

