import GlobalStyles from "./GlobalStyles";
import { ThemeProvider } from "styled-components";
import theme from "./Theme";
import Pages from "./pages";
import React, { useEffect } from "react";
import axios from "axios";
import { useDispatch } from "react-redux";
import { getHomePageData } from "./redux/slices/HomePageSlice";
import { LogUserInStore } from "./redux/slices/UserSlice";
import { getCartForUser } from "./redux/slices/CartSlice";

function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    (function () {
      axios.defaults.baseURL = "http://localhost:2000/api/v1";
      axios.defaults.headers.common["Authorization"] =
        localStorage.getItem("jwt");
      axios.defaults.withCredentials = true;
      dispatch(getHomePageData());
      dispatch(LogUserInStore());
      dispatch(getCartForUser(localStorage.getItem("email")));
    })();
  }, []);
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
