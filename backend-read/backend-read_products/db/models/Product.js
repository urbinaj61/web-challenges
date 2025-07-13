import mongoose from "mongoose";
import "./Reviews";

const { Schema } = mongoose;

const productSchema = new Schema({
  name: { type: String, reqire: true },
  description: { type: String, require: true },
  price: { type: Number, require: true },
  currency: { type: String, require: true },
  reviews: { type: [Schema.Types.ObjectId], ref: "Review" },
});

const Product =
  mongoose.models.Product || mongoose.model("Product", productSchema);

export default Product;
