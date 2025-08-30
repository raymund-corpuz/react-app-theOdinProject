import React from "react";
import usefetchProducts from "../hooks/useFetchProducts";
import ProductCard from "../components/ProductCard";

const Shop = () => {
  const { products, loading, error } = usefetchProducts();
  if (loading) return <h2>Loading products...</h2>;
  if (error) return <h2>Error :{error}</h2>;

  return (
    <div>
      {products.map((product) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </div>
  );
};

export default Shop;
