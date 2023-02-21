import React from "react";
import ReactDOM from "react-dom/client";

import { BrowserRouter, Route, Routes } from "react-router-dom";
import { PersistGate } from "redux-persist/integration/react";
import { Provider } from "react-redux";
import { store, persistor } from "./redux/store.js";

import "./index.scss";
import App from "./components/App.js";
import NotFound from "./pages/NotFound/NotFound.jsx";
const LandingPage = React.lazy(() => import("./pages/LandingPage/LandingPage"));

const commonPath = process.env.PUBLIC_URL +"/";
console.log(commonPath);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}></PersistGate>
      <BrowserRouter basename={commonPath}>
        <Routes>
          <Route path="/">
            <Route index element={<App />} />
            <Route path="landing" element={<LandingPage />} />
            <Route path="*" element={<NotFound />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </Provider>
  </React.StrictMode>
);
