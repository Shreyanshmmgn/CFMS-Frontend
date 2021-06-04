// // import { useState } from "babel-plugin-react-html-attrs";
import axios from "axios";
import { useState } from "react";
import Button from "@material-ui/core/Button";
import CssBaseline from "@material-ui/core/CssBaseline";
import TextField from "@material-ui/core/TextField";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";

const useStyles = makeStyles((theme) => ({
  paper: {
    marginTop: theme.spacing(8),
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

const ForgotPassword = () => {
  const [email, setEmail] = useState("");

  const submitData = (e) => {
    e.preventDefault();
    const data = { email };
    axios
      .post("http://localhost:5000/forgotPassword", data)
      .then((res) => {
        if (res.status === 200) {
          document.getElementById("pp").innerHTML = "Password link sent";
        }
      })
      .catch((err) => {
        console.log(err);
        document.getElementById("pp").innerHTML = "Worng email id";
      });
  };
  const classes = useStyles();
  return (
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <div className={classes.paper}>
        {/* <Avatar className={classes.avatar}>
          <LockOutlinedIcon />  
        </Avatar> */}
        <Typography component="h1" variant="h5">
          Forgot Password
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
            onChange={(e) => {
              setEmail(e.target.value);
            }}
          />
          <Button
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            className={classes.submit}
          >
            Send
          </Button>
        </form>

        <h2 id="pp"></h2>
      </div>
    </Container>
  );
};

export default ForgotPassword;

{
  /* <div className="basic1">
      <div className="card1">
        <div className="card-header">
          <b><h4>
            Forgot Password
          </h4>
          </b>
        </div>
        <h2 id="pp">
        </h2>
        <div className="card-body">
          <form action="" onSubmit={submitData}>
            <div className="input-group form-group">
              <div className="input-group-prepend">
                <span className="input-group-text">
                  <i className="fas fa-user"></i>
                </span>
              </div>
              <input
                type="email"
                className="form-control"
                placeholder="Enter valid Email"
                required
                onChange={(e) => {
                  setEmail(e.target.value);
                }}
              />
            </div>
            {idCorrect ? (
              <h3></h3>
            ) : (
              <h4>Entered Wrong ID </h4>
            )}
            <h4 id="pp"></h4>

            <div className="form-group">
              <input
                type="submit"
                value="Submit"
                className="btn float-right login_btn"
              />
            </div>
          </form>
        </div>
        <br/>
        <br/>
        <div className="card-footer">
          <div className="d-flex justify-content-center links">
            <h5>
              <b>Back to</b>
              &nbsp;&nbsp;
              <b>
                <Link style={{ color: "#051972", paddingTop: '30px' }} to="/Signup">
                  Login
                </Link>
              </b>
            </h5>
          </div>
        </div>
      </div>
    </div> */
}
