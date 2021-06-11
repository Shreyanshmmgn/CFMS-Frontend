import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
// import List from '@material-ui/core/List';
// import ListItem from '@material-ui/core/ListItem';
// import ListItemText from '@material-ui/core/ListItemText';
import Grid from '@material-ui/core/Grid';

const payments = [
  { name: 'Card type', detail: 'Visa' },
  { name: 'Card holder', detail: 'Mr John Smith' },
  { name: 'Card number', detail: 'xxxx-xxxx-xxxx-1234' },
  { name: 'Expiry date', detail: '04/2024' },
];

const useStyles = makeStyles((theme) => ({
  listItem: {
    padding: theme.spacing(1, 0),
  },
}));

const AccountDetails = () => {
  const classes = useStyles();

  return (
    <div className="back1">
          <div style={{maxWidth:"800px"}}className="container1">
            <div className="title">
              <b>
                <h2 style={{ fontFamily: "cursive" }}>Bank Account Details</h2>
              </b>
            </div>
            <div  className="content">
        <Grid item container direction="column" xs={12} sm={6}>

          <Grid container>
            {payments.map((payment) => (
              <React.Fragment key={payment.name}>
                <Grid item xs={6}>
                  <Typography style={{color:"#0D47A1", fontSize:"30px"}} gutterBottom>{payment.name}</Typography>
                </Grid>
                <Grid item xs={6}>
                  <Typography style={{color:"#82B1FF",fontSize:"30px",paddingLeft:"30px"}}  gutterBottom>{payment.detail}</Typography>
                </Grid>
              </React.Fragment>
            ))}
          </Grid>
          </Grid>
        </div>
        </div>
        </div>
  );
}
export default AccountDetails;