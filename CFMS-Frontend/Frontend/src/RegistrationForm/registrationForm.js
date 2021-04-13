import React from "react";
import "./register.css";
const RegistrationForm = () => {
  return (
    <>
    <div className="back">
      <div className="container1">
        <div className="title">Registration</div>
        <div className="content">
          <form action="#">
            <div className="user-details">
              <div className="input-box">
                <span className="details">Full Name</span>
                <input type="text" placeholder="Enter your name" required />
              </div>
              <div className="input-box">
                <span className="details">Upload your photo</span>
                <input type="file" className="form-control-file"></input>
              </div>
              <div className="input-box">
                <span className="details">Email</span>
                <input type="email" placeholder="Enter your email" required />
              </div>
              <div className="input-box">
                <span className="details">Phone Number</span>
                <input
                  type="text"
                  placeholder="Phone Number"
                  maxlength="10" 
                  pattern="[7-9]{1}[0-9]{9}"
                  title="Phone number with 7-9 and remaing 9 digit with 0-9"
                  required
                />
              </div>
              <div className="input-box">
                <span className="details">Current Address</span>
                <input type="text" placeholder="Enter your address" required />
              </div>
              <div className="input-box">
                <span className="details">Permanent Address</span>
                <input type="text" placeholder="Enter your address" required />
              </div>

              <div className="input-box">
                <span className="details">State</span>
                <select name="state">
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
                />
              </div>
              <div className="input-box">
                <span className="details">DOB</span>
                <input type="date" id="birthday" name="birthday" required/>
              </div>
              <div className="input-box">
                <span className="details">Martial Status</span>
                <select name="Martial Status">
                  <option value="Married">Married</option>
                  <option value="Single">Single</option>
                  <option value="Divorced">Divorced</option>
                  <option value="Separated">Separated</option>
                  <option value="Widowed">Widowed</option>
                </select>
              </div>
              <div className="input-box">
                  <span className="details">Occupation</span>
                  <input type="text" name="Occupation" placeholder="Occupation" required/>
              </div>
              <div className="input-box">
                  <span className="details">Monthly Income</span>
                  <input type="text" name="Monthly Income" placeholder="Enter Monthly Income" required/>
              </div>
              <div className="input-box">
                <span className="details">Gender</span>
                <select name="Martial Status">
                  <option value="Married">Male</option>
                  <option value="Single">Female</option>
                  <option value="Divorced">Prefer not to say</option>
                </select>
              </div>
              </div>
            <div className="button">
              <input type="submit" value="Register" />
            </div>
          </form>
        </div>
      </div>
    </div>
    </>
  );
};

export default RegistrationForm;
