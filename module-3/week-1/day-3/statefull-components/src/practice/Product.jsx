import React from "react";

export default function Product({ name, price, brand }) {
  return (
    <li className="product">
      <h2 className="title">
        {name} - {brand}
      </h2>
      <p>{price} euros</p>
    </li>
  );
}
