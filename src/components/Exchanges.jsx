import Exchange from "./Exchange";
import React, { useContext, useEffect, useState } from "react";
import Loader from "./Loader";
import { AppContext } from "../context/AppContext";

const Exchanges = () => {
  const {fetchExchanges , loading , exchanges} = useContext(AppContext);

  useEffect(() => {
    fetchExchanges();
  }, []);

  return (
    <div className="bg-black w-[100%] ">
      {loading ? (
        <Loader />
      ) : (
        <div className="w-[78%] mx-auto pb-6 h-[100%] flex flex-col gap-2 border-[0.1px] rounded-2xl border-[#2e2b31] bg-black">
          <div className="w-[100%] mb-2 col-heading rounded-t-2xl mx-auto h-[3rem] items-center text-white flex justify-center">
            <p className="w-[40%] mr-[9%] text-center">coin</p>
            <div className="flex justify-between w-[28%]">
            <p>Price</p>
            <p className="hidden sm:flex">Rank</p>
            </div>
          </div>
          {exchanges.map((exchange, index) => (
            <Exchange exchange={exchange} key={index} />
          ))}
        </div>
      )}
    </div>
  );
};

export default Exchanges;
