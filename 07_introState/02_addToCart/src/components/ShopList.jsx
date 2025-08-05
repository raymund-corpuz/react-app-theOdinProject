import React from "react";

const ShopList = ({ item, isPaid, quantity, onAdd, id, onRemove }) => {
  const status = isPaid ? "green" : "pink";
  //   const newItem = item.charAt(0).toUpperCase() + item.slice(1);

  return (
    <div
      style={{
        background: status,
        color: "white",
        padding: "0.8rem",
        marginTop: "1rem",
      }}
    >
      <h3>Item: {item}</h3>
      <p>Quantity: {quantity}</p>
      <button onClick={() => onAdd(id)}>Increase 1 item</button>
      <button onClick={() => onRemove(id)}>Remove to Cart</button>
    </div>
  );
};

export default ShopList;
