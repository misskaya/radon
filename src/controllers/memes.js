let axios = require("axios")

let meme = async function(req,res){
try{
    let meme1 = req.query.template_id
    let options = {
        method: "post",
        url: `https://api.imgflip.com/caption_image?template_id=${meme1}&test0=Functionup&text1=Yes&username=chewie12345&password=meme@123`
    } 
    let result = await axios(options)
    res.status(200).send({data: result.data})
}catch(error) {
    console.log(error)
    res.status(500).send({status: false, msg:"server error"})
}
}




module.exports.meme = meme