import React from 'react';
import './cert.scss';
import GreenGuard from '../../images/greenguard-img.png'
import USDA from '../../images/USDA.png'

function Certificate(){
    return (
        <section id="cert-container">
            <div className="container" id="cert-card">
                <div id="cert-heading">
                    <p className="kicker">Verified &amp; Trusted</p>
                    <h2 className="section-title">Certifications</h2>
                </div>
                <div id="cert-imgs">
                    <div className="cert-chip">
                        <img id="greenguard-img" src={GreenGuard} alt="GREENGUARD Certified"></img>
                    </div>
                    <div className="cert-chip">
                        <img id="usda-img" src={USDA} alt="USDA Certified"></img>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Certificate;
