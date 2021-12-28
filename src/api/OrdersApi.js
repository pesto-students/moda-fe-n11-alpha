import axios from "axios";

const uri = "/orders";

export const get = async (email) => {
  let uri_withParams = `${uri}?email=${email}`;
  const res = await axios.get(uri_withParams);
  return res.data;
};
