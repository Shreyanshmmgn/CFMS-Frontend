import React from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Login from "./login";

export default class Signup extends React.Component {
  constructor() {
    super();
    this.state = {
      user: null,
      email: null,
      password: null,
      repassword: null,
      nameError: "",
      passworderror: "",
      repassworderror: "",
    };
    this.changeName = this.changeName.bind(this);
    this.changeEmail = this.changeEmail.bind(this);
    this.changePassword = this.changePassword.bind(this);
    this.changeRepassword = this.changeRepassword.bind(this);
    console.log(this);
  }

  changeName = (event) => {
    this.setState({ user: event.target.value });
  };
  changeEmail = (event) => {
    this.setState({ email: event.target.value });
  };
  changePassword = (event) => {
    this.setState({ password: event.target.value });
  };
  changeRepassword = (event) => {
    this.setState({ repassword: event.target.value });
  };

  valid = () => {
    let x = true;
    if (this.state.user.length < 5) {
      this.setState({ nameError: "Name must be 5 characters long!" });
      x = false;
    }
    if (this.state.password.length < 8) {
      this.setState({
        passworderror: "Password must be 8 character long!",
      });
      x = false;
    }
    if (this.state.password !== this.state.repassword) {
      this.setState({ repassworderror: "Password does not match" });
      x = false;
    }
    if (
      this.state.user.length === 0 &&
      this.state.email.length === 0 &&
      this.state.repassword.length === 0
    ) {
      console.log("Enter Data");
      x = false;
    } else {
      return x;
    }
  };

  submitData = (event) => {
    event.preventDefault();
    this.setState({
      nameError: "" , passworderror: "" , repassworderror: ""
    })
    if (this.valid()) {
      console.warn(this.state);
      alert("Registered successfully");
    }
  };

  render() {
    return (
      <div className="basic">
        <div className="left-img">
          <img src="https://foreman.chitmonks.com/assets/img/login-img.png" />
        </div>
        <div className="card">
          <div className="card-header">
            <b>
              <h2>Sign Up</h2>
            </b>
            <div className="d-flex justify-content-end social_icon">
              <span>
                <i className="fab fa-facebook-square"></i>
              </span>
              <span>
                <i className="fab fa-google-plus-square"></i>
              </span>
              <span>
                <i className="fab fa-twitter-square"></i>
              </span>
            </div>
          </div>
          <div className="card-body">
            <form onSubmit={this.submitData}>
              <div className="input-group form-group">
                <div className="input-group-prepend">
                  <span className="input-group-text">
                    <i className="fas fa-user"></i>
                  </span>
                </div>
                <input
                  type="text"
                  name="user"
                  className="form-control"
                  placeholder="Enter Full Name"
                  onChange={this.changeName}
                />
              </div>
              <b>
                <p>{this.state.nameError}</p>
              </b>
              <div className="input-group form-group">
                <div className="input-group-prepend">
                  <span className="input-group-text">
                    <i className="fa fa-envelope-open"></i>
                  </span>
                </div>
                <input
                  type="email"
                  className="form-control"
                  name="email"
                  placeholder="Enter Email"
                  onChange={this.changeEmail}
                />
              </div>
              <div className="input-group form-group">
                <div className="input-group-prepend">
                  <span className="input-group-text">
                    <i className="fas fa-key"></i>
                  </span>
                </div>
                <input
                  type="password"
                  className="form-control"
                  name="password"
                  placeholder="Enter Password"
                  onChange={this.changePassword}
                />
              </div>
              <b>
                <p>{this.state.passworderror}</p>
              </b>
              <div className="input-group form-group">
                <div className="input-group-prepend">
                  <span className="input-group-text">
                    <i className="fas fa-key"></i>
                  </span>
                </div>
                <input
                  type="password"
                  className="form-control"
                  name="repassword"
                  placeholder="Enter Confirm Password"
                  onChange={this.changeRepassword}
                />
              </div>
              <b>
                <p>{this.state.repassworderror}</p>
              </b>
              <div className="form-group">
                <input
                  type="submit"
                  value="Sign Up"
                  className="btn float-right login_btn"
                />
              </div>
            </form>
          </div>
          <div className="card-footer">
            <div className="d-flex justify-content-center links">
              <h5>
                <b>Already have an account?</b>
              </h5>
              &nbsp;&nbsp;
              <h5>
                <b>
                  <Link to="/Login">Login</Link>
                </b>
              </h5>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
