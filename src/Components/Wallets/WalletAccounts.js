import React from "react";
import { HeadingThree, Paragraph } from "../UI/FontStyles";
const WalletAccounts = ({ amount, type, currency, image, status, id }) => {
  return (
    <div className="flex justify-between hover:bg-green-lightest py-6 px-4 rounded-md transition duration-300">
      <div className="flex justify-between space-x-2" key={id}>
        <img src={image} className="rounded-full w-8 h-8" alt="flag" />
        <div className="flex flex-col space-y-2">
          <Paragraph
            fontSize="text-sm"
            font-weight="font-normal"
            textColor="text-dark-black"
          >
            {type}
          </Paragraph>
          <Paragraph
            fontSize="text-xs"
            font-weight="font-normal"
            textColor="text-dark-black"
          >
            {currency}
          </Paragraph>
        </div>
      </div>
      <div className="flex flex-col space-y-2">
        <HeadingThree fontSize="text-sm text-right"> {amount}</HeadingThree>
        <Paragraph
          fontSize="text-xs text-right"
          font-weight="font-normal"
          textColor="text-dark-black"
        >
          {status}
        </Paragraph>
      </div>
    </div>
  );
};

export default WalletAccounts;
