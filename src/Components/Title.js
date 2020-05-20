import React from "react";
import { useSelector } from "react-redux";
import { selectCartProducts } from "../store/selectors";
import "../Styles/Page.css";

export default function Title() {
  const cartProducts = useSelector(selectCartProducts);
  return (
    <div
      style={{
        columnCount: "2",
        padding: "10px",
        fontWeight: "bold",
        fontFamily: "Calibri",
      }}
    >
      <div
        style={{
          fontSize: "25px",
          color: "orangered",
        }}
      >
        Groceries Webshop!!
      </div>
      <div style={{ textAlign: "right" }}>
        {cartProducts.length} items in cart
      </div>
    </div>
  );
}
