import useProducts from "../hooks/useProducts";

const Home = () => {
  const { products, loading, error } = useProducts();

  if (loading) return <h2>⏳ Loading...</h2>;
  if (error) return <h2>❌ Error loading products</h2>;

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