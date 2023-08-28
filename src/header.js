import React from "react";
import { Link, NavLink } from "react-router-dom";

const Header = () => {
  return (
    <ul>
      <nav>
        <li>
          <NavLink to="/about/24/chintu" className="active">
            About
          </NavLink>
        </li>
        <li>
          <NavLink to="/contact" className="active">
            Contact
          </NavLink>
        </li>
      </nav>
    </ul>
  );
};

export default Header;
