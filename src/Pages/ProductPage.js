import React, { useState } from "react";
import { useParams } from "react-router-dom"

import store from "../db"

export default function ProductPage() {
  const [cartCount, setCartCount] = useState(0)
  const params = parseInt(useParams().productId)
  const storeProducts = store.products

  const findProductArray = storeProducts.find(function (product) {
    return product.id === params
  })

  return (
    <div>Product page
      <h3>{findProductArray.name}</h3>
      <p>Tags: {findProductArray.tags}</p>
      <p>Price: ${findProductArray.price}</p>
      {/* <img src={} width='200' alt='profile' /> */}
      <button onClick={() => { setCartCount(cartCount + 1) }}>
        Add to cart
      </button>
      <p>
        <button onClick={() => { setCartCount(cartCount - 1) }}>
          -
        </button>

        {`${cartCount} in cart`}

        <button onClick={() => { setCartCount(cartCount + 1) }}>
          +
        </button>
      </p>
    </div>
  )
}
