import { configureStore } from "@reduxjs/toolkit";
import { combineReducers } from "redux";
import ProductReducer from "../redux/slices/ProductSlice";
const reducer = combineReducers({
  ProductReducer,
});
const store = configureStore({
  reducer,
});
export default store;
