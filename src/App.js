import GlobalStyles from "./GlobalStyles";
import { ThemeProvider } from "styled-components";
import theme from "./Theme";
import Pages from "./pages";
import React, { useEffect } from "react";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { getHomePageData } from "./redux/slices/HomePageSlice";
import { LogUserInStore } from "./redux/slices/UserSlice";
import { getCartForUser } from "./redux/slices/CartSlice";
//import Loader from "react-loader-spinner";
function App() {
  const dispatch = useDispatch();
  const show = useSelector((state) => state.selector);
  axios.defaults.baseURL = "https://moda-be.herokuapp.com/api/v1";
  axios.defaults.withCredentials = true;

  useEffect(() => {
    (function () {
      dispatch(getHomePageData());
      dispatch(LogUserInStore());
      dispatch(getCartForUser());
    })();
  }, [dispatch]);
  const showSpinner = show ? "block" : "none";
  console.log("show spinner is as follows", showSpinner);
  return (
    <ThemeProvider theme={theme}>
      <div>
        <GlobalStyles />
        <Pages />
      </div>
    </ThemeProvider>
  );
}

export default App;
