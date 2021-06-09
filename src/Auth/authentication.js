import axios from "axios";

const useAuthServices = () => {
 
  const logout = () => {
    console.log("Logout Called ");
    
      axios.post(process.env.REACT_APP_BACKEND_URL + "/logout").then((res) => {
      console.log("Logout Successfully hurrrh");

    });
  };

  return { logout };
};
export default useAuthServices;
