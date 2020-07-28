import React from "react";

export default function ProductCardMini({ infos }) {
  // console.log(infos);
  return (
    <li className="product card mini">
      <img className="img" src={infos.image} alt="produc foo" />
      <span className="price">{infos.price} euros</span>
    </li>
  );
}
