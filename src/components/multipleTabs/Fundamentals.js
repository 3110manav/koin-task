import React, { useRef, forwardRef } from "react";
import { MdInfo } from "react-icons/md";

const Fundamentals = forwardRef((props, ref) => {
  const fundamentalsRef = useRef();
  return (
    <div ref={ref || fundamentalsRef}>
      <div className="mt-5 font-semibold text-lg flex items-center text-gray-700">
        Fundamentals <MdInfo className="ml-2 text-gray-400" />
      </div>

      <div
        className={`mt-5 grid grid-cols-12 ${
          window.innerWidth < 640 ? "gap-1" : "gap-16"
        }`}
      >
        <div className="col-span-12 sm:col-span-6 flex flex-col">
          <div className="flex justify-between border-b pb-5 mt-4">
            <p className="text-gray-500 font-semibold">Bitcoin Price</p>
            <div className="flex items-end">
              <p className="text-black font-bold mr-2">$65,394</p>
            </div>
          </div>
          <div className="flex justify-between border-b pb-5 mt-4">
            <p className="text-gray-500 font-semibold">24h Low / 24h High</p>
            <div className="flex items-end">
              <p className="text-black font-bold mr-2">
                $65,267.53 / 65,778.07
              </p>
            </div>
          </div>
          <div className="flex justify-between border-b pb-5 mt-4">
            <p className="text-gray-500 font-semibold">7d Low / 7d High</p>
            <div className="flex items-end">
              <div className="flex flex-col items-end">
                <p className="text-black font-bold mr-2">
                  $63,224.76 / 65,778.07
                </p>
              </div>
            </div>
          </div>
          <div className="flex justify-between border-b pb-5 mt-4">
            <p className="text-gray-500 font-semibold">Trading Volume</p>
            <div className="flex items-end">
              <p className="text-black font-bold mr-2">$23,234,203,345</p>
            </div>
          </div>
          <div className="flex justify-between border-b pb-5 mt-4">
            <p className="text-gray-500 font-semibold">
              Bitcoin Market Cap Rank
            </p>
            <div className="flex items-end">
              <p className="text-black font-bold mr-2">#1</p>
            </div>
          </div>
        </div>
        <div className="col-span-12 sm:col-span-6">
          <div className="flex justify-between border-b pb-5 mt-4">
            <p className="text-gray-500 font-semibold">Market Cap Rank</p>
            <div className="flex items-end">
              <p className="text-black font-bold mr-2">$323,507,290,047</p>
            </div>
          </div>
          <div className="flex justify-between border-b pb-5 mt-4">
            <p className="text-gray-500 font-semibold">Market Cap Dominance</p>
            <div className="flex items-end">
              <p className="text-black font-bold mr-2">38.343%</p>
            </div>
          </div>
          <div className="flex justify-between border-b pb-5 mt-4">
            <p className="text-gray-500 font-semibold">Volume / Market Cap</p>
            <div className="flex items-end">
              <p className="text-black font-bold mr-2">0.0718</p>
            </div>
          </div>
          <div className="flex justify-between border-b mt-4">
            <p className="text-gray-500 font-semibold">All-Time High</p>
            <div className="flex flex-col items-end">
              <p className="text-black font-bold mr-2">
                $69,044.77 <span className="text-red-600">-26%</span>
              </p>
              <p className="text-sm text-gray-600">
                Nov 10, 2021 (about 1 year)
              </p>
            </div>
          </div>
          <div className="flex justify-between border-b mt-4">
            <p className="text-gray-500 font-semibold">All-Time Low</p>
            <div className="flex flex-col items-end">
              <p className="text-black font-bold mr-2">
                $69,044.77 <span className="text-green-600">+24729.1%</span>
              </p>
              <p className="text-sm text-gray-600">
                Jul 06, 2013 (over 9 years)
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
});

export default Fundamentals;
