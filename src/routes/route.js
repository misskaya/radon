const express = require('express');
const router = express.Router();


const BookController= require("../controllers/bookController")


router.post("/createBook", BookController.createBook )

router.post("/createAuthor", BookController.createAuthor)

router.get("/listBookByChetanBhagat", BookController.listBooksByChetanBhagat)
router.get("/authorOfBook", BookController.authorOfBook)
router.get("/respondBack", BookController. respondBack)
router.get("/booksById", BookController. booksById)


module.exports = router;