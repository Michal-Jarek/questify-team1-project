import React from "react";
import ReactDOM from "react-dom/client";

import { PersistGate } from "redux-persist/integration/react";
import { Provider } from "react-redux";

import { store, persistor } from "./redux/store.js";
import { Router } from "utils/router/Router.js";
import "./index.scss";



const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}></PersistGate>
      <Router />
    </Provider>
  </React.StrictMode>
);
