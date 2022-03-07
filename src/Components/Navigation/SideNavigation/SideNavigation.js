import React from "react";
import logo from "../../../images/logo.png";
import { PrimaryButton } from "../../UI/Buttons/Buttons";
import ReferModal from "./ReferModal";
import SideNavElements from "./SideNavElements";
const SideNavigation = () => {
  return (
    <div className="bg-green lg:w-1/4 pt-10  pb-5 px-6 flex flex-col">
      <img src={logo} alt="logo" className="w-36 mx-auto" />
      <div className="bg-green-opaque bg-opacity-50 flex flex-col rounded-md p-6 mt-10  justify-between space-y-4">
        <div className="flex justify-between border-b border-green-transparent pb-2">
          <div className="flex justify-between space-x-2">
            <div className="bg-white p-2 rounded-xl h-10">
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="#14B8A6"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M20 5C20.5523 5 21 4.55228 21 4C21 3.44772 20.5523 3 20 3V5ZM5.50001 5L20 5V3L5.50001 3L5.50001 5ZM5.50001 10H13.5V8L5.50001 8V10ZM4.00001 6.5C4.00001 5.67157 4.67158 5 5.50001 5L5.50001 3C3.56701 3 2.00001 4.567 2.00001 6.5L4.00001 6.5ZM2.00001 6.5C2.00001 8.433 3.56701 10 5.50001 10V8C4.67158 8 4.00001 7.32843 4.00001 6.5L2.00001 6.5Z"
                  fill="#14B8A6"
                />
                <path d="M4 12L4 6.5H2L2 12H4Z" fill="#14B8A6" />
                <path
                  d="M21.5 18V17.5H21H18C16.6193 17.5 15.5 16.3807 15.5 15C15.5 13.6193 16.6193 12.5 18 12.5H21H21.5V12V11L21.5 10.9671C21.5 10.5238 21.5 10.1419 21.4589 9.8361C21.4149 9.50835 21.3155 9.19417 21.0607 8.93934C20.8058 8.68451 20.4917 8.58514 20.1639 8.54107C19.8581 8.49995 19.4762 8.49997 19.0329 8.5L19 8.5L3 8.5H2.5V9L2.5 19V19.0329C2.49998 19.4762 2.49995 19.8581 2.54107 20.1639C2.58514 20.4917 2.68451 20.8058 2.93934 21.0607L2.93934 21.0607C3.19417 21.3155 3.50835 21.4149 3.83611 21.4589C4.14193 21.5 4.52384 21.5 4.96708 21.5L5 21.5L19 21.5C19.011 21.5 19.022 21.5 19.0329 21.5C19.4762 21.5 19.8581 21.5 20.1639 21.4589C20.4917 21.4149 20.8058 21.3155 21.0607 21.0607C21.3155 20.8058 21.4149 20.4917 21.4589 20.1639C21.5 19.8581 21.5 19.4762 21.5 19.0329C21.5 19.022 21.5 19.011 21.5 19V18Z"
                  fill="#14B8A6"
                  stroke="#14B8A6"
                />
              </svg>
            </div>
            <div className="flex flex-col">
              <p className="font-body font-normal text-sm text-white">
                Wallet Balance
              </p>
              <p className="font-body font-bold text-md text-white">
                $15,001.00
              </p>
            </div>
          </div>
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M21.25 9.15018C18.94 5.52017 15.56 3.43018 12 3.43018C10.22 3.43018 8.49 3.95018 6.91 4.92018C5.33 5.90018 3.91 7.33017 2.75 9.15018C1.75 10.7202 1.75 13.2702 2.75 14.8402C5.06 18.4802 8.44 20.5602 12 20.5602C13.78 20.5602 15.51 20.0402 17.09 19.0702C18.67 18.0902 20.09 16.6602 21.25 14.8402C22.25 13.2802 22.25 10.7202 21.25 9.15018ZM12 16.0402C9.76 16.0402 7.96 14.2302 7.96 12.0002C7.96 9.77018 9.76 7.96018 12 7.96018C14.24 7.96018 16.04 9.77018 16.04 12.0002C16.04 14.2302 14.24 16.0402 12 16.0402Z"
              fill="#FFFFFF"
            />
            <path
              d="M12.0004 9.14014C10.4304 9.14014 9.15039 10.4201 9.15039 12.0001C9.15039 13.5701 10.4304 14.8501 12.0004 14.8501C13.5704 14.8501 14.8604 13.5701 14.8604 12.0001C14.8604 10.4301 13.5704 9.14014 12.0004 9.14014Z"
              fill="#FFFFFF"
            />
          </svg>
        </div>

        <div className="flex space-x-2 border-b border-green-transparent pb-2">
          <div className="bg-white p-2 rounded-xl h-10">
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M5.74035 16C5.85035 15.51 5.65035 14.81 5.30035 14.46L2.87035 12.03C2.11035 11.27 1.81035 10.46 2.03035 9.76C2.26035 9.06 2.97035 8.58 4.03035 8.4L7.15035 7.88C7.60035 7.8 8.15035 7.4 8.36035 6.99L10.0803 3.54C10.5803 2.55 11.2603 2 12.0003 2C12.7403 2 13.4203 2.55 13.9203 3.54L15.6403 6.99C15.7703 7.25 16.0403 7.5 16.3303 7.67L5.56035 18.44C5.42035 18.58 5.18035 18.45 5.22035 18.25L5.74035 16Z"
                fill="#F59E0B"
              />
              <path
                d="M18.6998 14.4599C18.3398 14.8199 18.1398 15.5099 18.2598 15.9999L18.9498 19.0099C19.2398 20.2599 19.0598 21.1999 18.4398 21.6499C18.1898 21.8299 17.8898 21.9199 17.5398 21.9199C17.0298 21.9199 16.4298 21.7299 15.7698 21.3399L12.8398 19.5999C12.3798 19.3299 11.6198 19.3299 11.1598 19.5999L8.2298 21.3399C7.1198 21.9899 6.1698 22.0999 5.5598 21.6499C5.3298 21.4799 5.1598 21.2499 5.0498 20.9499L17.2098 8.7899C17.6698 8.3299 18.3198 8.1199 18.9498 8.2299L19.9598 8.3999C21.0198 8.5799 21.7298 9.0599 21.9598 9.7599C22.1798 10.4599 21.8798 11.2699 21.1198 12.0299L18.6998 14.4599Z"
                fill="#F59E0B"
              />
            </svg>
          </div>
          <div className="flex flex-col">
            <p className="font-body font-normal text-sm text-white">
              Awarded Points
            </p>
            <p className="font-body font-bold text-md text-white">35</p>
          </div>
        </div>
        <div className="flex justify-between">
          <PrimaryButton
            bgColor="bg-peach"
            textColor="text-white"
            hoverBg="hover:bg-peach-dark"
          >
            Pay-In
          </PrimaryButton>
          <PrimaryButton
            bgColor="bg-white"
            textColor="text-green"
            hoverBg="hover:bg-green-tertiary hover:text-white"
          >
            Pay-Out
          </PrimaryButton>
        </div>
      </div>
      <SideNavElements />
      <ReferModal />
    </div>
  );
};

export default SideNavigation;
