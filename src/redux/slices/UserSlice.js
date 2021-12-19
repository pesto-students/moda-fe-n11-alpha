import { createSlice } from "@reduxjs/toolkit";
import { toast } from "react-toastify";
import { post, login } from "../../api/UserApi";

const uri = "/user";

const slice = createSlice({
  name: "user",
  initialState: {},
  reducers: {
    LogoutUser: (state, action) => {
      return {};
    },
    GetUser: (state, action) => {
      state = action.payload;
      return state;
    },
    AddUser: (state, action) => {
      let { username, email } = action.payload;
      return { username, email };
    },

    EditUser: (state, action) => {
      const index = state.findIndex(
        (product) => product.id === action.payload.id
      );
      state[index] = action.payload;
    },
  },
});
export default slice.reducer;
// Actions
const { AddUser, LogoutUser } = slice.actions;

export const AddUserInStore = (data) => async (dispatch) => {
  try {
    console.log("Add userin store called with data", data);
    const res = await post(uri, data);
    dispatch(AddUser(data));
  } catch (e) {
    console.log("error logged", e.message);
    throw e;
  }
};
export const LogUserInStore = (data) => async (dispatch) => {
  try {
    const res = await login(`/user/login`, data);
    dispatch(AddUser(res));
  } catch (e) {
    console.log("error caught in store *******");
    throw e;
  }
};
export const LogOutUserInStore = (data) => async (dispatch) => {
  try {
    dispatch(LogoutUser());
  } catch (e) {
    throw e;
  }
};
