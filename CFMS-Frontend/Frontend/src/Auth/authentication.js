import moment from "moment";
import { useCookies } from "react-cookie";
// import { useState, useEffect } from "react";

// token: "Bearer eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdW…RDYgepQpLpcdBCorzx_rJVdwnAMeOZPtpiNylgtQZJf0YjX4M",
// expires: "1d"

export const useAuthServices = (token) => {
  const [cookies, setCookies] = useCookies({});
  const setCookie = () => {
    const expires = moment().add(token.expires);
    console.log("Expires : ", expires);

    setCookies("Expires", expires, { path: "/" });
    setCookies("Token", token.token, { path: "/" });
    console.log("over : ", cookies);
  };
  const logout = () => {};
  const isLoggedIn = () => {};
  const isLoggedOut = () => {};
  const expiredOrNot = () => {};

  return { setCookie, logout, isLoggedIn, isLoggedOut };
};
