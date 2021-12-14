import { configureStore } from "@reduxjs/toolkit";
import { combineReducers } from "redux";
import ProductReducer from "../redux/slices/ProductSlice";
import UserReducer from "../redux/slices/UserSlice";
import FilterReducer from "../redux/slices/FilterSlice";
import CartReducer from "../redux/slices/CartSlice";
const reducer = combineReducers({
  product: ProductReducer,
  user: UserReducer,
  filter: FilterReducer,
  cart: CartReducer,
});
const store = configureStore({
  reducer,
});
export default store;
