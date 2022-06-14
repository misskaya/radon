//const { count } = require("console")
const userModel= require("../models/userModel")
 

const createUser= async function(req,res) {
    let userData= req.body
    let myHeader= req.headers.isFreeAppUser

    if(!myHeader){
        res.send("error")
    }else{
         let createUserData=await userModel.create(userData)
         res.send({msg:createUserData})
    }

}

module.exports.createUser= createUser

