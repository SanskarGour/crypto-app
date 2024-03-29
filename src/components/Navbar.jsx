import React, { useRef, useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { RxHamburgerMenu } from "react-icons/rx";

const Navbar = () => {
  const[options, setOptions] = useState(false);
  function changeOptions(){
    
  }
  return (
    <div className="bg-black w-[100%] py-4 ">
      <div className=" text-white flex border-[0.1px] rounded-3xl p-2 border-[#2e2b31] justify-between mx-auto items-center max-w-[78%] navbar shadow1">
        <div className="mx-4 rounded-full ">
          <NavLink to={"/"} className="h-14 flex gap-4 justify-center items-center">
            <svg
              height="80%"
              viewBox="0 0 32 32"
              width="80%"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M16 32C7.163 32 0 24.837 0 16S7.163 0 16 0s16 7.163 16 16-7.163 16-16 16zm5.002-22.145l.81-3.241-2.596-.646-.643 2.575a8.277 8.277 0 00-1.298-.323l.644-2.575L15.323 5l-.81 3.241c-2.983.542-5.509 2.737-6.28 5.823s.426 6.206 2.804 8.08l-.81 3.242 2.596.646.643-2.575a8.277 8.277 0 001.298.323l-.644 2.575 2.596.645.81-3.241a7.974 7.974 0 005.2-3.385l-2.847-.708a5.373 5.373 0 01-5.134 1.43c-2.866-.712-4.62-3.572-3.917-6.387s3.599-4.519 6.466-3.806a5.357 5.357 0 013.86 3.667l2.846.708a7.947 7.947 0 00-2.998-5.423z"
                fill="#fff"
              />
            </svg>
            <p className="text-xl font-medium">CRYTOCO/N</p>
          </NavLink>
        </div>

        <div className=" text-white flex sm:hidden justify-center items-center relative">
        <RxHamburgerMenu 
        className={options?"text-[2.25rem] rounded-full p-2 bg-[#33333379]" : "text-[2.25rem] rounded-full p-2" }
        onClick={()=>setOptions((prev=>!prev))} />

          {
            options?
            (<div className=" px-[2rem] py-[1rem] z-10 rounded-xl text-xs justify-between items-center absolute top-[250%] right-[0] bg-black border-[0.1px] border-[#2e2b31] navbar w-max h-max">
            <NavLink
                to="/"
                className="rounded-lg p-5 flex justify-center items-center w-full h-full"
              >
                Home
              </NavLink>
  
              <a
                href="#about"
                className="rounded-lg p-5 flex justify-center items-center w-full h-full"
              >
                About
              </a>
  
              <a
                href="#join"
                className="rounded-lg p-5 flex justify-center items-center w-full h-full"
              >
                Join
              </a>
  
              <NavLink
                to="/coins"
                className="rounded-lg p-5 flex justify-center items-center w-full h-full"
              >
                Coin
              </NavLink>
            </div>) :
            null
          }
            
        </div>

        <div className=" text-white hidden h-[4rem] text-xs md:text-sm lg:text-base justify-between items-center sm:flex">
            <NavLink
              to="/"
              className="rounded-lg p-5 flex justify-center items-center w-full h-full"
            >
              Home
            </NavLink>

            <a
              href="#about"
              className="rounded-lg p-5 flex justify-center items-center w-full h-full"
            >
              About
            </a>

            <a
              href="#join"
              className="rounded-lg p-5 flex justify-center items-center w-full h-full"
            >
              Join
            </a>

            <NavLink
              to="/coins"
              className="rounded-lg p-5 flex justify-center items-center w-full h-full"
            >
              Coin
            </NavLink>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
