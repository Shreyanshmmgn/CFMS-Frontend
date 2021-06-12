import React, { useEffect } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import axios from "axios";

import Grid from "@material-ui/core/Grid";
import Button from "@material-ui/core/Button";
import AccountBalanceWalletIcon from "@material-ui/icons/AccountBalanceWallet";
const payments = [{ name: "Available Balance:", detail: "" }];

const useStyles = makeStyles((theme) => ({
  root: {
    "& > *": {
      margin: theme.spacing(1),
    },
  },
}));

const AccountDetails = () => {
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
      <div style={{ maxWidth: "800px" }} className="container1">
        <div className="title">
          <b>
            <h3>
              Account Wallet <AccountBalanceWalletIcon />
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
                      style={{ backgroundColor: "#90caf9" }}
                    >
                      Withdraw
                    </Button>
                    <Button
                      onClick={() => {
                        window.location.href = "https://rzp.io/l/1XDDFkgvY";
                      }}
                      variant="contained"
                      style={{ backgroundColor: "#90caf9" }}
                    >
                      Add Money
                    </Button>
                  </div>
                </React.Fragment>
              ))}
            </Grid>
          </Grid>
        </div>
      </div>
    </div>
  );
};
export default AccountDetails;
