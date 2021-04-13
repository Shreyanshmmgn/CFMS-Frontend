import React, { useState } from "react";
import "./register.css";
import axios from "axios";

let defaultValues = {
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
};

const RegistrationForm = () => {
  const [submited, setSubmited] = useState(false);
  const [values, setValues] = useState(defaultValues);
  const submitData = (e) => {
    e.preventDefault();
    var selectedState = document.getElementById("allStates");
    var sState = selectedState.options[selectedState.selectedIndex].text;

    var sG = document.getElementById("gender");
    var selectedGender = sG.options[sG.selectedIndex].text;

    var sMS = document.getElementById("mStatus");
    var selectedSMartialStatus = sMS.options[sMS.selectedIndex].text;

    console.log(sState, selectedGender);

    setValues((values) => ({
      ...values,
      state: sState,
      gender: selectedGender,
      martialStatus: selectedSMartialStatus,
    }));

    console.log(values);
    axios.post(`http://localhost:5000/registration`, values).then((res) => {
      if (res.status === 200) {
        console.log("Registration Done !!");
        setTimeout(() => {
          window.location.href = "/data";
        }, 3000);
        // Redirect to dashboard
      } else {
        // Somthing went wrong try again
      }
    });
    setSubmited(true);
  };
  return (
    <>
      <div className="container">
        <div className="title">Registration Form :</div>
        <div className="content">
          <form onSubmit={submitData}>
            <div className="user-details">
              <div className="input-box">
                <span className="details">Full Name</span>
                <input
                  type="text"
                  placeholder="Enter your name"
                  required
                  onChange={(event) => {
                    event.persist();
                    setValues((values) => ({
                      ...values,
                      name: event.target.value,
                    }));
                  }}
                />
              </div>
              <div className="input-box">
                <span className="details">Email</span>
                <input
                  type="email"
                  placeholder="Enter your email"
                  required
                  onChange={(event) => {
                    event.persist();
                    setValues((values) => ({
                      ...values,
                      email: event.target.value,
                    }));
                  }}
                />
              </div>
              <div className="input-box">
                <span className="details">Phone Number</span>
                <input
                  type="text"
                  placeholder="Phone Number"
                  maxLength="10"
                  pattern="[7-9]{1}[0-9]{9}"
                  title="Phone number with 7-9 and remaing 9 digit with 0-9"
                  required
                  onChange={(event) => {
                    event.persist();
                    setValues((values) => ({
                      ...values,
                      phoneNumber: event.target.value,
                    }));
                  }}
                />
              </div>
              <div className="input-box">
                <span className="details">Current Address</span>
                <input
                  type="text"
                  placeholder="Enter your address"
                  required
                  onChange={(event) => {
                    event.persist();
                    setValues((values) => ({
                      ...values,
                      currentAddress: event.target.value,
                    }));
                  }}
                />
              </div>
              <div className="input-box">
                <span className="details">Permanent Address</span>
                <input
                  type="text"
                  placeholder="Enter your address"
                  required
                  onChange={(event) => {
                    event.persist();
                    setValues((values) => ({
                      ...values,
                      permanentAdress: event.target.value,
                    }));
                  }}
                />
              </div>

              <div className="input-box">
                <span className="details">State</span>
                <select name="state" id="allStates">
                  <option value="Andhra Pradesh">Andhra Pradesh</option>
                  <option value="Andaman and Nicobar Islands">
                    Andaman and Nicobar Islands
                  </option>
                  <option value="Arunachal Pradesh">Arunachal Pradesh</option>
                  <option value="Assam">Assam</option>
                  <option value="Bihar">Bihar</option>
                  <option value="Chandigarh">Chandigarh</option>
                  <option value="Chhattisgarh">Chhattisgarh</option>
                  <option value="Dadar and Nagar Haveli">
                    Dadar and Nagar Haveli
                  </option>
                  <option value="Daman and Diu">Daman and Diu</option>
                  <option value="Delhi">Delhi</option>
                  <option value="Lakshadweep">Lakshadweep</option>
                  <option value="Puducherry">Puducherry</option>
                  <option value="Goa">Goa</option>
                  <option value="Gujarat">Gujarat</option>
                  <option value="Haryana">Haryana</option>
                  <option value="Himachal Pradesh">Himachal Pradesh</option>
                  <option value="Jammu and Kashmir">Jammu and Kashmir</option>
                  <option value="Jharkhand">Jharkhand</option>
                  <option value="Karnataka">Karnataka</option>
                  <option value="Kerala">Kerala</option>
                  <option value="Madhya Pradesh">Madhya Pradesh</option>
                  <option value="Maharashtra">Maharashtra</option>
                  <option value="Manipur">Manipur</option>
                  <option value="Meghalaya">Meghalaya</option>
                  <option value="Mizoram">Mizoram</option>
                  <option value="Nagaland">Nagaland</option>
                  <option value="Odisha">Odisha</option>
                  <option value="Punjab">Punjab</option>
                  <option value="Rajasthan">Rajasthan</option>
                  <option value="Sikkim">Sikkim</option>
                  <option value="Tamil Nadu">Tamil Nadu</option>
                  <option value="Telangana">Telangana</option>
                  <option value="Tripura">Tripura</option>
                  <option value="Uttar Pradesh">Uttar Pradesh</option>
                  <option value="Uttarakhand">Uttarakhand</option>
                  <option value="West Bengal">West Bengal</option>
                </select>
              </div>
              <div className="input-box">
                <span className="details">Pincode</span>
                <input
                  type="text"
                  placeholder="Enter your Pincodecode"
                  pattern="[0-9]{6}"
                  title="Please enter 6 digit code"
                  required
                  onChange={(event) => {
                    event.persist();
                    setValues((values) => ({
                      ...values,
                      pincode: event.target.value,
                    }));
                  }}
                />
              </div>
              <div className="input-box">
                <span className="details">DOB</span>
                <input
                  type="date"
                  id="birthday"
                  name="birthday"
                  required
                  onChange={(event) => {
                    event.persist();
                    setValues((values) => ({
                      ...values,
                      dob: event.target.value,
                    }));
                  }}
                />
              </div>
              <div className="input-box">
                <span className="details">Martial Status</span>
                <select name="Martial Status" id="mStatus">
                  <option value="Married">Married</option>
                  <option value="Single">Single</option>
                  <option value="Divorced">Divorced</option>
                  <option value="Separated">Separated</option>
                  <option value="Widowed">Widowed</option>
                </select>
              </div>
              <div className="input-box">
                <span className="details">Occupation</span>
                <input
                  type="text"
                  name="Occupation"
                  placeholder="Occupation"
                  required
                  onChange={(event) => {
                    event.persist();
                    setValues((values) => ({
                      ...values,
                      occupation: event.target.value,
                    }));
                  }}
                />
              </div>
              <div className="input-box">
                <span className="details">Monthly Income</span>
                <input
                  type="text"
                  name="Monthly Income"
                  placeholder="Enter Monthly Income"
                  required
                  onChange={(event) => {
                    event.persist();
                    setValues((values) => ({
                      ...values,
                      monthlyIncome: event.target.value,
                    }));
                  }}
                />
              </div>
              <div className="input-box">
                <span className="details">Gender</span>
                <select name="Martial Status" id="gender">
                  <option value="Married">Male</option>
                  <option value="Single">Female</option>
                  <option value="Divorced">Prefer not to say</option>
                </select>
              </div>

              <div className="input-box">
                <span className="details">Upload your photo</span>
                <input
                  type="file"
                  className="form-control-file"
                  // value={FormData.picture}
                  onChange={(event) => {
                    event.persist();
                    setValues((values) => ({
                      ...values,
                      picture: event.target.files[0],
                    }));
                  }}
                ></input>
                <img src="" alt="upload-image" />
              </div>
              {submited ? (
                <h3>Data submited Cheers</h3>
              ) : (
                <h3>Pleaase enter data</h3>
              )}
            </div>

            <div className="button">
              <input type="submit" />
            </div>
          </form>
        </div>
      </div>
    </>
  );
};
// const RegistrationForm = () => {
//   return (
//     <>
//       <div className="back">
//         <div className="container1">
//           <div className="title">Registration</div>
//           <div className="content">
//             <form action="#">
//               <div className="user-details">
//                 <div className="input-box">
//                   <span className="details">Full Name</span>
//                   <input type="text" placeholder="Enter your name" required />
//                 </div>
//                 <div className="input-box">
//                   <span className="details">Upload your photo</span>
//                   <input type="file" className="form-control-file"></input>
//                 </div>
//                 <div className="input-box">
//                   <span className="details">Email</span>
//                   <input type="email" placeholder="Enter your email" required />
//                 </div>
//                 <div className="input-box">
//                   <span className="details">Phone Number</span>
//                   <input
//                     type="text"
//                     placeholder="Phone Number"
//                     maxlength="10"
//                     pattern="[7-9]{1}[0-9]{9}"
//                     title="Phone number with 7-9 and remaing 9 digit with 0-9"
//                     required
//                   />
//                 </div>
//                 <div className="input-box">
//                   <span className="details">Current Address</span>
//                   <input
//                     type="text"
//                     placeholder="Enter your address"
//                     required
//                   />
//                 </div>
//                 <div className="input-box">
//                   <span className="details">Permanent Address</span>
//                   <input
//                     type="text"
//                     placeholder="Enter your address"
//                     required
//                   />
//                 </div>
//                 <div className="input-box">
//                   <span className="details">State</span>
//                   <select name="state">
//                     <option value="Andhra Pradesh">Andhra Pradesh</option>
//                     <option value="Andaman and Nicobar Islands">
//                       Andaman and Nicobar Islands
//                     </option>
//                     <option value="Arunachal Pradesh">Arunachal Pradesh</option>
//                     <option value="Assam">Assam</option>
//                     <option value="Bihar">Bihar</option>
//                     <option value="Chandigarh">Chandigarh</option>
//                     <option value="Chhattisgarh">Chhattisgarh</option>
//                     <option value="Dadar and Nagar Haveli">
//                       Dadar and Nagar Haveli
//                     </option>
//                     <option value="Daman and Diu">Daman and Diu</option>
//                     <option value="Delhi">Delhi</option>
//                     <option value="Lakshadweep">Lakshadweep</option>
//                     <option value="Puducherry">Puducherry</option>
//                     <option value="Goa">Goa</option>
//                     <option value="Gujarat">Gujarat</option>
//                     <option value="Haryana">Haryana</option>
//                     <option value="Himachal Pradesh">Himachal Pradesh</option>
//                     <option value="Jammu and Kashmir">Jammu and Kashmir</option>
//                     <option value="Jharkhand">Jharkhand</option>
//                     <option value="Karnataka">Karnataka</option>
//                     <option value="Kerala">Kerala</option>
//                     <option value="Madhya Pradesh">Madhya Pradesh</option>
//                     <option value="Maharashtra">Maharashtra</option>
//                     <option value="Manipur">Manipur</option>
//                     <option value="Meghalaya">Meghalaya</option>
//                     <option value="Mizoram">Mizoram</option>
//                     <option value="Nagaland">Nagaland</option>
//                     <option value="Odisha">Odisha</option>
//                     <option value="Punjab">Punjab</option>
//                     <option value="Rajasthan">Rajasthan</option>
//                     <option value="Sikkim">Sikkim</option>
//                     <option value="Tamil Nadu">Tamil Nadu</option>
//                     <option value="Telangana">Telangana</option>
//                     <option value="Tripura">Tripura</option>
//                     <option value="Uttar Pradesh">Uttar Pradesh</option>
//                     <option value="Uttarakhand">Uttarakhand</option>
//                     <option value="West Bengal">West Bengal</option>
//                   </select>
//                 </div>
//                 <div className="input-box">
//                   <span className="details">Pincode</span>
//                   <input
//                     type="text"
//                     placeholder="Enter your Pincodecode"
//                     pattern="[0-9]{6}"
//                     title="Please enter 6 digit code"
//                     required
//                   />
//                 </div>
//                 <div className="input-box">
//                   <span className="details">DOB</span>
//                   <input type="date" id="birthday" name="birthday" required />
//                 </div>
//                 <div className="input-box">
//                   <span className="details">Martial Status</span>
//                   <select name="Martial Status">
//                     <option value="Married">Married</option>
//                     <option value="Single">Single</option>
//                     <option value="Divorced">Divorced</option>
//                     <option value="Separated">Separated</option>
//                     <option value="Widowed">Widowed</option>
//                   </select>
//                 </div>
//                 <div className="input-box">
//                   <span className="details">Occupation</span>
//                   <input
//                     type="text"
//                     name="Occupation"
//                     placeholder="Occupation"
//                     required
//                   />
//                 </div>
//                 <div className="input-box">
//                   <span className="details">Monthly Income</span>
//                   <input
//                     type="text"
//                     name="Monthly Income"
//                     placeholder="Enter Monthly Income"
//                     required
//                   />
//                 </div>
//                 <div className="input-box">
//                   <span className="details">Gender</span>
//                   <select name="Martial Status">
//                     <option value="Married">Male</option>
//                     <option value="Single">Female</option>
//                     <option value="Divorced">Prefer not to say</option>
//                   </select>
//                 </div>
//               </div>
//               <div className="button">
//                 <input type="submit" value="Register" />
//               </div>
//             </form>
//           </div>
//         </div>
//       </div>
//     </>
//   );
// };

export default RegistrationForm;
