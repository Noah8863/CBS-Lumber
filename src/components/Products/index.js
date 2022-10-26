import React from "react";
import "./product.scss";
import { Link } from "react-router-dom";
import leftPicture from "../../images/product-wood-img.jpg";
import rightPicture from "../../images/product-wood-img-1.jpg";
import Certification from "../Certification/index";
import Contact from "../Contact-Card/index";
function Products() {
  return (
    <>
      <h1 id="header-description">AFFORDABLE LUMBER FOR ANY PROJECT</h1>
      <div id="product-header-container">
        <div id="header-left">
          <img src={leftPicture}></img>
        </div>
        <div id="header-right">
          <img src={rightPicture}></img>
        </div>
      </div>
      <div id="lumber-description-container">
        <div id="lumber-description-card">
          <h1 style={{ fontSize: "42px" }}>LUMBER</h1>
          <div id="lumber-info-description">
            <p>
              Colorado Building Solutions now has a bulk lumber supply at our
              warehouse, with supply avaliable today for pickup or delivery. CBS
              Lumber provides a variety of lumber to meet all of your building
              needs. Our Lumber supply includes OSB, OSB Tongue and Groove,
              Plywood, and traditional lumber. With a few other products being
              added soon. CBS Lumber is a wholesale lumber wendor serving
              Denver, Golden, Westminster, Thornton, Broomfield, Boulder,
              Lakewood, Littleton, Highlands Ranch, Centennial, Parker, Aurora,
              Brighton, and other surrounding areas.
            </p>
            <Link to="/contact">
            {/* Credit to Aaron Iker for button styles below */}
              <button class="continue-application">
                <div>
                  <div class="pencil"></div>
                  <div class="folder">
                    <div class="top">
                      <svg viewBox="0 0 24 27">
                        <path d="M1,0 L23,0 C23.5522847,-1.01453063e-16 24,0.44771525 24,1 L24,8.17157288 C24,8.70200585 23.7892863,9.21071368 23.4142136,9.58578644 L20.5857864,12.4142136 C20.2107137,12.7892863 20,13.2979941 20,13.8284271 L20,26 C20,26.5522847 19.5522847,27 19,27 L1,27 C0.44771525,27 6.76353751e-17,26.5522847 0,26 L0,1 C-6.76353751e-17,0.44771525 0.44771525,1.01453063e-16 1,0 Z"></path>
                      </svg>
                    </div>
                    <div class="paper"></div>
                  </div>
                </div>
                Get A Quote!
              </button>
            </Link>
          </div>
        </div>
      </div>
      <Certification />
      <Contact />
    </>
  );
}

export default Products;
