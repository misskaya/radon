const md2= function async(req,res,next) {
    let header =req.header.isfreeappuser;
    if(!header=="true" || header == "false")
    return res.send({
        msg:"one of the header is either missing or incorrect"
    })
    next();
}
