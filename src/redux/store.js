import { configureStore } from "@reduxjs/toolkit";
import { combineReducers } from "redux";
import ProductReducer from "../redux/slices/ProductSlice";
import UserReducer from "../redux/slices/UserSlice";
import FilterReducer from "../redux/slices/FilterSlice";
import CartReducer from "../redux/slices/CartSlice";
import HomeReducer from "../redux/slices/HomePageSlice";
import OrderReducer from "../redux/slices/OrderSlice";

const reducer = combineReducers({
  product: ProductReducer,
  user: UserReducer,
  filter: FilterReducer,
  cart: CartReducer,
  home: HomeReducer,
  orders: OrderReducer,
});
export const store = configureStore({
  reducer,
});
