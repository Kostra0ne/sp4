import React from "react";
import { Link } from "react-router-dom";
import source from "./../../assets/img/bimBamBoum_V05.jpg";
import TextBlock from "./../utils/TextBlock";

export default function CallToActionSeller() {
  return (
    <div className="call-to-action sellers">
      <TextBlock css={["bg-color-2"]}>
        <h2 className="title">Créez votre page bender</h2>
        <Link to="/" className="link">
          Voir maintenant &gt;
        </Link>
      </TextBlock>
      <img className="img" src={source} />
    </div>
  );
}
