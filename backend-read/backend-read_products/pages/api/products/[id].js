import dbConnect from "@/db/connect.js";
import Product from "@/db/models/Product";

export default async function handler(req, res) {
  await dbConnect();

  const { id } = req.query;

  if (req.method === "GET") {
    const product = await Product.findById(id).populate("reviews");

    if (!product) {
      return res.status(404).json({ status: "Not Found" });
    }
    return res.status(200).json(product);
  }

  res.status(405).json({ status: "Method not allowed." });
}
