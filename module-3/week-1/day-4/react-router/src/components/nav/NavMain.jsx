import React from "react";
import { NavLink } from "react-router-dom";

export default function NavMain() {
  return (
    <nav id="nav-main">
      <NavLink exact to="/">Home |</NavLink>
      <NavLink to="/about">About |</NavLink>
      <NavLink to="/contact">contact |</NavLink>
    </nav>
  );
}
