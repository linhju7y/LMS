// login(): POST {username, password} & save JWT to Local Storage
// logout(): remove JWT from Local Storage
// register(): POST {username, email, password}
// getCurrentUser(): get stored user information (including JWT)

// import axios from "axios";
import { instance } from "./instance";

export const login = async (params) => {
  try {
    var FormData = require("form-data");
    const formData = new FormData();

    formData.append("username", params.username);
    formData.append("password", params.password);

    const res = await instance.post("/api/Account/Login", formData, {});
    return res;
  } catch (error) {
    console.log("login error", error);
    return Promise.reject(error);
  }
};

export const registerAPI = async (params: {
  username: String;
  email: String;
  password: String;
  roles: Array<String>;
}) => {
  try {
    const res = await instance.post("/auth/signup", params);
    return res;
  } catch (error) {
    console.log("register error", error);
    return Promise.reject(error);
  }
};
