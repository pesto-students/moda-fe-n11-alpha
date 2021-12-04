import React from "react";
import { Navbar, Footer } from "../components";

function BaseLayout({ children }) {
  return (
    <div>
      <Navbar />
      {children}
      <Footer />
    </div>
  );
}

export default BaseLayout;
