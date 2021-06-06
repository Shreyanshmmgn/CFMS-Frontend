import Navbar from "./Navbar/Navbar";
import React, { useEffect, useState } from "react";            
import "./../css/main-homepage.css";
import axios from "axios";
import NotAuth from "../Auth/notAuth";

function MainHomepage() {

  return (
    <div className="main-homepage">
      <Navbar/>
    </div>
  );
}


const Dashboard = () => {
  const [loader, setLoader] = useState(true);
  const [autherized, setautherized] = useState(null);
 
  useEffect(() => {
    axios
      .post(process.env.REACT_APP_BACKEND_URL + "/dashboard")
      .then((res) => {
        console.log(" Req to authenticate user");
        console.log(res.data.success);
        setLoader(false);
        if (res.status === 200 || res.status === 201) {
          setautherized(true);
        }
      })
      .catch((err) => {
        console.log("Error Msg : ", err.response.data.msg);
        setLoader(false);
        setautherized(false);
      });
  }, []);
 
  return (
    <>
      {loader && <div class="loader"></div>}
      {autherized ? <MainHomepage /> : <NotAuth />}
    </>
  );
};
 
export default Dashboard;