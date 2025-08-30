import { Link } from "react-router-dom";
import { products } from "../data/products";

export default function Products() {
  return (
    <div>
      <h2>Products</h2>
      <ul>
        {products.map((p) => (
          <li key={p.id}>
            <Link to={`/products/${p.id}`}>{p.name}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
