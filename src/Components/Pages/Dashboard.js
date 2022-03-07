import React from "react";
import Activity from "../Dashboard/Activity";
import QuickLinks from "../Dashboard/QuickLinks";
import Wallets from "../Dashboard/Wallets";

const Dashboard = () => {
  return (
    <div className="bg-white flex flex-col mt-10 lg:shadow-sm lg:px-6 lg:py-8">
      <Wallets />
      <QuickLinks />
      <Activity />
    </div>
  );
};

export default Dashboard;
