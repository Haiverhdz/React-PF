import Navbar from "../components/Navbar";
import "./index.css";

const BaseLayout = ({children}) => {

    return(
        <>
        <header className="header">
            <Navbar/>
        </header>
       {children}
        <footer>

        </footer>
        </>
    );
};

export default BaseLayout;