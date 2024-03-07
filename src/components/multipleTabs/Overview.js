import React, { forwardRef, useRef } from "react";
import Fundamentals from "./Fundamentals";

const Overview = forwardRef((props, ref) => {
  const overviewRef = useRef();

  return (
    <div
      ref={ref || overviewRef}
      className="w-full bg-white rounded-md p-8 mt-5"
    >
      <h2 className="text-2xl font-bold">Performance</h2>

      <div className="mt-7 grid grid-cols-12 gap-4 flex items-center">
        <div className="col-span-2 flex flex-col p-3">
          <div className="font-semibold text-gray-500 mb-3">Today's Low</div>
          <div className="font-semibold text-gray-700">46,993.87</div>
        </div>

        <div className="col-span-8 range-bar">
          <div className="range-fill"></div>
        </div>

        <div className="col-span-2 flex flex-col p-3">
          <div className="font-semibold text-gray-500 mb-3">Today's High</div>
          <div className="font-semibold text-gray-700">47,451.07</div>
        </div>
      </div>
      <div className="mt-10 grid grid-cols-12 gap-4 flex items-center">
        <div className="col-span-2 flex flex-col p-3">
          <div className="font-semibold text-gray-500 mb-3">52 Week Low</div>
          <div className="font-semibold text-gray-700">40,536.87</div>
        </div>

        <div className="col-span-8 range-bar">
          <div className="range-fill"></div>
        </div>

        <div className="col-span-2 flex flex-col p-3">
          <div className="font-semibold text-gray-500 mb-3">52 Week High</div>
          <div className="font-semibold text-gray-700">48,939.94</div>
        </div>
      </div>

      <Fundamentals />
    </div>
  );
});

export default Overview;
