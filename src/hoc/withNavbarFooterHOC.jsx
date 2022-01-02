import { Announcements, Navbar, Footer, Newsletter } from "../components";
const withNavbarFooterHOC =
  (Component) =>
  ({ ...props }) =>
    (
      <>
        <Navbar />
        <Announcements />
        <Component {...props} />;
        <Newsletter />
        <Footer />
      </>
    );
export default withNavbarFooterHOC;
