import axios from "axios";

export const get = async (uri) => {
  
  const res = await axios.get(uri);
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
