import Navbar from "./Navbar/Navbar";
// import SmallNav from "./Navbar/SmallNav";
// import PublicChit from "./Chitfunds/PublicChit";
// import PrivateChit from "./Chitfunds/PrivateChit";
import "./../css/main-homepage.css";
// import { useState } from "react";

function Dashboard() {
  // const [ currentValue, setcurrentValue] = useState(false);
  return (
    <div className="main-homepage">
      <Navbar/>
      {/* <SmallNav/> */}
      {/* {

      currentValue ? <SmallNav/> : <PublicChit />
       } */}
      {/* <label className="switch">
        <input type="checkbox" id="myCheck" onClick={() => {setcurrentValue(!currentValue)}} />
        <span className="slider1 round1">
          <h3>Public Chit</h3>
          <h3 id="public">Private Chit</h3>
        </span>
      </label> */}

    </div>
  );
}

export default Dashboard;
