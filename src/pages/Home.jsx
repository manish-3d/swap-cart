import { Link } from "react-router";
import products from "../data/products";

const Home = () => {
  return (
    <div>
      <h1>🛒 Products</h1>

      {products.map((product) => (
        <div key={product.id}>
          <h3>{product.name}</h3>
          <p>₹{product.price}</p>

          {/* 🔥 LINK TO DYNAMIC ROUTE */}
          <Link to={`/product/${product.id}`}>View Product</Link>

          <hr />
        </div>
      ))}
    </div>
  );
};

export default Home;