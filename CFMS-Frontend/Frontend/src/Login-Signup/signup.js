import React from "react";
import { Link } from "react-router-dom";
import axios from "axios";

export default class Signup extends React.Component {
  constructor() {
    super();
    this.state = {
      user: null,
      email: null,
      password: null,
      repassword: null,
      nameError: "",
      emailError: "",
      passworderror: "",
      repassworderror: "",
    };
    this.changeName = this.changeName.bind(this);
    this.changeEmail = this.changeEmail.bind(this);
    this.changePassword = this.changePassword.bind(this);
    this.changeRepassword = this.changeRepassword.bind(this);
    // console.log(this);
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
    if (
      this.state.password === null &&
      this.state.user === null &&
      this.state.repassword === null &&
      this.state.email === null
    ) {
      this.setState({
        passworderror: "Please fill out this field.",
        repassworderror: "Please fill out this field.",
        nameError: "Please fill out this field.",
        emailError: "Please fill out this field.",
      });
      x = false;
      console.log("False 1");
    }
    if (this.state.user === null) {
      this.setState({
        nameError: "Please fill out this field.",
      });
      x = false;
      console.log("False 2");
    }
    if (this.state.user !== null) {
      if (this.state.user.length < 5) {
        this.setState({ nameError: "Name must be 5 characters long!" });
        x = false;
        console.log("False 3");
      }
    }
    if (this.state.password !== null) {
      if (this.state.password.length < 2) {
        this.setState({
          passworderror: "Password must be 8 character long!",
        });
        x = false;
        console.log("False 4");
      }
    }
    if (this.state.password === "" || this.state.password === null) {
      this.setState({
        passworderror: "Please fill out this field.",
      });
      x = false;
      console.log("False 5");
    }
    if (this.state.password !== this.state.repassword) {
      this.setState({ repassworderror: "Password does not match" });
      x = false;
    }
    return x;
  };

  submitData = (event) => {
    event.preventDefault();
    this.setState({
      nameError: "",
      passworderror: "",
      repassworderror: "",
    });
    if (this.valid()) {
      const regeisterData = {
        userName: this.state.user,
        email: this.state.email,
        password: this.state.password,
      };
      axios
        .post("http://localhost:5000/signup", regeisterData)
        .then((res) => console.log(res.data));
      //! window.location = "/"; To change to some page
      this.setState({
        user: "",
        email: "",
        password: "",
      });
      var modal = document.getElementById("myModal");
      modal.style.display = "block";
      setTimeout(() => {
        window.location.href = "/Login";
      }, 4000);
    }
  };
  // data-toggle="modal"
  render() {
    return (
      <div className="basic">
        <div id="myModal" class="modal">
          <div class="modal-dialog modal-dialog-centered" role="document">
            <div class="modal-content">
              <div class="modal-header">
                <h5
                  class="modal-title p-3 mb-2 bg-success text-white"
                  id="exampleModalLongTitle"
                >
                  Please Verify your email !!!
                </h5>
                {/* <button
                  type="button"
                  class="close"
                  data-dismiss="modal"
                  aria-label="Close"
                >
                  <span aria-hidden="true">&times;</span>
                </button> */}
              </div>
              <div class="modal-footer">
                {/* <button
                  type="button"
                  class="btn btn-secondary"
                  data-dismiss="modal"
                >
                  Close
                </button> */}
              </div>
            </div>
          </div>
        </div>
        <div className="left-img">
          <img
            src="https://foreman.chitmonks.com/assets/img/login-img.png"
            alt=" "
          />
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
                <p style={{ color: "red" }}>{this.state.nameError}</p>
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
              <b>
                <p style={{ color: "red" }}>{this.state.emailError}</p>
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
                  name="password"
                  placeholder="Enter Password"
                  onChange={this.changePassword}
                />
              </div>
              <b>
                <p style={{ color: "red" }}>{this.state.passworderror}</p>
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
                <p style={{ color: "red" }}>{this.state.repassworderror}</p>
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
