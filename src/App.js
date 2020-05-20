import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./App.css";
import NavBar from "./Components/NavBar";
import HomePage from "./Pages/HomePage";
import Cart from "./Pages/Cart";
import ProductPage from "./Pages/ProductPage";
import Title from "./Components/Title";

function App() {
  return (
    <div>
      <Router>
        <NavBar />
        <Title />
        <Switch>
          <Route path="/Cart" component={Cart}></Route>
          <Route exact path="/" component={HomePage}></Route>
          <Route path="/product/:productId" component={ProductPage}></Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
