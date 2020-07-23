import React from "react";

import IconBurger from "./../IconBurger";
import IconShopCart from "./../IconShopCart";
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
