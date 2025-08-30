import React, { useEffect, useState } from "react";
import Card from "../components/Card";

const API = "https://fakestoreapi.com/products";
const Home = () => {
  const [store, setStore] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    const controller = new AbortController();
    setLoading(true);
    setError(null);
    async function fetchStore() {
      try {
        const response = await fetch(API, {
          signal: controller.signal,
        });
        if (!response.ok) {
          throw new Error("Error Occured");
        }
        const json = await response.json();
        console.log(json);
        setStore(json);
      } catch (err) {
        if (err.name !== "AbortError") {
          setError(err.message);
        }
      } finally {
        setLoading(false);
      }
    }
    fetchStore();

    return () => {
      controller.abort();
    };
  }, []);

  if (!store) return <h3>No Product Found!</h3>;
  if (error) return <h3>Error: {error}</h3>;
  if (loading) return <h3>Loading something...</h3>;

  return (
    <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
      <div>
        <h1>BEST CLOTHING COLLECTION</h1>
        <p>
          Find evething you need to look and feel your best, shop the latest
          men's fashion and lifestyle products
        </p>

        <div>
          <button>T-Shirt</button>
          <button>Jacket</button>
          <button>Jewelry</button>
          <button>Bags</button>
          <button>Gadgets</button>
        </div>
      </div>
      {/* <ul>
        {store.map((item) => (
          <li key={item.id}>{item.title}</li>
        ))}
      </ul> */}
      <div
        style={{
          display: "flex",
          flexWrap: "wrap",
          gap: "1rem",
          margin: "0 auto",
        }}
      >
        {store.map((product) => (
          <Card
            title={product.title}
            image={product.image}
            rating={product.rating.rate}
            count={product.rating.count}
            key={product.id}
          />
        ))}
      </div>
    </div>
  );
};

export default Home;
