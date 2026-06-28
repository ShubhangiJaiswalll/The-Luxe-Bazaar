const mongoose = require("mongoose");

const productSchema = new mongoose.Schema(
  {
    name: String,
    category: String,
    price: Number,
    originalPrice: Number,
    rating: Number,
    reviews: Number,
    badge: String,
    image: String,
    stock: {
      type: Number,
      default: 20,
    },
    description: String,
  },
  { timestamps: true }
);

module.exports = mongoose.model("Product", productSchema);