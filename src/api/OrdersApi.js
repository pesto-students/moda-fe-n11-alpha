import axios from "axios";

const uri = "/orders";

export const get = async (email) => {
  try {
    const res = await axios.get(uri);
    return res.data;
  } catch (e) {
    console.log(e);
  }
};
