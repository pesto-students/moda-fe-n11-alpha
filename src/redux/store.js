import { configureStore } from "@reduxjs/toolkit";
import { combineReducers } from "redux";
import ProductReducer from "../redux/slices/ProductSlice";
import UserReducer from "../redux/slices/UserSlice";
import FilterReducer from "../redux/slices/FilterSlice";
import CartReducer from "../redux/slices/CartSlice";
import storage from "redux-persist/lib/storage";
import {
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from "redux-persist";

const persistConfig = {
  key: "root",
  storage,
};
const reducer = combineReducers({
  product: ProductReducer,
  user: UserReducer,
  filter: FilterReducer,
  cart: CartReducer,
});
export const store = configureStore({
  reducer,
});
const persistedReducer = persistReducer(persistConfig, reducer);

// export default configureStore({
//   reducer: persistedReducer,
//   middleware: (getDefaultMiddleware) =>
//     getDefaultMiddleware({
//       serializableCheck: {
//         ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
//       },
//     }),
// });
