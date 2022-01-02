import Navbar from "../components/Navbar";

const withNavbarHOC =
  (Component) =>
  ({ ...props }) =>
    (
      <>
        <Navbar />
        <Component {...props} />;
      </>
    );
export default withNavbarHOC;
