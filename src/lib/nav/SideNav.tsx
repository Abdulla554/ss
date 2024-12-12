import React from "react";
import { Link } from "react-router-dom";
import { routes } from "../routes/approutes";
import { routesTypes } from "../types/types";
//  import "./style/style.css"
import { useAppSelector } from "@/publicStore/store/store";

export default function SideNav() {
  const them = useAppSelector((state) => state.theme);
  return (
    <div style={{ background: them.colors.SidBar }} className="   w-1/6">
      <div className=" flex gap-1 pt-5 text-center items-center justify-center">
        <h4 style={{ color: them.colors.fontColor }}>NXA.PROJECT</h4>
        <h4
          className=" rounded-xl"
          style={{
            textAlign: "center",
            marginRight: 10,
            width: 30,
            height: 30,
            background: them.colors.OrngColor,
            color: them.colors.fontColor,
          }}
        >
          A
        </h4>
      </div>
      {/* navigatin_link_container */}
      <div className="navigatin_link_container ">
        {routes &&
          routes
            .filter((item: routesTypes) => {
              return item.sideNav == true;
            })
            .map((singleRoute: routesTypes) => {
              console.log(singleRoute.routePath);

              return (
                <Link to={singleRoute.routePath} className=" ">
                  <div className="main_link_container">
                    <button
                      style={{ background: them.colors.SidBar }}
                      className=" mt-10 h-10 text-white font-bold  border-0  w-full "
                    >
                      {singleRoute.routeName}
                    </button>
                  </div>
                </Link>
              );
            })}
      </div>
    </div>
  );
}
