import axios from "axios";
const uri = "/user";
export const post = async (data) => {
  let res;
  try {
    res = await axios.post(uri, data);
    return res.data;
  } catch (e) {
    console.log("****", e, e.message, "*****", res);
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

export const logout = async () => {
  const logout_uri = `${uri}/logout`;
  try {
    let res = await axios.get(logout_uri);
    return res.data;
  } catch (e) {
    throw e;
  }
};
