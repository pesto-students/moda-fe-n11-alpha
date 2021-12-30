import axios from "axios";

const uri = "newsletter";
export const get = async (email) => {
  try {
    let uri_withParams = `${uri}?email=${email}`;
    const res = await axios.get(uri_withParams);
    console.log(res);
    return res.data;
  } catch (e) {
    console.log(e.message);
  }
};
