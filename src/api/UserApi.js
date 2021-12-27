import axios from "axios";
export const post = async (uri, data) => {
  try {
    let res = await axios.post(uri, data);
    return res.data;
  } catch (e) {
    throw e;
  }
};

export const login = async (
  uri,
  { username = "", email = "", password = "" }
) => {
  try {
    let res = await axios.post(uri, { email, password });
    return res.data;
  } catch (e) {
    throw e;
  }
};
