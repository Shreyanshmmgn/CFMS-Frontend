import React, { useState } from "react";
import axios from "axios";

import Avatar from "@material-ui/core/Avatar";
import Button from "@material-ui/core/Button";
import CssBaseline from "@material-ui/core/CssBaseline";
import TextField from "@material-ui/core/TextField";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Checkbox from "@material-ui/core/Checkbox";
import Link from "@material-ui/core/Link";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import LockOutlinedIcon from "@material-ui/icons/LockOutlined";
// import { useGlobalContext } from './../Mainhomepage/Navbar/context';
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";

axios.defaults.withCredentials = true;

const useStyles = makeStyles((theme) => ({
  root: {
    height: "100vh",
  },
  image: {
    backgroundImage: "url(https://www.chitmonks.com/assets/images/about.png)",
    backgroundRepeat: "no-repeat",

    width: "100%",
    height: "400",
    backgroundColor:
      theme.palette.type === "light"
        ? theme.palette.grey[50]
        : theme.palette.grey[900],

    backgroundPosition: "center",
  },
  paper: {
    margin: theme.spacing(13, 5),
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  avatar: {
    margin: theme.spacing(2),
    backgroundColor: theme.palette.secondary.main,
  },
  form: {
    width: "100%", // Fix IE 11 issue.
    marginTop: theme.spacing(2),
  },
  submit: {
    margin: theme.spacing(4, 0, 2),
  },
}));

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [ currentValue, setcurrentValue] = useState(null);
  // const [loginSucces, setLoginSuccess] = useState(false);

  const submitData = (event) => {
    event.preventDefault();
    const givenData = {
      email: email,
      password: password,
    };

    axios
      .post("http://localhost:5000/login", givenData)
      .then((res) => {
        console.log(res.data.userRegistered);
        if (res.status === 200) {
          if (!res.data.userRegistered) {
            console.log("Form ");
            setTimeout(() => {
              window.location.href = "/registrationForm";
            }, 4000);
          } else {
            setTimeout(() => {
              console.log("Dashboard ");
              window.location.href = "/dashBoard";
            }, 4000);
          }
          setcurrentValue(true);
          // document.getElementById("wrong-password").innerHTML =
          //   "Login Successfull !!";
        }
      })
      .catch((err) => {
        setcurrentValue(false);
        // document.getElementById("wrong-password").innerHTML =
        //   "Wrong Credentials !!";
        console.log(" Error was there : ", err);
      });

    //! window.location = "/"; To change to some page
  };
  const classes = useStyles();
  
  return (
    <Grid container component="main" className={classes.root}>
      <CssBaseline />
      <Grid item xs={false} sm={4} md={7} className={classes.image} />
      <Grid item xs={12} sm={8} md={5} component={Paper} elevation={6} square>
        <div className={classes.paper}>
          <Avatar className={classes.avatar}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            Login
          </Typography>
          <form className={classes.form} onSubmit={submitData}>
            <TextField
              variant="outlined"
              margin="normal"
              required
              fullWidth
              id="email"
              label="Email Address"
              name="email"
              autoComplete="email"
              autoFocus
              onChange={(e) => setEmail(e.target.value)}             
            />
            <TextField
              variant="outlined"
              margin="normal"
              required
              fullWidth
              name="password"
              label="Password"
              type="password"
              id="password"
              autoComplete="current-password"
              onChange={(e) => setPassword(e.target.value)}
              
            />
            <FormControlLabel
              control={<Checkbox value="remember" color="primary" />}
              label="Remember me"
            />
            <Button
              type="submit"
              fullWidth
              variant="contained"
              color="primary"
              data-toggle="modal"
              data-target="#myModal"
              className={classes.submit}
              on
            >
              Sign In
            </Button>
              {
        
        currentValue ? <div class="modal fade" id="myModal">
        <div class="modal-dialog modal-dialog-centered ">                
          <div class="modal-content">
            <h3 style={{paddingTop: "25px"}}class="modal-body text-center text-success"><b>Login Successfully</b> <button type="button" class="close" data-dismiss="modal">&times;</button></h3>
          </div>
        </div>
      </div>   :   <div class="modal fade" id="myModal">
              <div class="modal-dialog modal-dialog-centered ">                
                <div class="modal-content">
                  <h3 style={{paddingTop: "25px"}}class="modal-body text-center text-danger"><b>Wrong Credentials!</b> <button type="button" class="close" data-dismiss="modal">&times;</button></h3>
                </div>
              </div>
            </div>
      }
            {/* <button onClick={openModal} className='btn'>
        show modal
      </button> */}
            <Grid container>
              <Grid item xs>
                <Link href="/forgotPassword" variant="body2">
                  Forgot password?
                </Link>
              </Grid>
              <Grid item>
                <Link href="/signUp" variant="body2">
                  {"Don't have an account? Sign Up"}
                </Link>
              </Grid>
            </Grid>
          </form>
        </div>
      </Grid>
    </Grid>
  );
};

export default Login;
