import React from "react";

export default function ProductDetails({ infos }) {
  return (
    <li className="product">
      <span>
        {infos.name} - {infos.price} - {infos.currency}
      </span>
    </li>
  );
}
