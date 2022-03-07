import React from "react";
import WalletBalance from "./WalletBalance";
import WalletDetails from "./WalletDetails";

const WalletHistory = () => {
  return (
    <div className="flex flex-col space-y-4 mt-8 py-6 rounded-lg lg:px-12 w-full lg:w-auto  bg-white shadow-sm">
      <WalletBalance />
      <WalletDetails />
    </div>
  );
};

export default WalletHistory;
