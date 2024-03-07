import React, { useEffect, useState } from "react";
import { BitcoinIcon } from "@bitcoin-design/bitcoin-icons-react/filled";
import { MdOutlineCurrencyRupee } from "react-icons/md";
import { BsTriangleFill } from "react-icons/bs";
import axios from "axios";
import TradingViewWidget from "./TradingViewWidget";

function CryptoCard() {
  const [bitcoinData, setBitcoinData] = useState(null);
  const apiUrl = "https://api.coingecko.com/api/v3/simple/price";
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const fetchBitcoinData = async () => {
    try {
      const response = await axios.get(apiUrl, {
        params: {
          ids: "bitcoin",
          vs_currencies: "inr,usd",
          include_24hr_change: true,
        },
      });
      setBitcoinData(response.data.bitcoin);
      setLoading(false);
    } catch (e) {
      console.log("ERROR IN FETCHING BITCOIN DATA: ", e);
      setError("Error fetching data. Please try again.");
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchBitcoinData();
  }, []);

  return (
    <div className="w-full bg-white rounded-md p-8">
      {/* =========TITLE=========== */}
      {loading && <p>Loading...</p>}
      {error && <p>{error}</p>}
      {!loading && bitcoinData && (
        <div className="flex items-center">
          <BitcoinIcon
            className="bg-[#F7931A] rounded-[50%] m-2"
            style={{ height: "40px", width: "40px", color: "#fff" }}
          />
          <p className="text-2xl font-bold flex items-center">
            Bitcoin
            <span className="text-gray-500 text-lg ml-2">BTC</span>
          </p>
          <div
            className={`bg-${
              window.innerWidth < 640 ? "gray-100" : "gray-500"
            } text-white ml-5 p-2 rounded-md`}
          >
            Rank #1
          </div>
        </div>
      )}

      {/* ======== Fetched Details =========*/}
      {!loading && bitcoinData && (
        <div className="mt-5 flex items-center">
          <p className="font-bold text-3xl m-2">
            ${bitcoinData.usd.toLocaleString()}
          </p>
          {bitcoinData.usd_24h_change !== undefined && (
            <span
              className={`text-sm p-1 ml-2 flex items-center px-4 font-semibold ${
                bitcoinData.usd_24h_change >= 0
                  ? "bg-green-100 text-green-500"
                  : "bg-red-200 text-red-600"
              }`}
            >
              <BsTriangleFill
                className={`text-sm transform ${
                  bitcoinData.usd_24h_change >= 0 ? "rotate-0" : "rotate-180"
                }`}
                style={{ marginRight: "0.5rem", height: "12px" }}
              />
              {bitcoinData.usd_24h_change.toFixed(2)}%
            </span>
          )}
          <span className="text-gray-400 ml-5 font-semibold"> ( 24H )</span>
        </div>
      )}
      {!loading && bitcoinData && (
        <div className="ml-2 pb-5 border-b ">
          <p className="text-xl flex items-center font-semibold">
            <MdOutlineCurrencyRupee />
            {bitcoinData.inr.toLocaleString()}
          </p>
        </div>
      )}
      <div className="h-[500px] ml-2 mt-5">
        <TradingViewWidget />
      </div>

    </div>
  );
}

export default CryptoCard;
