import React, { useEffect, useState } from "react";
import { getProducts } from "../services/api";
import { Link } from "react-router-dom";
const ShopPage = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    async function fetchProduct() {
      try {
        const response = await getProducts();
        setProducts(response);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    }
    fetchProduct();
  }, []);

  if (loading) return <h3>Loading Products...</h3>;
  if (error) return <h3>Error: {error}</h3>;

  return (
    <div>
      <h2>ShopPage</h2>
      {products.map((p) => (
        <li key={p.id}>
          <Link>{p.title}</Link>
        </li>
      ))}
    </div>
  );
};

export default ShopPage;
