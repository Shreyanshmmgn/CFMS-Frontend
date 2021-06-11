import React from "react";
import { fade, makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import IconButton from "@material-ui/core/IconButton";
import Typography from "@material-ui/core/Typography";
import InputBase from "@material-ui/core/InputBase";
import Badge from "@material-ui/core/Badge";
import MenuItem from "@material-ui/core/MenuItem";
import Menu from "@material-ui/core/Menu";

import SearchIcon from "@material-ui/icons/Search";
import AccountCircle from "@material-ui/icons/AccountCircle";

import NotificationsIcon from "@material-ui/icons/Notifications";
import MoreIcon from "@material-ui/icons/MoreVert";
import { useState } from "react";
import Button from "@material-ui/core/Button";

import useAuthServices from "./../../Auth/authentication";
import SmallNav from "./SmallNav";
import PublicChit from "./../Chitfunds/PublicChit";
import PrivateChitRegistrationForm from "./../PrivateChitRegistrationForm";
import ShowData from "../../RegistrationForm/showdata";
import { useHistory } from "react-router-dom";


import clsx from "clsx";

import Drawer from "@material-ui/core/Drawer";

import List from "@material-ui/core/List";
import Divider from "@material-ui/core/Divider";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import InboxIcon from "@material-ui/icons/MoveToInbox";
import MailIcon from "@material-ui/icons/Mail";

import MenuIcon from "@material-ui/icons/Menu";
import AccountBalanceWalletIcon from "@material-ui/icons/AccountBalanceWallet";
import DashboardIcon from "@material-ui/icons/Dashboard";
import AccountBoxIcon from "@material-ui/icons/AccountBox";
import GavelIcon from "@material-ui/icons/Gavel";
import AccountDetails from "./Menu/AccountDetails"
import AccountWallet from "./Menu/AccountWallet"
import Biding from "./Menu/Biding"
import Messages from "./Menu/Messages"
import SendQuery from "./Menu/SendQuery"
import TermsConditions from "./Menu/TermsConditions"
import Profile from "./Profile";
import PublicClub from "./PublicClub";

  //*--------------------------------------------------------------------------------------------*

const useStyles = makeStyles((theme) => ({
  grow: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    display: "none",
    [theme.breakpoints.up("sm")]: {
      display: "block",
    },
  },
  search: {
    position: "relative",
    borderRadius: theme.shape.borderRadius,
    backgroundColor: fade(theme.palette.common.white, 0.15),
    "&:hover": {
      backgroundColor: fade(theme.palette.common.white, 0.25),
    },
    marginRight: theme.spacing(2),
    marginLeft: 0,
    width: "100%",
    [theme.breakpoints.up("sm")]: {
      marginLeft: theme.spacing(3),
      width: "400px",
    },
  },
  searchIcon: {
    padding: theme.spacing(0, 2),
    height: "100%",
    position: "absolute",
    pointerEvents: "none",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  inputRoot: {
    color: "inherit",
  },
  inputInput: {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)}px)`,
    transition: theme.transitions.create("width"),
    width: "100%",
    [theme.breakpoints.up("md")]: {
      width: "20ch",
    },
  },
  sectionDesktop: {
    display: "none",
    [theme.breakpoints.up("md")]: {
      display: "flex",
    },
  },
  sectionMobile: {
    display: "flex",
    [theme.breakpoints.up("md")]: {
      display: "none",
    },
  },
  list: {
    width: 250,
  },
  fullList: {
    width: "auto",
  },
}));
  //*--------------------------------------------------------------------------------------------*
const Message = ({ registered }) => {
  console.log("MEssaged called : ", registered);
  switch (registered) {
    case 1: {
      return <PublicClub/>;
    }
    case 2: {
      console.log("case 2 reached");
      return <PrivateChitRegistrationForm />;
    }
    case 3: {
      console.log("case 3 reached");
      return <PublicChit />;
    }
    case 4: {
      console.log("case 4 reached");
      return <SmallNav />;
    }
    case 5: {
      console.log("case 5 reached");
      return <Profile />;
    }
    case 6: {
      console.log("case 6 reached");
      return <PublicChit />;
    }
    case 7: {
      console.log("case 7 reached");
      return <AccountWallet/>;
    }
    case 8: {
      console.log("case 8 reached");
      return <AccountDetails />;
    }
    case 9: {
      console.log("case 9 reached");
      return <Biding/>;
    }
    case 10: {
      console.log("case 10 reached");
      return <Messages/>;
    }
    case 11: {
      console.log("case 11 reached");
      return <SendQuery/>;
    }
    case 12: {
      console.log("case 12 reached");
      return <TermsConditions/>;
    }
    default:
      return <PublicChit />;
  }
};
  //*--------------------------------------------------------------------------------------------*
export default function Navbar() {
  const classes = useStyles();
  let history = useHistory();
  // const [ currentValue, setcurrentValue] = useState(false);
  const [anchorEl, setAnchorEl] = React.useState(null);
  const [anchorE2, setAnchorE2] = React.useState(null);
  const [mobileMoreAnchorEl, setMobileMoreAnchorEl] = React.useState(null);
  const [registered, setRegistered] = useState(0);

  const isMenuOpen = Boolean(anchorEl);
  const isMobileMenuOpen = Boolean(mobileMoreAnchorEl);

  const handleProfileMenuOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMobileMenuClose = () => {
    setMobileMoreAnchorEl(null);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
    handleMobileMenuClose();
  };
  const handleMobileMenuOpen = (event) => {
    setMobileMoreAnchorEl(event.currentTarget);
  };
  const handleClick = (event) => {
    setAnchorE2(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorE2(null);
  };

  const Logout = () => {
    const { logout } = useAuthServices();
    logout();
    history.push("/");
    setAnchorEl(null);
    handleMobileMenuClose();
  }

  const menuId = "primary-search-account-menu";
  const renderMenu = (
    <Menu
      anchorEl={anchorEl}
      anchorOrigin={{ vertical: "top", horizontal: "right" }}
      id={menuId}
      keepMounted
      transformOrigin={{ vertical: "top", horizontal: "right" }}
      open={isMenuOpen}
      onClose={handleMenuClose}
    >
      <MenuItem
        onClick={() => {
          setRegistered(5);
          handleMenuClose();
        }}
      >
        {" "}
        MyProfile
      </MenuItem>
      <MenuItem onClick={Logout}>Logout</MenuItem>
    </Menu>
  );

  const mobileMenuId = "primary-search-account-menu-mobile";
  const renderMobileMenu = (
    <Menu
      anchorEl={mobileMoreAnchorEl}
      anchorOrigin={{ vertical: "top", horizontal: "right" }}
      id={mobileMenuId}
      keepMounted
      transformOrigin={{ vertical: "top", horizontal: "right" }}
      open={isMobileMenuOpen}
      onClose={handleMobileMenuClose}
    >
      <MenuItem>
        <IconButton aria-label="show 11 new notifications" color="inherit">
          <Badge badgeContent={11} color="secondary">
            <NotificationsIcon />
          </Badge>
        </IconButton>
        <p>Notifications</p>
      </MenuItem>
      <MenuItem onClick={handleProfileMenuOpen}>
        <IconButton
          aria-label="account of current user"
          aria-controls="primary-search-account-menu"
          aria-haspopup="true"
          color="inherit"
        >
          <AccountCircle />
        </IconButton>
        <p>Profile</p>
      </MenuItem>
    </Menu>
  );
   
    //*--------------------------------------------------------------------------------------------*
  
  //  Functions for SideBar
  const [state, setState] = React.useState({
    top: false,
    left: false,
    bottom: false,
    right: false,
  });

  const toggleDrawer = (anchor, open) => (event) => {
    if (
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }

    setState({ ...state, [anchor]: open });
  };
  const arr = [
    <DashboardIcon />,
    <AccountBalanceWalletIcon />,
    <AccountBoxIcon />,
    <GavelIcon />,
  ];

  const list = (anchor) => (
    <div
      className={clsx(classes.list, {
        [classes.fullList]: anchor === "top" || anchor === "bottom",
      })}
      role="presentation"
      onClick={toggleDrawer(anchor, false)}
      onKeyDown={toggleDrawer(anchor, false)}
    >
      <List>
        {["Dashboard", "Account Wallet", "Account Details", "Biding"].map(
          (text, index) => (
            <ListItem button onClick={() => {setRegistered(index+6)} } key={text}>
              {/* {index % 2 === 0 ? <DashboardIcon/> : <AccountBalanceWalletIcon />} */}
              <ListItemIcon>{arr[index]}</ListItemIcon>
              <ListItemText primary={text} />
            </ListItem>
          )
        )}
      </List>
      <Divider />
      <List>
        {["Messages", "Send Query", "Updates"].map((text, index) => (
          <ListItem button onClick={() => {setRegistered(index+10)} } key={text}>
            <ListItemIcon>
              {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
            </ListItemIcon>
            <ListItemText primary={text} />
          </ListItem>
        ))}
      </List>
    </div>
  );
  //*--------------------------------------------------------------------------------------------*


  return (
    <div className={classes.grow}>
      <AppBar style={{ backgroundColor: "#0d47a1" }} position="static">
        <Toolbar>
        {["LEFT"].map((anchor) => (
        <React.Fragment key={anchor}>
          <Button onClick={toggleDrawer(anchor, true)}>
            <IconButton
              edge="start"
              // className={classes.menuButton}
              color="secondary"
              aria-label="menu"
            >
              <MenuIcon />
            </IconButton>
          </Button>
          <Drawer
            anchor={anchor}
            open={state[anchor]}
            onClose={toggleDrawer(anchor, false)}
          >
            {list(anchor)}
          </Drawer>
        </React.Fragment>
      ))}

          <Typography className={classes.title} variant="h6" noWrap>
            Commiittee Kro
          </Typography>
          <div className={classes.search}>
            <div className={classes.searchIcon}>
              <SearchIcon />
            </div>
            <InputBase
              placeholder="Search…"
              classes={{
                root: classes.inputRoot,
                input: classes.inputInput,
              }}
              inputProps={{ "aria-label": "search" }}
            />
          </div>
          <div className="spacing">
            <Button
              style={{ marginLeft: "20px" }}
              variant="contained"
              color="#fafafa"
              onClick={() => {
                setRegistered(3);
              }}
              disableElevation
            >
              Public Club
            </Button>
            <Button
              style={{ marginLeft: "20px" }}
              variant="contained"
              color="secondary"
              onClick={() => {
                setRegistered(4);
              }}
              disableElevation
            >
              Private Club
            </Button>
          </div>
          <div>
            <Button
              style={{ marginLeft: "20px" }}
              aria-controls="simple-menu"
              aria-haspopup="true"
              variant="contained"
              onClick={handleClick}
              color="primary"
              disableElevation
            >
              Create Club
            </Button>
            <Menu
              id="simple-menu"
              anchorEl={anchorE2}
              keepMounted
              open={Boolean(anchorE2)}
              onClose={handleClose}
            >
              <MenuItem
                onClick={() => {
                  setRegistered(1);
                  handleClose();
                }}
              >
                Public
              </MenuItem>
              <MenuItem
                onClick={() => {
                  setRegistered(2);
                  handleClose();
                }}
              >
                Private
              </MenuItem>
            </Menu>
          </div>
          <div className={classes.grow} />
          <div className={classes.sectionDesktop}>
            {/* <IconButton aria-label="show 4 new mails" color="inherit">
              <Badge badgeContent={4} color="secondary">
                <MailIcon />
              </Badge>
            </IconButton> */}
            <IconButton aria-label="show 1 new notifications" color="inherit">
              <Badge badgeContent={1} color="secondary">
                <NotificationsIcon />
              </Badge>
            </IconButton>
            <IconButton
              edge="end"
              aria-label="account of current user"
              aria-controls={menuId}
              aria-haspopup="true"
              onClick={handleProfileMenuOpen}
              color="inherit"
            >
              <AccountCircle />
            </IconButton>
          </div>
          <div className={classes.sectionMobile}>
            <IconButton
              aria-label="show more"
              aria-controls={mobileMenuId}
              aria-haspopup="true"
              onClick={handleMobileMenuOpen}
              color="inherit"
            >
              <MoreIcon />
            </IconButton>
          </div>
        </Toolbar>
      </AppBar>
      {renderMobileMenu}
      {renderMenu}
      <Message registered={registered} />
      {/* {

       currentValue ? <SmallNav/> : <PublicChit />
 } */}
    </div>
  );
}

// import React from 'react';
// import "./../../css/navbar.css";
// import image from "../../pics/logo.jpg";
// import wallet from "./../../pics/homepage/navbar/wallet.png";
// import avatar from "./../../pics/homepage/navbar/man.png";

// function myFunction() {
//   document.getElementById("myDropdown").classList.toggle("show");
// }

// window.onclick = function (event) {
//   if (!event.target.matches(".dropbtn")) {
//     var dropdowns = document.getElementsByClassName("dropdown-content");
//     var i;
//     for (i = 0; i < dropdowns.length; i++) {
//       var openDropdown = dropdowns[i];
//       if (openDropdown.classList.contains("show")) {
//         openDropdown.classList.remove("show");
//       }
//     }
//   }
// }
// const Navbar = () => {

//   return (
//     <header id="header" className="fixed-top">
//       <div className="main-div1">

//         <img
//           style={{ height: "105px", width: "100px", paddingTop: "12px" }}
//           src={image}
//         />
//         <span style={{ fontSize: "17px", paddingRight: "20px" }}>
//           <br />
//           <br />
//           &nbsp;
//           <b>कमिटी करो </b>
//         </span>
//         <input
//           className="search-bar"
//           type="text"
//           placeholder="Search.."
//         ></input>
//         <img src={wallet} alt="Wallet" className="wallet"></img>
//         <i className="fas fa-bell fa-lg">&nbsp;&nbsp;</i>
//         <div className="dropdown">
//           <button onClick={myFunction} className="dropbtn">
//             Shyam Yadav <img src={avatar} alt="Admin" width="40" />
//             &nbsp;<span class="caret"></span>
//           </button>
//           <div id="myDropdown" className="dropdown-content">
//           <a href="#"><i className="fas fa-user"></i> Profile</a>
//           <a href="#"><i className="fas fa-sliders-h"></i> Settings</a>
//           <a href="#"><i className="fas fa-sign-out-alt"></i> Signout</a>
//           </div>
//         </div>
//       </div>
//     </header>
//   );
// }
// export default Navbar;
