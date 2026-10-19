const Book = require("../models/book.model")

const addBooks = async(req, res)=>{
  const {
  title,
  author,
  isbn,
  category,
  description,
  publishedYear,
  totalCopies,
  availableCopies,
  coverImage,} = req.body

  const book = await Book.create({
  title,
  author,
  isbn,
  category,
  description,
  publishedYear,
  totalCopies,
  availableCopies,
  coverImage,
});


res.status(201).json({
  message: "Book Added Successfully!",
  book,
})

}

const getAllBook = async(req, res)=>{
  const allBooks = await Book.find({})

  res.status(200).json({
    message: "Books Data Fetched Succesfully",
    allBooks,
  })
}


const editBook= async(req,res)=>{
  const id = req.params.id;

  const {
      title,
      author,
      isbn,
      category,
      description,
      publishedYear,
      totalCopies,
      availableCopies,
      coverImage,
    } = req.body;

  const edit = await Book.findByIdAndUpdate(id,
      {
        title,
        author,
        isbn,
        category,
        description,
        publishedYear,
        totalCopies,
        availableCopies,
        coverImage,
      },
      
        { returnDocument: "after" }
      )

  res.status(200).json({
    message:"Update Successful!",
    edit,
  })

}


const deleteBook = async(req, res)=>{
  const id = req.params.id;

  const delbook = await Book.findByIdAndDelete(id)
  
  res.status(200).json({
    message: "Book Deleted Successfully!",
    delbook,
  })
}


module.exports = {addBooks, getAllBook, editBook, deleteBook}