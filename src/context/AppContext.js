import { createContext, useState } from "react";

export const AppContext = createContext();

export default function AppContextProvider({ children }) {
  const [currency, setCurrency] = useState('usd');
  const [days, setDays] = useState(1)
  
  const value = {
    days,
    setDays,
    currency,
    setCurrency
  };

  return <AppContext.Provider value={value}>{children}</AppContext.Provider>;
}
