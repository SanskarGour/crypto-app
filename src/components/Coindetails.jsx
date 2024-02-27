import React, { useContext, useEffect, useState } from "react";
import { AppContext } from "../context/AppContext";
import { NavLink, useParams } from "react-router-dom";
import axios from "axios";
import { BiSolidUpArrow , BiSolidDownArrow } from "react-icons/bi";
import Loader from "./Loader";
import { IoPulseOutline } from "react-icons/io5";
import CoinChart from "./CoinChart";


const CoinDetails = () => {
  const { setCurrency, currency, days, setDays} = useContext(AppContext);
  const { id } = useParams();
  const url = `https://api.coingecko.com/api/v3/coins/${id}`;
  const [coinDetails, setCoinDetails] = useState([]);
  const [loading, setLoading] = useState(true);
  const usd = currency === "usd";
  const [changePercent, setChangePercent] = useState();
  const [desc, setDesc] = useState("");

  const symbol = ()=>{
    if(currency === 'usd') return '$';
    else return '₹';
  };

  const changeCurrency = () => {
    if(currency === 'usd') setCurrency('inr');
    else setCurrency('usd');
  };

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      try {
        const response = await axios.get(url);
        console.log(response.data);
        setCoinDetails(response.data);
        setDesc(coinDetails.description.en.substring(0,coinDetails.description.en.indexOf(".")));
        setChangePercent(coinDetails?.market_data.price_change_percentage_24h);
        setDesc(coinDetails?.description.en.substring(0,coinDetails?.description.en.indexOf(".")));
        setLoading(false);
      } catch (error) {
        console.error("Error fetching data:", error);
        setLoading(false);
      }
    };
    fetchData();
  }, []);

  return (
    <div className="bg-black pt-2 h-full w-full flex pb-32 ">
      {loading ? (
        <Loader className='max-w-full max-h-[5rem]' />
      ) : (
        <div className="bg-black gap-2 text-white w-[78%] mx-auto px-2 pb-32 flex flex-wrap pt-[1.5rem] shadow1 border-[0.1px] border-[#2e2b31] rounded-2xl">
          <div className="min-w-[15rem] max-w-[100%] lg:max-w-[31%]">

            {/* detail */}
            <div className="flex flex-col justify-center items-center w-[100%]">
              {/* last updated */}
              <div className="text-xs md:text-sm ">Last Updated On {coinDetails?.last_updated}</div>
              
              {/* image */}
              <div className="py-10 flex justify-center w-[50px] sm:w-[70px] md:w-[100px] lg:w-[150px] "><img width='100%' src={coinDetails?.image.large} /></div>

              <div className="mx-auto max-w-[100%]  text-center font-semibold text-xs sm:text-sm md:text-base lg:text-lg">
                {/* name */}
                <div>{coinDetails.name}</div>

                {/* price */}
                <div onClick={changeCurrency} className="pt-[0.5rem]">
                  {usd
                    ? symbol()+coinDetails?.market_data?.current_price?.usd
                    : symbol()+coinDetails?.market_data?.current_price?.inr}
                </div>

                {/* bullish/bearish */}
                <div className="flex justify-center pt-[0.5rem] " >
                 <div >{(changePercent > 0) ? <BiSolidUpArrow className="text-green-600 text-base " /> : <BiSolidDownArrow className="text-base text-red-600"/>}</div>
                 <div>{coinDetails?.market_data.price_change_percentage_24h}%</div>
                </div>
              </div>

              {/* rank */}
              <div className="flex justify-center font-bold py-[2rem] text-lg sm:text-xl md:text-2xl lg:text-3xl">
                <div><IoPulseOutline className="text-yellow-400" /></div>
                <div>#{coinDetails?.market_cap_rank}</div>
              </div>
            </div>

            {/* description */}
            <div className="text-gray-300 text-xs sm:text-sm md:text-base">{desc}</div>
          </div>

          {/* chart and button */}
          <div className="flex-col justify-start max-w-[100%] md:max-w-[68%] min-w-[68%] min-h-max items-start text-xs sm:text-sm md:text-base">
          <CoinChart />
          <div className="flex max-w-[20rem] justify-between p-4">
            <button onClick={()=>setDays(1)} className='border-slate-800 border-[0.5px] py-1 px-2 rounded-lg'>24 hours</button>
            <button onClick={()=>setDays(30)} className='border-slate-800 border-[0.5px] py-1 px-2 rounded-lg'>1 month</button>
            <button onClick={()=>setDays(365)} className='border-slate-800 border-[0.5px] py-1 px-2 rounded-lg'>1 year</button>
          </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default CoinDetails;
