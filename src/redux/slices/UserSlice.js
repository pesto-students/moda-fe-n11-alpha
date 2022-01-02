import { createSlice } from "@reduxjs/toolkit";
import { toast } from "react-toastify";
import { login, post, logout } from "../../api/UserApi";

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
    await post(data);
    dispatch(AddUser(data));
  } catch (e) {
    console.log(e.msg, e);
    toast.error("Duplicate User.User with this mail already exists.");
  }
};
export const LogUserInStore =
  (data = {}) =>
  async (dispatch) => {
    try {
      const res = await login(`/user/login`, data);
      localStorage.setItem("email", res.email);
      dispatch(AddUser(res));
    } catch (e) {
      throw e;
    }
  };
export const LogOutUserInStore = (data) => async (dispatch) => {
  try {
    console.log("the logout user is called");
    await logout("/logout", data);
    localStorage.removeItem("email");
    localStorage.clear();
    dispatch(LogoutUser());
  } catch (e) {
    throw e;
  }
};
