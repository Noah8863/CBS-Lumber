import React from "react";
import "./info.scss";
// import HeaderImg from "../../images/main-page-header1.jpg";
import Carousel from "../Carousel/index.jsx";
import banner from "../../images/Permanent-Banner.png";

function Info() {
  return (
    <main>
      <img id="header-banner" src={banner}></img>
      <div className="main-info-container">
        <div className="info-containers">
          <div className="info-cards">
            <div>
              <h1 className="card-header">WHO WE ARE</h1>
            </div>
            <div>
              <p>
                Established in 2020 CBS-Lumber is a wholesale bulk lumber
                supply. Our lumber supply includes OSB, OSB Tongue and Groove,
                Plywood, and traditional lumber, plus a few more products coming
                soon. For all your building needs in the greater Denver, Golden,
                Westminster, Thornton, Broomfield, Boulder, Lakewood, Littleton,
                Highlands Ranch, Centennial, Parker, Aurora, Brighton, and other
                surrounding areas. We are a team of fully certified
                professionals who tackle everything from complex large projects
                to smaller-scale commercial jobs. Fueled by our commitment to
                excellence, Colorado Building Solutions goes the extra mile to
                make sure clients are completely satisfied with our work.
              </p>
            </div>
          </div>
        </div>
      </div>

      <div id="lumber-info-container">
        <div id="lumber-info-card">
          <h1 id="lumber-info-header-mobile">LUMBER BUILT ON VALUES</h1>
          <p>
            When you work with CBS Lumber, you get more than high-quality
            lumber, though that is our main product. We are dedicated to
            outstanding customer service to make sure our customers feel
            understood and that all their needs are met. Our team at Colorado
            Building Solutions is prepared with the knowledge and understanding
            of construction, and meeting the needs of our customers is our
            highest priority. Whether it comes to framing, new construction, or
            renovations, we have the lumber supply to get your commercial
            project moving quickly and on budget.
          </p>
          <h1 id="lumber-info-header">LUMBER BUILT ON VALUES</h1>
        </div>
      </div>

      <div className="main-info-container">
        <div className="info-containers">
          <div className="info-cards">
            <div>
              <h1 className="card-header">ABOUT US</h1>
            </div>
            <div>
              <p>
                CBS-Lumber supply division, based out of Englewood, Colorado,
                was founded back in 2020 when our owners saw the impact the
                supply shortages brought to us. Our goal is to bring the most
                affordable, quality lumber products for either pick-up or
                delivery. We value the relationships we form with our customers
                and strive to supply you with what you need. CBS-Lumber is proud
                to serve Denver, Golden, Westminster, Thornton, Broomfield,
                Boulder, Lakewood, Littleton, Highlands Ranch, Centennial,
                Parker, Aurora, Brighton, and other surrounding areas. Colorado
                Building Solutions has partnerships with Nova Incorporations. We
                take pride in all of our services we offer and strive to provide
                you with great service.
              </p>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}

export default Info;
