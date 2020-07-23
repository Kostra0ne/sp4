import React from "react";
import "./../styles/SquareOfNumbers.css";

export default function SquareOfNumbers({ max, nth }) {
  return (
    <ul className="square-of-numbers">
      {[...new Array(max)].map((v, i) => {
        let c = i + 1;
        return (
          <li key={c} className={`item ${c % nth === 0 && "is-selected"}`}>
            {c}
          </li>
        );
      })}
    </ul>
  );
}
