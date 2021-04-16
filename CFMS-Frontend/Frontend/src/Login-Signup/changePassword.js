import axios from "axios";
import { useState } from "react";
import { useParams } from "react-router";
import "../css/changePassword.css"

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
      <div className="card2">
        <div className="card-header">
          <h2>Change your password</h2>
        </div>
        <div className="card-body">
          <form action="" onSubmit={submitData}>
            <div className="input-group form-group">
              <div className="input-group-prepend">
                <span className="input-group-text">
                  <i className="fas fa-user"></i>
                </span>
              </div>
              <input
                type="password"
                className="form-control"
                placeholder="Enter Strong Password"
                required
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
            <br></br>
            <div className="input-group form-group">
              <div className="input-group-prepend">
                <span className="input-group-text">
                  <i className="fas fa-key"></i>
                </span>
              </div>
              <input
                type="password"
                className="form-control"
                placeholder="Confirm Password"
                required
                onChange={(e) => setSPassword(e.target.value)}
              />
            </div>
            <br></br>
            {match ? <h2></h2> : <h2>Password does not match !! </h2>}
           
            <div className="form-group">
              <input
                type="submit"
                value="Submit"
                className="btn float-right login_btn"
              />
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ChangePassword;
