import React from "react";
import "./product.scss";
import { Link } from "react-router-dom";
import leftPicture from "../../images/product-wood-img.jpg";
import rightPicture from "../../images/product-wood-img-1.jpg";
import Certification from "../Certification/index";
import Contact from "../Contact-Card/index";
import Carousel from "../Carousel/index";

function Products() {
  return (
    <>
      {/* ---------------- PRODUCTS HERO ---------------- */}
      <section id="product-hero">
        <div className="container product-hero__grid">
          <div className="product-hero__text">
            <p className="kicker reveal reveal-1">Our Supply</p>
            <h1 className="product-hero__title reveal reveal-2">
              Affordable lumber<br />for any project
            </h1>
            <p className="product-hero__lead reveal reveal-3">
              From OSB and plywood to engineered wood products, CBS Lumber keeps
              a full bulk supply at our Englewood warehouse — ready today for
              pickup or delivery.
            </p>
            <Link to="/contact" className="btn reveal reveal-4">
              Get a Quote
              <span className="btn-arrow" aria-hidden="true">→</span>
            </Link>
          </div>
          <div className="product-hero__media reveal reveal-3">
            <img className="product-hero__img product-hero__img--back" src={leftPicture} alt="Stacked lumber" />
            <img className="product-hero__img product-hero__img--front" src={rightPicture} alt="Lumber close up" />
          </div>
        </div>
      </section>

      {/* ---------------- LUMBER INTRO ---------------- */}
      <section id="lumber-description-container">
        <div className="lumber-desc-overlay" aria-hidden="true"></div>
        <div className="container" id="lumber-description-card">
          <p className="kicker kicker--light">In Stock Now</p>
          <h2 className="section-title section-title--light">Lumber</h2>
          <div id="lumber-info-description">
            <p>
              Colorado Building Solutions now has a bulk lumber supply at our
              warehouse, with supplies available today for pickup or delivery.
              CBS Lumber provides a variety of lumber to meet all of your
              building needs — including OSB, OSB Tongue and Groove, Plywood, and
              traditional lumber, with a few other products being added soon. We
              are a wholesale lumber vendor serving Denver, Golden, Westminster,
              Thornton, Broomfield, Boulder, Lakewood, Littleton, Highlands
              Ranch, Centennial, Parker, Aurora, Brighton, and surrounding areas.
            </p>
            <Link to="/contact" className="btn">
              Get a Quote!
              <span className="btn-arrow" aria-hidden="true">→</span>
            </Link>
          </div>
        </div>
      </section>

      {/* ---------------- PRODUCT CAROUSEL ---------------- */}
      <section id="main-product-container">
        <div className="container product-carousel-head">
          <p className="kicker">Browse The Range</p>
          <h2 className="section-title">Product Lineup</h2>
        </div>
        <Carousel />
      </section>

      <Certification />
      <Contact />
    </>
  );
}

export default Products;
