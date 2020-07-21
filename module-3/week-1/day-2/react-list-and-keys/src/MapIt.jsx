import React from "react";

export default function MapIt({ users, callback }) {
  return (
    <>
      {users.map((name, i) => (
        <p onClick={() => callback(name)}  key={i}>{name}</p>
      ))}
    </>
  );
}

// POUR RAPPELL

// YES !!! :) !!!
// document.getElementById("btn").onclick = doSomething;
                   // quelle belle référence de function !
// NO !!! :( !!!
// document.getElementById("btn").onclick = doSomething();
                   // surtout pas !!! no parenthèses ici !!! 