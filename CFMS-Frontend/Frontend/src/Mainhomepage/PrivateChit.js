import "./../css/PrivateChit.css"
import MemberDetails from "./MemberDetails"
import { useState } from "react";
function PrivateChit() {
  const [ currentValue, setcurrentValue] = useState(false);
  return (
    <>
    <label className="switch1">
      <input type="checkbox" onClick={() => {setcurrentValue(!currentValue)}}  />
      <span className="slider2 round2">
          <h3>Create</h3>
          <h3 id="public1">Join</h3>
      </span>
    </label>
    {
        
        currentValue ? <div/> : < MemberDetails/>
      }
    </>
  );
}

export default PrivateChit;
