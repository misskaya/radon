const express = require('express');
const router = express.Router();

const mainController= require("../controllers/mainController")


router.get("/about", mainController.about)
router.get("/login",mainController.login)
router.get("/view",mainController.view)




module.exports = router;