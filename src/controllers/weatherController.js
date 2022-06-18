let axios = require("axios")

let getWeather = async function(req,res){
try{    let london = req.query.q
    let apiKey = req.query.appid
    console.log(`query params are:${london}${apiKey}`)
    let options = {
        method: "get",
        url:`https://api.openweathermap.org/data/2.5/weather?q=${london}&appid=${apiKey}`
    }
    let result = await axios(options)
    console.log(result.data)
    res.status(200).send({msg:result.data})
}catch(error) {
    console.log(error)
    res.status(500).send({status: false, msg:"server error"})
}
}

let getTempOfLondon = async function(req,res){
try{
       let london = req.query.q
    let apiKey = req.query.appid
    console.log(`query params are:${london}${apiKey}`)
    let options = {
        method: "get",
        url:`https://api.openweathermap.org/data/2.5/weather?q=${london}&appid=${apiKey}`
    }
    let result = await axios(options)
    console.log(result.data)
    res.status(200).send({msg:result.data.main["temp"]})
}catch(error) {
    console.log(error)
    res.status(500).send({status: false, msg:"server error"})
}
}

let getSortedCities = async function(req,res){
try{
        let cities = ["Benguluru", "Mumbai","Delhi", "Kolkata", "Chennai", "London", "Moscow"]
    let cityObjArray = []

    for (i = 0; i < cities.length; i++){
        let obj = { city: cities[i] }
        
        let resp = await axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${cities[i]}&appid=d32c5fcf1a3a56fcb86c9c2a648fd1eb`)
        

        obj.temp = resp.data.main.temp
        cityObjArray.push(obj)
    }

    let sorted = cityObjArray.sort( function(a, b){ return a.temp - b.temp})

    console.log(sorted)
    
     res.status(200).send({status: true, data: sorted})
}catch(error) {
    console.log(error)
    res.status(500).send({status: false, msg:"server error"})
}
}





module.exports.getWeather = getWeather
module.exports.getTempOfLondon = getTempOfLondon
module.exports.getSortedCities =getSortedCities