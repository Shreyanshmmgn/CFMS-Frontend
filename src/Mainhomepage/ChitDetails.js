import React, { useEffect, useState } from "react";
import axios from "axios";
import { makeStyles } from "@material-ui/core/styles";
import LinearProgress from "@material-ui/core/LinearProgress";

const useStyles = makeStyles((theme) => ({
  root: {
    width: "100%",
    "& > * + *": {
      marginTop: theme.spacing(2),
    },
  },
}));

let defaultValues = {
  managerName: "",
  totalMembers: "",
  amount: "",
  timePeriod: "",
  fundSize: "",
  commission: "",
  startDate: "",
  maximumBidValue: "",
  minimumBidValue: "",
  monthlyInstallment: "",
  minimumInstallment: "",
  maximumInstallment: "",
};

const Data = () => {
  const [isData, setIsData] = useState(false);
  const classes = useStyles();

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    await axios
      .post(process.env.REACT_APP_BACKEND_URL + `sendUserData`)
      .then((res) => {
        console.log(res.data.privateChitData);
        if (res.status === 200) {
          if (res.data.privateChitData.length > 0) {
            defaultValues = res.data.privateChitData[0];
            setIsData(true);
          } else {
            setIsData(false);
          }
        }
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <>
      {isData ? (
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
                    <span> {defaultValues.minimumBidValue}</span>
                  </div>
                  <div className="input-box">
                    <h5>
                      <span className="details">
                        Maximum Bid in Percentage:{" "}
                      </span>
                    </h5>
                    <span> {defaultValues.maximumBidValue}</span>
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
                </div>
              </form>
            </div>
          </div>
        </div>
      ) : (
        <div className="title">
          <div className={classes.root}>
            <LinearProgress />
          </div>
          <h2>No data found please create new private club</h2>
        </div>
      )}
    </>
  );
};

export default Data;
