const express = require("express")

const router = express.Router();

const {addBooks, getAllBook, editBook, deleteBook} = require("../controllers/book.controller")

router.post("/add", addBooks);
router.get("/view", getAllBook);
router.patch("/edit/:id", editBook);
router.delete("/delete/:id", deleteBook);


module.exports = router;