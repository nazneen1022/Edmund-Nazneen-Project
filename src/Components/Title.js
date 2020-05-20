import React from "react";
import "../Styles/Page.css";

export default function Title() {
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
      <div style={{ textAlign: "right" }}>0 items in cart</div>
    </div>
  );
}
