import Navbar from "./Navbar/Navbar";
import { useEffect } from "react";
import axios from "axios";

const Dashboard = () => {
  // useEffect(() => {
  //   pendingRequestChecker();
  // }, []);
  // const pendingRequestChecker = async () => {
  //   await axios
  //     .post(process.env.REACT_APP_BACKEND_URL + `dashboard`)
  //     .then((res) => {
  //       console.log("Res recived ");
  //     })
  //     .catch((err) => {
  //       console.log("Error recived : ", err);
  //     });
  // };
  return (
    <div className="main-homepage">
      <Navbar />
    </div>
  );
};
export default Dashboard;
