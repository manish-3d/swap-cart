import { useEffect, useState } from "react";

const Home = () => {
  const [products, setProducts] = useState([]);
const [error, setError] = useState(null);

  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((res) => {
      if (res.status >= 400) {
        throw new Error("Server error");  // 🔥 IMPORTANT
      }
      return res.json();
    })
    .then((data) => setProducts(data))
    .catch((err) => setError(err));
}, []);
if (error) {
  return <h2>❌ Failed to load products</h2>;
}
  return (
    <div>
      <h1>🛒 Products</h1>

      {products.map((p) => (
        <div key={p.id}>
          <h3>{p.title}</h3>
          <p>₹{p.price}</p>
        </div>
      ))}
    </div>
  );
};

export default Home;