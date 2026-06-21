import { createContext } from "react";
import GrandFather from "./GrandFather";

export const assetContext = createContext("");

const Family = () => {
  return (
    <div>
      <h3>Family</h3>
      <assetContext.Provider value={"gold"}>
        <GrandFather></GrandFather>
      </assetContext.Provider>
    </div>
  );
};

export default Family;
