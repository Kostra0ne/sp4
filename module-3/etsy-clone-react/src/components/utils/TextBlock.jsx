import React from "react";

import "./../../styles/mod.text-block.css"

export default function TextBlock({ css, children, backgroundImage = null}) {
  console.log(backgroundImage)
  const classNames = [...css].toString().replace(/,/g, ' ');
  return <div className={`text-block ${classNames}`} style={{backgroundImage: backgroundImage && `url("${backgroundImage}`}}>{children}</div>;
}
