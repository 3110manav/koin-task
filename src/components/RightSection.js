import React from "react";
import { GoArrowRight } from "react-icons/go";
import crypto from "../assets/images/cryptooo.png";
import TrendingCard from "./TrendingCard";

const RightSection = () => {
  return (
    <div className="mt-9 p-2">
      <div className="bg-[#2337e9] rounded-xl flex flex-col items-center">
        <div className="px-5 py-5">
          <h5 className="text-lg font-bold text-white tracking-wider px-8 py-4 text-center">
            Get Started with KoinX for FREE
          </h5>
          <p className="text-[12px] text-center text-white font-light tracking-wider p-2">
            With our range of features that you can equip for free, KoinX allows
            you to be more educated and aware of your tax reports
          </p>
        </div>
        <div className="px-10 py-4 ">
          <img src={crypto} alt="svg" className="px-6 py-2 h-[200px] " />
        </div>
        <button
          type="button"
          className="mt-6 mb-10 text-gray-900 bg-white border border-gray-300 focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-100 font-bold rounded-lg text-sm px-5 py-1.5 flex items-center"
        >
          Get Started For FREE <GoArrowRight className="font-semibold ml-1" />
        </button>
      </div>

      <div className="mt-5">
        <TrendingCard />
      </div>
    </div>
  );
};

export default RightSection;
