import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { selectCartProducts } from "../store/selectors";

export default function Cart() {
  const [buyItems, setBuyItems] = useState();
  //const [cartCount, setCartCount] = useState(1);
  const cartProducts = useSelector(selectCartProducts);
  const dispatch = useDispatch();

  console.log("cartProducts:", cartProducts);

  function handleEmptyCart() {
    dispatch({ type: "EMPTY_CART" });
  }
  function handleBuyItems() {
    const billAmount = cartProducts.reduce(
      (acc, product) => acc + product.price * product.qty,
      0
    );
    const list = cartProducts.map((cartProduct) => {
      return `${cartProduct.name} `;
    });

    //console.log("list:", list);
    setBuyItems(
      `Total bill amount is ${billAmount}. Your  List of products: ${list}`
    );
  }
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

                <td>{cartProduct.qty}</td>
                <td>{cartProduct.price}</td>
                <td>{cartProduct.qty * cartProduct.price}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <div>
        <button onClick={() => handleEmptyCart()}>Empty Cart</button>
        <button onClick={() => handleBuyItems()}>Buy Items</button>
        <div style={{ padding: "20px", color: "green" }}>
          {cartProducts.length > 0 && buyItems !== "" ? buyItems : ""}
        </div>
      </div>
    </div>
  );
}
