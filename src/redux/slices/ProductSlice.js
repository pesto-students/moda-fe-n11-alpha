import { createSlice } from "@reduxjs/toolkit";
import { get, post, put, deleteproduct } from "../../api/ProductAPI";
import { toast } from "react-toastify";
const uri = "/product";
// Slice
const slice = createSlice({
  name: "product",
  initialState: [],
  reducers: {
    Getproduct: (state, action) => {
      state = action.payload;
      return state;
    },
    AddMoreItems: (state, action) => {
      return [...state, ...action.payload];
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
const { Addproduct, AddMoreItems, Editproduct, Deleteproduct, Getproduct } =
  slice.actions;

export const GetproductsInStore =
  ({ color = "", size = "", text = "", gender = "", page = 1 }) =>
  async (dispatch) => {
    try {
      const res = await get(uri, { color, size, text, gender, page });
      if (page === 1) dispatch(Getproduct(res));
      else dispatch(AddMoreItems(res));
    } catch (e) {
      console.log(e.message);
      return e.message;
    }
  };

export const AddproductInStore = (data) => async (dispatch) => {
  try {
    const res = await post(uri, data);
    dispatch(Addproduct(res));
  } catch (e) {
    return console.error(e.message);
  }
};
export const EditproductInStore = (data) => async (dispatch) => {
  try {
    const res = await put(uri, data);
    return dispatch(Editproduct(res));
  } catch (e) {
    return console.error(e.message);
  }
};
export const DeleteproductInStore = (data) => async (dispatch) => {
  try {
    let r = await deleteproduct(uri, data);
    return dispatch(Deleteproduct(data));
  } catch (e) {
    return console.error(e.message);
  }
};
