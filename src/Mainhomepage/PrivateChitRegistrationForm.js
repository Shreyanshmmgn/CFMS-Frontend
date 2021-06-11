import React, { useState } from "react";
import axios from "axios";
import "./../css/MemberDetails.css";
import AddNewMembers from "./AddNewMembers";
//*--------------------------------------------------------------------------------------------*

let defaultValues = {
  managerName: "",
  totalMembers: "",
  amount: "",
  timePeriod: "",
  fundSize: "",
  commission: "",
  startDate: "",
  maximumBidValue: "",
  minimumBidValue: "",
  monthlyInstallment: "",
  minimumInstallment: "",
  maximumInstallment: "",
};
//*--------------------------------------------------------------------------------------------*

const PrivateChitRegistrationForm = () => {
  const [values, setValues] = useState(defaultValues);
  const [form, setForm] = useState(true);

  const submitData = (e) => {
    e.preventDefault();
    console.log(values);
    try {
      axios
        .post(process.env.REACT_APP_BACKEND_URL + `registerPrivateChit`, values)
        .then((res) => {
          if (res.status === 200) {
            console.log("Data saveed successfully", res.success);
            setForm(false);
          }
        });
    } catch (error) {
      // error.send("Some Error occured please try again");
      console.log("data not saved  !!", error);
    }
  };

  // <AddNewMembers />;

  return (
    <>
      {form ? (
        <div className="back2">
          <div className="container2">
            <div className="title">
              <b>
                <h2 style={{ fontFamily: "cursive" }}>Create New Chit Group</h2>
              </b>
            </div>
            <div className="content">
              <form onSubmit={submitData}>
                <div className="user-details">
                  <div className="input-box">
                    <span className="details">Manager Name</span>
                    <input
                      type="text"
                      required
                      onChange={(event) => {
                        event.persist();
                        setValues((values) => ({
                          ...values,
                          managerName: event.target.value,
                        }));
                      }}
                    />
                  </div>
                  {/* <div className="input-box">
                    <span className="details">Total Members</span>
                    <input
                      type="text"
                      required
                      onChange={(event) => {
                        event.persist();
                        setValues((values) => ({
                          ...values,
                          totalMembers: event.target.value,
                        }));
                      }}
                    />
                  </div>
                  <div className="input-box">
                    <span className="details">Amount</span>
                    <input
                      type="text"
                      maxLength="10"
                      required
                      onChange={(event) => {
                        event.persist();
                        setValues((values) => ({
                          ...values,
                          amount: event.target.value,
                        }));
                      }}
                    />
                  </div>
                  <div className="input-box">
                    <span className="details">Time Period</span>
                    <input
                      type="text"
                      name="Time Period"
                      required
                      onChange={(event) => {
                        event.persist();
                        setValues((values) => ({
                          ...values,
                          timePeriod: event.target.value,
                        }));
                      }}
                    />
                  </div>
                  <div className="input-box">
                    <span className="details">Fund Size</span>
                    <input
                      type="text"
                      name="Fund Size"
                      required
                      onChange={(event) => {
                        event.persist();
                        setValues((values) => ({
                          ...values,
                          fundSize: event.target.value,
                        }));
                      }}
                    />
                  </div>
                  <div className="input-box">
                    <span className="details">Commission</span>
                    <input
                      type="text"
                      name="Commission"
                      // placeholder="Enter your Pincodecode"
                      // pattern="[0-9]{6}"
                      // title="Please enter 6 digit code"
                      required
                      onChange={(event) => {
                        event.persist();
                        setValues((values) => ({
                          ...values,
                          commission: event.target.value,
                        }));
                      }}
                    />
                  </div>
                  <div className="input-box">
                    <span className="details">Start Date</span>
                    <input
                      type="date"
                      // id="birthday"
                      name="Start Date"
                      required
                      onChange={(event) => {
                        event.persist();
                        setValues((values) => ({
                          ...values,
                          startDate: event.target.value,
                        }));
                      }}
                    />
                  </div>

                  <div className="input-box">
                    <span className="details">Maximum Bid in Percentage</span>
                    <input
                      type="text"
                      name="Maximum Bid in Percentage"
                      required
                      onChange={(event) => {
                        event.persist();
                        setValues((values) => ({
                          ...values,
                          maximumBidValue: event.target.value,
                        }));
                      }}
                    />
                  </div>
                  <div className="input-box">
                    <span className="details">Minimum Bid in Percentage</span>
                    <input
                      type="text"
                      name="Minimum Bid in Percentage"
                      required
                      onChange={(event) => {
                        event.persist();
                        setValues((values) => ({
                          ...values,
                          minimumBidVaue: event.target.value,
                        }));
                      }}
                    />
                  </div>
                  <div className="input-box">
                    <span className="details">Monthly Installment</span>
                    <input
                      type="text"
                      name="Monthly Installment"
                      required
                      onChange={(event) => {
                        event.persist();
                        setValues((values) => ({
                          ...values,
                          monthlyInstallment: event.target.value,
                        }));
                      }}
                    />
                  </div> */}
                  <div className="input-box">
                    <span className="details">Minimum Installment</span>
                    <input
                      type="text"
                      name="Minimum Installment"
                      required
                      onChange={(event) => {
                        event.persist();
                        setValues((values) => ({
                          ...values,
                          minimumInstallment: event.target.value,
                        }));
                      }}
                    />
                  </div>
                  <div className="input-box">
                    <span className="details">Maximum Installment</span>
                    <input
                      type="text"
                      name="Maximum Installment"
                      required
                      onChange={(event) => {
                        event.persist();
                        setValues((values) => ({
                          ...values,
                          maximumInstallment: event.target.value,
                        }));
                      }}
                    />
                  </div>
                </div>
                <div className="button">
                  <input type="submit" name="Create Chit Group" />
                </div>
              </form>
            </div>
          </div>
        </div>
      ) : (
        <AddNewMembers />
      )}
    </>
  );
};
export default PrivateChitRegistrationForm;
