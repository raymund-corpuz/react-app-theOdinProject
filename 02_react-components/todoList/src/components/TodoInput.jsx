import { useEffect } from "react";
import { useState } from "react";
import Basket from "./Basket";

export default function TodoInput() {
  const [shopItem, setShopItem] = useState("");
  const [shopList, setShopList] = useState([]);

  function handleInput(e) {
    setShopItem(e.target.value);
  }

  function handleSubmit(e) {
    e.preventDefault();
    const newItem = {
      itemName: shopItem,
      itemId: Date.now(),
    };
    setShopList([...shopList, newItem]);
    setShopItem("");
  }

  useEffect(() => {
    console.log(shopList);
  }, [shopList]);

  function handleDelete(todoId) {
    const updateItem = shopList.filter((item) => item.itemId !== todoId);
    setShopList(updateItem);
  }
  return (
    <div>
      <h1>Shopping List</h1>

      <form action="" onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Item here..."
          value={shopItem}
          onChange={handleInput}
        />
        <input type="submit" value={"Add Item"} />
      </form>

      <ul>
        {shopList.map((item) => (
          <Basket
            key={item.itemId}
            itemName={item.itemName}
            onDelete={handleDelete}
            itemId={item.itemId}
          />
        ))}
      </ul>
    </div>
  );
}
