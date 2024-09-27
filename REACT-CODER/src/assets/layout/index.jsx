import Navbar from "../components/Navbar";
import "./index.css";
import Footer from "../components/Footer";

const BaseLayout = ({ children }) => {
  return (
    <>
      <header className="header">
        <Navbar />
      </header>
      {children}
      <Footer />
    </>
  );
};

export default BaseLayout;
