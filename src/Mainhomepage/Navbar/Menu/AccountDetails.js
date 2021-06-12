import React, { useEffect } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import axios from "axios";

// import List from '@material-ui/core/List';
// import ListItem from '@material-ui/core/ListItem';
// import ListItemText from '@material-ui/core/ListItemText';
import Grid from "@material-ui/core/Grid";

const payments = [
  { name: "Card type", detail: "" },
  { name: "Card holder", detail: "" },
  { name: "Card number", detail: "" },
  { name: "Expiry date", detail: "" },
];

const useStyles = makeStyles((theme) => ({
  listItem: {
    padding: theme.spacing(1, 0),
  },
}));

const AccountDetails = () => {
  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    await axios
      .post(process.env.REACT_APP_BACKEND_URL + `sendUserData`)
      .then((res) => {
        if (res.status === 200) {
          console.log("Data saved successfully");
          payments[0].detail = res.data.bankDetails.cardType;
          payments[1].detail = res.data.bankDetails.cardHolderName;
          payments[2].detail = res.data.bankDetails.cardNumber;
          payments[3].detail = res.data.bankDetails.expiryDate;
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
            <h2 style={{ fontFamily: "cursive" }}>Bank Account Details</h2>
          </b>
        </div>
        <div className="content">
          <Grid item container direction="column" xs={12} sm={6}>
            <Grid container>
              {payments.map((payment) => (
                <React.Fragment key={payment.name}>
                  <Grid item xs={6}>
                    <Typography
                      style={{ color: "#0D47A1", fontSize: "30px" }}
                      gutterBottom
                    >
                      {payment.name}
                    </Typography>
                  </Grid>
                  <Grid item xs={6}>
                    <Typography
                      style={{
                        color: "#82B1FF",
                        fontSize: "30px",
                        paddingLeft: "30px",
                      }}
                      gutterBottom
                    >
                      {payment.detail}
                    </Typography>
                  </Grid>
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
