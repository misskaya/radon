const BookModel= require("../models/bookModel")
const AuthorModel= require("../models/authorModel")
const bookModel = require("../models/bookModel")

const createAuthor= async function (req, res) {
    let book= req.body

    let bookCreate= await bookModel.create(book)
    res.send({data: bookCreated})
}
const updateBook=async function (req, res){
    let update=await bookModel.findByIdAndUpdate({_id:req.body.book_id},{$set:{ isHardCover:req.body.isHardCover}},{upsert:true})
    res.send({update})
}
const getBooksData= async function (req, res) {
    let books= await bookModel.find()
    res.send({data:books})
}

const getBooksWithAuthorDetails=async function (req,res) {
    let getBooks = await bookModel.find().populate('author_id').populate('publisher_id')
    res.send(getBooks)
}


    
     





// CRUD OPERATIONS:
// CREATE
// READ
// UPDATE
// DELETE



module.exports.createBook= createBook
module.exports.createAuthor= createAuthor
module.exports.listBooksByChetanBhagat=listBooksByChetanBhagat
module.exports.authorOfBook=authorOfBook
