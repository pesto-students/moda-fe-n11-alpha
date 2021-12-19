const axios = require("axios");

axios.defaults.baseURL = "http://localhost:2000/api/v1";
// axios.defaults.withCredentials = true;
axios.interceptors.request.use((req) => {
  console.log(`${req.method} ${req.url}`, "Request is made", req);
  // Important: request interceptors **must** return the request.
  return req;
});
