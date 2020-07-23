import React from "react";

export default function EvenOrOddSoluce({ nb }) {
  return (
    <p>
      =======================================
      <br />
      {nb % 2 === 0 ? " Pair" : " Impair"} !!!
    </p>
  );
}
