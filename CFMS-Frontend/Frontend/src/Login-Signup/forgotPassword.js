// import { useState } from "babel-plugin-react-html-attrs";
import axios from "axios";
import { useState } from "react";

const ForgotPassword = () => {
  const [email, setEmail] = useState("");
  const [idCorrect, setIdCorrect] = useState(true);

  const submitData = (e) => {
    e.preventDefault();
    const data = { email };
    axios.post("http://localhost:5000/forgotPassword", data).then((res) => {
      if (res.status === 200) {
        console.log("Password change link sent");
      } else {
        setIdCorrect(false);
      }
    });
  };

  return (
    <div>
      {idCorrect ? (
        <h3>Enter your registered email ID !</h3>
      ) : (
        <h3>Wrong Id entered </h3>
      )}
      {/* <form action="submit" onSubmit={submitData}>
        <input
          type="email"
          id="inputField"
          onChange={(e) => setEmail(e.target.value)}
        />
        <button>Submit</button>
      </form> */}
      <form onSubmit={submitData}>
        <div class="form-group">
          <input
            type="email"
            class="form-control"
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
            placeholder="Enter Email Id "
            onChange={(e) => {
              setEmail(e.target.value);
            }}
          />
          <small id="emailHelp" class="form-text text-muted">
            If not varified varify you email id first
          </small>
        </div>
        <button type="submit" class="btn btn-primary" id="sub-button">
          Submit
        </button>
      </form>
    </div>
  );
};

export default ForgotPassword;
