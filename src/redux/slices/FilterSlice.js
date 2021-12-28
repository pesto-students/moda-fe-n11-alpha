import { createSlice } from "@reduxjs/toolkit";
import { GetproductsInStore } from "../../redux/slices/ProductSlice";

// Slice
const slice = createSlice({
  name: "filter",
  initialState: { color: "", size: "", gender: "", text: "", page: 1 },
  reducers: {
    AddorChangeColorSizeText: (state, { payload }) => {
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
