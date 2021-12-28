import GlobalStyles from "./GlobalStyles";
import { ThemeProvider } from "styled-components";
import theme from "./Theme";
import Pages from "./pages";
import React, { useEffect } from "react";
import axios from "axios";
import { useDispatch } from "react-redux";
import { getHomePageData } from "./redux/slices/HomePageSlice";

function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    (function () {
      axios.defaults.baseURL = "http://localhost:2000/api/v1";
      dispatch(getHomePageData());
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
