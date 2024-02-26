import React, { useContext, useEffect, useState } from "react";
import bitcoin from "../assests/bitcoin.png";
import ethereum from "../assests/ethereum.png";
import { AppContext } from "../context/AppContext";
// import Loader from "./Loader";
import { NavLink } from "react-router-dom";

function HomePageContent() {
  // const { loading, currency, fetchCoins, coins } = useContext(AppContext);
  const { loading,currency, fetchCoins, topFour, coins } = useContext(AppContext);

  // let topFour = [
  //   {
  //     id: "bitcoin",
  //     symbol: "btc",
  //     name: "Bitcoin",
  //     image:
  //       "https://assets.coingecko.com/coins/images/1/large/bitcoin.png?1696501400",
  //     current_price: 53288,
  //     market_cap: 1045198173543,
  //     market_cap_rank: 1,
  //     fully_diluted_valuation: 1117664051185,
  //     total_volume: 24192782806,
  //     high_24h: 53482,
  //     low_24h: 50927,
  //     price_change_24h: 1977.63,
  //     price_change_percentage_24h: 3.85426,
  //     market_cap_change_24h: 36542731349,
  //     market_cap_change_percentage_24h: 3.62292,
  //     circulating_supply: 19638425,
  //     total_supply: 21000000,
  //     max_supply: 21000000,
  //     ath: 69045,
  //     ath_change_percentage: -22.91654,
  //     ath_date: "2021-11-10T14:24:11.849Z",
  //     atl: 67.81,
  //     atl_change_percentage: 78388.25034,
  //     atl_date: "2013-07-06T00:00:00.000Z",
  //     roi: null,
  //     last_updated: "2024-02-26T16:46:51.199Z",
  //   },
  //   {
  //     id: "ethereum",
  //     symbol: "eth",
  //     name: "Ethereum",
  //     image:
  //       "https://assets.coingecko.com/coins/images/279/large/ethereum.png?1696501628",
  //     current_price: 3154.37,
  //     market_cap: 379347091316,
  //     market_cap_rank: 2,
  //     fully_diluted_valuation: 379347091316,
  //     total_volume: 19140650195,
  //     high_24h: 3166.81,
  //     low_24h: 3032.71,
  //     price_change_24h: 121.66,
  //     price_change_percentage_24h: 4.01171,
  //     market_cap_change_24h: 14779117733,
  //     market_cap_change_percentage_24h: 4.05387,
  //     circulating_supply: 120155437.515903,
  //     total_supply: 120155437.515903,
  //     max_supply: null,
  //     ath: 4878.26,
  //     ath_change_percentage: -35.28525,
  //     ath_date: "2021-11-10T14:24:19.604Z",
  //     atl: 0.432979,
  //     atl_change_percentage: 729024.25719,
  //     atl_date: "2015-10-20T00:00:00.000Z",
  //     roi: {
  //       times: 78.12736992643288,
  //       currency: "btc",
  //       percentage: 7812.736992643288,
  //     },
  //     last_updated: "2024-02-26T16:46:28.954Z",
  //   },
  //   {
  //     id: "tether",
  //     symbol: "usdt",
  //     name: "Tether",
  //     image:
  //       "https://assets.coingecko.com/coins/images/325/large/Tether.png?1696501661",
  //     current_price: 1.001,
  //     market_cap: 97919204843,
  //     market_cap_rank: 3,
  //     fully_diluted_valuation: 97919204843,
  //     total_volume: 41620200415,
  //     high_24h: 1.004,
  //     low_24h: 0.997766,
  //     price_change_24h: 0.00185626,
  //     price_change_percentage_24h: 0.18582,
  //     market_cap_change_24h: 108040453,
  //     market_cap_change_percentage_24h: 0.11046,
  //     circulating_supply: 97910734641.7271,
  //     total_supply: 97910734641.7271,
  //     max_supply: null,
  //     ath: 1.32,
  //     ath_change_percentage: -24.58849,
  //     ath_date: "2018-07-24T00:00:00.000Z",
  //     atl: 0.572521,
  //     atl_change_percentage: 74.2759,
  //     atl_date: "2015-03-02T00:00:00.000Z",
  //     roi: null,
  //     last_updated: "2024-02-26T16:45:03.306Z",
  //   },
  //   {
  //     id: "binancecoin",
  //     symbol: "bnb",
  //     name: "BNB",
  //     image:
  //       "https://assets.coingecko.com/coins/images/825/large/bnb-icon2_2x.png?1696501970",
  //     current_price: 397.46,
  //     market_cap: 61093315261,
  //     market_cap_rank: 4,
  //     fully_diluted_valuation: 61093315261,
  //     total_volume: 1943536026,
  //     high_24h: 401.12,
  //     low_24h: 382.33,
  //     price_change_24h: 13.86,
  //     price_change_percentage_24h: 3.61246,
  //     market_cap_change_24h: 1962305889,
  //     market_cap_change_percentage_24h: 3.31857,
  //     circulating_supply: 153856150,
  //     total_supply: 153856150,
  //     max_supply: 200000000,
  //     ath: 686.31,
  //     ath_change_percentage: -42.15136,
  //     ath_date: "2021-05-10T07:24:17.097Z",
  //     atl: 0.0398177,
  //     atl_change_percentage: 996991.84545,
  //     atl_date: "2017-10-19T00:00:00.000Z",
  //     roi: null,
  //     last_updated: "2024-02-26T16:47:01.848Z",
  //   },
  // ];

  useEffect(() => {
    if (coins.length === 0) {
      fetchCoins();
    } else {
      console.log(topFour);
    }
  }, []);

  return (
    <div className="text-white mb-6">
      <div className=" rounded-2xl border-[0.1px] border-[#2e2b31] flex flex-col justify-center items-center pt-5 sm:pt-10 lg:pt-20 md:pt-14 w-[78%] mx-auto space-y-10 relative leading-[2rem] sm:leading-[2rem] md:leading-[3rem] lg:leading-[4rem] ">
        <h1 className="text-center text-[2rem] flex md:text-[3rem] lg:text-[4rem] gradient-text1 justify-center items-center gap-5">
          <img
            src={bitcoin}
            width="50px"
            height="50px"
            className="vert-move sm:flex hidden"
          />
          track and trade
          <img
            src={ethereum}
            width="35px"
            height="35px"
            className="vert-move sm:flex hidden"
          />
        </h1>

        <h1 className="text-[2rem] md:text-[3rem] lg:text-[4rem] gradient-text1 text-center">
          crypto currencies
        </h1>

        <div className="w-[100%] relative flex flex-col">
          <h1 className="w-[100%] text-center text-gray-300 font-medium">TOP PERFORMERS :</h1>
          {loading ? null : (
            <div className="w-[80%] mx-auto flex-wrap gap-4 flex justify-evenly items-center">
              {topFour.map((coin, idx) => {
                const profit = coin.price_change_percentage_24h > 0;
                const symbol = () => {
                  if (currency === "usd") return "$";
                  else return "₹";
                };

                return (
                  <div key={idx} className="gap-2 flex flex-col  items-center justify-center mt-4">
                    {/* Coin image */}
                    <div className="w-[2rem]">
                      <img
                        className=" rounded-full"
                        src={coin.image}
                        width="100%"
                        alt="Coin Logo"
                      />
                    </div>

                    <div className="flex flex-col justify-center items-center">
                      <div className="flex text-sm gap-1">
                        
                        {/* Coin Name */}
                        <div className="flex min-w-[20%] justify-start hover:cursor-pointer">
                          <NavLink to={`/coins/${coin.id}`}>
                            <h2>{coin.id}</h2>
                          </NavLink>
                        </div>

                        {/* Coin Market Cap Rank */}
                        <div className="flex min-w-[2%] justify-start">
                          <h2
                            className={
                              profit
                                ? "text-green-600 hover:cursor-pointer"
                                : "text-red-600 hover:cursor-pointer"
                            }
                          >
                            {profit
                              ? "+" + coin.price_change_percentage_24h.toFixed(2) + "%"
                              : coin.price_change_percentage_24h.toFixed(2) + "%"}
                          </h2>
                        </div>
                      </div>

                      {/* Coin Price */}
                      <div>
                        <h2 className="text-sm">
                          {symbol()}
                          {coin.current_price}
                        </h2>
                      </div>

                    </div>

                  </div>
                );
              })}
            </div>
          )}
        </div>

        <div></div>
      </div>
    </div>
  );
}

export default HomePageContent;
