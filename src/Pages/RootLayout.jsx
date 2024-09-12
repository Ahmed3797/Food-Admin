import React from "react";
import MainNavigation from "../Components/MainNavigation";
import UpperBar from "../Components/UpperBar";
import { Outlet } from "react-router-dom";

const RootLayout = () => {
  return (
    <div className="h-screen flex flex-col  ">
      <UpperBar />
      <div className="flex flex-grow">
        <div className="grid grid-cols-4 w-full grid-parent ">
          <MainNavigation />

          <div className="col-span-3 ">
            <Outlet />
          </div>
        </div>
      </div>
    </div>
  );
};

export default RootLayout;
