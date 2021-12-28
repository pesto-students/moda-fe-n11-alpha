import { createSlice } from "@reduxjs/toolkit";
import { get, getPopularProducts } from "../../api/HomeApi";
import { toast } from "react-toastify";

const slice = createSlice({
  name: "home",
  initialState: {},
  reducers: {
    GetProducts: (state, action) => {
      return action.payload;
    },
    GetPopularProducts: (state, action) => {
      state.PopularProduct = action.payload;
      return state;
    },
  },
});
export default slice.reducer;
const { GetProducts, GetPopularProducts } = slice.actions;

export const getHomePageData = () => async (dispatch) => {
  const data = await get();
  const popularProducts = await getPopularProducts();

  dispatch(GetProducts(data && data[0]));
  dispatch(GetPopularProducts(popularProducts));
  try {
  } catch (e) {}
};
