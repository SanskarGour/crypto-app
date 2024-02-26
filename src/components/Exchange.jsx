import {React} from "react";

const Exchange = (prop) => {
  const exchange = prop.exchange;  

  return (
    <div className="w-[87%] mx-auto border-b-[1px] border-b-[#2e2b31] lg:test-lg md:text-base text-sm">
      <div className="p-[1rem] w-[95%] text-white flex h-[4.5rem] sm:justify-between justify-around mx-auto items-center">
        {/* Coin Logo */}
        <div className="w-[3rem] max-w-[40%]">
          <img
            className=" rounded-full"
            src={exchange.image}
            width="100%"  
            alt="Coin Logo"
          />
        </div>

        {/* Coin Name */}
        <div className="flex min-w-[20%] flex-col max-w-[20%] justify-start">
          <h2>{exchange.name}</h2>
          <h2 className="flex sm:hidden" >{exchange.trade_volume_24h_btc.toFixed(2)}</h2>
        </div>

        {/* Coin Price */}
        <div className="min-w-[10%] justify-end sm:flex hidden">
          <h2>{exchange.trade_volume_24h_btc.toFixed(2)}</h2>
        </div>

        {/* Coin Market Cap Rank */}
        <div className="min-w-[2%] justify-start sm:flex hidden">
          <h2>{exchange.trust_score_rank}</h2>
        </div>
      </div>
    </div>
  );
};

export default Exchange;
