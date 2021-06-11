import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import { makeStyles } from "@material-ui/core/styles";
import Box from "@material-ui/core/Box";
import Collapse from "@material-ui/core/Collapse";
import IconButton from "@material-ui/core/IconButton";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Typography from "@material-ui/core/Typography";
import Paper from "@material-ui/core/Paper";
import KeyboardArrowDownIcon from "@material-ui/icons/KeyboardArrowDown";
import KeyboardArrowUpIcon from "@material-ui/icons/KeyboardArrowUp";
import axios from "axios";
import LinearProgress from "@material-ui/core/LinearProgress";

const useRowStyles = makeStyles({
  root: {
    "& > *": {
      borderBottom: "unset",
    },
  },
});
const useStyles = makeStyles((theme) => ({
  root: {
    width: "100%",
    "& > * + *": {
      marginTop: theme.spacing(2),
    },
  },
}));

function Row(props) {
  const { row } = props;
  console.log(row);
  const [open, setOpen] = React.useState(false);
  const classes = useRowStyles();
  return (
    <React.Fragment>
      <TableRow className={classes.root}>
        <TableCell>
          <IconButton
            aria-label="expand row"
            size="small"
            onClick={() => setOpen(!open)}
          >
            {open ? <KeyboardArrowUpIcon /> : <KeyboardArrowDownIcon />}
          </IconButton>
        </TableCell>
        <TableCell component="th" scope="row">
          {row.firstName}
        </TableCell>
        <TableCell align="right">{row.Role}</TableCell>
        <TableCell align="right">{row.id}</TableCell>
        <TableCell align="right">{row.emailId}</TableCell>
      </TableRow>
      <TableRow>
        <TableCell style={{ paddingBottom: 0, paddingTop: 0 }} colSpan={6}>
          <Collapse in={open} timeout="auto" unmountOnExit>
            <Box margin={1}>
              <Typography variant="h6" gutterBottom component="div">
                Details
              </Typography>
              <Table size="small" aria-label="purchases">
                <TableHead>
                  <TableRow>
                    <TableCell>Location</TableCell>
                    <TableCell>Phone No</TableCell>
                    <TableCell>Dob</TableCell>
                    <TableCell>Occupation</TableCell>
                    <TableCell>Gender</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {row.history.map((historyRow) => (
                    <TableRow key={historyRow.location}>
                      <TableCell component="th" scope="row">
                        {historyRow.location}
                      </TableCell>
                      <TableCell>{historyRow.no}</TableCell>
                      <TableCell>{historyRow.dob}</TableCell>
                      <TableCell>{historyRow.occupation}</TableCell>
                      <TableCell>{historyRow.gender}</TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </Box>
          </Collapse>
        </TableCell>
      </TableRow>
    </React.Fragment>
  );
}

Row.propTypes = {
  row: PropTypes.shape({
    name: PropTypes.number.isRequired,
    Role: PropTypes.number.isRequired,
    memberSince: PropTypes.number.isRequired,
    history: PropTypes.arrayOf(
      PropTypes.shape({
        amount: PropTypes.number.isRequired,
        customerId: PropTypes.string.isRequired,
        date: PropTypes.string.isRequired,
      })
    ).isRequired,
    name: PropTypes.string.isRequired,
    avgBid: PropTypes.number.isRequired,
    watt: PropTypes.number.isRequired,
  }).isRequired,
};

export default function CollapsibleTable() {
  const [memberDetails, setMemDetails] = useState({});
  const [r, setR] = useState(false);
  const classes = useStyles();
  // let history = [
  //   {
  //     location: member.currentAddress,
  //     no: member.phoneNumber,
  //     dob: member.dob,
  //     occupation: member.occupation,
  //     gender: member.gender,
  //   },
  // ];
  useEffect(() => {
    axios
      .post(process.env.REACT_APP_BACKEND_URL + `sendUserData`)
      .then((res) => {
        if (res.status === 200) {
          let member = res.data;
          let memberdata = member.memberDetails[0];
          console.log("memberdata : ", memberDetails);
          //! Request to get member details

          member.memberDetails[0].map((mem, index) => {
            let email = mem.emailId;
            axios
              .post(
                process.env.REACT_APP_BACKEND_URL + `sendMemberData/${email}`
              )
              .then((res) => {
                if (res.status === 200) {
                  let member = res.data.userData;
                  let history = [
                    {
                      location: member.currentAddress,
                      no: member.phoneNumber,
                      dob: member.dob,
                      occupation: member.occupation,
                      gender: member.gender,
                    },
                  ];
                  memberdata[index].history = history;
                  setMemDetails(memberdata);

                  setR(true);
                }
              })
              .catch((err) => {
                console.log("Error : ", err);
              });
          });
          //!
        }
      }).catch = (error) => {
      console.log("Member not found  !!", error);
    };
  }, []);

  // const getMemberData = () => {

  // };

  return r ? (
    <TableContainer component={Paper}>
      <Table aria-label="collapsible table">
        <TableHead style={{ backgroundColor: "#424242" }}>
          <TableRow>
            <TableCell />
            <TableCell style={{ color: "white" }}>Name</TableCell>
            <TableCell style={{ color: "white" }} align="right">
              Role
            </TableCell>
            <TableCell style={{ color: "white" }} align="right">
              Id Number
            </TableCell>
            <TableCell style={{ color: "white" }} align="right">
              Email
            </TableCell>{" "}
          </TableRow>
        </TableHead>
        <TableBody>
          {/* {memberDetails.map((row) => {
            <Row key={row.firstName} row={row} />;
          })} */}
          {memberDetails.map((row) => (
            <Row key={row.firstName} row={row} />
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  ) : (
    <div className="title">
      <div className={classes.root}>
        <LinearProgress />
      </div>
      <h2>No data found please create new private club</h2>
    </div>
  );
}
