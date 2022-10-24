import React from "react";
import "./contact.scss";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import PersonIcon from "@mui/icons-material/Person";
import emailjs from "@emailjs/browser";

function Contact() {
  const sendEmail = (e) => {
    var today = new Date().toLocaleDateString();

    e.preventDefault();
    const formData = {
      time: today,
      name: document.getElementById("name").value,
      email: document.getElementById("email").value,
      subject: document.getElementById("subject").value,
      message: document.getElementById("message").value,
    };
    console.log(formData);
    emailjs
      .send(
        "service_32wky28",
        "template_6f7vqrr",
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
    alert("Thanks for reaching out! Ill be sure to get back to you soon.");
  }

  return (
    <main>
      {/* <form className="inputContainer" onSubmit={sendEmail}> */}
      <form className="inputContainer">
        <h2>CONTACT US</h2>
        <p type="Name:">
          <input
            className="inputfield"
            id="name"
            placeholder="Name"
          ></input>
        </p>
        <p type="Email:">
          <input
            className="inputfield"
            id="email"
            placeholder="Email"
          ></input>
        </p>
        <p type="Message:">
          <input
            className="inputfield"
            id="subject"
            placeholder="Subject"
          ></input>
        </p>
        <p type="Message:">
          <input
            className="inputfield"
            id="message"
            placeholder="Message"
          ></input>
        </p>
        <button id="btn" className="bubbly-button" onClick={showMessage}>
          Submit
        </button>
      </form>
    </main>
  );
}

export default Contact;
