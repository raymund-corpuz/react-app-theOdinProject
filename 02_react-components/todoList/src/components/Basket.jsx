export default function Basket({ itemName, itemId }) {
  return <li key={itemId}>{itemName}</li>;
}
