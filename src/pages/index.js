import Cart from "./Cart";
import ProductCategories from "./ProductCategories";
import ProductDescription from "./ProductDescription";
import SignIn from "./SignIn";
import SignUp from "./SignUp";
import Home from "./Home";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

function Pages() {
  return (
    <Router>
      <Routes>
        {" "}
        <Route path="/" element={<Home />}></Route>
        <Route path="/SignIn" element={<SignIn />}></Route>
        <Route path="/SignUp" element={<SignUp />}></Route>
        <Route path="/Cart" element={<Cart />}></Route>
        <Route
          path="/ProductCategories"
          element={<ProductCategories />}
        ></Route>
        <Route
          path="/ProductDescription/{:id}"
          element={<ProductDescription />}
        ></Route>
        <Route
          path="/*"
          render={() => {
            <p>No page found</p>;
          }}
        ></Route>
      </Routes>
    </Router>
  );
}

export default Pages;
