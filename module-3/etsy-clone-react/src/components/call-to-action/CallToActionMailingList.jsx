import React from "react";
import TextBlock from "./../utils/TextBlock";
import CustomInput from "./../utils/CustomInput";

export default function CallToActionMailingList() {
  return (
    <TextBlock css={["call-to-action", "mailing-list", "bg-color-3"]}>
      <h2 className="title">
        Recevez des idées de cadeaux uniques et bien d'autres choses directement
        par email.
      </h2>
      <CustomInput placeholder="Renseignez votre email" btn="S'abonner" />
    </TextBlock>
  );
}
