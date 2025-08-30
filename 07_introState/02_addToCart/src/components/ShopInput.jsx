import React from "react";
import ShopList from "./ShopList";
import { useState } from "react";
import { useEffect } from "react";

const ShopInput = () => {
  const [item, setItem] = useState("");
  const [basket, setBasket] = useState([]);

  function handleSubmit(e) {
    e.preventDefault();
    const newItem = {
      item: item,
      id: Date.now(),
      isPaid: false,
      quantity: 1,
    };
    setItem("");
    setBasket([...basket, newItem]);
  }

  function addItem(id) {
    setBasket((prevBasket) =>
      prevBasket.map((item) =>
        item.id === id ? { ...item, quantity: item.quantity + 1 } : item
      )
    );
  }

  function removeItem(id) {
    setBasket((prevBasket) => prevBasket.filter((item) => item.id !== id));
  }

  useEffect(() => {
    console.log(basket);
    basket.map((item) => console.log(item.quantity));
  }, [basket]);
  return (
    <div>
      <h1>ShopInput</h1>
      <form action="" onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Add Item..."
          value={item}
          onChange={(e) => setItem(e.target.value)}
        />
        <input type="submit" value={"Add to Cart"} />
      </form>

      {basket.map((item) => (
        <ShopList
          key={item.id}
          item={item.item}
          isPaid={item.isPaid}
          quantity={item.quantity}
          onAdd={addItem}
          id={item.id}
          onRemove={removeItem}
        />
      ))}
    </div>
  );
};

export default ShopInput;
