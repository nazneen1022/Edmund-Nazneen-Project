import React from "react";
import { useSelector } from "react-redux";
import { selectCartProducts } from "../store/selectors";

export default function Cart() {
  const cartProducts = useSelector(selectCartProducts);

  function handleEmptyCart() {}
  function handleBuyItems() {}
  return (
    <div className="page">
      Your Shopping Cart
      <div>
        <table style={{ padding: "20px" }}>
          <thead>
            <tr>
              <th>Product</th>
              <th>Quantity</th>
              <th>Price</th>
              <th>Total</th>
            </tr>
          </thead>
          <tbody>
            {cartProducts.map((cartProduct) => (
              <tr key={cartProduct.id}>
                <td>{cartProduct.name}</td>
                <td>{1}</td>
                <td>{cartProduct.price}</td>
                <td>{cartProduct.price}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <div>
        <button onClick={() => handleEmptyCart()}>Empty Cart</button>
        <button onClick={() => handleBuyItems()}>Buy Items</button>
      </div>
    </div>
  );
}
