import Logo from "../../../assets/images/logo.png";
import React from "react";
import CartWidget from "../CartWidget";
import Title from "../Title";
import NavbarList from "../NavbarList";
import "./styles.css";

function Navbar() {
  return (
    <>
      <header>
        <nav className="navbar container">
          <div className="navbar-logo">
            <img src={Logo} alt="" />
            <Title heading="h2" text="Haiver's Shop" />
          </div>
          <NavbarList label="Home" href="/Home" />
          <NavbarList label="Store" href="/Store" />
          <NavbarList label="Description" href="/Description" />
          <NavbarList label={CartWidget()} />
        </nav>
      </header>
    </>
  );
}

export default Navbar;
