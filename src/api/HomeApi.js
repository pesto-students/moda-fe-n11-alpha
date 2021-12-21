import axios from "axios";
const uri = "/home";
export const get = async () => {
  try {
    const res = await axios.get(uri);
    return res.data;
  } catch (e) {
    console.log(e.message);
  }
};
export const getPopularProducts = async () => {
  try {
    const res = await axios.get("/product/popularProducts");
    return res.data;
  } catch (e) {
    console.log(e.message);
  }
};
