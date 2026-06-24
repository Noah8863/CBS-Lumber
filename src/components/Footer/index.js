import React from "react";
import { Link } from "react-router-dom";
import "./footer.scss";
import FacebookIcon from "@mui/icons-material/Facebook";
import StarIcon from "@mui/icons-material/Star";
import PlaceIcon from "@mui/icons-material/Place";
import ScheduleIcon from "@mui/icons-material/Schedule";
import footerLogo from "../../images/CBSL-Footer-logo-white.png";

function Footer() {
  const links = [
    {
      name: "Facebook",
      link: "https://www.facebook.com/ColoradoBuildingSolutions",
      id: "facebook",
      icon: () => <FacebookIcon />,
    },
    {
      name: "Nova",
      link: "https://novanational.com/",
      id: "nova",
      icon: () => <StarIcon />,
    },
  ];

  return (
    <footer className="footer">
      <div className="hazard-bar" aria-hidden="true"></div>
      <div className="container footer__top">
        <div className="footer__brand">
          <img src={footerLogo} id="footerLogo" alt="CBS-Lumber" />
          <p className="footer__tagline">
            Wholesale bulk lumber for the Colorado Front Range. Pickup or
            delivery, built on values.
          </p>
        </div>

        <nav className="footer__col" aria-label="Footer">
          <h3 className="footerHeaders">Explore</h3>
          <ul className="footer__links">
            <li><Link to="/" onClick={() => window.scrollTo(0, 0)}>Home</Link></li>
            <li><Link to="/products" onClick={() => window.scrollTo(0, 0)}>Products</Link></li>
            <li><Link to="/contact" onClick={() => window.scrollTo(0, 0)}>Contact Us</Link></li>
          </ul>
        </nav>

        <div className="footer__col">
          <h3 className="footerHeaders">
            <ScheduleIcon fontSize="small" /> Office Hours
          </h3>
          <p>8:00am – 3:00pm</p>
          <p className="footer__muted">* No in-person walk-ins *</p>
        </div>

        <div className="footer__col" id="addressContainer">
          <h3 className="footerHeaders">
            <PlaceIcon fontSize="small" /> Address
          </h3>
          <p>1630 W Evans Ave, Unit C</p>
          <p>Englewood, CO 80110</p>
          <p className="footer__muted">USA</p>
        </div>

        <div className="footer__col" id="contactContainer">
          <h3 className="footerHeaders">More About Us</h3>
          <ul className="wrapper">
            {links.map((link) => (
              <a
                key={link.id}
                href={link.link}
                target="_blank"
                rel="noreferrer"
                aria-label={link.name}
              >
                <li className={`icon ${link.id}`}>
                  <span className="tooltip">{link.name}</span>
                  <span>{link.icon()}</span>
                </li>
              </a>
            ))}
          </ul>
        </div>
      </div>

      <div className="footer__bottom">
        <div className="container footer__bottom-inner">
          <p>© {new Date().getFullYear()} CBS-Lumber. All rights reserved.</p>
          <a href="tel:7202194554" className="footer__bottom-call">
            (720) 219-4554
          </a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
