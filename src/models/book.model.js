
const mongoose = require("mongoose");

const bookSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
      trim: true,
    },

    author: {
      type: String,
      required: true,
      trim: true,
    },

    isbn: {
      type: String,
      unique: true,
      sparse: true,
      trim: true,
    },

    category: {
      type: String,
      required: true,
      trim: true,
    },

    description: {
      type: String,
      default: "",
    },

    publishedYear: {
      type: Number,
      min: 0,
    },

    totalCopies: {
      type: Number,
      required: true,
      min: 0,
      default: 1,
    },

    availableCopies: {
      type: Number,
      required: true,
      min: 0,
      default: 1,
    },

    coverImage: {
      type: String,
      default: "",
    },
  },
  {
    timestamps: true,
  }
);

const Book = mongoose.model("Book", bookSchema)


module.exports = Book