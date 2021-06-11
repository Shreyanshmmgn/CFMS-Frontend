import axios from "axios";
import React, { useState, useEffect } from "react";
import { useParams } from "react-router";
import { useHistory } from "react-router-dom";

import "../css/verified.css";

const AcceptInvite = () => {
  let history = useHistory();
  const { email } = useParams();
  const [loading, setLoding] = useState(false);
  useEffect(() => {
    axios
      .post(process.env.REACT_APP_BACKEND_URL + `inviteAccepted/${email}`)
      .then((res) => {
        console.log("data saved suceessfull");
        if (res.status === 200) {
          setLoding(false);
        }
      })
      .catch((err) => {
        console.log("cant be connected !!", err);
      });
  }, []);
  return (
    <div>
      {loading ? (
        <div class="loader"></div>
      ) : (
        <div className="vs">
          <h2> Invite Valid For 1 Day Only!!!</h2>
          <button
            onClick={() => {
              history.push("/api/login");
            }}
          >
            Accept Invite
          </button>
        </div>
      )}
    </div>
  );
};

export default AcceptInvite;
