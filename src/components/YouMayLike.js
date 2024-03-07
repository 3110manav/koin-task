import React, { useEffect, useState } from "react";
import axios from "axios";

const YouMayLike = () => {
  const [allCoins, setAllCoins] = useState([]);
  const apiUrl = "https://api.coingecko.com/api/v3/search/trending";

  useEffect(() => {
    const fetchTrendingCoins = async () => {
      try {
        const response = await axios.get(apiUrl);

        if (response.data && response.data.coins) {
          const coins = response.data.coins || [];
          setAllCoins(coins);
          console.log(coins);
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
    <div className="mx-10 my-8 py-4 px-6">
      <h3 className="font-bold text-lg">You My Also Like</h3>

      <div className="mx-auto custom-scrollbar overflow-auto overflow-y-hidden mt-5">
        <div className="flex space-x-4">
          {allCoins.map((coin, index) => (
            <div key={index}>
              <div className="flex-shrink-0 w-80 p-4 bg-white border border-gray-200 rounded-lg shadow gap-5">
                <div className="flex items-center mb-4 gap-2">
                  <img
                    src={coin.item.thumb}
                    alt={`${coin.item.name} logo`}
                    className="rounded-full h-12 w-12"
                  />
                  <p className="font-bold ml-2">{coin.item.symbol}</p>
                  {coin.item.data.price_change_percentage_24h.aed !==
                    undefined && (
                    <span
                      className={`text-sm flex items-center px-2 font-semibold ${
                        coin.item.data.price_change_percentage_24h.aed >= 0
                          ? "bg-green-100 text-green-500"
                          : "bg-red-200 text-red-600"
                      }`}
                    >
                      {coin.item.data.price_change_percentage_24h.aed.toFixed(
                        2
                      )}
                      %
                    </span>
                  )}
                </div>
                <div>
                  <p className="font-bold text-lg">{coin.item.data.price}</p>
                </div>
                <div>
                  <img
                    src={coin.item.data.sparkline}
                    alt={coin.item.name}
                    className="mt-2"
                    style={{ height: "100px", width: "100%" }} // Adjust the height and width as needed
                  />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>


      <h3 className="font-bold text-lg">Trending Coins</h3>

      <div className="mx-auto custom-scrollbar overflow-auto overflow-y-hidden mt-5">
        <div className="flex space-x-4">
          {allCoins.map((coin, index) => (
            <div key={index}>
              <div className="flex-shrink-0 w-80 p-4 bg-white border border-gray-200 rounded-lg shadow gap-5">
                <div className="flex items-center mb-4 gap-2">
                  <img
                    src={coin.item.thumb}
                    alt={`${coin.item.name} logo`}
                    className="rounded-full h-12 w-12"
                  />
                  <p className="font-bold ml-2">{coin.item.symbol}</p>
                  {coin.item.data.price_change_percentage_24h.aed !==
                    undefined && (
                    <span
                      className={`text-sm flex items-center px-2 font-semibold ${
                        coin.item.data.price_change_percentage_24h.aed >= 0
                          ? "bg-green-100 text-green-500"
                          : "bg-red-200 text-red-600"
                      }`}
                    >
                      {coin.item.data.price_change_percentage_24h.aed.toFixed(
                        2
                      )}
                      %
                    </span>
                  )}
                </div>
                <div>
                  <p className="font-bold text-lg">{coin.item.data.price}</p>
                </div>
                <div>
                  <img
                    src={coin.item.data.sparkline}
                    alt={coin.item.name}
                    className="mt-2"
                    style={{ height: "100px", width: "100%" }} // Adjust the height and width as needed
                  />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default YouMayLike;
