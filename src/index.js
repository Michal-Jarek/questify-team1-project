import React from "react";
import ReactDOM from "react-dom/client";

import { BrowserRouter, Route, Routes } from "react-router-dom";
import { PersistGate } from "redux-persist/integration/react";
import { Provider } from "react-redux";
import { store, persistor } from "./redux/store";

import "./index.scss";
import App from "./components/App.js";
import NotFound from "./pages/NotFound/NotFound.jsx";
const LandingPage = React.lazy(() => import("./pages/LandingPage/LandingPage"));

// const pjson = require("../package.json").name;

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}></PersistGate>
      <BrowserRouter >
        <Routes>
          <Route path="/" element={<App />}/>
          <Route path="*" element={<NotFound />} />
          <Route path="/landing" element={<LandingPage />} />
        </Routes>
      </BrowserRouter>
    </Provider>
  </React.StrictMode>
  
);

// basename={`/${pjson}`}