import Navbar from "../Header/Navbar";
// import Footer from "../Footer/Footer";
import PropTypes from "prop-types";

const Layout = ({ children }) => {
  Layout.propTypes = {
    children: PropTypes.node.isRequired,
  };
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-grow">{children}</main>
      {/* <Footer /> */}
    </div>
  );
};

export default Layout;
