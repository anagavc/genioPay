import React from "react";
import classNames from "classnames";
import { Paragraph } from "../UI/FontStyles";

const LinksPlaceholder = ({ icon, action, bgColor }) => {
  const bgClass = classNames("rounded-full flex p-2 text-white", bgColor);
  return (
    <div className="flex flex-col items-center bg-white py-4 space-y-2  px-4 rounded-lg shadow-sm border border-metallic ">
      <div className={bgClass}>{icon}</div>
      <Paragraph
        fontSize="text-md text-center"
        textColor="text-dark-black"
        fontWeight="font-normal"
      >
        {action}
      </Paragraph>
    </div>
  );
};

export default LinksPlaceholder;
