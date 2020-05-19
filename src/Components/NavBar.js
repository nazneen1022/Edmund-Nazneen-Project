import React from "react";
import { NavLink } from "react-router-dom";
import "../Styles/Page.css";

export default function HomePage() {
  return (
    <div className="page">
      <NavLink style={{ padding: "40px" }} to="/">
        Home
      </NavLink>
      <NavLink style={{ padding: "40px" }} to="/cart">
        Cart
      </NavLink>
    </div>
  );
}
