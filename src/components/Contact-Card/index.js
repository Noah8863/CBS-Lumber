import React from "react";
import { Link } from "react-router-dom";
import "./contact.scss";
import EmailIcon from "@mui/icons-material/Email";
import PhoneInTalkIcon from "@mui/icons-material/PhoneInTalk";
import LanguageIcon from "@mui/icons-material/Language";

function ContactCard() {
  return (
    <section id="contact-card-container">
      <div className="contact-card-overlay" aria-hidden="true"></div>
      <div className="container contact-card-inner">
        <div id="contact-card">
          <p className="kicker kicker--light">Let's Build</p>
          <h2 className="section-title section-title--light">Contact Us</h2>
          <p className="contact-card__lead">
            Ready to start? Reach out for a quote or to set up an account — we'll
            handle the rest.
          </p>
          <ul className="contact-card__list">
            <li>
              <span className="contact-card__icon"><LanguageIcon fontSize="inherit" /></span>
              <span>www.CBS-Lumber.com</span>
            </li>
            <li>
              <a href="mailto:info@cbs-lumber.com">
                <span className="contact-card__icon"><EmailIcon fontSize="inherit" /></span>
                <span>info@CBS-Lumber.com</span>
              </a>
            </li>
            <li>
              <a href="tel:7205390461">
                <span className="contact-card__icon"><PhoneInTalkIcon fontSize="inherit" /></span>
                <span>(720) 539-0461</span>
              </a>
            </li>
          </ul>
          <Link to="/contact" className="btn contact-card__btn">
            Request a Quote
            <span className="btn-arrow" aria-hidden="true">→</span>
          </Link>
        </div>
      </div>
    </section>
  );
}

export default ContactCard;
