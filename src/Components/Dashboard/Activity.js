import React from "react";
import { HeadingTwo } from "../UI/FontStyles";
import { Paragraph } from "../UI/FontStyles";
import Chart from "./Chart";
import ActivityActions from "./ActivityActions";

const Activity = () => {
  return (
    <div className="flex flex-col mt-10">
      <div className="flex justify-between">
        <div className="flex justify-between space-x-4">
          <HeadingTwo>Activity</HeadingTwo>
          <select
            name="month"
            id="month"
            className="text-green font-normal text-sm"
          >
            <option value="volvo">Month</option>
          </select>
        </div>
        <Paragraph
          fontSize="text-sm"
          textColor="text-green hover:text-green-tertiary transition duration-300"
          fontWeight="font-bold"
        >
          View Transaction History
        </Paragraph>
      </div>
      <div className="flex flex-col lg:flex-row lg:justify-end lg:space-x-6 mt-6">
        <ActivityActions />
      </div>
      <Chart />
    </div>
  );
};

export default Activity;
