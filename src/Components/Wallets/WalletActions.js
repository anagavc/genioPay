import React from "react";
import SearchBar from "../UI/Inputs/SearchBar";
import WalletAccounts from "./WalletAccounts";
import WalletStatus from "./WalletStatus";
import usaFlag from "../../images/usa.png";
import EURFlag from "../../images/EUR.png";
import GBPFlag from "../../images/GBP.png";
const WalletActions = () => {
  const status = [
    {
      status: "Active (3)",
      active: true,
    },
    {
      status: "Inactive (2)",
    },
    {
      status: "Closed (0)",
    },
  ];
  const accounts = [
    {
      amount: "€2,000,000.50",
      type: "EUR Wallet",
      currency: "EUR",
      image: EURFlag,
      status: "Default",
    },
    {
      amount: "$10,250.00",
      type: "Personal",
      currency: "USD",
      image: usaFlag,
    },

    {
      amount: "£500.00",
      type: "School Fees",
      currency: "GBP",
      image: GBPFlag,
    },
  ];
  return (
    <div className="bg-white border border-metallic mt-8 w-full flex flex-col px-6  py-8 rounded-lg">
      <div className="flex justify-between space-x-4">
        <SearchBar />
        <select
          name="wallets"
          id="wallets"
          className="text-green font-semibold text-sm"
        >
          <option value="All">All</option>
        </select>
      </div>
      <div className="flex justify-between mt-8">
        <WalletStatus status={status} />
      </div>
      <div className="flex flex-col mt-6">
        {accounts.map((account, index) => {
          return (
            <WalletAccounts
              id={index}
              amount={account.amount}
              type={account.type}
              currency={account.currency}
              image={account.image}
              status={account.status}
            />
          );
        })}
      </div>
    </div>
  );
};

export default WalletActions;
