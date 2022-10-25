import React from "react";
import "./contact.scss";
import PhoneInTalkIcon from "@mui/icons-material/PhoneInTalk";
import EmailIcon from "@mui/icons-material/Email";
import emailjs from "@emailjs/browser";
import Certification from "../Certification/index";
const clientName = document.getElementById("name");
const email = document.getElementById("email");
const subject = document.getElementById("subject");
const message = document.getElementById("message");

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
      subject: document.getElementById("subject").value,
      message: document.getElementById("message").value,
    };
    console.log(formData);
    emailjs
      .send(
        "service_32wky28",
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
      <div id="contact-form-container">
        <div id="left-contact-container">
          <div id="left-contact-details">
            <h1>CONTACT US</h1>
            <p>
              CBS Lumber is dedicated to offering you the best experince,
              products, and quality at an affordable price.
            </p>
            <p>
              Leave your information or give us a call, and we'll help fulfill
              your lumber needs.
            </p>
            <p>
              <PhoneInTalkIcon className="contact-icons" />
              (720)-756-1299
            </p>
            <a href="mailto:info@cbs-lumber.com">
              <EmailIcon className="contact-icons" />
              Info@CBS-Lumber.com
            </a>
          </div>
        </div>
        {/* <form className="inputContainer" onSubmit={sendEmail}> */}
        <form className="inputContainer">
          <p type="Name:">
            <input
              className="inputfield"
              id="name"
              type="text"
              placeholder="* Name"
              required
            ></input>
          </p>
          <p type="Email:">
            <input
              className="inputfield"
              id="email"
              placeholder="* Email"
              required
            ></input>
          </p>
          <p type="PhoneNumber:">
            <input
              type="number"
              className="inputfield"
              id="phoneNumber"
              placeholder="Phone Number"
            ></input>
          </p>
          <div className="checkboxform field">
            <h4>Products of Interest*</h4>
            <div id="checklist">
              <input id="01 lumber" type="checkbox" value="1" />
              <label for="01">Lumber</label>

              <input id="02 osb" type="checkbox" value="2" />
              <label for="02">OSB</label>

              <input id="03 plywood" type="checkbox" value="3" />
              <label for="03">Plywood/Veneer</label>

              <input id="04 ijoists" type="checkbox" value="4" />
              <label for="04">I Joists</label>

              <input id="05" type="checkbox" value="5" />
              <label for="05 lsl">LSL</label>
            </div>
            {/* <label>
              <input type="checkbox" className="checkboxOptions" id="lumber" />
              Lumber
            </label>
            <label>
              <input type="checkbox" className="checkboxOptions" id="plywood" />
              Plywood/Veneer
            </label>
            <label>
              <input type="checkbox" className="checkboxOptions" id="osb" />
              OSB
            </label>
            <label>
              <input type="checkbox" className="checkboxOptions" id="lsl" />
              LSL
            </label> */}
          </div>
          <p type="Message:">
            <input
              className="inputfield"
              id="subject"
              placeholder="* Subject"
              required
            ></input>
          </p>
          <p type="Message:">
            <input
              className="inputfield"
              id="message"
              placeholder="* Message"
              required
            ></input>
          </p>
          <button id="btn" className="bubbly-button" onClick={showMessage}>
            Submit
          </button>
        </form>
      </div>
      <Certification />
    </>
  );
}

export default Contact;
