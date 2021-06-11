import React, { useEffect, useState } from "react";
import axios from "axios";
// import "./registrationForm";
// import "../css/verified.css";
import { makeStyles } from "@material-ui/core/styles";
import LinearProgress from "@material-ui/core/LinearProgress";

import { useHistory } from "react-router-dom";

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
const useStyles = makeStyles((theme) => ({
  root: {
    width: "100%",
    "& > * + *": {
      marginTop: theme.spacing(2),
    },
  },
}));

const Profile = () => {
  const classes = useStyles();

  let history = useHistory();
  const changeLoaction = (e) => {
    e.preventDefault();

    history.push("/api/registrationForm");
  };
  const [data, setData] = useState(false);
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
      {/* {data ? ( */}
        <div style={{marginTop:"90px"}}className="back1">
          <div className="container1">
            <div style={{fontWeight:"bold"}}className="title">Profile</div>
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
                </div>
              </form>
            </div>
          </div>
        </div>
      {/* ) : (
        <div className="title">
          <div className={classes.root}>
            <LinearProgress />
          </div>
          <h3> No data for this user</h3>
        </div>
      )} */}
    </>
  );
};

export default Profile;
