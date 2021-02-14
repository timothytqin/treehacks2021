import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import "./style/fonts/AirbnbCerealBlack.ttf";
import "./style/fonts/AirbnbCerealBold.ttf";
import "./style/fonts/AirbnbCerealBook.ttf";
import "./style/fonts/AirbnbCerealExtraBold.ttf";
import "./style/fonts/AirbnbCerealLight.ttf";
import "./style/fonts/AirbnbCerealMedium.ttf";

import NavBar from "./components/NavBar";

ReactDOM.render(
  <Router>
    <Route path="/" component={NavBar} />
    <Switch>
      <Route exact path="/" component={App} />
    </Switch>
  </Router>,
  document.getElementById("root")
);
