import { useContext } from "react";
import { assetContext, moneyContext } from "./Family";


const Myself = () => {
    const asset=useContext(assetContext);
    const [money,setMoney]=useContext(moneyContext);
  return (
    <div>
      <h3>Myself</h3>
      <p>Asset:{asset}</p>
      <button onClick={()=>setMoney(money+10000)}>Donate 10000tk</button>
    </div>
  );
};

export default Myself;
