import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./App.css";
import NavBar from "./Components/NavBar";
import HomePage from "./Pages/HomePage";
import Cart from "./Pages/Cart";

function App() {
  return (
    <div>
      <Router>
        <NavBar />
        <Switch>
          <Route path="/Cart" component={Cart}></Route>
          <Route path="/" component={HomePage}></Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
