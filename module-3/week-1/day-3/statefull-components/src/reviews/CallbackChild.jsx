import React from "react";

export default function CallbackChild({ callback }) {
  return (
    <div onClick={callback}>
      <h1 className="title">Je suis le child</h1>
    </div>
  );
}
