import { useEffect, useState } from "react";

const useProducts = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((res) => {
        if (res.status >= 400) {
          throw new Error("Server error");
        }
        return res.json();
      })
      .then((data) => setProducts(data))
      .catch((err) => setError(err))
      .finally(() => setLoading(false));
  }, []);

  return { products, loading, error };
};

export default useProducts;