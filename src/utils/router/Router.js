import { lazy } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import App from "components/App";
import NotFound from "pages/NotFound/NotFound";

import { PrivateRoute } from "./PrivateRoute";
import { RestrictedRoute } from "./RestrictedRoute";

const LandingPage = lazy(() => import("../../pages/LandingPage/LandingPage"));
const commonPath = process.env.PUBLIC_URL + "/";

export const Router = () => (
  <BrowserRouter basename={commonPath}>
    <Routes>
      <Route path="/">
        <Route
          index
          element={<PrivateRoute redirectTo="/login" component={<App />} />}
        />
        <Route
          path="login"
          element={
            <RestrictedRoute redirectTo="/" component={<LandingPage />} />
          }
        />
        <Route path="*" element={<NotFound />} />
      </Route>
    </Routes>
  </BrowserRouter>
);
