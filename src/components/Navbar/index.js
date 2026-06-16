import React from "react";
import { Link, NavLink } from "react-router-dom";
import "./navbar.scss";
import logo from "../../images/CBS-Lumber-Logo.png";
import PhoneInTalkIcon from "@mui/icons-material/PhoneInTalk";

function NavBar() {
  return (
    <header id="site-header">
      <div className="header-inner container">
        <Link to="/" id="logo-link" aria-label="CBS-Lumber home">
          <img id="logo" src={logo} alt="CBS-Lumber" />
        </Link>

        <nav id="primary-nav" aria-label="Primary">
          <ul id="navbar-items">
            <li>
              <NavLink to="/" end className="nav-link">
                Home
              </NavLink>
            </li>
            <li>
              <NavLink to="/products" className="nav-link">
                Products
              </NavLink>
            </li>
            <li>
              <NavLink to="/contact" className="nav-link nav-link--cta">
                Contact Us
              </NavLink>
            </li>
          </ul>
        </nav>

        <div id="navbar-contact">
          <a className="header-call" href="tel:7205390461">
            <span className="header-call__text">
              <span className="header-call__label">Call Us Today</span>
              <span className="header-call__number">(720) 539-0461</span>
            </span>
          </a>
          <a
            className="header-call__icon"
            href="tel:7207561299"
            aria-label="Call (720) 756-1299"
          >
            <PhoneInTalkIcon fontSize="inherit" />
          </a>
        </div>
      </div>
    </header>
  );
}

export default NavBar;
