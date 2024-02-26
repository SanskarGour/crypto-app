import { createContext, useState } from "react";
import axios from "axios";

export const AppContext = createContext();

export default function AppContextProvider({ children }) {
  const [currency, setCurrency] = useState('usd');
  const [topFour, setTopFour] = useState([]);
  const [days, setDays] = useState(1)
  const url1 = "https://api.coingecko.com/api/v3/exchanges";
  const [exchanges, setExchanges] = useState([]);
  const url2 =
    `https://api.coingecko.com/api/v3/coins/markets?vs_currency=${currency}&order=market_cap_desc&per_page=100&page=1&sparkline=false&locale=en`;
  const [coins, setCoins] = useState([]);
  const [loading, setLoading] = useState(true);
  const [search, setSearch] = useState('');

  const fetchCoins = async () => {
    setLoading(true);
    try {
      const response = await axios.get(url2);
      setCoins(response.data);
      setTopFour(response.data.slice(0, 4));
      // console.log(topFour);
      // console.log(coins);
      setLoading(false);
    } catch (error) {
      console.error("Error fetching data:", error);
      setLoading(false);
    }
  };

  const fetchExchanges = async () => {
    setLoading(true);
    try {
      const response = await axios.get(url1);
      setExchanges(response.data);
      // console.log(exchanges);
      setLoading(false);
    } catch (error) {
      console.error("Error fetching data:", error);
      setLoading(false);
    }
  };
  
  const value = {
    search, setSearch,
    coins, setCoins,
    search, setSearch,
    loading,
    setLoading,
    exchanges,
    setExchanges,
    days,
    setDays,
    currency,
    setCurrency,
    fetchExchanges,
    fetchCoins,topFour,
  };

  return <AppContext.Provider value={value}>{children}</AppContext.Provider>;
}
