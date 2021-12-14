import axios from "axios";

export const get = async (uri, { color = "", size = "", text = "" }) => {
  let uri_withParams = `${uri}?color=${color}&size=${size}&text=${text}`;
  const res = await axios.get(uri_withParams);
  console.log(res);
  return res.data;
};
export const post = async (uri, data) => {
  let res = await fetch(uri, {
    method: "post",
    headers: {
      Accept: "application/json, text/plain, */*",
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  });
  console.log("res***", res);
  res = await res.json();
  return res;
};
export const put = async (uri, data) => {
  let res = await fetch(uri, {
    method: "put",
    headers: {
      Accept: "application/json, text/plain, */*",
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  });
  res = await res.json();
  return res;
};
export const deleteproduct = async (uri, data) => {
  let d = { id: data };
  d = JSON.stringify(d);
  let res = await fetch(uri, {
    method: "DELETE",
    headers: {
      Accept: "application/json, text/plain, */*",
      "Content-Type": "application/json",
    },
    body: d,
  });
  return;
};
