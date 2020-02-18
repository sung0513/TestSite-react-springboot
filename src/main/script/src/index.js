import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { Provider } from "mobx-react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import FoodStore from "./stores/FoodStore";

const foodStore = new FoodStore();

ReactDOM.render(
  <Provider foodStore={foodStore}>
    <App />
  </Provider>,
  document.getElementById("root")
);
