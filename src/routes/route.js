const express = require('express');
const router = express.Router();

const userController= require("../controllers/userController")
const productController = require("../controllers/productController")
const orderController= require("../controllers/orderController")
const commonMW = require("../middlewares/commonMiddlewares")


router.get("/test-me", function (req, res) {
    res.send("My first ever api!")
})



router.post("/createOrder", commonMW.md2, orderController.createOrder)

router.post("/createproduct", productController.createproduct)

router.post("/createUser",userController.createUser)



