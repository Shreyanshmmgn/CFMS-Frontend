import axios from "axios";
import { useState } from "react";
import { useParams } from "react-router";
import Button from "@material-ui/core/Button";
import CssBaseline from "@material-ui/core/CssBaseline";
import TextField from "@material-ui/core/TextField";
import Typography from "@material-ui/core/Typography";
import Container from "@material-ui/core/Container";
import { makeStyles } from "@material-ui/core/styles";

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

const ChangePassword = () => {
  const [password, setPassword] = useState("");
  const [sPassword, setSPassword] = useState("");
  const [match, setMatch] = useState(true);
  const [passwordMsg, setPasswordMsg] = useState(false);
  const { email } = useParams();

  const submitData = (e) => {
    setMatch(true);
    setPasswordMsg(false);

    e.preventDefault();
    if (password !== sPassword) {
      setMatch(false);
    } else {
      const pass = { password };
      axios
        .post(`http://localhost:5000/changePassword/${email}`, pass)
        .then((res) => {
          if (res.status === 200) {
            setPasswordMsg(true);
          } else {
            console.log("Check password again");
          }
        })
        .catch((err) => {
          console.log(err);
        });
    }
  };
  const classes = useStyles();

  return (
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <div className={classes.paper}>
        <Typography component="h1" variant="h5">
          Change Password
        </Typography>
        <form className={classes.form} onSubmit={submitData}>
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            id="password"
            label="password"
            name="password"
            type="text"
            autoFocus
            onChange={(e) => setPassword(e.target.value)}
          />
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            id="password"
            label="password"
            name="password"
            type="password"
            autoFocus
            onChange={(e) => setSPassword(e.target.value)}
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

        {match ? <h2></h2> : <h2>Password does not match !! </h2>}
      </div>
    </Container>
  );
};

export default ChangePassword;
