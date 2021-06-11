import React, { useEffect, useState } from "react";
import axios from "axios";
import { makeStyles } from "@material-ui/core/styles";
import LinearProgress from "@material-ui/core/LinearProgress";

import { useHistory } from "react-router-dom";
const useStyles = makeStyles((theme) => ({
  root: {
    width: "100%",
    "& > * + *": {
      marginTop: theme.spacing(2),
    },
  },
}));

let defaultValues = {
  totalMoneyInvested: 33000,
  netInterestEarned: 50000,
  cyclesRemaining: "4",
  nextBidDate: "23-10-2021 ",
};

const Data = () => {
  const classes = useStyles();
//   const [isData, setIsData] = useState(false);

  let history = useHistory();
  const changeLoaction = (e) => {
    e.preventDefault();
    history.push("/api/registrationForm");
  };

//   useEffect(() => {
//     fetchData();
//   }, []);

//   const fetchData = async () => {
//     await axios
//       .post(process.env.REACT_APP_BACKEND_URL + `sendUserData`)
//       .then((res) => {
//         console.log(res.data.privateChitData);
//         if (res.status === 200) {
//           if (res.data.privateChitData.length > 0) {
//             defaultValues = res.data.privateChitData[0];
//             setIsData(true);
//           } else {
//             setIsData(false);
//           }
//         }
//       })
//       .catch((err) => {
//         console.log(err);
//       });
//   };

  return (
    <div >
      {/* {isData ? ( */}
        <div  style={{marginTop:"15px"}} class="container contact-form">
          <div style={{marginLeft:"-15px",marginRight:"-15px",fontSize:"30px",fontWeight:"bold",}}className="title">Your Investments</div>
          <div style={{marginLeft:"20px"}}className="content">
             
            <form action="#">
              <div style={{marginTop:"-50px"}} className="user-details">
                <div className="input-box">
                  <h5>
                    <span className="details"> Total Money Invested: </span>
                  </h5>
                  <span> {defaultValues.totalMoneyInvested}</span>
                </div>
                <div className="input-box">
                  <h5>
                    <span className="details"> Net Interest Earned:</span>
                  </h5>
                  <span> {defaultValues.netInterestEarned}</span>
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
                <div style={{marginLeft:"5px",marginTop:"30px"}}className="button">
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
