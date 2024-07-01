import React from "react";
import "./NavBar.css";
import { Link } from "react-router-dom";

const NavBar = () => {
  return (
    <div className="navbar-main-wrapper">
      <div className="navbar-wrapper">
        <div className="nav-searchinput">
          <input type="text" placeholder="Search anything.." />
        </div>

        <div className="nav-components">
          <Link to="/">Home</Link>
          <Link to="/cart">Cart</Link>
        </div>
      </div>
    </div>
  );
};

export default NavBar;
