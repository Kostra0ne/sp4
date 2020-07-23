import React from "react";
import { Link } from "react-router-dom";
import TextBlock from "./../utils/TextBlock";
import imgURL from "./../../assets/img/mask.jpg";

export default function CallToActionMask() {
  return (
    <TextBlock css={["call-to-action", "mask", "bg-color-3"]} backgroundImage={imgURL}>
      <Link to="/" className="link">
        Voir maintenant &gt;
      </Link>
    </TextBlock>
  );
}
