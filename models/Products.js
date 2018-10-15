const mongoose = require("mongoose");
const { Schema } = mongoose;

const productSchema = new Schema({
  productId: String
});

mongoose.model("products", productSchema);