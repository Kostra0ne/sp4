import React from "react";


export default function MyNumber(props) {
  console.log(typeof props, props);
  return <p>{props.number}</p>;
}
