import Coin from "./Coin";
import Loader from "./Loader";
import { AppContext } from "../context/AppContext";
import React, { useContext, useEffect } from "react";
import HomePageContent from "./HomePageContent";
import HomeChooseUs from "./HomeChooseUs";
import Footer from "./Footer";
import HomeJoin from "./HomeJoin";

const Coins = () => {
  const { fetchCoins , loading , coins} = useContext(AppContext);
  
  useEffect(() => {
    fetchCoins();
  }, []);

  return (
    
    <div className="bg-black w-[100%] pb-4">
      <HomePageContent />
      {loading ? (
        <Loader className='w-full h-[100vh]'/>
      ) : (
        
        <div className="w-[78%] mx-auto pb-6 h-[100%] flex flex-col gap-2 border-[0.1px] rounded-2xl border-[#2e2b31] bg-black">
           <div className="w-[100%] mb-2 col-heading rounded-t-2xl mx-auto h-[3rem] items-center text-white flex justify-center">
            <p className="w-[40%] mr-[9%] text-center">coin</p>
            <div className="flex justify-between w-[28%]">
            <p>Price</p>
            <p className="hidden sm:flex">24hrs Δ</p>
            </div>
          </div>
          {coins.map((coin, index) => (
            <Coin coin={coin} key={index} />
          ))}
        </div>
      )}
      <HomeChooseUs />
    <HomeJoin />
    <Footer />
    </div>
  );
};

export default Coins;
