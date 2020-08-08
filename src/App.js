import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./css/App.css";
import Header from "./Header";
import Home from "./Home";
function App() {
  return (
    <Router>
      <div className="app">
        <Switch>
          <Route exact path="/">
            <Header />
            <Home />
          </Route>

          <Route path="/checkout">
            <Header />
            <h1>CHECK OUT</h1>
          </Route>

          <Route path="/login">
            <h1>Login page</h1>
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
