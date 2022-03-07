import React from "react";

import SideNavigation from "../Navigation/SideNavigation/SideNavigation";
import Main from "../Sections/Main";

const Layout = (props) => {
  return (
    <div className="bg-white flex flex-col justify-between w-full">
      <div className="flex justify-between">
        <SideNavigation />
        <Main>{props.children}</Main>
      </div>
    </div>
  );
};

export default Layout;
