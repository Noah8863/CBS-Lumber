import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper";
import IMG1 from '../../images/main-page-header1.jpg'
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "./carousel.css";
import "swiper/css";
import banner from '../../images/Permanent-Banner.png'
export default function Carousel() {
  return (
    <>
      {/* Future option to have a carousel.  */}
      {/* <Swiper navigation={true} modules={[Navigation]} className="mySwiper">
        <SwiperSlide className="swiper-pictures"><img src={IMG1} /></SwiperSlide>
        <SwiperSlide className="swiper-pictures">Slide 2</SwiperSlide>
        <SwiperSlide className="swiper-pictures">Slide 3</SwiperSlide>
        <SwiperSlide className="swiper-pictures">Slide 4</SwiperSlide>
        <SwiperSlide className="swiper-pictures">Slide 5</SwiperSlide>
        <SwiperSlide className="swiper-pictures">Slide 6</SwiperSlide>
        <SwiperSlide className="swiper-pictures">Slide 7</SwiperSlide>
        <SwiperSlide className="swiper-pictures">Slide 8</SwiperSlide>
        <SwiperSlide className="swiper-pictures">Slide 9</SwiperSlide>
      </Swiper> */}
      <img id="header-banner" src={banner}></img>
    </>
  );
}


