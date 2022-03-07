import React from "react";
import { PrimaryButton } from "../UI/Buttons/Buttons";
import { HeadingTwo } from "../UI/FontStyles";
import WalletActions from "../Wallets/WalletActions";
import WalletHistory from "../Wallets/WalletHistory";
const Wallet = () => {
  return (
    <div className="mt-10 flex flex-col w-full justify-between bg-white shadow-sm mx-auto px-6 py-8">
      <div className="flex justify-between space-x-4 lg:space-x-0">
        <HeadingTwo>Your Wallet (s)</HeadingTwo>
        <PrimaryButton
          textColor="text-white font-bold flex justify-between items-center my-auto"
          bgColor="bg-green"
          hoverBg="hover:bg-gray"
        >
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M6 12H18"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M12 18V6"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
          Create New Wallet
        </PrimaryButton>
      </div>
      <div className="flex flex-col lg:flex-row justify-between space-x-4 ">
        <WalletActions />
        <WalletHistory />
      </div>
    </div>
  );
};

export default Wallet;
