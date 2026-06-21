import { useContext } from "react";
import Myself from "./Myself";
import { moneyContext } from "./Family";

const Dad = () => {
  const [money, setMoney] = useContext(moneyContext);
  return (
    <div>
      <h3>Dad</h3>
      <p>Dad also know, family mone is: {money}</p>
      <Myself></Myself>
    </div>
  );
};

export default Dad;
