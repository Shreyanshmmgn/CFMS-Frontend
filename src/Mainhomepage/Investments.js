import React, { useEffect, useState } from "react";
import axios from "axios";

import { useHistory } from "react-router-dom";

let defaultValues = {
  totalMoneyInvested: "",
  netIntrestEarned: "",
  cyclesRemaining: "",
  nextBidDate: "",
};

const Data = () => {
  let history = useHistory();
  const changeLoaction = (e) => {
    e.preventDefault();
    history.push("/api/registrationForm");
  };

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    await axios
      .post(process.env.REACT_APP_BACKEND_URL + `sendUserData`)
      .then((res) => {
        if (res.status === 200) {
          console.log("Data saved successfully");
          defaultValues = res.data.investmentDetails;
        }
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <div>
      <div>
        <div
          style={{
            display: "inline",
            marginLeft: "500px",
            fontSize: "30px",
            fontWeight: "bold",
            textDecoration: "underline",
          }}
          className="title"
        >
          Your Investments
        </div>
        <div style={{ marginLeft: "250px" }} className="content">
          <form action="#">
            <div className="user-details">
              <div className="input-box">
                <h5>
                  <span className="details"> Total Money Invested: </span>
                </h5>
                <span> {defaultValues.totalMoneyInvested}</span>
              </div>
              <div className="input-box">
                <h5>
                  <span className="details"> Net Invest Earned:</span>
                </h5>
                <span> {defaultValues.netIntrestEarned}</span>
              </div>
              <br></br>
              <br></br>
              <div className="input-box">
                <h5>
                  <span className="details"> Cycles Remaining: </span>
                </h5>
                <span> {defaultValues.cyclesRemaining}</span>
              </div>

              <div className="input-box">
                <h5>
                  <span className="details">Next Bid Date:</span>
                </h5>
                <span> {defaultValues.nextBidDate}</span>
              </div>
              <div style={{ marginLeft: "280px" }} className="button">
                <input type="submit" value="Edit" onClick={changeLoaction} />
              </div>
            </div>
          </form>
        </div>
      </div>

      {/* //   ) : (
    //     <div className="title">
    //       <div className={classes.root}>
    //         <LinearProgress />
    //       </div>
    //       <h2>No data found please create new private club</h2>
    //     </div>
    //   )} */}
    </div>
  );
};

export default Data;
