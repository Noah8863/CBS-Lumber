import React from "react";
import { Link } from "react-router-dom";
import "./navbar.scss";
import logo from "../../images/CBS-Lumber-Logo.png";
import PhoneInTalkIcon from "@mui/icons-material/PhoneInTalk";

function NavBar() {
  return (
    <div id="navbar-container">
      <nav id="navbar">
        <div id="logo-container">
          <img id="logo" src={logo} />
        </div>
        <div>
          <ul id="navbar-items">
            <Link to="/">
              <li className="navbar-containers">
                <p>HOME</p>
              </li>
            </Link>
            <Link to="/products">
              <li className="navbar-containers">
                <p>PRODUCTS </p>
              </li>
            </Link>
            <Link to="/contact">
              <li className="navbar-containers">
                <p id="contact-btn">CONTACT US</p>
              </li>
            </Link>
          </ul>
        </div>
        {/* <div id="navbar-contact-container">
          <div id="left-contact">
            <p>Call Us Today!</p>
            <a className="phone-number" href="tel:7207561299">
              <p>(720) 756 1299</p>
            </a>
          </div>
          <div id="right-contact">
            <a className="phone-number" href="tel:7207561299">
              <PhoneInTalkIcon
                id="phone-icon"
                fontSize="large"
              ></PhoneInTalkIcon>
            </a>
          </div>
        </div> */}
      </nav>
    </div>
  );
}

export default NavBar;
