/*
 * @Author: 20181101remon mindy80230@gmail.com
 * @Date: 2022-06-14 10:11:47
 * @LastEditors: 20181101remon mindy80230@gmail.com
 * @LastEditTime: 2022-06-14 10:23:22
 * @FilePath: \MING--PersonalWebsite\frontend\src\Axios.config.js
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */

import Axios from "axios";
const axios = (baseURL) => {
  console.log(process.env.REACT_APP_BASEURL)
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
