import React from "react";
import BaseLine from "./../BaseLine";
import CallToActionSeller from "./../CallToActionSeller";

import "./../../styles/page.home.css";

export default function Home() {
  return (
    <>
      <BaseLine text="Découvrez des machines qui vont vous plaire. Soutenez des benders indépendants. Uniquement sur Etso." />
      <CallToActionSeller />
    </>
  );
}
