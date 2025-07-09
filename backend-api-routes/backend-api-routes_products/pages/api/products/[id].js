import { getProductById } from "@/services/productServices";

const handler = (req, res) => {
  const { id } = req.query;

  return res.status(200).json(getProductById(id));
};

export default handler;
