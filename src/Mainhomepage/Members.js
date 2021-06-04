import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import Box from '@material-ui/core/Box';
import Collapse from '@material-ui/core/Collapse';
import IconButton from '@material-ui/core/IconButton';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Typography from '@material-ui/core/Typography';
import Paper from '@material-ui/core/Paper';
import KeyboardArrowDownIcon from '@material-ui/icons/KeyboardArrowDown';
import KeyboardArrowUpIcon from '@material-ui/icons/KeyboardArrowUp';

const useRowStyles = makeStyles({
  root: {
    '& > *': {
      borderBottom: 'unset',
    },
  },
});

function createData(name, role,  memberSince, avgBid, watt) {
  return {
    name,
    role,
    memberSince,
    avgBid,
    watt,
    history: [
      { location: 'Gurgaon', amountTransacted: 31000, age: 21, activeGroups: 4, hasReferred: 3 },
     
    ],
  };
}

function Row(props) {
  const { row } = props;
  const [open, setOpen] = React.useState(false);
  const classes = useRowStyles();

  return (
    <React.Fragment>
      <TableRow className={classes.root}>
        <TableCell>
          <IconButton aria-label="expand row" size="small" onClick={() => setOpen(!open)}>
            {open ? <KeyboardArrowUpIcon /> : <KeyboardArrowDownIcon />}
          </IconButton>
        </TableCell>
        <TableCell component="th" scope="row">
          {row.name}
        </TableCell>
        <TableCell align="right">{row.role}</TableCell>
        <TableCell align="right">{row.memberSince}</TableCell>
        <TableCell align="right">{row.avgBid}</TableCell>
        <TableCell align="right">{row.watt}</TableCell>
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
                  <TableCell >Location</TableCell>
                    <TableCell>Amount Transacted So Far</TableCell>
                    <TableCell>Age</TableCell>
                    <TableCell >Active Groups</TableCell>
                    <TableCell >Has referred</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {row.history.map((historyRow) => (
                    <TableRow key={historyRow.location}>
                      <TableCell component="th" scope="row">
                        {historyRow.location}
                      </TableCell>
                      <TableCell>{historyRow.amountTransacted}</TableCell>
                      <TableCell >{historyRow.age}</TableCell>
                      <TableCell >{historyRow. activeGroups}</TableCell>
                      <TableCell >{historyRow. hasReferred}</TableCell>
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
    role: PropTypes.number.isRequired,
    memberSince: PropTypes.number.isRequired,
    history: PropTypes.arrayOf(
      PropTypes.shape({
        amount: PropTypes.number.isRequired,
        customerId: PropTypes.string.isRequired,
        date: PropTypes.string.isRequired,
      }),
    ).isRequired,
    name: PropTypes.string.isRequired,
    avgBid: PropTypes.number.isRequired,
    watt: PropTypes.number.isRequired,
  }).isRequired,
};

const rows = [
  createData('Shreyansh', "Creater", 6.0, 24, 4.0),
  createData('Shyam', "Member", 9.0, 37, 4.3),
  createData('Rohan', "Member", 16.0, 24, 6.0),
  createData('Shubham',"Created", 3.7, 67, 4.3),
  createData('Rohit', "Member", 16.0, 49, 3.9),
  createData('Tarun', "Creator", 16.0, 49, 3.9),
  createData('Tarun', "Creator", 16.0, 49, 3.9),
  createData('Tarun', "Creator", 16.0, 49, 3.9),
  createData('Tarun', "Creator", 16.0, 49, 3.9),
  createData('Tarun', "Creator", 16.0, 49, 3.9),
  createData('Tarun', "Creator", 16.0, 49, 3.9),
  createData('Tarun', "Creator", 16.0, 49, 3.9),



];

export default function CollapsibleTable() {
  return (
    <TableContainer component={Paper}>
      <Table aria-label="collapsible table">
        <TableHead style={{backgroundColor: '#424242'}}>
          <TableRow>
            <TableCell />
            <TableCell style={{color: 'white'}} >Name</TableCell>
            <TableCell style={{color: 'white',}} align="right">Role</TableCell>
            <TableCell style={{color: 'white'}} align="right">Member Since</TableCell>
            <TableCell style={{color: 'white'}} align="right">Avg Bid%</TableCell>
            <TableCell style={{color: 'white'}} align="right">WATT</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <Row key={row.name} row={row} />
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}