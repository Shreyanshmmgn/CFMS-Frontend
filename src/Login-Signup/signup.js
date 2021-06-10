import React, { useState } from "react";
import axios from "axios";

import Avatar from "@material-ui/core/Avatar";
import Button from "@material-ui/core/Button";
import CssBaseline from "@material-ui/core/CssBaseline";
import TextField from "@material-ui/core/TextField";
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
    width: "50%",
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

const Message = ({ registered }) => {
  console.log("MEssaged called : ", registered);
  switch (registered) {
    case 1: {
      return (
        <div className="modal-content">
          <h3
            style={{ paddingTop: "25px" }}
            className="modal-body text-center text-success"
          >
            <b>Signup Successfully😋</b> <h4> Please verify your email now!</h4>
          </h3>
        </div>
      );
    }
    case 2: {
      console.log("case 2 reached");
      return (
        <div className="modal-content">
          <h3
            style={{ paddingTop: "25px" }}
            className="modal-body text-center text-danger"
          >
            <b>
              Someting wrong please check details again / or already registered
            </b>{" "}
          </h3>
        </div>
      );
    }
    default:
      return <></>;
  }
};

const Signup = () => {
  const [userName, setUserName] = useState("");
  const [userEmail, setUserEmail] = useState("");
  const [userPassword, setUserPassword] = useState("");
  const [userRePassword, setUserRePassword] = useState("");
  const [registered, setRegistered] = useState(0);

  // valid = () => {
  //   let x = true;

  //   if (user !== null) {
  //     if (user.length < 5) {
  //       setState({ nameError: "Name must be 5 characters long!" });
  //       x = false;
  //       console.log("False 3");
  //     }
  //   }
  //   if (password !== null) {
  //     if (password.length < 8) {
  //       setState({
  //         passworderror: "Password must be 8 character long!",
  //       });
  //       x = false;
  //       console.log("False 4");
  //     }
  //   }
  //   if (password !== repassword) {
  //     setState({ repassworderror: "Password does not match" });
  //     x = false;
  //   }
  //   return x;
  // };

  const submitData = (event) => {
    event.preventDefault();
    if (1) {
      const regeisterData = {
        userName: userName,
        email: userEmail,
        password: userPassword,
      };
      axios
        .post(process.env.REACT_APP_BACKEND_URL + "signup", regeisterData)
        .then((res) => {
          if (res.status == 200) {
            setRegistered(1);
          }
        })
        .catch((err) => {
          if (err.response.status === 422) {
            setRegistered(2);
          }
        });
      //! window.location = "/"; To change to some page
    }
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
            Sign Up
          </Typography>
          <form className={classes.form} onSubmit={submitData}>
            <Grid container spacing={2}>
              <Grid item xs={12}>
                <TextField
                  autoComplete="fname"
                  name="firstName"
                  variant="outlined"
                  required
                  fullWidth
                  id="firstName"
                  label="First Name"
                  autoFocus
                  onChange={(e) => setUserName(e.target.value)}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  variant="outlined"
                  required
                  fullWidth
                  id="email"
                  label="Email Address"
                  name="email"
                  autoComplete="email"
                  onChange={(e) => setUserEmail(e.target.value)}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  variant="outlined"
                  required
                  fullWidth
                  name="password"
                  label="Password"
                  type="password"
                  id="password"
                  autoComplete="current-password"
                  onChange={(e) => setUserPassword(e.target.value)}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  variant="outlined"
                  required
                  fullWidth
                  name="confirm password"
                  label="confirm Password"
                  type="password"
                  id="password"
                  autoComplete="current-password"
                  onChange={(e) => setUserRePassword(e.target.value)}
                />
              </Grid>
            </Grid>
            <Button
              type="submit"
              fullWidth
              variant="contained"
              color="primary"
              className={classes.submit}
            >
              Sign Up
            </Button>
            <Grid item xs={12}>
              By signing up, you agree to our terms of service and privacy
              policy.
            </Grid>
            <Grid container justify="flex-end">
              <Grid item>
                <Link href="/api/login" variant="body2">
                  Already have an account? Sign in
                </Link>
              </Grid>
            </Grid>
          </form>
          <br />
          <Message registered={registered} />
        </div>
      </Grid>
    </Grid>
  );
};

export default Signup;
