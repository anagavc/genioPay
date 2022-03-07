import React from "react";
import { Paragraph, HeadingOne } from "../UI/FontStyles";
const WalletBalance = () => {
  return (
    <div className="bg-white border w-full border-metallic flex flex-col lg:flex-row py-4 px-4 lg:px-6 justify-between rounded-lg lg:space-x-24">
      <div className="flex flex-col space-y-2">
        <div className="flex items-center space-x-2">
          <svg
            width="8"
            height="8"
            viewBox="0 0 8 8"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <circle cx="4" cy="4" r="4" fill="#22C55E" />
          </svg>
          <Paragraph
            textColor="text-green-lighter items-center"
            fontSize="text-xs"
          >
            Active
          </Paragraph>
        </div>
        <Paragraph
          fontSize="text-xs"
          fontWeight="font-normal"
          textColor="text-dark-black"
        >
          EUR Wallet
        </Paragraph>
        <Paragraph
          fontSize="text-xs"
          fontWeight="font-bold"
          textColor="text-green"
        >
          EUR
        </Paragraph>
      </div>
      <HeadingOne> €2,000,000.50</HeadingOne>
    </div>
  );
};

export default WalletBalance;
