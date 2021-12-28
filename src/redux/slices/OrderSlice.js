import { createSlice } from "@reduxjs/toolkit";
import { get } from "../../api/OrdersApi";

const slice = createSlice({
  name: "order",
  initialState: [],
  reducers: {
    GetOrders: (state, action) => {
      return action.payload;
    },
  },
});
export default slice.reducer;
const { GetOrders } = slice.actions;
export const getOrdersForUser = (email) => async (dispatch) => {
  try {
    const cart = await get(email);
    dispatch(GetOrders(cart));
  } catch (e) {
    throw e;
  }
};
