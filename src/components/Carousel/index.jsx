import React from "react";
import { Link } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper";
import IMG1 from "../../images/main-page-header1.jpg";
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
                An optimized structural product engineered for quality. A
                product that is gaining widespread use. It has high strength,
                high stiffness and dimensinal stability. LSL floor panels
                fastened to glulam purlins and steel beams. Available in 1.35E
                and 1.55E.
              </p>
              <Link to="/contact">
                <button className="buy-now button1">
                  <span className="circle" aria-hidden="true">
                    <span className="icon arrow"></span>
                  </span>
                  <span className="button-text">Buy Now</span>
                </button>
              </Link>
            </div>
            <div className="product-right-side-container">
              <img className="right-side-product-image" src={IMG1} />
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide className="swiper-pictures">
          <div className="product-swiper-container">
            <div className="product-left-side-container">
              <h1>OSB</h1>
              <p>
                A proprietary Blue Edge Seal creates a moisture resistant panel
                which resists swelling. To Keep our air clean, our OSB contains
                no added area-formaldehtde resin (NAUF) for improved indoor air
                quality.
              </p>
              <p>Thickness: 7/16, 19/32, 23,/32</p>
              <p>Lengths: 6', 8'</p>
              <p>Widths: 4', 8'</p>
              <Link to="/contact">
                <button className="buy-now button1">
                  <span className="circle" aria-hidden="true">
                    <span className="icon arrow"></span>
                  </span>
                  <span className="button-text">Buy Now</span>
                </button>
              </Link>
            </div>
            <div className="product-right-side-container">
              <img className="right-side-product-image" src={IMG1} />
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide className="swiper-pictures">Slide 3</SwiperSlide>
        <SwiperSlide className="swiper-pictures">Slide 4</SwiperSlide>
        <SwiperSlide className="swiper-pictures">Slide 5</SwiperSlide>
        <SwiperSlide className="swiper-pictures">Slide 6</SwiperSlide>
        <SwiperSlide className="swiper-pictures">Slide 7</SwiperSlide>
        <SwiperSlide className="swiper-pictures">Slide 8</SwiperSlide>
        <SwiperSlide className="swiper-pictures">Slide 9</SwiperSlide>
      </Swiper>
    </>
  );
}
