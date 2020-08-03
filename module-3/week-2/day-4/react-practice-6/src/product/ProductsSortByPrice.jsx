import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCaretUp } from "@fortawesome/free-solid-svg-icons";
import { faCaretDown } from "@fortawesome/free-solid-svg-icons";

// TODO : ajouter une fonctionnalité de tri ASC/DESC sur le prix
// ce component est présentationel  (sans state)
// il remonte asc OU desc au parent...
// qui s'occupera de faire le sort et mettre à jour la liste de produits !
export default function ProductsSortByPrice({ callback }) {

  const handleClick = (e) => {
    callback(e.target.getAttribute("data-direction"));
  };

  return (
    <div className="sort-by-price">
      <h2 className="title">Sort by price</h2>
      <span className="icon" data-direction="asc" onClick={handleClick}>
        <FontAwesomeIcon size="2x" icon={faCaretUp} />
      </span>
      <span className="icon" data-direction="desc" onClick={handleClick}>
        <FontAwesomeIcon size="2x" icon={faCaretDown} />
      </span>
    </div>
  );
}
