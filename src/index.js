import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./component/App";
import reportWebVitals from "./reportWebVitals";
import { BrowserRouter, Route, Link, Switch } from "react-router-dom";
import Chat from "./component/Chat";

ReactDOM.render(
  <BrowserRouter>
    <switch>
      <Route exact path="/" component={App} />
      <Route path="/chat" component={Chat} />
    </switch>
  </BrowserRouter>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
