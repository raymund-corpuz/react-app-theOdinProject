export default function Basket({ itemName, itemId, onDelete }) {
  return (
    <li>
      {itemName}

      <button onClick={() => onDelete(itemId)}>Delete</button>
    </li>
  );
}
