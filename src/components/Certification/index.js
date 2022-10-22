import React from 'react';
import './cert.scss';
import GreenGuard from '../../images/greenguard-img.png'
import USDA from '../../images/USDA.png'

function Certificate(){
    return (
        <div id="cert-container">
            <div id="cert-card">
                <h1>CERTIFICATIONS</h1>
                <div id="cert-imgs">
                    <img id="greenguard-img" src={GreenGuard} alt="GREENGUARD Certified"></img>
                    <img id="usda-img" src={USDA} alt="USDA Certifed"></img>
                </div>
            </div>
        </div>
    )
}

export default Certificate;