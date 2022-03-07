import React from "react";
import { HeadingTwo, Paragraph } from "../UI/FontStyles";
import WalletPlaceholder from "./WalletPlaceholder";
import usaFlag from "../../images/usa.png";
import EURFlag from "../../images/EUR.png";
import GBPFlag from "../../images/GBP.png";

const Wallets = () => {
  const details = [
    {
      amount: "$10,250.00",
      type: "Personal",
      currency: "USD",
      bgColor: "bg-yellow",
      image: usaFlag,
    },
    {
      amount: "€4000.53",
      type: "EUR Wallet",
      currency: "EUR",
      bgColor: "bg-peach-lighter",
      image: EURFlag,
    },
    {
      amount: "£50.00",
      type: "School Fees",
      currency: "GBP",
      bgColor: "bg-green-light",
      image: GBPFlag,
    },
  ];
  return (
    <div className="flex flex-col space-y-8">
      <div className="flex justify-between">
        <HeadingTwo>Wallet (5)</HeadingTwo>
        <Paragraph
          fontSize="text-sm"
          textColor="text-green"
          fontWeight="font-bold"
        >
          View all wallets
        </Paragraph>
      </div>
      <div className="flex flex-col lg:flex-row  space-y-4 lg:space-y-0 justify-between lg:space-x-2">
        {details.map((detail) => {
          return (
            <WalletPlaceholder
              amount={detail.amount}
              type={detail.type}
              currency={detail.currency}
              bgColor={detail.bgColor}
              image={detail.image}
            />
          );
        })}
      </div>
    </div>
  );
};

export default Wallets;
