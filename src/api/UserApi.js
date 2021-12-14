import axios from "axios";
export const post = async (uri, data) => {
  try {
    console.log("****the data sent is****", data);
    let res = await axios.post(uri, data);
    console.log("result", res);
    return res.data;
  } catch (e) {
    console.log("error occured");
    throw e;
  }
};

export const login = async (uri, { username, email, password }) => {
  let res = await axios.post(uri, { email, password });
  console.log("result", res);
  return res.data;
};
