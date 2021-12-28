import axios from "axios";
const uri = "/otp";
export const post = async (email) => {
  const uri_complete = uri + "/generateOtp";
  const res = await axios.post(uri_complete, { email });
  console.log(res);
  return res.data;
};
export const postNewPassword = async (email, otp, password) => {
  const uri_complete = uri + "/verifyOtp";
  const res = await axios.post(uri_complete, { email, otp, password });
  console.log(res);
  return res.data;
};
