const express = require('express');
const router = express.Router();
const CowinController= require("../controllers/cowinController")
const weatherController = require("../controllers/weatherController")
const MemeController = require("../controllers/memes")



router.get("/test-me", function (req, res) {
    res.send("My first ever api!")
})


// router.get("/cowin/states", CowinController.getStates)

// router.get("/cowin/districtsInState/:stateId", CowinController.getDistricts)

// router.get("/cowin/getByPin", CowinController.getByPin)

// router.post("/cowin/getOtp", CowinController.getOtp)

router.get("/cowin/getByDistrict",CowinController.getByDistrict)

router.get("/getWeather",weatherController.getWeather)

router.get("/getTempOfLondon",weatherController.getTempOfLondon)

router.get("/getSortedCities",weatherController.getSortedCities)

router.post("/meme",MemeController.meme)


// WRITE A GET API TO GET THE LIST OF ALL THE "vaccination sessions by district id" for any given district id and for any given date



module.exports = router;