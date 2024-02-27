import React from "react";
import { LuWallet } from "react-icons/lu";
import { TbPencilBolt } from "react-icons/tb";
import { IoReceiptOutline } from "react-icons/io5";
import { TbDeviceMobileMessage } from "react-icons/tb";
import { CiBag1 } from "react-icons/ci";
import { IoLayersOutline } from "react-icons/io5";
import hand from "../assests/hand.png";
function HomeChooseUs() {
  return (
    <div className="text-white my-6 "  id="about">
      <div className="rounded-2xl px-4 border-[0.1px] border-[#2e2b31] flex flex-col justify-center items-center w-[78%] mb-16  mx-auto relative leading-[2rem] shadow1">
        <div className=" text-[1rem] flex my-2 md:my-4 md:text-[1.5rem] lg:text-[2rem] font-semibold gradient-text2">
          WHY CHOOSE US!
        </div>

        <div className="my-2 w-[100%] justify-evenly items-center flex flex-wrap gap-6">
          {/* section1 */}
          <div className="max-w-[35%] min-w-[15rem] p-1 flex flex-col gap-4 ">
            <div className="rounded-2xl gap-3 border-[0.1px] border-[#2e2b31] p-2 flex ">
              <div className="w-max rounded-full p-2 text-lg sm:text-xl md:text-2xl lg:text-3xl h-max bg-purple-500 mt-2">
                <LuWallet />
              </div>
              <div>
                <h1 className="font-semibold text-sm lg:text-base ">CONNECT YOUR WALLET</h1>
                <h3 className="text-xs md:text-sm">
                  Use Trust Wallet, Metamask or to connect to the app.
                </h3>
              </div>
            </div>

            <div className="rounded-2xl gap-3 border-[0.1px] border-[#2e2b31] p-2 flex ">
              <div className="w-max rounded-full p-2 h-max bg-purple-500 mt-2 text-lg sm:text-xl md:text-2xl lg:text-3xl ">
                <TbPencilBolt />
              </div>
              <div>
                <h1 className="font-semibold text-sm lg:text-base ">SELECT YOUR QUANTITY</h1>
                <h3 className="text-xs md:text-sm">
                  Upload your crypto and set a title, description and price.
                </h3>
              </div>
            </div>

            <div className="rounded-2xl gap-3 border-[0.1px] border-[#2e2b31] p-2 flex ">
              <div className="w-max rounded-full p-2 text-lg sm:text-xl md:text-2xl lg:text-3xl  h-max bg-purple-500 mt-2">
                <IoReceiptOutline />
              </div>
              <div>
                <h1 className="font-semibold text-sm lg:text-base ">CONFIRM TRANSACTION</h1>
                <h3 className="text-xs md:text-sm">
                  Earn by selling your crypto on our marketplace.
                </h3>
              </div>
            </div>
          </div>

          {/* section2 */}
          <div className="max-w-[15rem] min-w-[10rem] ">
            <img src={hand}></img>
          </div>

          {/* section3 */}
          <div className="max-w-[35%] min-w-[15rem] p-1 flex flex-col gap-4">
            <div className="rounded-2xl gap-3 border-[0.1px] border-[#2e2b31] p-2 flex ">
              <div className="w-max rounded-full p-2  text-lg sm:text-xl md:text-2xl lg:text-3xl  h-max bg-purple-500 mt-2">
                <TbDeviceMobileMessage />
              </div>
              <div>
                <h1 className="font-semibold text-sm lg:text-base ">RECEIVE YOUR OWN NFTS</h1>
                <h3 className="text-xs md:text-sm">
                  Invest all your crypto at one place on one platform.
                </h3>
              </div>
            </div>

            <div className="rounded-2xl gap-3 border-[0.1px] border-[#2e2b31] p-2 flex ">
              <div className="w-max rounded-full p-2  text-lg sm:text-xl md:text-2xl lg:text-3xl  h-max bg-purple-500 mt-2">
                <CiBag1 />
              </div>
              <div>
                <h1 className="font-semibold text-sm lg:text-base ">TAKE A MARKET TO SELL</h1>
                <h3 className="text-xs md:text-sm">
                  Discover, collect the right crypto collections to buy or sell.
                </h3>
              </div>
            </div>

            <div className="rounded-2xl gap-3 border-[0.1px] border-[#2e2b31] p-2 flex ">
              <div className="w-max rounded-full p-2  text-lg sm:text-xl md:text-2xl lg:text-3xl  h-max bg-purple-500 mt-2">
                <IoLayersOutline />
              </div>
              <div>
                <h1 className="font-semibold text-sm lg:text-base ">DRIVE YOUR COLLECTION</h1>
                <h3 className="text-xs md:text-sm">
                  We make it easy to Discover, Invest and manage.
                </h3>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default HomeChooseUs;
