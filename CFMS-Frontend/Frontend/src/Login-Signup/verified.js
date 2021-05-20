import axios from "axios";
import React, { Component, useState } from "react";
import { useParams } from "react-router";
import "../css/verified.css";

const Verified = () => {
  const [loading, setLoding] = useState(true);
  const { id } = useParams();
  axios.post(`http://localhost:5000/activate/user/${id}`).then((res) => {
    console.log("Post req succesfull!");
    setLoding(false);
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
        <span className="tick"> &#10004;<h1 className="successfully">Verified Successfully</h1></span>
        </div>
      )}
    </div>
  );
};

export default Verified;
