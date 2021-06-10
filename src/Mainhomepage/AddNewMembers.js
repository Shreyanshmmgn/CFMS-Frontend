import React, { useState } from "react";
import Container from "@material-ui/core/Container";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import IconButton from "@material-ui/core/IconButton";

import Snackbar from "@material-ui/core/Snackbar";
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
    marginLeft: "25px",
  },
}));

function AddNewMembers() {
  const classes = useStyles();
  const [open, setOpen] = React.useState(false); // This is for snackbar success message

  const [inputFields, setInputFields] = useState([
    { firstName: "", emailId: "" },
  ]);

  const handleSubmit = (e) => {
    e.preventDefault();
    setOpen(true); // This is for snackbar success message
    console.log("InputFields", inputFields);
  };

  // This is for snackbar success message
  const handleClose = (event, reason) => {
    if (reason === "clickaway") {
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

  const handleAddFields = () => {
    setInputFields([...inputFields, { firstName: "", emailId: "" }]);
  };

  const handleRemoveFields = (id) => {
    const values = [...inputFields];
    values.splice(
      values.findIndex((value) => value.id === id),
      1
    );
    setInputFields(values);
  };

  return (
    <Container style={{ marginLeft: "350px", marginTop: "50px" }}>
      <h1>Add New Members</h1>
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
            <IconButton
              disabled={inputFields.length === 1}
              onClick={() => handleRemoveFields(inputField.id)}
              style={{ fontSize: 50, marginTop: "25px" }}
            >
              <Icon color="secondary">delete_circle</Icon>
            </IconButton>
            <IconButton
              onClick={handleAddFields}
              style={{ fontSize: 50, marginTop: "25px" }}
            >
              <Icon color="primary">add_circle</Icon>
            </IconButton>
          </div>
        ))}
        <Button
          className={classes.button}
          variant="contained"
          color="primary"
          type="submit"
          endIcon={<Icon>send</Icon>}
          onClick={handleSubmit}
        >
          Send
        </Button>
        {/* snackbar success message */}
        <Snackbar
          open={open}
          autoHideDuration={4000}
          message="Added Successfully"
          onClose={handleClose}
        >
          {/* <Alert onClose={handleClose} severity="success">
          This is a success message!
        </Alert> */}
        </Snackbar>
      </form>
    </Container>
  );
}

export default AddNewMembers;
