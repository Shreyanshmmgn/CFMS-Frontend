import moment from "moment";
import { useCookies } from "react-cookie";
// import { useState, useEffect } from "react";

export const useAuthServices = () => {
  const [cookies, setCookies] = useCookies({});

  //* Function to save cookies with relevent data
  const setCookie = (token) => {
    const expires = moment().add(token.expires);
    setCookies("Expires", expires, { path: "/" });
    setCookies("Token", token.token, { path: "/" });
  };

  //* Function to save cookies with relevent data

  const logout = () => {};

  //* Function to save cookies with relevent data
  const isLoggedIn = () => {};

  //* Function to save cookies with relevent data
  const isLoggedOut = () => {};

  //* Function to save cookies with relevent data
  const expiredOrNot = () => {};

  return { setCookie, logout, isLoggedIn, isLoggedOut };
};
