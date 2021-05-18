// import { useState } from "babel-plugin-react-html-attrs";
import axios from "axios";
import { useState } from "react";
import { Link } from "react-router-dom";
import "../css/forgotpass.css";

const ForgotPassword = () => {
  const [email, setEmail] = useState("");
  const [idCorrect, setIdCorrect] = useState(false);
  const [linkSent, setLinkSent] = useState(false);

  const submitData = (e) => {
    e.preventDefault();
    const data = { email };
    axios.post("http://localhost:5000/forgotPassword", data).then((res) => {
      if (res.status === 200) {
        setLinkSent(true);
      } else {
        setIdCorrect(true);
      }
    });
  };

  return (
    <div className="basic1">
      <div className="card1">
        <div className="card-header">
          <b>
            <h4>Forgot Password</h4>
          </b>
        </div>
        <h2 id="pp"></h2>
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
            {idCorrect ? <h3>Wrong ID </h3> : <h4></h4>}
            {linkSent ? <h3>Link Sucessfully sent </h3> : <h4></h4>}

            <div className="form-group">
              <input
                type="submit"
                value="Submit"
                className="btn float-right login_btn"
              />
            </div>
          </form>
        </div>
        <br />
        <br />
        <div className="card-footer">
          <div className="d-flex justify-content-center links">
            <h5>
              <b>Back to</b>
              &nbsp;&nbsp;
              <b>
                <Link
                  style={{ color: "#051972", paddingTop: "30px" }}
                  to="/Login"
                >
                  Login
                </Link>
              </b>
            </h5>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ForgotPassword;
