import React from "react";
import MainNavigation from "../Navigation/MainNavigation";

const Main = (props) => {
  return (
    <div className="flex flex-col w-full mx-auto lg:mx-0 lg:w-4/5 px-4 py-12">
      <MainNavigation />
      <main>{props.children}</main>
    </div>
  );
};

export default Main;
