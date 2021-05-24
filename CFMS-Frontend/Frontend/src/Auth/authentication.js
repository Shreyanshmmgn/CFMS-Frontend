import moment from "moment";
import { useCookies } from "react-cookie";
import axios from "axios";
// import { useState, useEffect } from "react";

export const useAuthServices = () => {
  const [cookies, setCookies] = useCookies({});

  //* Function to save cookies with relevent data
  // const setCookie = (token) => {
  //   console.log("Token : ", token);
  //   // const expires = moment().add(token.expires);
  //   // setCookies("Expires", expires, { path: "/" });
  //   // setCookies("Token", token.token, { path: "/" });
  // };

  //* Function to save cookies with relevent data

  const logout = () => {
    console.log("Logout Called ");
    axios.post("http://localhost:5000/logout").then((res) => {
      console.log("Logout Successfully hurrrh");
    });
  };

  //* Function to save cookies with relevent data
  const isLoggedIn = () => {};

  //* Function to save cookies with relevent data
  const isLoggedOut = () => {};

  //* Function to save cookies with relevent data
  const expiredOrNot = () => {};

  return { logout, isLoggedIn, isLoggedOut };
};
