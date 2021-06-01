import React from "react";
import PropTypes from "prop-types";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography';
import MemberDetails from './../MemberDetails';
import PublicChit from './../Chitfunds/PublicChit';
import ChitDetails from'./../ChitDetails'

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
    backgroundColor: '#607d8b',
  },
  Tab :{
    fontSize: '14px',
  }
    
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
          
        >
          <Tab
            value="one"
            label="Check out Public Chit Groups"
            className={classes.Tab}
            style={{color:'black',marginRight:'50px',marginLeft:'80px'}}
            {...a11yProps("one")}

          />
           
           <Tab style={{marginRight:'40px'}} value="two" label="Create Private Chit" {...a11yProps("two")} />
           <Tab style={{marginRight:'40px'}} value="three" label="Join Private Chit" {...a11yProps("two")} />
         
          <Tab value="four" label="Chit Details" {...a11yProps("three")} />
          <Tab value="five" label="Members" {...a11yProps("four")} />
          <Tab value="six" label="Rounds" {...a11yProps("five")} />
          <Tab value="seven" label="Investments" {...a11yProps("six")} />
        </Tabs>
      </AppBar>
      <TabPanel value={value} index="one">
       <PublicChit/>
      </TabPanel>
      <TabPanel value={value} index="two">
      <MemberDetails/>
      </TabPanel>
      <TabPanel value={value} index="three">
       
      </TabPanel>
      <TabPanel value={value} index="four">
        <ChitDetails/>
      </TabPanel>
      <TabPanel value={value} index="five">
       
      </TabPanel>
      <TabPanel value={value} index="six">
        
      </TabPanel>
      <TabPanel value={value} index="seven">
        
      </TabPanel>
    </div>
  );
};

export default SmallNav;
