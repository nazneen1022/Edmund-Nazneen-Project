import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import selectProducts from "../store/selectors";
//import "../Styles/ToggleSwitch.css";
import "../Styles/Page.css";

export default function HomePage() {
  const [selectOption, setSelectOption] = useState();
  const [toggle, setToggle] = useState([]);
  const allProducts = useSelector(selectProducts);

  const tags = allProducts.map((product) => product.tags);
  let jointArray = [];
  tags.forEach((tag) => {
    jointArray = [...jointArray, ...tag];
  });
  const mergedTags = jointArray.reduce(
    (acc, cur) => (acc.includes(cur) ? acc : acc.concat(cur)),
    []
  );

  let sortedProducts;

  function handleOnClick() {
    //console.log("TODO");
  }
  function handleOnChange(event, tag) {
    if (event.target.checked) {
      setToggle([...toggle, tag]);
    } else {
      setToggle(toggle.filter((element) => element !== tag));
    }
  }

  const selectedList = allProducts.filter((product) => {
    return toggle.every((val) => product.tags.includes(val));
  });
  // console.log("toggle:", toggle);
  // console.log("selectedList,", selectedList);
  let products;
  console.log("toggle.length:", toggle.length);
  if (toggle.length < 0) {
    products = allProducts;
  } else {
    products = selectedList;
  }

  switch (selectOption) {
    case "price": {
      sortedProducts = [...products].sort((a, b) => a.price - b.price);
      products = sortedProducts;
      break;
    }
    case "popularity": {
      sortedProducts = [...products].sort(
        (a, b) => b.boughtTimes - a.boughtTimes
      );
      products = sortedProducts;
      break;
    }
    default:
      break;
  }
  return (
    <div className="page">
      <div id="parent5" className="parent">
        <div className="left">
          <em>
            <strong>Filter by tags:</strong>
          </em>

          <span>
            {"   "}
            {mergedTags.map((tag) => (
              <span key={tag}>
                <input
                  type="checkbox"
                  onChange={(event) => handleOnChange(event, tag)}
                ></input>
                <label>{tag}</label>
              </span>
            ))}
          </span>
        </div>
        <div className="right">
          <em>
            <strong>
              {" "}
              <label>Sort by: </label>
            </strong>
          </em>
          <select
            value={selectOption}
            onChange={(event) => setSelectOption(event.target.value)}
          >
            <option>--select--</option>
            <option>price</option>
            <option>popularity</option>
          </select>
        </div>
      </div>
      <div className="flex-container">
        {products.map((product) => (
          <div className="row" key={product.id}>
            <Link to={`/product/${product.id}`}>{product.name}</Link>
            <p>
              <img
                style={{ margin: "10px", width: "400px", height: "300px" }}
                src={product.img}
                alt=""
              />
            </p>
            <div style={{ columnCount: "2" }}>
              <div style={{ textAlign: "left" }}>Price: €{product.price}</div>
              <div style={{ textAlign: "right" }}>
                {product.tags.length > 0
                  ? product.tags.map((tag) => (
                      <span
                        key={tag}
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
              </div>
            </div>
            <p>
              Add to cart{"       "}
              <button onClick={handleOnClick}>+</button>
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}
