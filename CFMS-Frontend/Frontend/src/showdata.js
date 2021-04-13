import React from "react";

var data = {
  FullName: "Shyam Yadav",
  Email: "shyamyadav21099@gmail.com",
  Phone: 8920299998,
  DOB: "02-10-1999",
  Current_address: "jsncjwncdcwken",
  Permanent_address: "jcnwjenxjwen",
  Gender: "Male",
  Martial_Status: "Single",
};

const Data = () => {
  return (
    <form>
      <h3>
        <label for="fname">Fullname: </label>
        <span>{data.FullName}</span>
        <br />
        <label for="lname">Email: </label>
        <span>{data.Email}</span>
        <br />
        <label for="lname">Email: </label>
        <span>{data.FullName}</span>
        <br />
        <label for="lname">DOB: </label>
        <span>{data.DOB}</span>
        <br />
        <label for="lname">current_address: </label>
        <span>{data.current_address}</span>
        <br />
        <label for="lname">Permanent_address: </label>
        <span>{data.Permanent_address}</span>
        <br />
        <label for="lname">Gender: </label>
        <span>{data.Gender}</span>
        <br />
        <label for="lname"> Martial_Status: </label>
        <span>{data.Martial_Status}</span>
      </h3>
    </form>
  );
};

export default Data;
