import axios from "axios";
import { jwtDecode } from "jwt-decode";

export const login = (data, callback) => {
  axios
    .post("https://fakestoreapi.com/auth/login", data)
    .then((res) => {
      callback(true, res.data.token);
    })
    .catch((err) => {
      console.log(false, err);
    });
};

export const getUsername = (token) => {
  // decode token to get username
  const decoded = jwtDecode(token);
  return decoded.user;
};
