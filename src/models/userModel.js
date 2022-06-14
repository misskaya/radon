const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    name: String,
    balance: {
        type: Number,
        default: 100
},

adress: {type:String},
gender: {
    type: String,
    enum: ["male","female","LGBTQ"]
},
age: Number,
gender: {
    type: String,
    enum: ["male","female","others"]
},
age:Number,
isFreeAppUser: {
    type: Boolean,
    default: false
}
}, {timestamps:true});

module.exports = mongoose.model('User', userSchema)