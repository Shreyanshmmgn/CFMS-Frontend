import React from "react";

export default class dashBoard extends React.Component {
  render() {
    return (
      <div className="basic">
        <div className="left-img">
          <img src="https://foreman.chitmonks.com/assets/img/login-img.png" />
        </div>
        <div className="card">
          <div className="card-header">
            <b>
              <h2>Welcome to dashboard </h2>
            </b>
          </div>
        </div>
      </div>
    );
  }
}
