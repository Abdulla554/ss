import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { useState } from "react";
import { routes } from "./lib/routes/approutes";
import { routesTypes } from "./lib/types/types";
import SideNav from "./lib/nav/SideNav";
import { useAppSelector } from "./publicStore/store/store";

function App() {
  localStorage.setItem("address", "5.5.5.109:3434/");
  const theme = useAppSelector(state => state.theme)
  return (
    <div className=" flex   justify-between">
    <SideNav/>
      <Routes>
        {routes &&
          routes.map((singleRoute: routesTypes) => {
            return (
              <Route
                path={singleRoute.routePath}
                element={<singleRoute.routeComp />}
              />
            );
          })}
      </Routes>
    </div>
  );
}

export default App;
