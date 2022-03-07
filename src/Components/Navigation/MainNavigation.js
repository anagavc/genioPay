import React from "react";
import { Paragraph } from "../UI/FontStyles";
import user from "../../images/user.jfif";
import SearchBar from "../UI/Inputs/SearchBar";

const MainNavigation = () => {
  return (
    <>
      <div className="hidden lg:flex lg:justify-between">
        <h1 className="font-body font-bold text-2xl text-darker">
          Welcome, Huss Smith
        </h1>
        <div className="flex justify-center space-x-8 my-center">
          <SearchBar />
          <div className="flex justify-between mt-2 space-x-2">
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g clipPath="url(#clip0_1095_73689)">
                <path
                  d="M11.7061 13.1423V14.1077C11.7061 14.4398 11.5312 14.7553 11.236 14.9074C10.8946 15.0834 10.4872 15.0172 10.2199 14.75L9.58824 14.1182L8.99414 14.7123L10.4696 16.1877C10.634 16.3521 10.7246 16.5707 10.7246 16.8033V23.235C10.7246 23.6573 11.0669 23.9997 11.4893 23.9997H12.763C13.1853 23.9997 13.5277 23.6573 13.5277 23.235V17.7704C13.5277 17.5378 13.6182 17.3192 13.7827 17.1548L15.0055 15.9319L14.4114 15.3378L14.0324 15.717C13.7651 15.9839 13.3585 16.0501 13.017 15.8748C12.7215 15.7231 12.5462 15.4078 12.5462 15.0757V13.1423H11.7061Z"
                  fill="#4D7C0F"
                />
                <path
                  d="M23.3882 9.87604C23.3882 7.06877 21.2107 4.76065 18.4559 4.55232C17.4946 1.84323 14.9221 0 11.9998 0C9.07743 0 6.50499 1.84323 5.54361 4.5524C2.78886 4.76073 0.611328 7.06885 0.611328 9.87612C0.611328 11.3084 1.17909 12.6621 2.18458 13.661C2.1441 13.9097 2.12373 14.1613 2.12373 14.4131C2.12373 16.9997 4.22806 19.104 6.81456 19.104H9.60171V16.908L8.02175 15.3281C7.85739 15.1638 7.76672 14.9451 7.76672 14.7125C7.76672 14.4798 7.85731 14.2612 8.02191 14.0968L8.97262 13.146C9.3121 12.8067 9.86434 12.8067 10.2038 13.146L10.5832 13.5255V12.8903C10.5832 12.4103 10.9738 12.0197 11.4538 12.0197H12.7985C13.2785 12.0197 13.669 12.4102 13.669 12.8903V14.4925L13.7958 14.3657C13.9602 14.2013 14.1788 14.1107 14.4113 14.1107C14.6439 14.1106 14.8626 14.2012 15.027 14.3657L15.9778 15.3164C15.9778 15.3164 15.9778 15.3164 15.9779 15.3164C16.3173 15.6559 16.3173 16.2082 15.9779 16.5476L14.6505 17.875V19.104H17.1851C19.7716 19.104 21.8759 16.9997 21.8759 14.4131C21.8759 14.1613 21.8555 13.9097 21.815 13.661C22.8205 12.662 23.3882 11.3084 23.3882 9.87604Z"
                  fill="#15803D"
                />
              </g>
              <defs>
                <clipPath id="clip0_1095_73689">
                  <rect width="24" height="24" fill="white" />
                </clipPath>
              </defs>
            </svg>
            <Paragraph textColor="text-black-dark" fontSize="text-sm">
              0 planted
            </Paragraph>
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M12.0196 2.91C8.7096 2.91 6.0196 5.6 6.0196 8.91V11.8C6.0196 12.41 5.7596 13.34 5.4496 13.86L4.2996 15.77C3.5896 16.95 4.0796 18.26 5.3796 18.7C9.6896 20.14 14.3396 20.14 18.6496 18.7C19.8596 18.3 20.3896 16.87 19.7296 15.77L18.5796 13.86C18.2796 13.34 18.0196 12.41 18.0196 11.8V8.91C18.0196 5.61 15.3196 2.91 12.0196 2.91Z"
                stroke="#292D32"
                strokeWidth="1.5"
                strokeMiterlimit="10"
                strokeLinecap="round"
              />
              <path
                d="M13.8699 3.2C13.5599 3.11 13.2399 3.04 12.9099 3C11.9499 2.88 11.0299 2.95 10.1699 3.2C10.4599 2.46 11.1799 1.94 12.0199 1.94C12.8599 1.94 13.5799 2.46 13.8699 3.2Z"
                stroke="#292D32"
                strokeWidth="1.5"
                strokeMiterlimit="10"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M15.0195 19.06C15.0195 20.71 13.6695 22.06 12.0195 22.06C11.1995 22.06 10.4395 21.72 9.89953 21.18C9.35953 20.64 9.01953 19.88 9.01953 19.06"
                stroke="#292D32"
                strokeWidth="1.5"
                strokeMiterlimit="10"
              />
            </svg>
          </div>
          <div className="flex justify-between items-center space-x-2">
            <div className="w-8 h-8">
              <img className="rounded-full" src={user} alt="user" />
            </div>
            <div className="flex flex-col ">
              <Paragraph textColor="text-green-lighter" fontSize="text-sm">
                Verified
              </Paragraph>
              <Paragraph
                textColor="text-black-dark"
                fontSize="text-md"
                fontWeight="font-bold"
              >
                Huss Smith
              </Paragraph>
            </div>
          </div>
          <svg
            width="18"
            height="18"
            viewBox="0 0 18 18"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M4.5 6.75L9 11.25L13.5 6.75"
              stroke="#55676B"
              strokeWidth="2.75"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </div>
      </div>
      <div className="flex justify-between space-x-8 md:hidden">
        <h1 className="font-body font-bold md:text-xl lg:text-2xl text-darker">
          Welcome, Huss Smith
        </h1>
        <div className="flex  flex-row justify-center lg:space-x-8 my-center">
          <div className="flex justify-between items-center space-x-2">
            <div className="w-8 h-8">
              <img className="rounded-full" src={user} alt="user" />
            </div>
            <div className="flex flex-col ">
              <Paragraph textColor="text-green-lighter" fontSize="text-sm">
                Verified
              </Paragraph>
              <Paragraph
                textColor="text-black-dark"
                fontSize="text-md"
                fontWeight="font-bold"
              >
                Huss Smith
              </Paragraph>
            </div>
          </div>
          <img
            src="https://img.icons8.com/ios-glyphs/30/000000/menu--v1.png"
            className="w-6 h-6"
            alt="close"
            // onClick={showSideBar}
          />
        </div>
      </div>
    </>
  );
};

export default MainNavigation;
