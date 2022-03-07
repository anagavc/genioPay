import React from "react";
import { HeadingThree, Paragraph } from "../UI/FontStyles";
const ActivityActions = () => {
  const actions = [
    {
      title: "Total Transactions",
      amount: "$88,600.00",
      icon: (
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M6.87988 18.15V16.08"
            stroke="#16A34A"
            strokeWidth="1.5"
            strokeLinecap="round"
          />
          <path
            d="M12 18.15V14.01"
            stroke="#16A34A"
            strokeWidth="1.5"
            strokeLinecap="round"
          />
          <path
            d="M17.1201 18.15V11.93"
            stroke="#16A34A"
            strokeWidth="1.5"
            strokeLinecap="round"
          />
          <path
            d="M17.1199 5.85001L16.6599 6.39001C14.1099 9.37001 10.6899 11.48 6.87988 12.43"
            stroke="#292D32"
            strokeWidth="1.5"
            strokeLinecap="round"
          />
          <path
            d="M14.1904 5.85001H17.1204V8.77001"
            stroke="#292D32"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M9 22H15C20 22 22 20 22 15V9C22 4 20 2 15 2H9C4 2 2 4 2 9V15C2 20 4 22 9 22Z"
            stroke="#292D32"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      ),
    },
    {
      title: "Pay-In",
      amount: "$4,600.00",
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
            stroke="#16A34A"
            strokeWidth="1.5"
            strokeMiterlimit="10"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M5 7.22998V17.5H15.27"
            stroke="#16A34A"
            strokeWidth="1.5"
            strokeMiterlimit="10"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M3.5 22H20.5"
            stroke="#16A34A"
            strokeWidth="1.5"
            strokeMiterlimit="10"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      ),
    },
    {
      title: "Pay-Out",
      amount: "$72,600.00",
      icon: (
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M3.5 22H20.5"
            stroke="#DC2626"
            strokeWidth="1.5"
            strokeMiterlimit="10"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M5 3.5L19 17.5"
            stroke="#DC2626"
            strokeWidth="1.5"
            strokeMiterlimit="10"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M5 13.77V3.5H15.27"
            stroke="#DC2626"
            strokeWidth="1.5"
            strokeMiterlimit="10"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      ),
    },
  ];
  return (
    <>
      {actions.map((action) => {
        return (
          <div className="flex lg:justify-between lg:space-x-2 mb-8 last:mb-2 lg:mb-0">
            <div className="bg-gray-fifty p-2 rounded-lg">{action.icon}</div>
            <div className="flex flex-col">
              <Paragraph
                fontSize="text-sm"
                textColor="text-black-dark"
                fontWeight="font-normal"
              >
                {action.title}
              </Paragraph>
              <HeadingThree fontSize="text-md">{action.amount}</HeadingThree>
            </div>
          </div>
        );
      })}
    </>
  );
};

export default ActivityActions;
