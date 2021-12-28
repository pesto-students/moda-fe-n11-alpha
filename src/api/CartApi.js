import axios from "axios";

export const get = async (uri, userId) => {
  let uri_withParams = `${uri}?userId=${userId}`;
  const res = await axios.get(uri_withParams);
  console.log(res);
  return res.data;
};
export const post = async (uri, data) => {
  const res = await axios.post(uri, data);
  return res;
};

export const Delete = async (uri, { email, id, size, color, qty }) => {
  let uri_withParams = `${uri}?email=${email}&id=${id}&size=${size}&color=${color}&qty=${qty}`;
  const res = await axios.delete(uri_withParams);
  return res.data;
};
