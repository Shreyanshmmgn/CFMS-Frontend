import React from "react";
import PropTypes from "prop-types";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography';
import ChitDetails from'./../ChitDetails'
import Members from './../Members'
import JoinPrivateChit from './../JoinPrivateChit'
function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`wrapped-tabpanel-${index}`}
      aria-labelledby={`wrapped-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box p={3}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.any.isRequired,
  value: PropTypes.any.isRequired,
};

function a11yProps(index) {
  return {
    id: `wrapped-tab-${index}`,
    "aria-controls": `wrapped-tabpanel-${index}`,
  };
}

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  AppBar: {
    backgroundColor: "#607d8b",
  },
  Tab: {
    fontSize: "14px",
  },
}));

const SmallNav = () => {
  const classes = useStyles();
  const [value, setValue] = React.useState("one");

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <div className={classes.root}>
      <AppBar className={classes.AppBar} style ={{marginRight: "200px"}}position="static">
        <Tabs
          value={value}
          onChange={handleChange}
          centered
        >
         
           
           {/* <Tab style={{marginRight:'40px',color:'black'}} value="one" label="Create Private Chit" {...a11yProps("one")} /> */}
           <Tab style={{marginRight:'60px', color:'black'}} value="one" label="Join Private Club" {...a11yProps("one")} />
         
          <Tab  style={{marginRight:'50px'}} value="two" label="Club Details" {...a11yProps("two")} />
          <Tab style={{marginRight:'50px'}} value="three" label="Members" {...a11yProps("three")} />
          <Tab style={{marginRight:'50px'}} value="four" label="Rounds" {...a11yProps("four")} />
          <Tab value="five" label="Investments" {...a11yProps("five")} />
        </Tabs>
      </AppBar>
      {/* <TabPanel value={value} index="one">
      <MemberDetails/>
      </TabPanel> */}
      <TabPanel value={value} index="one">
      <JoinPrivateChit/>
      </TabPanel>
      <TabPanel value={value} index="two">
      <ChitDetails/>
      </TabPanel>
      <TabPanel value={value} index="three">
      <Members/>
      </TabPanel>
      <TabPanel value={value} index="four">
       
      </TabPanel>
      <TabPanel value={value} index="five">
        
      </TabPanel>

    </div>
  );
};

export default SmallNav;
