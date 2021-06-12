import React, { useEffect } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import axios from "axios";

import Grid from "@material-ui/core/Grid";
import Button from "@material-ui/core/Button";

import GavelIcon from "@material-ui/icons/Gavel";


const useStyles = makeStyles((theme) => ({
  root: {
    "& > *": {
      margin: theme.spacing(1),
    },
  },
}));
const Biding = () => {
  const payments = [{ name: "Registered for next Bid", detail: "" }];
  const classes = useStyles();
  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    await axios
      .post(process.env.REACT_APP_BACKEND_URL + `sendUserData`)
      .then((res) => {
        if (res.status === 200) {
          console.log("Data saved successfully");
          payments[0].detail = res.data.wallet.balance;
        }
      })
      .catch((err) => {
        console.log(err);
      });
  };
  return (
    <div className="back1">
      <div style={{ maxWidth: "600px" }} className="container1">
        <div className="title">
          <b>
            <h3>
              Biding <GavelIcon/>
            </h3>
          </b>
        </div>
        <div className="content">
          <Grid item container direction="column" xs={12} sm={6}>
            <Grid container>
              {payments.map((payment) => (
                <React.Fragment key={payment.name}>
                  <Grid item xs={6}>
                    <Typography
                      style={{
                        color: "#0D47A1",
                        fontSize: "22px",
                        marginLeft: "10px",
                      }}
                      gutterBottom
                    >
                      {payment.name}
                    </Typography>
                  </Grid>
                  <Grid item xs={6}>
                    <Typography
                      style={{
                        color: "#82B1FF",
                        fontSize: "22px",
                        paddingLeft: "30px",
                      }}
                      gutterBottom
                    >
                      {payment.detail}
                    </Typography>
                  </Grid>
                  <div className={classes.root}>
                    <Button
                      variant="contained"
                      style={{ backgroundColor: "#80DEEA" }}
                      onClick={() => {
                        document.getElementById("pp").innerText = "Your biding has been registered for the next round";
                       }}
                    >
                      1%
                    </Button>
                    <Button
                      onClick={() => {
                       document.getElementById("pp").innerText = "Your biding has been registered for the next round";
                      }}
                      variant="contained"
                      style={{ backgroundColor: "#80DEEA" }}
                    >
                     2%
                    </Button>
                    <Button
                      onClick={() => {
                        document.getElementById("pp").innerText = "Your biding has been registered for the next round";
                       }}
                      variant="contained"
                      style={{ backgroundColor: "#80DEEA" }}
                    >
                      3%
                    </Button>
                    <Button
                      onClick={() => {
                        document.getElementById("pp").innerText = "Your biding has been registered for the next round";
                       }}
                      variant="contained"
                      style={{ backgroundColor: "#80DEEA" }}
                    >
                      4%
                    </Button>
                    <Button
                      onClick={() => {
                        document.getElementById("pp").innerText = "Your biding has been registered for the next round";
                       }}
                      variant="contained"
                      style={{ backgroundColor: "#80DEEA" }}
                    >
                      5%
                    </Button>
                  </div>

                  <h2 style={{fontSize:"20px",fontWeight:"bold",marginTop:"20px"}} id="pp"></h2>
                </React.Fragment>
              ))}
            </Grid>
          </Grid>
        </div>
      </div>
    </div>
  );
  };
  
export default Biding;