import React from "react";

export default function ConditionalIfElse({ value }) {
  function choose() {
    var res;
    if (typeof value === "object") {
      res = "it's an object !";
    } else {
      res = "it's not an object";
    }
    return res;
  }
  // dans une expression JSX vous ne pouvez utiliser QUE des expression JS
  // une expression JS est une instruction qui se résound en une valeur
  return <div>{choose()}</div>;

  // le code ci-dessous est incorrect syntaxiquement 
  // car if/else sont des statement (instruction) et non des expression
  
  // return (if (true) {
  //   <p>good</p>
  // } else {
  //   return <p>pas good</p>
  // })
}
