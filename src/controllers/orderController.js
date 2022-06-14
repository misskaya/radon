//const { count } = require("console")
const orderModel= require("../models/orderModel")
const userModel = require("../models/userModel")
const productModel = require("../models/productModel")



const createOrder = async function(req, res) {
    let data = req.body
    let userId = data.userId
    let productId = data.productId
    let userPresent = await userModel.findById(userId)
    if(!userPresent) {
       return res.send({ status: false, msg: "user not present"})
}
let productPresent = await productModel.findById(productId)
if (!productPresent){
    return res,send({ status: false, msg: "product is not present"})
}

if (!req.apptypeFree && userPresent.balance >= productPresent.price) {
    userPresent.balance = userPresent.balance - productPresent.price
    await userPresent.save()
    data.amount = productPresent.price
    data.isFreeappuser = false
    let orderCreated = await orderModel.create(data)
    return res.send({ status: true, data: orderCreated })
} else if (!req.apptypeFree) {
    return res.send({ status: false, msg: "not enough money" })
} else {
    data.amount = 0
    data.isFreeappuser = true

    let orderCreated = await orderModel.create(data)

    return res.send({ status: true, data: orderCreated})
  }
}
module.exports.createOrder= createOrder
