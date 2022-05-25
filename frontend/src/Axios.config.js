
import Axios from "axios";
const axios = (baseURL) => {
  const instance = Axios.create({
    baseURL:process.env.REACT_APP_BASEURL, 
    // baseURL: "http://localhost:3000", //back-end

    headers: {
      "Content-Type": "application/json",
      "Access-Control-Allow-Origin": "*",
      "Access-Control-Allow-Credentials": "true",
    },
   
  });
  return instance;
};
export { axios };
export default axios();
