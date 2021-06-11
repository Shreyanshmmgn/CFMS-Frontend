import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
// import List from '@material-ui/core/List';
// import ListItem from '@material-ui/core/ListItem';
// import ListItemText from '@material-ui/core/ListItemText';
import Grid from "@material-ui/core/Grid";
import Button from "@material-ui/core/Button";
import AccountBalanceWalletIcon from '@material-ui/icons/AccountBalanceWallet';
const payments = [{ name: "Available Balance:", detail: "33000" }];


const useStyles = makeStyles((theme) => ({
  root: {
    "& > *": {
      margin: theme.spacing(1),
    },
  },
}));

const AccountDetails = () => {
  const classes = useStyles();

  return (
    <div className="back1">
      <div style={{ maxWidth: "800px" }} className="container1">
        <div className="title">
          <b>
            <h3>Account Wallet <AccountBalanceWalletIcon/></h3>
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
                    <Button variant="contained" style={{backgroundColor:"#448aff"}}>
                      Withdraw
                    </Button>
                    <Button variant="contained" style={{backgroundColor:"#1565c0"}}>
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
