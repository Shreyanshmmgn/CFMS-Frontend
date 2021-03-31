import React from "react";
import Signup from './signup'
import {Link, Route} from 'react-router-dom'
const Login = () => {

  return (
    <div class="basic">
      <div class="left-img">
        <img src="https://www.chitmonks.com/assets/images/about.png" />
      </div>
      <div class="card">
        <div class="card-header">
          <h2>Partner Login</h2>
          <div class="d-flex justify-content-end social_icon">
            <span>
              <i class="fab fa-facebook-square"></i>
            </span>
            <span>
              <i class="fab fa-google-plus-square"></i>
            </span>
            <span>
              <i class="fab fa-twitter-square"></i>
            </span>
          </div>
        </div>
        <div class="card-body">
          <form action="">
            <div class="input-group form-group">
              <div class="input-group-prepend">
                <span class="input-group-text">
                  <i class="fas fa-user"></i>
                </span>
              </div>
              <input type="text" class="form-control" placeholder="username" />
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
                placeholder="password"
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
                <a href="#">Forgot your password?</a>
              </b>
            </h5>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
