import React from "react";
import { Navbar, Footer, Announcements, Newsletter } from "../components";

function BaseLayout({ children }) {
  return (
    <div>
      <Navbar />
      <Announcements />
      {children}
      <Newsletter />
      <Footer />
    </div>
  );
}

export default BaseLayout;
