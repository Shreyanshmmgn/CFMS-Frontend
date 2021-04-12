import axios from "axios";
import { useState } from "react";
import { useParams } from "react-router";

const ChangePassword = () => {
  const [password, setPassword] = useState("");
  const [sPassword, setSPassword] = useState("");
  const [match, setMatch] = useState(true);
  const { email } = useParams();

  const submitData = (e) => {
    e.preventDefault();
    if (password !== sPassword) {
      setMatch(false);
    } else {
      const pass = { password };
      axios
        .post(`http://localhost:5000/changePassword/${email}`, pass)
        .then((res) => {
          if (res.status === 200) {
            console.log("Password changed successfully ");
          } else {
            console.log("Check password again");
          }
        })
        .catch((err) => {
          console.log(err);
        });
    }
  };

  return (
    <div>
      {/* <form action="submit" onSubmit={submitData}>
        <h3 class="p-3 mb-2 bg-light text-dark">Password : </h3>
        <input
          type="text"
          id="inputField"
          onChange={(e) => setPassword(e.target.value)}
        />
        <br />
        <h3 class="p-3 mb-2 bg-light text-dark">Enter Password again : </h3>
        <input
          type="password"
          id="inputField"
          onChange={(e) => setSPassword(e.target.value)}
        />
        <button>Submit</button>
      </form>
      <h1>Forgot Password</h1> */}
      <div>
        {match ? (
          <h2>Change your password !! </h2>
        ) : (
          <h2>Password does not match !! </h2>
        )}
        <form onSubmit={submitData}>
          <div class="form-group">
            <label for="exampleInputEmail1">Password </label>
            <input
              type="text"
              class="form-control"
              id="exampleInputEmail1"
              aria-describedby="emailHelp"
              placeholder="Enter password"
              onChange={(e) => {
                setPassword(e.target.value);
              }}
            />
            <small id="emailHelp" class="form-text text-muted">
              Enter a strong password
            </small>
          </div>
          <div class="form-group">
            <label for="exampleInputPassword1"> ReEnter same Password</label>
            <input
              type="password"
              class="form-control"
              id="exampleInputPassword1"
              placeholder="Password"
              onChange={(e) => {
                setSPassword(e.target.value);
              }}
            />
          </div>
          <button type="submit" class="btn btn-primary" id="sub-button">
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default ChangePassword;
