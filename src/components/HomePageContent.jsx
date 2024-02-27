import React, { useContext, useEffect, useState } from "react";
import bitcoin from "../assests/bitcoin.png";
import ethereum from "../assests/ethereum.png";
import { AppContext } from "../context/AppContext";
// import Loader from "./Loader";
import { NavLink } from "react-router-dom";

function HomePageContent() {
  // const { loading, currency, fetchCoins, coins } = useContext(AppContext);
  const { loading, currency, fetchCoins, topFour, coins } =
    useContext(AppContext);

  useEffect(() => {
    if (coins.length === 0) {
      fetchCoins();
    } else {
      console.log(topFour);
    }
  }, []);

  return (
    <div className="text-white mb-6" id="about">
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
          <h1 className="w-[100%] text-center text-gray-300 font-medium">
            TOP PERFORMERS :
          </h1>
          {loading ? null : (
            <div className="w-[80%] mx-auto flex-wrap gap-4 flex justify-evenly items-center">
              {topFour.map((coin, idx) => {
                const profit = coin.price_change_percentage_24h > 0;
                const symbol = () => {
                  if (currency === "usd") return "$";
                  else return "₹";
                };

                return (
                  <NavLink to={`/coins/${coin.id}`}>
                    <div
                      key={idx}
                      className="gap-2 flex flex-col  items-center justify-center mt-4"
                    >
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
                            <h2>{coin.id}</h2>
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
                                ? "+" +
                                  coin.price_change_percentage_24h.toFixed(2) +
                                  "%"
                                : coin.price_change_percentage_24h.toFixed(2) +
                                  "%"}
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
                  </NavLink>
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
