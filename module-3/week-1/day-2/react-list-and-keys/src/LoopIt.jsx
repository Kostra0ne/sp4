import React from "react";

export default function LoopIt({ limit }) {
  const tpl = [];

  for (let i = 0; i < limit; i += 1) {
    tpl.push(<p key={i}>{i + 1}</p>);
  }

  return tpl;
}
