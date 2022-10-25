import React from "react";
import './contact.scss';

function ContactCard(){
    return (
        <div id="contact-card-container">
            <div id="contact-card">
                <h1>CONTACT US</h1>
                <p>www.CBS-Lumber.com</p>
                <a href="mailto:info@cbs-lumber.com"><p>info@CBS-Lumber.com</p></a>
                <a href="tel:7207561299"><p>(720) 756-1299</p></a>
            </div>
        </div>
    )
}

export default ContactCard;