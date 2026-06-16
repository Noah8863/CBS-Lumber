import React from "react";
import "./contact.scss";
import PhoneInTalkIcon from "@mui/icons-material/PhoneInTalk";
import EmailIcon from "@mui/icons-material/Email";
import emailjs from "@emailjs/browser";
import Certification from "../Certification/index";

const PRODUCTS = [
  { id: "lumber", label: "Lumber" },
  { id: "osb", label: "OSB" },
  { id: "plywood", label: "Plywood" },
  { id: "lvl", label: "LVL" },
  { id: "ijoists", label: "I-Joists" },
  { id: "lsl", label: "LSL" },
  { id: "ewp", label: "EWP" },
];

function Contact() {
  const sendEmail = (e) => {
    var today = new Date().toLocaleDateString();

    e.preventDefault();
    const formData = {
      time: today,
      name: document.getElementById("name").value,
      email: document.getElementById("email").value,
      phoneNumber: document.getElementById("phoneNumber").value,
      lumber: document.getElementById("lumber").checked ? "Yes ✅" : "No ❌",
      plywood: document.getElementById("plywood").checked ? "Yes ✅" : "No ❌",
      osb: document.getElementById("osb").checked ? "Yes ✅" : "No ❌",
      lsl: document.getElementById("lsl").checked ? "Yes ✅" : "No ❌",
      lvl: document.getElementById("lvl").checked ? "Yes ✅" : "No ❌",
      ijoists: document.getElementById("ijoists").checked ? "Yes ✅" : "No ❌",
      ewp: document.getElementById("ewp").checked ? "Yes ✅" : "No ❌",
      subject: document.getElementById("subject").value,
      message: document.getElementById("message").value,
    };
    console.log(formData);
    emailjs
      .send(
        "service_yctb6c8",
        "template_s77x9a4",
        formData,
        "nIOQ4DjOD6VPrQRy0"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  function showMessage() {
    alert("Message has been recorded! We'll get in touch soon");
  }

  return (
    <>
      <section id="contact-form-container">
        <div className="contact-form-overlay" aria-hidden="true"></div>
        <div className="container contact-grid">
          {/* ---- Left: details ---- */}
          <div id="left-contact-details">
            <p className="kicker kicker--light">Get In Touch</p>
            <h1>Let's talk lumber</h1>
            <p>
              CBS Lumber is dedicated to offering you the best experience,
              products, and quality at an affordable price.
            </p>
            <p>
              Leave your information or give us a call, and we'll help fulfill
              your lumber needs.
            </p>
            <div className="contact-direct">
              <a id="contact-phone-number" href="tel:7207561299">
                <span className="contact-direct__icon">
                  <PhoneInTalkIcon fontSize="inherit" />
                </span>
                (720) 756-1299
              </a>
              <a href="mailto:info@cbs-lumber.com">
                <span className="contact-direct__icon">
                  <EmailIcon fontSize="inherit" />
                </span>
                Info@CBS-Lumber.com
              </a>
            </div>
          </div>

          {/* ---- Right: form ---- */}
          <form className="inputContainer" onSubmit={sendEmail}>
            <h2 className="form-title">Request a Quote</h2>

            <div className="field">
              <label htmlFor="name">Name *</label>
              <input className="inputfield" id="name" type="text" placeholder="Your name" required />
            </div>

            <div className="field-row">
              <div className="field">
                <label htmlFor="email">Email *</label>
                <input className="inputfield" id="email" type="email" placeholder="you@email.com" required />
              </div>
              <div className="field">
                <label htmlFor="phoneNumber">Phone</label>
                <input type="tel" className="inputfield" id="phoneNumber" placeholder="(000) 000-0000" />
              </div>
            </div>

            <div className="checkboxform field">
              <label className="field-label">Products of Interest *</label>
              <div id="checklist">
                {PRODUCTS.map((p) => (
                  <label key={p.id} className="chip" htmlFor={p.id}>
                    <input id={p.id} type="checkbox" />
                    <span>{p.label}</span>
                  </label>
                ))}
              </div>
            </div>

            <div className="field">
              <label htmlFor="subject">Subject *</label>
              <input className="inputfield" id="subject" placeholder="What can we help with?" required />
            </div>

            <div className="field">
              <label htmlFor="message">Message *</label>
              <textarea className="inputfield" id="message" rows="4" placeholder="Tell us about your project, quantities, and timeline" required></textarea>
            </div>

            <button id="btn" className="bubbly-button" onClick={showMessage}>
              Submit Request
            </button>
          </form>
        </div>
      </section>
      <Certification />
    </>
  );
}

export default Contact;
