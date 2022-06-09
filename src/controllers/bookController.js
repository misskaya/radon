const BookModel= require("../models/bookModel")
const AuthorModel= require("../models/authorModel")

const createAuthor= async function (req, res) {
    let data= req.body

    let savedData= await AuthorModel.create(data)
    res.send({msg: savedData})
}
let createBook=async function (req, res) {
    let data= req.body
    let savedData= await BookModel.create(data)
    res.send({msg: savedData})
}
const listBooksByChetanBhagat= async function (req, res) {
    let data= await AuthorModel.find({author_name :"Chetan Bhagat" }).select("auther_id")
   
    let bookData=await BookModel.find({author_id:data[0].author_id})
    res.send({msg:bookData})
}
let authorOfBook=async function (req, res) {
let data=await BookModel.findOneAndUpdate({name:"Harry Porter"},{$set:{price:110}},{new:true})
let authorData=await AuthorModel.find({author_id:data.author_id}).select("author_name")
let price=data.price
//console.log(data)
res.send({msg:authorData,price})

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
