import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { DataLayer } from "./Essentials/DataLayer";

import "./index.css";

ReactDOM.render(
  <React.StrictMode>
    <DataLayer initialState reducaer>
      <App />
    </DataLayer>
  </React.StrictMode>,
  document.getElementById("root")
);
