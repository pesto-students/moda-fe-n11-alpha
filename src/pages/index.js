import Cart from "./Cart";
import ProductCategories from "./ProductCategories";
import ProductDescription from "./ProductDescription";
import SignIn from "./SignIn";
import SignUp from "./SignUp";
import Home from "./Home";
import Orders from "./Orders";
import EnterNewPassword from "./EnterNewPassword";
import ErrorBoundary from "../components/ErrorBoundary";
import ForgotPassword from "./ForgotPassword";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { Payment } from "../components";
import { Navbar, Announcements, Footer, Newsletter } from "../components";

function Pages() {
  return (
    <Router>
      <ErrorBoundary>
        <Navbar />
        <Announcements />
        <Routes>
          <Route exact path="/" element={<Home />}></Route>
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
          <Route exact path="/payment" element={<Payment />}></Route>
          <Route exact path="/order" element={<Orders />}></Route>
          <Route
            exact
            path="/forgotPassword"
            element={<ForgotPassword />}
          ></Route>{" "}
          <Route
            exact
            path="/enterNewPassword"
            element={<EnterNewPassword />}
          ></Route>
          <Route path="/*" render={() => <h1>No page found</h1>}></Route>
        </Routes>
        <Newsletter />
        <Footer />
      </ErrorBoundary>
    </Router>
  );
}

export default Pages;
