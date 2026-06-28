const mongoose = require("mongoose");

const orderSchema = new mongoose.Schema(
  {
    userEmail: String,
    items: Array,
    total: Number,
    status: {
      type: String,
      default: "Placed",
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Order", orderSchema);