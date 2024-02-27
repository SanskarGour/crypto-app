import React from "react";
import discord from "../assests/discord.png";
import telegram from "../assests/telegram.png";

function HomeJoin() {

  return (
    <div className="text-white mb-6" id="join">
      <div className=" rounded-2xl border-[0.1px] border-[#2e2b31] flex flex-col justify-center items-center py-5 sm:pt-10 lg:pt-20 md:pt-14 w-[78%] mx-auto space-y-10 relative leading-[2rem] sm:leading-[2rem] md:leading-[3rem] lg:leading-[4rem] shadow1">
        <h1 className="text-center text-[2rem] flex md:text-[3rem] lg:text-[4rem] gradient-text1 justify-center items-center gap-5">
          <img
            src={discord}
            width="40px"
            height="40px"
            className="vert-move sm:flex hidden"
          />
          JOIN US VIA
          <img
            src={telegram}
            width="35px"
            height="35px"
            className="vert-move sm:flex hidden"
          />
        </h1>

        <h1 className="text-[2rem] md:text-[3rem] lg:text-[4rem] gradient-text1 text-center ">
        DISCORD
        </h1>

        <p className="text-xs md:text-sm lg:text-base">Invest and manage all your crypto at one place.</p>

        <a 
        href="https://discord.com/" target="_blank"
        className="px-4 flex justify-center items-center hover:cursor-pointer h-[3rem] rounded-full bg-purple-600 text-xs sm:text-sm md:text-base lg:text-lg">Join Discord</a>

      </div>
    </div>
  );
}

export default HomeJoin;
