// import React, { useState } from "react";
// import PropTypes from "prop-types";
// import { useCart } from "../context/CartContext";
// import { LazyLoadImage } from "react-lazy-load-image-component";

// const ProductCard = ({ product }) => {
//   const [qty, setQty] = useState(1);
//   const { addToCart } = useCart();

//   function increment() {
//     setQty(qty + 1);
//   }

//   function decrement() {
//     setQty(qty > 1 ? qty - 1 : 1);
//   }
//   return (
//     <div>
//       <LazyLoadImage
//         src={product.image}
//         alt={product.title}
//         width={"200px"}
//         loading="lazy"
//       />
//       <h3>{product.title}</h3>
//       <p>${product.price}</p>

//       <div>
//         <button onClick={decrement}>-</button>
//         <input
//           type="number"
//           value={qty}
//           onChange={(e) => setQty(e.target.value)}
//         />
//         <button onClick={increment}>+</button>
//       </div>

//       <button onClick={() => addToCart(product.id, qty)}>Add to Cart</button>
//     </div>
//   );
// };

// ProductCard.propTypes = {
//   product: PropTypes.shape({
//     id: PropTypes.number.isRequired,
//     title: PropTypes.string.isRequired,
//     price: PropTypes.number.isRequired,
//     image: PropTypes.string.isRequired,
//   }).isRequired,
// };

// export default ProductCard;

import React, { useState } from "react";
import PropTypes from "prop-types";
import { useCart } from "../context/CartContext";

export default function ProductCard({ product }) {
  const [qty, setQty] = useState(1);

  const { addToCart } = useCart();

  function handleDecrement() {
    setQty((prevQty) => (prevQty > 1 ? prevQty - 1 : 1));
  }

  function handleIncrement() {
    setQty((prevQty) => prevQty + 1);
  }
  return (
    <div>
      {<img src={product.image} alt={product.title} width={"150px"} />}
      <div>
        <h3>{product.title}</h3>
        <button onClick={handleDecrement}>-</button>
        <input
          type="number"
          value={qty}
          onChange={(e) => setQty(Number(e.target.value))}
        />
        <button onClick={handleIncrement}>+</button>
      </div>
      <div>
        <button onClick={() => addToCart(product.id, qty)}>Add to Cart</button>
      </div>
    </div>
  );
}
