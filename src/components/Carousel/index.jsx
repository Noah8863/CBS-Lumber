import React from "react";
import { Link } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper";
import Plywood from '../../images/plywood.jpg'
import LSL from "../../images/LSL-Product-Image.jpg";
import OSB from "../../images/OSB-Product-Image.jpg";
import IJoists from "../../images/I-Joists-Product-Image.jpg";
import LVL from "../../images/LVL-Product-Image.jpg";
import Lumber from "../../images/Lumber-product-card-img.png";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "./carousel.scss";
import "swiper/css";

export default function Carousel() {
  return (
    <>
      {/* Future option to have a carousel.  */}
      <Swiper navigation={true} modules={[Navigation]} className="mySwiper">
        <SwiperSlide className="swiper-pictures">
          <div className="product-swiper-container">
            <div className="product-left-side-container">
              <h1>EWP, LSL</h1>
              <p>
              An optimized structural product engineered for quality. A product that is gaining widespread use. It has high strength, high stiffness, and dimensional stability. LSL floor panels are fastened to glulam purlins and steel beams. Available in 1.35E and 1.55E.
              </p>
              <Link to="/contact" className="btn carousel-btn">
                Buy Now
                <span className="btn-arrow" aria-hidden="true">→</span>
              </Link>
            </div>
            <div className="product-right-side-container">
              <img className="right-side-product-image" src={LSL} alt="EWP / LSL engineered lumber" />
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide className="swiper-pictures">
          <div className="product-swiper-container">
            <div className="product-left-side-container">
              <h1>OSB</h1>
              <p>
              A proprietary Blue Edge Seal creates a moisture-resistant panel that resists swelling. To Keep our air clean, our OSB contains no added area-formaldehtde resin (NAUF) for improved indoor air quality.
              </p>
              <p>Thickness: 7/16, 19/32, 23,/32</p>
              <p>Lengths: 6', 8'</p>
              <p>Widths: 4', 8'</p>
              <Link to="/contact" className="btn carousel-btn">
                Buy Now
                <span className="btn-arrow" aria-hidden="true">→</span>
              </Link>
            </div>
            <div className="product-right-side-container">
              <img className="right-side-product-image" src={OSB} alt="OSB panel" />
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide className="swiper-pictures">
          <div className="product-swiper-container">
            <div className="product-left-side-container">
              <h1>PLYWOOD</h1>
              <p>
                A 4 ply thickness plywood built with quality and performance in
                mind. For uses like;
                <ul>
                  <li>Underlayment</li>
                  <li>Subfloor</li>
                  <li>Sheathing</li>
                  <li>RV and cargo trailer panels</li>
                  <li>Veneer</li>
                </ul>
              </p>
              <p>Dimension: 4 ply, 1/2"</p>
              <Link to="/contact" className="btn carousel-btn">
                Buy Now
                <span className="btn-arrow" aria-hidden="true">→</span>
              </Link>
            </div>
            <div className="product-right-side-container">
              <img className="right-side-product-image" src={Plywood} alt="Plywood sheets" />
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide className="swiper-pictures">
          <div className="product-swiper-container">
            <div className="product-left-side-container">
              <h1>I JOISTS</h1>
              <p>
              Used extensively in residential floor and roof framing. They are ideal for long spans, including continuous spans over intermediate supports. Because I-joists are straight and true, it's easier for builders to avoid crowning and maintain a level framing surface.
              </p>
              <Link to="/contact" className="btn carousel-btn">
                Buy Now
                <span className="btn-arrow" aria-hidden="true">→</span>
              </Link>
            </div>
            <div className="product-right-side-container">
              <img className="right-side-product-image" src={IJoists} alt="I-joists" />
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide className="swiper-pictures">
          <div className="product-swiper-container">
            <div className="product-left-side-container">
              <h1>LVL</h1>
              <p>
                Laminated veneer lumber is an engineered wood product that uses
                multiple layers of thin wood assembled with adhesives.
              </p>
              <Link to="/contact" className="btn carousel-btn">
                Buy Now
                <span className="btn-arrow" aria-hidden="true">→</span>
              </Link>
            </div>
            <div className="product-right-side-container">
              <img className="right-side-product-image" src={LVL} alt="Laminated veneer lumber (LVL)" />
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide className="swiper-pictures">
          <div className="product-swiper-container">
            <div className="product-left-side-container">
              <h1>LUMBER</h1>
              <p>
                Quality lumber products with various sizes to fit all your
                needs.
              </p>
              <p>2 x 4" - 2 x 12" and 8-20"</p>
              <Link to="/contact" className="btn carousel-btn">
                Buy Now
                <span className="btn-arrow" aria-hidden="true">→</span>
              </Link>
            </div>
            <div className="product-right-side-container">
              <img className="right-side-product-image" src={Lumber} alt="Dimensional lumber" />
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </>
  );
}
