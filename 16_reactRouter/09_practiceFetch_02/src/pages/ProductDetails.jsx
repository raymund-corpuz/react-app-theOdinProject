import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { getProductId } from "../services/api";

const ProductDetails = () => {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    async function fetchProductId() {
      try {
        const data = await getProductId(id);
        setProduct(data);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    }
    fetchProductId();
  }, [id]);

  if (loading) return <h3>Loading data...</h3>;
  if (error) return <h3>Error: {error}</h3>;
  if (!product) return <h3>No Product found!</h3>;

  return (
    <div>
      <img src={product.image} alt={product.title} style={{ width: "200px" }} />
      <h3>{product.title}</h3>
      <p>{product.description}</p>
      <p>{product.price}</p>

      <Link to="/products">Back to Product List</Link>
    </div>
  );
};

export default ProductDetails;
