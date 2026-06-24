import React, { useState } from "react";
import "./contact.scss";
import PhoneInTalkIcon from "@mui/icons-material/PhoneInTalk";
import EmailIcon from "@mui/icons-material/Email";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import ErrorOutlineIcon from "@mui/icons-material/ErrorOutline";
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
  // "idle" | "sending" | "success" | "error"
  const [status, setStatus] = useState("idle");

  const sendEmail = (e) => {
    e.preventDefault();
    const form = e.target;
    const today = new Date().toLocaleDateString();

    const selectedProducts = PRODUCTS.filter(
      (p) => document.getElementById(p.id).checked
    ).map((p) => p.label);
    const formData = {
      time: today,
      name: document.getElementById("name").value,
      email: document.getElementById("email").value,
      phoneNumber: document.getElementById("phoneNumber").value,
      products: selectedProducts.length
        ? selectedProducts.join(", ")
        : "None specified",
      subject: document.getElementById("subject").value,
      message: document.getElementById("message").value,
    };

    setStatus("sending");
    emailjs
      .send("service_bzzonzc", "template_omj9j7y", formData, "7cmnH8SYBduW7gadl")
      .then(
        () => {
          setStatus("success");
          form.reset();
        },
        (error) => {
          console.error(error);
          setStatus("error");
        }
      );
  };

  const closeModal = () => setStatus("idle");

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
              <a id="contact-phone-number" href="tel:7202194554">
                <span className="contact-direct__icon">
                  <PhoneInTalkIcon fontSize="inherit" />
                </span>
                (720) 219-4554
              </a>
              <a href="mailto:customer-service@cbs-lumber.info">
                <span className="contact-direct__icon">
                  <EmailIcon fontSize="inherit" />
                </span>
                customer-service@cbs-lumber.info
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

            <button
              id="btn"
              type="submit"
              className="bubbly-button"
              disabled={status === "sending"}
            >
              {status === "sending" ? "Sending…" : "Submit Request"}
            </button>
          </form>
        </div>
      </section>
      <Certification />

      {status !== "idle" && (
        <div
          className="contact-modal-overlay"
          onClick={status === "sending" ? undefined : closeModal}
        >
          <div
            className="contact-modal"
            role="dialog"
            aria-modal="true"
            onClick={(e) => e.stopPropagation()}
          >
            {status === "sending" && (
              <>
                <div className="contact-modal__spinner" aria-hidden="true"></div>
                <h3 className="contact-modal__title">Sending your request…</h3>
                <p className="contact-modal__text">This will only take a moment.</p>
              </>
            )}

            {status === "success" && (
              <>
                <CheckCircleIcon className="contact-modal__icon contact-modal__icon--success" />
                <h3 className="contact-modal__title">Request sent!</h3>
                <p className="contact-modal__text">
                  Thanks for reaching out — we'll get back to you soon.
                </p>
                <button className="contact-modal__btn" onClick={closeModal}>
                  Close
                </button>
              </>
            )}

            {status === "error" && (
              <>
                <ErrorOutlineIcon className="contact-modal__icon contact-modal__icon--error" />
                <h3 className="contact-modal__title">Something went wrong</h3>
                <p className="contact-modal__text">
                  Your request couldn't be sent. Please try again, or call us at
                  (720) 219-4554.
                </p>
                <button className="contact-modal__btn" onClick={closeModal}>
                  Close
                </button>
              </>
            )}
          </div>
        </div>
      )}
    </>
  );
}

export default Contact;
