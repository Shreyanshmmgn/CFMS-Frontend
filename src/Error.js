import React from "react";
import "./css/NotAuth.css";
const Error = () => {
  return (
    <div style={{backgroundColor: "#4fc3f7"}}>
      <div style={{backgroundColor: "#4fc3f7"}} className="mainbox">
        <div className="err">4</div>
        <i className="far fa-question-circle fa-spin"></i>
        <div className="err2">4</div>
        <div className="msg">
          OOPS! PAGE NOT FOUND
          <p>
            Let's go{" "}
            <a className="round" href="/">
              home
            </a>{" "}
            and try from there.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Error;
