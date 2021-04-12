import "./register.css";
import React, { useState, useReducer } from "react";
const RegistrationForm = () => {
  //   const [state, dispatch] = useReducer(reducer, initialState, init);
  return (
    <>
      <main class="d-flex p-2">
        <div class="input-group d-inline-flex p-2">
          <span class="input-group-text">First and last name</span>
          <input type="text" aria-label="First name" class="form-control" />
          <input type="text" aria-label="Last name" class="form-control" />
        </div>
      </main>
    </>
  );
};

export default RegistrationForm;
