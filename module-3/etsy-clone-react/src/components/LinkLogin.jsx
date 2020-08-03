import React from "react";
import { Link } from "react-router-dom";

export default function LinkLogin() {
  return (
    <Link to="/admin/products" className="link login">Se connecter</Link>
  );
}
