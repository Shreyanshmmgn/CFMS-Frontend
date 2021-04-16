import React, { useState } from "react";
import RegistrationForm from "../RegistrationForm/registrationForm.js";
import { Link } from "react-router-dom";
import axios from "axios";
import "../css/Login.css";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const submitData = (event) => {
    event.preventDefault();
    const givenData = {
      email: email,
      password: password,
    };
    axios.post("http://localhost:5000/login", givenData).then((res) => {
      if (res.status === 200) {
        console.log(res.status);
        console.log("Login Successfull");
        setTimeout(() => {
          window.location.href = "/registrationForm";
        }, 4000);
      } else if (res.status === 401) {
        console.log("Wrong Password enter");
      }
    });
    //! window.location = "/"; To change to some page
  };

  return (
    <div class="basic">
      <div class="left-img">
        <img
          src="https://www.chitmonks.com/assets/images/about.png"
          alt="CFMS"
        />
      </div>
      <div class="card">
        <div class="card-header">
          <h2>Partner Login</h2>
          {/* <div class="d-flex justify-content-end social_icon">
            <span>
              <i class="fab fa-facebook-square"></i>
            </span>
            <span>
              <i class="fab fa-google-plus-square"></i>
            </span>
            <span>
              <i class="fab fa-twitter-square"></i>
            </span>
          </div> */}
        </div>
        <div class="card-body">
          <form action="" onSubmit={submitData}>
            <div class="input-group form-group">
              <div class="input-group-prepend">
                <span class="input-group-text">
                  <i class="fas fa-user"></i>
                </span>
              </div>
              <input
                type="text"
                class="form-control"
                placeholder="Email"
                required
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <br></br>
            <div class="input-group form-group">
              <div class="input-group-prepend">
                <span class="input-group-text">
                  <i class="fas fa-key"></i>
                </span>
              </div>
              <input
                type="password"
                class="form-control"
                placeholder="Password"
                required
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
            <br></br>
            <div class="row align-items-center remember">
              <input type="checkbox" />
              Remember Me
            </div>
            <br></br>
            <div class="form-group">
              <input
                type="submit"
                value="Login"
                class="btn float-right login_btn"
              />
            </div>
          </form>
        </div>
        <div class="card-footer">
          <div class="d-flex justify-content-center links">
            <h5>
              <b>Don't have an account?</b>
            </h5>
            &nbsp;&nbsp;
            <h5>
              <b>
                <Link to="/Signup">Signup</Link>
              </b>
            </h5>
          </div>
          <div class="d-flex justify-content-center">
            <h5>
              <b>
                <Link to="/forgotPassword">Forgot Password ?</Link>
              </b>
            </h5>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
