const Product = ({ product }) => {
  return (
    <li key={product.id}>
      <p>{product.name}</p>
      <p>{product.description}</p>
      <p>{product.price}</p>
      <p>{product.currency}</p>
      <p>{product.category}</p>
    </li>
  );
};

export default Product;
