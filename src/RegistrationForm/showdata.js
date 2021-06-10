import React, { useEffect, useState } from "react";
import axios from "axios";
import "./registrationForm";
import "../css/verified.css";

import { useHistory } from "react-router-dom";
import { Height } from "@material-ui/icons";

let defaultValues = {
  userName: "",
  email: "",
  hash: "",
  salt: "",
  date: "",
  userData: {
    name: "",
    email: "",
    phoneNumber: "",
    currentAddress: "",
    permanentAdress: "",
    state: "",
    pincode: "",
    dob: "",
    martialStatus: "",
    occupation: "",
    monthlyIncome: "",
    gender: "",
    imageUrl: "",
  },
};

const Data = () => {
  // const imgstyles = () => {
  //   height: "100px";
  //   width: "100px";
  // };
  let history = useHistory();
  const changeLoaction = (e) => {
    e.preventDefault();

    history.push("/api/registrationForm");
  };
  const [data, setData] = useState(false);
  // const [imageSrc, setImgSrc] = useState(null);
  const fetchData = async () => {
    await axios
      .post(process.env.REACT_APP_BACKEND_URL + `sendUserData`)
      .then((res) => {
        if (res.status === 200) {
          defaultValues = res.data;
          // setImgSrc(img);
          setData(true);
        } else {
          // Somthing went wrong try again
        }
      });
  };
  useEffect(() => {
    fetchData();
  }, []);

  return (
    <>
      {data ? (
        <div className="back1">
          <div className="container1">
            <div className="title">Check your Data</div>
            <div className="content">
              <form action="#">
                <div className="user-details">
                  <div className="input-box">
                    <h5>
                      <span className="details">Full Name: </span>
                    </h5>
                    <span> {defaultValues.userData.name}</span>
                  </div>
                  <div className="input-box">
                    <h5>
                      <span className="details">Email:</span>
                    </h5>
                    <span> {defaultValues.userData.email}</span>
                  </div>
                  <div>
                    <img
                      style={{
                        height: "100px",
                        width: "100px",
                      }}
                      src={defaultValues.userData.imageUrl}
                      alt="User Image"
                    />
                  </div>
                  <div className="input-box">
                    <h5>
                      <span className="details">Phone Number: </span>
                    </h5>
                    <span> {defaultValues.userData.phoneNumber}</span>
                  </div>
                  <div className="input-box">
                    <h5>
                      <span className="details">DOB: </span>
                    </h5>
                    <span> {defaultValues.userData.dob}</span>
                  </div>
                  <div className="input-box">
                    <h5>
                      <span className="details">Current Address</span>
                    </h5>
                    <span> {defaultValues.userData.currentAddress}</span>
                  </div>
                  <div className="input-box">
                    <h5>
                      <span className="details">Permanent Address</span>
                    </h5>
                    <span> {defaultValues.userData.permanentAdress}</span>
                  </div>
                  <div className="input-box">
                    <h5>
                      <span className="details">State</span>
                    </h5>
                    <span> {defaultValues.userData.state}</span>
                  </div>
                  <div className="input-box">
                    <h5>
                      <span className="details">Pincode</span>
                    </h5>
                    <span> {defaultValues.userData.pincode}</span>
                  </div>
                  <div className="input-box">
                    <h5>
                      <span className="details">Martial Status</span>
                    </h5>
                    <span> {defaultValues.userData.martialStatus}</span>
                  </div>
                  <div className="input-box">
                    <h5>
                      <span className="details">Occupation</span>
                    </h5>
                    <span> {defaultValues.userData.occupation}</span>
                  </div>
                  <div className="input-box">
                    <h5>
                      <span className="details">Monthly Income</span>
                    </h5>
                    <span> {defaultValues.userData.monthlyIncome}</span>
                  </div>
                  <div className="input-box">
                    <h5>
                      <span className="details">Gender</span>
                    </h5>
                    <span> {defaultValues.userData.gender}</span>
                  </div>
                  <div className="button">
                    <input
                      type="submit"
                      value="Edit"
                      onClick={changeLoaction}
                    />
                  </div>
                  <div className="button">
                    <input
                      type="button"
                      value="Register"
                      onClick={() => {
                        history.push("/api/dashboard");
                      }}
                    />
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      ) : (
        <h3> No data for this user</h3>
      )}
    </>
  );
};

export default Data;
//*--------------------------------------------------------------------------------------------*
// const ShowData = () => {
//   const [loader, setLoader] = useState(true);
//   const [autherized, setautherized] = useState(null);

//   useEffect(() => {
//     axios
//       .post(process.env.REACT_APP_BACKEND_URL + "/showdata")
//       .then((res) => {
//         console.log(" Req to authenticate user");
//         console.log(res.data.success);
//         setLoader(false);
//         if (res.status === 200 || res.status === 201) {
//           setautherized(true);
//         }
//       })
//       .catch((err) => {
//         console.log("Error Msg : ", err.response.data.msg);
//         setLoader(false);
//         setautherized(false);
//       });
//   }, []);

//   return (
//     <>
//       {loader && <div class="loader"></div>}
//       {autherized ? <Data /> : <NotAuth />}
//     </>
//   );
// };
// export default ShowData;
