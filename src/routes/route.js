const express = require('express');
const router = express.Router();
const userController= require("../controllers/userController")
const middleWR= require("../middleware/authWR")

router.get("/test-me", function (req, res) {
    res.send("My first ever api!")
})


router.post("/users", userController.createUser  )

router.post("/login", userController.loginUser)

//The userId is sent by front end
router.get("/users/:userId", middleWR.midWR, userController.getUserData)

router.put("/users/:userId", middleWR.midWR, userController.updateUser)

router.delete("/users/:userId", middleWR.midWR, userController.deleteUser)

module.exports = router;