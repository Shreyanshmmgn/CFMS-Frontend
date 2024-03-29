import axios from "axios";
import React, { useState } from "react";
import { useParams } from "react-router";
import "../css/verified.css";

const Verified = () => {
  const [loading, setLoding] = useState(true);
  const { id } = useParams();
  axios
    .post(process.env.REACT_APP_BACKEND_URL + `activate/user/${id}`)
    .then((res) => {
      console.log("Post req succesfull!");
      if (res.status === 200) {
        setLoding(false);
      } else {
        console.log("cant be connected !!");
      }
    });
  return (
    <div>
      {loading ? (
        <div class="loader"></div>
      ) : (
        <div className="vs">
          <span className="tick">
            {" "}
            &#10004;<h1 className="successfully">Verified Successfully</h1>
          </span>
        </div>
      )}
    </div>
  );
};

export default Verified;
