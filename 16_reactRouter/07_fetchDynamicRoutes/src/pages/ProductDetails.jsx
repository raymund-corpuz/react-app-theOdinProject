import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { getProductById } from "../services/api";

const ProductDetails = () => {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    async function fetchProduct() {
      try {
        const data = await getProductById(id);
        setProduct(data);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    }

    fetchProduct();
  }, [id]);

  if (loading) return <h3>Loading Products...</h3>;
  if (error) return <h3>Error Occured: {error}</h3>;
  if (!product) return <h3>No Product Found</h3>;

  return (
    <div>
      <img src={product.image} alt={product.title} />
      <h3>{product.title}</h3>
      <p>{product.description}</p>
      <p>
        <strong>{product.price}</strong>
      </p>

      <Link to="/products">Back to Products</Link>
    </div>
  );
};

export default ProductDetails;
