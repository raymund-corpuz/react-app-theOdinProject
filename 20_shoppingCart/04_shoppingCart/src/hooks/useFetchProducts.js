import { useEffect, useState } from "react";

export default function usefetchProducts() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // useEffect(() => {
  //   const controller = new AbortController();
  //   async function usefetchProducts() {
  //     try {
  //       const response = await fetch("https://fakestoreapi.com/products");
  //       if (!response.ok) {
  //         throw new Error("Failed to fetch Products");
  //       }
  //       const data = await response.json();
  //       setProducts(data);
  //     } catch (err) {
  //       setError(err.message);
  //     } finally {
  //       setLoading(false);
  //     }
  //   }
  //   usefetchProducts();

  //   return () => {
  //     controller.abort();
  //   };
  // }, []);

  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((res) => {
        if (!res.ok) {
          throw new Error("Failed to fetch data...");
        }
        return res.json();
      })
      .then((data) => {
        setProducts(data);
        setLoading(false);
      })
      .catch((err) => {
        setError(err);
        setLoading(false);
      });
  }, []);

  return { products, loading, error };
}
