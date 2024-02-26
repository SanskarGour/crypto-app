import {React , useContext } from "react";
import { AppContext } from "../context/AppContext";
import { NavLink } from "react-router-dom";

const Coin = (prop) => {
  const coin = prop.coin;
  const {setCurrency , currency} = useContext(AppContext);
  const profit = coin.price_change_percentage_24h>0;

  const changeCurrency = () => {
    console.log(coin.current_price);
    if(currency === 'usd') setCurrency('inr');
    else setCurrency('usd');
  };

  const symbol = ()=>{
    if(currency === 'usd') return '$';
    else return '₹';
  };

  return (
    <div className="w-[87%] mx-auto border-b-[0.1px] border-b-[#2e2b31] lg:test-lg md:text-base text-sm">
      <div className="p-[1rem] w-[95%] text-white flex h-[4.5rem] justify-evenly sm:justify-between mx-auto items-center">
        {/* Coin Logo */}
        <div className="w-[3rem] max-w-[40%]">
          <img
            className=" rounded-full"
            src={coin.image}
            width="100%"
            alt="Coin Logo"
          />
        </div>

        {/* Coin Name */}
        <div className="flex min-w-[20%] flex-col justify-start items-end sm:items-start hover:cursor-pointer">
          <NavLink to={`/coins/${coin.id}`}>
            <h2>{coin.id}</h2>
          </NavLink>
          <h2 className="flex sm:hidden"  >{symbol()}{coin.current_price}</h2>

        </div>

        {/* Coin Price */}
        <div className="min-w-[10%] justify-end  sm:flex hidden" onClick={changeCurrency}>
          <h2>{symbol()}{coin.current_price}</h2>
        </div>

        {/* Coin Market Cap Rank */}
        <div className="min-w-[2%] justify-start  sm:flex hidden">
          <h2 className={profit ? ("text-green-600 hover:cursor-pointer") : ("text-red-600 hover:cursor-pointer")} >
            {profit ? "+" + coin.price_change_percentage_24h : coin.price_change_percentage_24h }
          </h2>
        </div>
      </div>
    </div>
  );
};

export default Coin;
