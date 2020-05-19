import React from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import selectProducts from "../store/selectors";
import "../Styles/Page.css";

export default function HomePage() {
  const allProducts = useSelector(selectProducts);
  //console.log("allProducts:", allProducts);

  function handleOnClick() {}
  return (
    <div className="page">
      <div style={{ columnCount: "2" }}>
        <p>Filter by tags: </p>
        <p>Sort by: </p>
      </div>
      <div className="flex-container">
        <ul>
          {allProducts.map((product) => (
            <li key={product.id}>
              <Link to={`/product/${product.id}`}>{product.name}</Link>
              <p>
                Price: €{product.price}
                <span>
                  <strong>{"      ."}</strong>
                  {product.tags.length > 0
                    ? product.tags.map((tag) => (
                        <span
                          key={tag.id}
                          style={{
                            border: "2px",
                            borderRadius: "6px",
                            padding: "2px",
                            margin: "3px",
                            backgroundColor: "grey",
                            color: "white",
                          }}
                        >
                          <strong>{tag}</strong>
                        </span>
                      ))
                    : ""}
                </span>
                Add to cart{"       "}
                <button onClick={handleOnClick}>+</button>
              </p>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
