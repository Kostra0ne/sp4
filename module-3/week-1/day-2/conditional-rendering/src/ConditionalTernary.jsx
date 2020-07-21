import React from "react";

export default function ConditionalTernary({ text }) {
  return text.length < 10 ? <div>short text</div> : <div>long text</div>;
}
