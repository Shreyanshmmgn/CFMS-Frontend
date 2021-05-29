import React, { useState } from "react";
import RegistrationForm from "../RegistrationForm/registrationForm.js";
// import { Link } from "react-router-dom";
import axios from "axios";
import "../css/Login.css";
import Avatar from "@material-ui/core/Avatar";
import Button from "@material-ui/core/Button";
import CssBaseline from "@material-ui/core/CssBaseline";
import TextField from "@material-ui/core/TextField";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Checkbox from "@material-ui/core/Checkbox";
import Link from "@material-ui/core/Link";
import Paper from "@material-ui/core/Paper";
import Box from "@material-ui/core/Box";
import Grid from "@material-ui/core/Grid";
import LockOutlinedIcon from "@material-ui/icons/LockOutlined";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
const useStyles = makeStyles((theme) => ({
  root: {
    height: "100vh",
  },
  image: {
    backgroundImage: "url(https://source.unsplash.com/random)",
    backgroundRepeat: "no-repeat",
    backgroundColor:
      theme.palette.type === "light"
        ? theme.palette.grey[50]
        : theme.palette.grey[900],
    backgroundSize: "cover",
    backgroundPosition: "center",
  },
  paper: {
    margin: theme.spacing(8, 4),
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main,
  },
  form: {
    width: "100%", // Fix IE 11 issue.
    marginTop: theme.spacing(1),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
}));

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
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
            console.log("FOrm ");
            setTimeout(() => {
              window.location.href = "/registrationForm";
            }, 4000);
          } else {
            setTimeout(() => {
              console.log("Dashboard ");
              window.location.href = "/dashBoard";
            }, 4000);
          }
          // document.getElementById("wrong-password").innerHTML =
          //   "Login Successfull !!";
        }
      })
      .catch((err) => {
        // document.getElementById("wrong-password").innerHTML =
        //   "Wrong Credentials !!";
        console.log(" Error was there : ", err);
      });

    //! window.location = "/"; To change to some page
  };
  const classes = useStyles();
  return (
    // <div class="basic">
    //   <div class="left-img">
    //     <img
    //       src="https://www.chitmonks.com/assets/images/about.png"
    //       alt="CFMS"
    //     />
    //   </div>
    //   <div class="card">
    //     <div class="card-header">
    //       <h2>Partner Login</h2>
    //     </div>
    //     <div class="card-body">
    //       <form action="" onSubmit={submitData}>
    //         <div class="input-group form-group">
    //           <div class="input-group-prepend">
    //             <span class="input-group-text">
    //               <i class="fas fa-user"></i>
    //             </span>
    //           </div>
    //           <input
    //             type="text"
    //             class="form-control"
    //             placeholder="Email"
    //             required
    //             onChange={(e) => setEmail(e.target.value)}
    //           />
    //         </div>
    //         <br></br>
    //         <div class="input-group form-group">
    //           <div class="input-group-prepend">
    //             <span class="input-group-text">
    //               <i class="fas fa-key"></i>
    //             </span>
    //           </div>
    //           <input
    //             type="password"
    //             class="form-control"
    //             placeholder="Password"
    //             required
    //             onChange={(e) => setPassword(e.target.value)}
    //           />
    //         </div>
    //         <br></br>
    //         <div class="row align-items-center remember">
    //           <input type="checkbox" />
    //           Remember Me
    //         </div>
    //         <h3 id="wrong-password"></h3>
    //         <br></br>
    //         <div class="form-group">
    //           <input
    //             type="submit"
    //             value="Login"
    //             class="btn float-right login_btn"
    //           />
    //         </div>
    //       </form>
    //     </div>
    //     <div class="card-footer">
    //       <div class="d-flex justify-content-center links">
    //         <h5>
    //           <b>Don't have an account?</b>
    //         </h5>
    //         &nbsp;&nbsp;
    //         <h5>
    //           <b>
    //             <Link to="/Signup">Signup</Link>
    //           </b>
    //         </h5>
    //       </div>
    //       <div class="d-flex justify-content-center">
    //         <h5>
    //           <b>
    //             <Link to="/forgotPassword">Forgot Password ?</Link>
    //           </b>
    //         </h5>
    //       </div>
    //     </div>
    //   </div>
    // </div>

    <Grid container component="main" className={classes.root}>
      <CssBaseline />
      <Grid item xs={false} sm={4} md={7} className={classes.image} />
      <Grid item xs={12} sm={8} md={5} component={Paper} elevation={6} square>
        <div className={classes.paper}>
          <Avatar className={classes.avatar}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            Sign in
          </Typography>
          <form className={classes.form} noValidate onSubmit={submitData}>
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
              className={classes.submit}
            >
              Sign In
            </Button>
            <Grid container>
              <Grid item xs>
                <Link href="#" variant="body2">
                  Forgot password?
                </Link>
              </Grid>
              <Grid item>
                <Link href="#" variant="body2">
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
