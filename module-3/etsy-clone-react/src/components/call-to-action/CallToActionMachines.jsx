import React from "react";
import { Link } from "react-router-dom";
import TextBlock from "./../utils/TextBlock";

export default function CallToActionMailingList() {
  return (
    <TextBlock css={["call-to-action", "machines", "bg-color-2"]}>
      <Link to="/" className="link">
        Voir toutes les machines &gt;
      </Link>
    </TextBlock>
  );
}
