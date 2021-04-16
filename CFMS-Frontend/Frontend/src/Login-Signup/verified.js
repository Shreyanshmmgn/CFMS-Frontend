import axios from "axios";
import React, { useState } from "react";
import { useParams } from "react-router";

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
        <div>
          <h3>Loadinnnnnnggg..........</h3>{" "}
        </div>
      ) : (
        <h3>Verified Successfully </h3>
      )}
    </div>
  );
};

export default Verified;
