import { createSlice } from "@reduxjs/toolkit";

import { toast } from "react-toastify";

import { GetproductsInStore } from "../../redux/slices/ProductSlice";

// Slice
const slice = createSlice({
  name: "filter",
  initialState: { color: "", size: "", text: "" },
  reducers: {
    AddorChangeColorSizeText: (state, { payload }) => {
      console.log("****the payload is as follows***", payload);
      return { ...state, ...payload };
    },
  },
});
export default slice.reducer;

export const { AddorChangeColorSizeText } = slice.actions;
export const UpdateFilterAndUpdateProducts = (data) => (dispatch) => {
  dispatch(AddorChangeColorSizeText(data));
  dispatch(GetproductsInStore({ ...data }));
};
