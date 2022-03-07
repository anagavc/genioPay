import React from "react";
import WalletStatus from "./WalletStatus";
import ActivityActions from "../Dashboard/ActivityActions";
import Chart from "../Dashboard/Chart";
const WalletMonitoring = () => {
  const status = [
    {
      status: "Activity",
      active: true,
    },
    {
      status: "Transactions",
    },
    {
      status: "Invoices",
    },
  ];
  return (
    <div className="flex flex-col mt-10">
      <div className="flex justify-start">
        <select
          name="options"
          id="options"
          className="text-green font-semibold text-sm"
        >
          <option value="more">More options</option>
        </select>
      </div>
      <div className="flex justify-start mt-8">
        <WalletStatus status={status} />
      </div>
      <div className="flex justify-end mt-4">
        <select
          name="month"
          id="month"
          className="text-green font-normal text-sm"
        >
          <option value="month">Month</option>
        </select>
      </div>
      <div className="flex flex-col lg:flex-row justify-between px-4 lg:px-0 lg:space-x-6 mt-6">
        <ActivityActions />
      </div>
      <div className="w-64 lg:w-96 mx-auto px-0">
        <Chart />
      </div>
    </div>
  );
};

export default WalletMonitoring;
