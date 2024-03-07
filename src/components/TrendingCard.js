import axios from "axios";
import { BsTriangleFill } from "react-icons/bs";
import React, { useState, useEffect } from "react";

const TrendingCard = () => {
  const [trendingCoins, setTrendingCoins] = useState([]);
  const apiUrl = "https://api.coingecko.com/api/v3/search/trending";

  useEffect(() => {
    const fetchTrendingCoins = async () => {
      try {
        const response = await axios.get(apiUrl);

        if (response.data && response.data.coins) {
          const coins = response.data.coins || [];
          coins.sort((a, b) => a.item.market_cap_rank - b.item.market_cap_rank);

          const top3Coins = coins.slice(0, 3);
          setTrendingCoins(top3Coins);
        } else {
          console.log("Invalid response structure: coins property not found");
        }
      } catch (e) {
        console.log("Error in fetching trending coins", e);
      }
    };

    fetchTrendingCoins();
  }, []);

  return (
    <div className="bg-white rounded-md">
      <div className="mx-3 my-5 p-1">
        <h6 className="text-lg font-bold">Trending Coins (24h) </h6>
        {trendingCoins.map((coin, index) => (
          <div key={index} className="flex mb-4 justify-between mt-5">
            <div className="mr-4 flex items-center gap-2">
              <img
                src={coin.item.thumb}
                alt={`${coin.item.name} logo`}
                className="rounded-full h-[25px]"
              />
              <p className="font-bold">{`${coin.item.name} (${coin.item.symbol})`}</p>
            </div>
            <div>
              {coin.item.data.price_change_percentage_24h.aed !== undefined && (
                <span
                  className={`text-sm p-1 ml-2 flex items-center px-4 font-semibold ${
                    coin.item.data.price_change_percentage_24h.aed >= 0
                      ? "bg-green-100 text-green-500"
                      : "bg-red-200 text-red-600"
                  }`}
                >
                  <BsTriangleFill
                    className={`text-sm transform ${
                      coin.item.data.price_change_percentage_24h.aed >= 0
                        ? "rotate-0"
                        : "rotate-180"
                    }`}
                    style={{ marginRight: "0.5rem", height: "12px" }}
                  />
                  {coin.item.data.price_change_percentage_24h.aed.toFixed(2)}%
                </span>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TrendingCard;
