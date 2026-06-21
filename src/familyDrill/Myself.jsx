import { useContext } from "react";
import { assetContext } from "./Family";


const Myself = () => {
    const asset=useContext(assetContext);
  return (
    <div>
      <h3>Myself</h3>
      <p>Asset:{asset}</p>
    </div>
  );
};

export default Myself;
