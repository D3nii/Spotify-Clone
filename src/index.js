import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { DataLayerProvider } from "./Essentials/DataLayer";
import reducer, { initialState } from "./Essentials/reducer";

import "./index.css";

ReactDOM.render(
  <React.StrictMode>
    <DataLayerProvider initialState={initialState} reducer={reducer}>
      <App />
    </DataLayerProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
