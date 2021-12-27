import { createSlice } from "@reduxjs/toolkit";
import { login, post } from "../../api/UserApi";

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
    const res = await post(uri, data);
    dispatch(AddUser(data));
  } catch (e) {
    console.log("error logged", e.message);
    throw e;
  }
};
export const LogUserInStore =
  (data = {}) =>
  async (dispatch) => {
    try {
      console.log("log user is called");
      const res = await login(`/user/login`, data);
      console.log(res);
      localStorage.setItem("jwt", res.token);
      localStorage.setItem("email", res.email);
      dispatch(AddUser(res));
    } catch (e) {
      throw e;
    }
  };
export const LogOutUserInStore = (data) => async (dispatch) => {
  try {
    localStorage.clear();
    dispatch(LogoutUser());
  } catch (e) {
    throw e;
  }
};
