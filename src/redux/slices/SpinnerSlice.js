import { createSlice } from "@reduxjs/toolkit";

const slice = createSlice({
  name: "spinner",
  initialState: true,
  reducers: {
    setSpinner: () => {
      return true;
    },
    unsetSpinner: () => {
      return false;
    },
  },
});
export default slice.reducer;
// Actions
export const { setSpinner, unsetSpinner } = slice.actions;
