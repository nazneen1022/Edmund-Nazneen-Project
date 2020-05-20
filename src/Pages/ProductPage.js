import React, { useState } from "react";
import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";

const selectSpecificProduct = (params) => {
  return (state) => {
    return state.products.products.find((product) => product.id === params);
  };
};

export default function ProductPage() {
  const [cartCount, setCartCount] = useState(0);
  const params = parseInt(useParams().productId);
  const product = useSelector(selectSpecificProduct(params));

  return (
    <div style={{ textAlign: "center" }}>
      Product page
      <h2>{product.name}</h2>
      <img src={product.img} width="400" alt="profile" />
      <p>Tags: {product.tags}</p>
      <p>Price: ${product.price}</p>
      <button
        onClick={() => {
          setCartCount(cartCount + 1);
        }}
      >
        Add to cart
      </button>
      <p>
        <button
          onClick={() => {
            setCartCount(cartCount - 1);
          }}
        >
          -
        </button>

        {`${cartCount} in cart`}

        <button
          onClick={() => {
            setCartCount(cartCount + 1);
          }}
        >
          +
        </button>
      </p>
    </div>
  );
}
