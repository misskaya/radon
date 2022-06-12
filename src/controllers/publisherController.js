const publish= require("../models/publisherModel")
 
let getPublish=async function(req,res){
    let data= req.body
    let savedData= await publish.create(data)
    res.send({msg:savedData})
}
module.exports.getPublish= getPublish
