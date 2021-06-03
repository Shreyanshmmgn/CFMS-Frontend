import React from "react";
import axios from "axios";
import "./../css/MemberDetails.css";
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
  minimumBidVaue: "",
  monthlyInstallment: "",
  minimumInstallment: "",
  maximumInstallment: "",
};
//*--------------------------------------------------------------------------------------------*

const MemberDetails = () => {
  return (
    <>
      <div className="back2">
        <div className="container2">
          <div className="title">
            <b>
              <h2 style={{ fontFamily: "cursive" }}>Create New Chit Group</h2>
            </b>
            {/* {submited ? (
              <h3>Data submited Cheers</h3>
            ) : (
              <h3>Pleaase enter data</h3>
            )} */}
          </div>
          <div className="content">
            <form>
              <div className="user-details">
                <div className="input-box">
                  <span className="details">Manager Name</span>
                  <input
                    type="text"
                    required
                    // onChange={(event) => {
                    //   event.persist();
                    //   setValues((values) => ({
                    //     ...values,
                    //     name: event.target.value,
                    //   }));
                    // }}
                  />
                </div>
                <div className="input-box">
                  <span className="details">Total Members</span>
                  <input
                    type="text"
                    required
                    // onChange={(event) => {
                    //   event.persist();
                    //   setValues((values) => ({
                    //     ...values,
                    //     email: event.target.value,
                    //   }));
                    // }}
                  />
                </div>
                <div className="input-box">
                  <span className="details">Amount</span>
                  <input
                    type="text"
                    maxLength="10"
                    required
                    // onChange={(event) => {
                    //   event.persist();
                    //   setValues((values) => ({
                    //     ...values,
                    //     phoneNumber: event.target.value,
                    //   }));
                    // }}
                  />
                </div>
                <div className="input-box">
                  <span className="details">Time Period</span>
                  <input
                    type="text"
                    name="Time Period"
                    required
                    // onChange={(event) => {
                    //   event.persist();
                    //   setValues((values) => ({
                    //     ...values,
                    //     currentAddress: event.target.value,
                    //   }));
                    // }}
                  />
                </div>
                <div className="input-box">
                  <span className="details">Fund Size</span>
                  <input
                    type="text"
                    name="Fund Size"
                    required
                    // onChange={(event) => {
                    //   event.persist();
                    //   setValues((values) => ({
                    //     ...values,
                    //     permanentAdress: event.target.value,
                    //   }));
                    // }}
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
                    // onChange={(event) => {
                    //   event.persist();
                    //   setValues((values) => ({
                    //     ...values,
                    //     pincode: event.target.value,
                    //   }));
                    // }}
                  />
                </div>
                <div className="input-box">
                  <span className="details">Start Date</span>
                  <input
                    type="date"
                    // id="birthday"
                    name="Start Date"
                    required
                    // onChange={(event) => {
                    //   event.persist();
                    //   setValues((values) => ({
                    //     ...values,
                    //     dob: event.target.value,
                    //   }));
                    // }}
                  />
                </div>

                <div className="input-box">
                  <span className="details">Maximum Bid in Percentage</span>
                  <input
                    type="text"
                    name="Maximum Bid in Percentage"
                    required
                    // onChange={(event) => {
                    //   event.persist();
                    //   setValues((values) => ({
                    //     ...values,
                    //     occupation: event.target.value,
                    //   }));
                    // }}
                  />
                </div>
                <div className="input-box">
                  <span className="details">Minimum Bid in Percentage</span>
                  <input
                    type="text"
                    name="Minimum Bid in Percentage"
                    required
                    // onChange={(event) => {
                    //   event.persist();
                    //   setValues((values) => ({
                    //     ...values,
                    //     occupation: event.target.value,
                    //   }));
                    // }}
                  />
                </div>
                <div className="input-box">
                  <span className="details">Monthly Installment</span>
                  <input
                    type="text"
                    name="Monthly Installment"
                    required
                    // onChange={(event) => {
                    //   event.persist();
                    //   setValues((values) => ({
                    //     ...values,
                    //     monthlyIncome: event.target.value,
                    //   }));
                    // }}
                  />
                </div>
                <div className="input-box">
                  <span className="details">Minimum Installment</span>
                  <input
                    type="text"
                    name="Minimum Installment"
                    required
                    // onChange={(event) => {
                    //   event.persist();
                    //   setValues((values) => ({
                    //     ...values,
                    //     monthlyIncome: event.target.value,
                    //   }));
                    // }}
                  />
                </div>
                <div className="input-box">
                  <span className="details">Maximum Installment</span>
                  <input
                    type="text"
                    name="Maximum Installment"
                    required
                    // onChange={(event) => {
                    //   event.persist();
                    //   setValues((values) => ({
                    //     ...values,
                    //     monthlyIncome: event.target.value,
                    //   }));
                    // }}
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
    </>
  );
};

export default MemberDetails;