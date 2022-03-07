import React from "react";
import classnames from "classnames";
import { HeadingOne, Paragraph } from "../UI/FontStyles";

const WalletPlaceholder = ({ amount, type, currency, bgColor, image }) => {
  const bgClass = classnames(
    "flex flex-col rounded-xl  lg:w-80 p-6 shadow-sm space-y-4 hover:",
    bgColor
  );
  return (
    <div className={bgClass}>
      <div className="flex justify-between">
        <div className="flex flex-col space-y-2">
          <Paragraph
            fontSize="text-base"
            font-weight="font-normal"
            textColor="text-dark-black"
          >
            {type}
          </Paragraph>
          <Paragraph
            fontSize="text-sm"
            font-weight="font-normal"
            textColor="text-dark-black"
          >
            {currency}
          </Paragraph>
        </div>
        <div className="w-16 h-16">
          <img src={image} alt="flag" className="rounded-full" />
        </div>
      </div>
      <HeadingOne>{amount}</HeadingOne>
    </div>
  );
};

export default WalletPlaceholder;
