const { count } = require("console")
const productModel= require("../models/productModel")

const createproduct =  async function(req,res) {
    let productData=req.body
    let createProductData=await productModel.create(productData)
    res.send({msg: createProductData})
}

module.exports.createproduct = createproduct


    
     






