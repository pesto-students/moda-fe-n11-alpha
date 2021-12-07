import { createSlice } from "@reduxjs/toolkit";
import { get, post, put, deleteproduct } from "../../api";
import { toast } from "react-toastify";
const uri = "http://localhost:5000/api/v1/product";
// Slice
const slice = createSlice({
  name: "product",
  initialState: [],
  reducers: {
    Getproduct: (state, action) => {
      state = action.payload;
      return state;
    },
    Addproduct: (state, action) => {
      let data = action.payload;
      data.id = state.length + 1;
      state.push(action.payload);
    },
    Deleteproduct: (state, action) => {
      state = state.filter((product) => {
        return product._id !== action.payload;
      });
      return state;
    },
    Editproduct: (state, action) => {
      const index = state.findIndex(
        (product) => product.id === action.payload.id
      );
      state[index] = action.payload;
    },
  },
});
export default slice.reducer;

// Actions
const { Addproduct, Editproduct, Deleteproduct, Getproduct } = slice.actions;

export const GetproductsInStore = () => async (dispatch) => {
  try {
    const res = await get(uri);
    dispatch(Getproduct(res));
  } catch (e) {
    return console.error(e.message);
  }
};

export const AddproductInStore = (data) => async (dispatch) => {
  try {
    const res = await post(uri, data);
    toast("Add sucessfull");
    dispatch(Addproduct(res));
  } catch (e) {
    toast("Add failed");
    return console.error(e.message);
  }
};
export const EditproductInStore = (data) => async (dispatch) => {
  try {
    const res = await put(uri, data);
    toast("Edit sucessfull");
    return dispatch(Editproduct(res));
  } catch (e) {
    toast("Edit failed");
    return console.error(e.message);
  }
};
export const DeleteproductInStore = (data) => async (dispatch) => {
  try {
    let r = await deleteproduct(uri, data);
    toast("delete sucessfull");
    return dispatch(Deleteproduct(data));
  } catch (e) {
    toast("delete failed");
    return console.error(e.message);
  }
};
