import React from "react";
import { PrimaryButton } from "../UI/Buttons/Buttons";
import { Paragraph } from "../UI/FontStyles";
import WalletMonitoring from "./WalletMonitoring";

const WalletDetails = () => {
  const balances = [
    {
      title: "Ledger Balance",
      amount: "2,000,000.50",
    },
    {
      title: "Blocked Balance",
      amount: "2,000,000.50",
    },
  ];
  const types = [
    {
      title: "Total Incoming",
      amount: "€2,000,000.50",
    },
    {
      title: "Total Outgoing",
      amount: "€5,000,000.50",
    },
  ];
  const actions = [
    {
      title: "Payment",
      icon: (
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M7.39969 6.31997L15.8897 3.48997C19.6997 2.21997 21.7697 4.29997 20.5097 8.10997L17.6797 16.6C15.7797 22.31 12.6597 22.31 10.7597 16.6L9.91969 14.08L7.39969 13.24C1.68969 11.34 1.68969 8.22997 7.39969 6.31997Z"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M10.1104 13.65L13.6904 10.06"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      ),
    },
    {
      title: "Pay",
      icon: (
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M5 17.5L19 3.5"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeMiterlimit="10"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M5 7.22998V17.5H15.27"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeMiterlimit="10"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M3.5 22H20.5"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeMiterlimit="10"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      ),
    },
    {
      title: "Exchange",
      icon: (
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M17.2803 10.45L21.0002 6.72998L17.2803 3.01001"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M3 6.72998H21"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M6.71997 13.55L3 17.27L6.71997 20.99"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M21 17.27H3"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      ),
    },
  ];
  return (
    <div className="flex flex-col justify-between ">
      <div className="flex flex-col lg:flex-row justify-between lg:space-x-8 mt-6">
        <div className="flex flex-col">
          {balances.map((balance) => {
            return (
              <div className="flex justify-between space-x-8 ">
                <Paragraph fontSize="text-sm">{balance.title}</Paragraph>
                <Paragraph fontSize="text-sm">{balance.amount}</Paragraph>
              </div>
            );
          })}
        </div>
        <div className="flex flex-col">
          {types.map((type) => {
            return (
              <div className="flex justify-between space-x-8">
                <Paragraph fontSize="text-sm">{type.title}</Paragraph>
                <Paragraph fontSize="text-sm">{type.amount}</Paragraph>
              </div>
            );
          })}
        </div>
      </div>
      <div className="flex flex-col space-y-6 lg:space-y-0 lg:flex-row justify-between mt-6 lg:space-x-8">
        {actions.map((action) => {
          return (
            <PrimaryButton
              textColor="text-green font-bold flex justify-center items-center w-full lg:w-40 mx-auto"
              bgColor="bg-white border border-green"
              hoverBg="hover:bg-green hover:text-white"
            >
              {action.icon}
              {action.title}
            </PrimaryButton>
          );
        })}
      </div>
      <WalletMonitoring />
    </div>
  );
};

export default WalletDetails;
