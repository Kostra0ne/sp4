import React from "react";

import IconBurger from "./../icon/IconBurger";
import IconShopCart from "./../icon/IconShopCart";
import LinkLogin from "./../LinkLogin";
import SeachBar from "./../SeachBar";
import Logo from "./../Logo";

export default function HeaderMain() {
  return (
    <header id="header-main">
      <IconShopCart />
      <Logo />
      <LinkLogin /> 
      <IconBurger />
      <SeachBar />
    </header>
  );
}
