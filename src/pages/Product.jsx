import { useParams } from "react-router";
import products from "../data/products";

const Product = () => {
  const { id } = useParams();

  // find product using id
  const product = products.find((p) => p.id === Number(id));

  if (!product) {
    return <h2>❌ Product not found</h2>;
  }

  return (
    <div>
      <h1>📦 {product.name}</h1>
      <p>Price: ₹{product.price}</p>
    </div>
  );
};

export default Product;