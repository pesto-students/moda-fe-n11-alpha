import axios from "axios";

export const get = async (uri, userId) => {
  let uri_withParams = `${uri}?userId=${userId}`;
  const res = await axios.get(uri_withParams);
  console.log(res);
  return res.data;
};
export const post = async (uri, data) => {
  console.log("***this is cart api***", data);
  const res = await axios.post(uri, data);
  console.log(res);
  return res.data;
};
