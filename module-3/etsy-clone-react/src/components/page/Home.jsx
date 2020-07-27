import React from "react";
import BaseLine from "./../BaseLine";
import CallToActionSeller from "./../call-to-action/CallToActionSeller";
import CallToActionMachines from "./../call-to-action/CallToActionMachines";
import CallToActionMailingList from "./../call-to-action/CallToActionMailingList";
import CallToActionMask from "./../call-to-action/CallToActionMask";
import ProductList from "./../product/ProductList";

import "./../../styles/page.home.css";

export default function Home() {
  return (
    <div className="page home">
      <BaseLine text="Découvrez des machines qui vont vous plaire. Soutenez des benders indépendants. Uniquement sur Etso." />
      <CallToActionSeller />
      <CallToActionMask />
      <CallToActionMachines />
      <CallToActionMailingList />
      <ProductList />
    </div>
  );
}
