import Navbar from "./Navbar/Navbar";
import PublicChit from "./Chitfunds/PublicChit";
import PrivateChit from "./PrivateChit";
import "./../css/main-homepage.css";
import { useState } from "react";


function Dashboard() {
  const [ currentValue, setcurrentValue] = useState(false);
  return (
    <div className="main-homepage">
      <Navbar></Navbar>
      <label className="switch">
        <input type="checkbox" id="myCheck" onClick={() => {setcurrentValue(!currentValue)}} />
        <span className="slider1 round1">
          <h3>Public Chit</h3>
          <h3 id="public">Private Chit</h3>
        </span>
      </label>
      {
        
        currentValue ? <PrivateChit/> : <PublicChit />
      }
    </div>
  );
}

export default Dashboard;
