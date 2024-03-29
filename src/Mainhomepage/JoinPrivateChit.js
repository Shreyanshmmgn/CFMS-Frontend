import React, { useState } from "react";
import Container from "@material-ui/core/Container";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import Snackbar from '@material-ui/core/Snackbar';
// import MuiAlert from '@material-ui/lab/Alert';

import Icon from "@material-ui/core/Icon";

import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  root: {
    "& .MuiTextField-root": {
      margin: theme.spacing(3),
    },
  },
  button: {
    margin: theme.spacing(1),
    marginLeft:'25px',
  },
})); 




        // This is for snackbar success message
// function Alert(props) {
//     return <MuiAlert elevation={6} variant="filled" {...props} />;
//   }
   
function App() {
  const classes = useStyles();
  const [open, setOpen] = React.useState(false); // This is for snackbar success message

  const [inputFields, setInputFields] = useState([
    { firstName: "", emailId: "" },
  ]);

  const handleSubmit = (e) => {
    e.preventDefault();
    setOpen(true);  // This is for snackbar success message
    console.log("InputFields", inputFields);
  };

   // This is for snackbar success message
  const handleClose = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }

    setOpen(false);
  };


  const handleChangeInput = (id, event) => {
    const newInputFields = inputFields.map((i) => {
      if (id === i.id) {
        i[event.target.name] = event.target.value;
      }
      return i;
    });

    setInputFields(newInputFields);
  };


  return (
    <Container style={{ marginLeft: "350px", marginTop: "50px" }}>
      <h1>Join Another Club</h1>
      <form className={classes.root} onSubmit={handleSubmit}>
        {inputFields.map((inputField) => (
          <div key={inputField.id}>
            <TextField
              name="firstName"
              label="Name"
              variant="filled"
              required
              value={inputField.firstName}
              autofocus
              onChange={(event) => handleChangeInput(inputField.id, event)}
            />
            <TextField
              name="emailId"
              label="Email ID"
              variant="filled"
              required
              value={inputField.emailId}
              autofocus
              onChange={(event) => handleChangeInput(inputField.id, event)}
              //   helperText="This field is mandatory"
            />

          </div>
        ))}
        <Button
          className={classes.button}
          variant="contained"
          color="secondary"
          type="submit"
          endIcon={<Icon>send</Icon>}
          onClick={handleSubmit}
        >
          Send
        </Button>
        {/* snackbar success message */}
        <Snackbar  open={open} autoHideDuration={4000} message = "Added Successfully" onClose={handleClose}>
        {/* <Alert onClose={handleClose} severity="success">
          This is a success message!
        </Alert> */}
      </Snackbar>
      </form>
    </Container>
  );
}

export default App;
