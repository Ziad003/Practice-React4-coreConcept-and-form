import { createContext, useState } from "react";
import GrandFather from "./GrandFather";

export const assetContext = createContext("");
export const moneyContext = createContext(0);

const Family = () => {
  const [money, setMoney] = useState(0);
  return (
    <div>
      <h3>Family</h3>
      <h4>Family got {money} taka</h4>
      <moneyContext.Provider value={[money, setMoney]}>
        <assetContext.Provider value={"gold"}>
          <GrandFather></GrandFather>
        </assetContext.Provider>
      </moneyContext.Provider>
    </div>
  );
};

export default Family;
