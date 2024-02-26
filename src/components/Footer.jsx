import React from "react";
import {  FaXTwitter } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa";
import { IoMailOutline } from "react-icons/io5";
import { FiFacebook } from "react-icons/fi";

function Footer(){
  return(<div className="w-[100%] py-10 text-white">
    <div className="flex gap-4 justify-center items-center w-[100%] h-full">
      <FaXTwitter className="text-[1rem]" />
      <FaInstagram className="text-[1rem]" />
      <IoMailOutline className="text-[1.2rem]" />
      <FiFacebook className="text-[1rem]" />
    </div>
  </div>);
}

export default Footer;