import React from "react";

// ici on utilise le ET LOGIQUE comme operator de protection
// guard operator
export default function ConditionalGuard({ score }) {
  return (
    <>
      {score >= 10 && <span>win !</span>}
    </>
  );
}
