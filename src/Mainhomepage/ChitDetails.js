import React, { useEffect, usecommission } from "react";
import axios from "axios";

let defaultValues = {
  managerName: "",
  totalMembers: "",
  amount: "",
  timePeriod: "",
  fundSize: "",
  commission: "",
  startDate: "",
  maximumBid: "",
  minimumBid: "",
  monthlyInstallment: "",
  minimumInstallment: "",
  maximumInstallment: "",
};

const Data = () => {
  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    await axios
      .post(process.env.REACT_APP_BACKEND_URL + `sendUserData`)
      .then((res) => {
        console.log(res.data.privateChitData);
        if (res.status === 200) {
          defaultValues = res.data.privateChitData[0];
        }
      });
  };

  return (
    <>
      <div className="back1">
        <div className="container1">
          <div className="title">Chit Details</div>
          <div className="content">
            <form action="#">
              <div className="user-details">
                <div className="input-box">
                  <h5>
                    <span className="details">Manager Name: </span>
                  </h5>
                  <span> {defaultValues.managerName}</span>
                </div>
                <div className="input-box">
                  <h5>
                    <span className="details">Total Members:</span>
                  </h5>
                  <span> {defaultValues.totalMembers}</span>
                </div>
                {/* <div>
                    <img src={imageSrc} alt="User Image" />
                  </div> */}
                <div className="input-box">
                  <h5>
                    <span className="details">Amount: </span>
                  </h5>
                  <span> {defaultValues.amount}</span>
                </div>

                <div className="input-box">
                  <h5>
                    <span className="details">Time Period</span>
                  </h5>
                  <span> {defaultValues.timePeriod}</span>
                </div>
                <div className="input-box">
                  <h5>
                    <span className="details">Fund Size</span>
                  </h5>
                  <span> {defaultValues.fundSize}</span>
                </div>
                <div className="input-box">
                  <h5>
                    <span className="details">Commission</span>
                  </h5>
                  <span> {defaultValues.commission}</span>
                </div>
                <div className="input-box">
                  <h5>
                    <span className="details">Start Date</span>
                  </h5>
                  <span> {defaultValues.startDate}</span>
                </div>
                <div className="input-box">
                  <h5>
                    <span className="details">Minimum Bid in Percentage</span>
                  </h5>
                  <span> {defaultValues.minimumBid}</span>
                </div>
                <div className="input-box">
                  <h5>
                    <span className="details">Maximum Bid in Percentage: </span>
                  </h5>
                  <span> {defaultValues.maximumBid}</span>
                </div>
                <div className="input-box">
                  <h5>
                    <span className="details">Monthly Installment</span>
                  </h5>
                  <span> {defaultValues.monthlyInstallment}</span>
                </div>
                <div className="input-box">
                  <h5>
                    <span className="details">Minimum Installment</span>
                  </h5>
                  <span> {defaultValues.minimumInstallment}</span>
                </div>
                <div className="input-box">
                  <h5>
                    <span className="details">Maximum Installment</span>
                  </h5>
                  <span> {defaultValues.maximumInstallment}</span>
                </div>
                {/* <div className="button">
                  <input
                    type="submit"
                    value="Edit"
                    //   onClick={changeLoaction}
                  />
                </div>
                <div className="button">
                  <input
                    type="button"
                    value="Register"
                    //   onClick={() => {
                    //     window.location.href = "/mainHomePage";
                    //   }}
                  />
                </div> */}
              </div>
            </form>
          </div>
        </div>
      </div>
      {/* ) : (
        <h3> No data for this user</h3>
      )} */}
    </>
  );
};

export default Data;
