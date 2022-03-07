import React from "react";
import Speaker from "../../../images/loudspeaker.png";
import { PrimaryButton } from "../../UI/Buttons/Buttons";
const ReferModal = () => {
  return (
    <div className="mt-20 bg-yellow-lighter flex flex-col rounded-md p-8 justify-between space-y-6">
      <div className="flex justify-between">
        <img src={Speaker} alt="Speaker" className="w-16 h-16" />
        <div className="flex flex-col justify-between">
          <h6 className="font-body font-md font-bold text-black-darker">
            Refer and earn
          </h6>
          <p className="font-body font-normal text-sm text-black-dark text-justify">
            Use the link below to invite your friends.
          </p>
        </div>
      </div>
      <PrimaryButton
        bgColor="bg-green"
        textColor="text-white"
        hoverBg="hover:bg-gray hover:text-white"
      >
        Invite Friends
      </PrimaryButton>
    </div>
  );
};

export default ReferModal;
