import React, { useEffect, useState } from "react";
import axios from "axios";

let defaultValues = {
  userName: "",
  email: "",
  hash: "",
  salt: "",
  date: "",
  userData: {
    name: "",
    email: "",
    phoneNumber: "",
    currentAddress: "",
    permanentAdress: "",
    state: "",
    pincode: "",
    dob: "",
    martialStatus: "",
    occupation: "",
    monthlyIncome: "",
    gender: "",
    picture: null,
  },
};

// const fetchData = async () => {
//   await axios.post(`http://localhost:5000/sendUserData`).then((res) => {
//     if (res.status === 200) {
//       defaultValues = res.data;
//       // console.log(res.data);
//       // Redirect to dashboard
//     } else {
//       // Somthing went wrong try again
//     }
//   });
// };

const Data = () => {
  const [data, setData] = useState(false);
  const fetchData = async () => {
    await axios.post(`http://localhost:5000/sendUserData`).then((res) => {
      if (res.status === 200) {
        defaultValues = res.data;
        setData(true);
      } else {
        // Somthing went wrong try again
      }
    });
  };
  useEffect(() => {
    fetchData();
  }, []);

  return (
    <>
      {data ? (
        <div className="card1">
          <form>
            <h3>
              <label for="fname">Fullname: </label>
              <span> {defaultValues.userData.name}</span>
              <br />
              <label for="lname">Pincode: </label>
              <span> {defaultValues.userData.pincode}</span>
              <br />
              <label for="lname">Email: </label>
              <span> {defaultValues.userData.email}</span>
              <br />
              <label for="lname">DOB: </label>
              <span> {defaultValues.userData.dob}</span>
              <br />
              <label for="lname">current_address: </label>
              <span> {defaultValues.userData.currentAddress}</span>
              <br />
              <label for="lname">Permanent_address: </label>
              <span> {defaultValues.userData.permanentAdress}</span>
              <br />
              <label for="lname">Gender: </label>
              <span> {defaultValues.userData.gender}</span>
              <br />
              <label for="lname"> Martial_Status: </label>
              <span> {defaultValues.userData.martialStatus}</span>
            </h3>
          </form>
        </div>
      ) : (
        <h3> No data for this user</h3>
      )}
    </>
  );
};

export default Data;
