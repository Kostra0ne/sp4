import React from "react";

export default function ProductsTextFilter({ callback }) {
  return (
    <div className="filter-text">
      <input type="text" className="input" onChange={callback} />
    </div>
  );
}
