import { createSlice, current } from "@reduxjs/toolkit";
import { get, post } from "../../api/CartApi";
import axios from "axios";
const uri = "/cart";

const slice = createSlice({
  name: "cart",
  initialState: [],
  reducers: {
    GetProduct: (state, action) => {
      return action.payload;
    },
    Addproduct: (state, action) => {
      state.push(action.payload);
      return state;
    },
    Deleteproduct: (state, action) => {
      let newState = state.filter((product) => {
        if (product.id === action.payload.id) {
          if (product.color === action.payload.color) {
            if (product.size === action.payload.size) {
              return false;
            }
          } else {
            return true;
          }
        } else {
          return true;
        }
      });
      return newState;
    },
    IncProductQty: (state, action) => {
      const { id, color, size } = action.payload;
      for (let product of state) {
        if (
          product.id === id &&
          product.color === color &&
          product.size === size
        ) {
          product.quantity = product.quantity + 1;
        }
      }
      return state;
    },
    DecProductQty: (state, action) => {
      const { id, color, size } = action.payload;
      for (let product of state) {
        if (
          product.id === id &&
          product.color === color &&
          product.size === size
        ) {
          product.quantity = product.quantity - 1;
        }
      }
      return state;
    },
    Editproduct: (state, action) => {
      const index = state.findIndex(
        (product) => product.id === action.payload.id
      );
      state[index] = action.payload;
    },
    DeleteAllproduct: (state, action) => {
      return [];
    },
  },
});
export default slice.reducer;
const { Addproduct, DecProductQty, Deleteproduct, GetProduct, IncProductQty } =
  slice.actions;

export const getCartForUser = (email) => async (dispatch) => {
  try {
    const cart = await get(uri, email);
    dispatch(GetProduct(cart));
  } catch (e) {
    throw e;
  }
};
export const AddproductInCart = (email, product) => async (dispatch) => {
  try {
    await post(uri, { email, product });
    dispatch(Addproduct(product));
  } catch (e) {
    return console.error(e.message);
  }
};

export const DeleteproductInCart = (data) => async (dispatch) => {
  try {
    dispatch(Deleteproduct(data));
  } catch (e) {
    return console.error(e.message);
  }
};

export const IncProductInCart =
  ({ id, color, size }) =>
  async (dispatch) => {
    try {
      dispatch(IncProductQty({ id, color, size }));
    } catch (e) {}
  };

export const DecProductInCart =
  ({ id, color, size }) =>
  async (dispatch) => {
    try {
      dispatch(DecProductQty({ id, color, size }));
    } catch (e) {}
  };
// export const EditproductInStore = (data) => async (dispatch) => {
//   try {
//     const res = await put(uri, data);
//     return dispatch(Editproduct(res));
//   } catch (e) {
//     return console.error(e.message);
//   }
// };
// export const DeleteproductInStore = (data) => async (dispatch) => {
//   try {
//     let r = await deleteproduct(uri, data);
//     return dispatch(Deleteproduct(data));
//   } catch (e) {
//     return console.error(e.message);
//   }
// };
