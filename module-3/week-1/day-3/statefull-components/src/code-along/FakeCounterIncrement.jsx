// coder un compteur qui incrémente un nombre au click
import React from "react";

// Statefull VS Stateless
// ----------------------
// Statefull: le component possède un état interne (state)
// ----------------------
// Stateless :
// - le component reçoit les datas en props
// - le envoi si besoin une information de modification au parent (callback)

export default function FakeIncrementCounter({ count }) {
  const increment = () => {
    console.log("clicked");
    count++;
  };

  return (
    <div>
      <h3 className="title">Increment counter</h3>
      {count}
      <button onClick={increment}>increment</button>
    </div>
  );
}
