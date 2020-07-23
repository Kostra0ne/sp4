import React from "react";

export default function User({ infos, index, callback }) {
  console.log(index);
  return (
    <li
      style={{
        display: "flex",
        listStyle: "none",
        background: "forestgreen",
        borderBottom: "1px solid black",
        marginBottom: "10px",
        justifyContent: "space-between",
        maxWidth: "90%"
      }}
    >
      <p>
        {infos.firstname} - {infos.lastname}
      </p>
      <button onClick={() => callback(index)}>-</button>
    </li>
  );
}
