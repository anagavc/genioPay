import React from "react";
import { Paragraph } from "../UI/FontStyles";
const WalletStatus = ({ status }) => {
  return (
    <>
      {status.map((state, index) => {
        return state.active === true ? (
          <Paragraph
            key={index}
            fontSize="text-sm border-b-4 border-green px-4"
            textColor="text-dark-black"
            fontWeight="font-normal"
          >
            {state.status}
          </Paragraph>
        ) : (
          <Paragraph
            key={index}
            fontSize="text-sm px-4"
            textColor="text-dark-black"
            fontWeight="font-normal"
          >
            {state.status}
          </Paragraph>
        );
      })}
    </>
  );
};

export default WalletStatus;
