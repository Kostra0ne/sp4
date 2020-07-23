import React from "react";

const defaultCallback = () => console.console.warn("! todo callback");

export default function CustomInput({
  css,
  btn = "ok",
  placeholder = "Your content here...",
  callback = defaultCallback,
}) {
  const classNames = css && [...css].toString().replace(/,/g, ' ');
  return (
    <div className={`input-custom + ${classNames}`}>
      <input className="input" type="text" placeholder={placeholder} />
      <button className="btn" onClick={callback}>
        {btn}
      </button>
    </div>
  );
}
