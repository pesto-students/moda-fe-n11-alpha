import Cart from "./Cart";
import ProductCategories from "./ProductCategories";
import ProductDescription from "./ProductDescription";
import SignIn from "./SignIn";
import SignUp from "./SignUp";
import Home from "./Home";
import BaseLayout from "./../layouts/BaseLayout.jsx";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

function Pages() {
  return (
    <Router>
      <Routes>
        <Route
          exact
          path="/"
          element={
            <BaseLayout>
              <Home />
            </BaseLayout>
          }
        ></Route>
        <Route exact path="/signin" element={<SignIn />}></Route>
        <Route exact path="/signup" element={<SignUp />}></Route>
        <Route exact path="/cart" element={<Cart />}></Route>
        <Route
          exact
          path="/ProductCategories"
          element={<ProductCategories />}
        ></Route>
        <Route
          exact
          path="/ProductDescription/:id"
          element={<ProductDescription />}
        ></Route>
        <Route path="/*" render={() => <h1>No page found</h1>}></Route>
      </Routes>
    </Router>
  );
}

export default Pages;
