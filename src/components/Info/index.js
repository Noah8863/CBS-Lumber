import React from "react";
import { Link } from "react-router-dom";
import "./info.scss";
import heroImg from "../../images/main-page-header1.jpg";

function Info() {
  return (
    <main>
      {/* ---------------- HERO ---------------- */}
      <section
        className="hero"
        style={{ backgroundImage: `url(${heroImg})` }}
      >
        <div className="hero__scrim"></div>
        <div className="container hero__inner">
          <p className="kicker kicker--light reveal reveal-1">
            Est. 2020 &nbsp;·&nbsp; Englewood, Colorado
          </p>
          <h1 className="hero__title reveal reveal-2">
            Meeting all your<br />
            <span className="hero__title-accent">lumber</span> needs
          </h1>
          <p className="hero__lead reveal reveal-3">
            Wholesale bulk lumber for pickup or delivery across the Colorado
            Front Range. We're taking new clients and accounts now.
          </p>
          <div className="hero__actions reveal reveal-4">
            <Link to="/contact" className="btn">
              Get a Quote Today
              <span className="btn-arrow" aria-hidden="true">→</span>
            </Link>
            <Link to="/products" className="btn btn--ghost btn--ghost-light">
              Browse Products
            </Link>
          </div>
        </div>
      </section>

      {/* ---------------- STATS STRIP ---------------- */}
      <div className="stats-strip">
        <div className="container stats-strip__inner">
          <div className="stat">
            <span className="stat__num">2020</span>
            <span className="stat__label">Established</span>
          </div>
          <div className="stat">
            <span className="stat__num">7+</span>
            <span className="stat__label">Product Lines</span>
          </div>
          <div className="stat">
            <span className="stat__num">14+</span>
            <span className="stat__label">Cities Served</span>
          </div>
          <div className="stat">
            <span className="stat__num">Pickup<span className="stat__amp">&amp;</span>Delivery</span>
            <span className="stat__label">Same-Day Available</span>
          </div>
        </div>
      </div>

      {/* ---------------- WHO WE ARE ---------------- */}
      <section className="section about-section">
        <div className="container about-grid">
          <div className="about-grid__head">
            <p className="kicker">Who We Are</p>
            <h2 className="section-title">Quality lumber, built for builders</h2>
            <div className="about-grid__rule" aria-hidden="true"></div>
          </div>
          <div className="about-grid__body">
            <p>
              Established in 2020, CBS-Lumber is a wholesale bulk lumber supply.
              Our supply includes OSB, OSB Tongue and Groove, Plywood, and
              traditional lumber, plus a few more products coming soon — for all
              your building needs across the greater Denver, Golden, Westminster,
              Thornton, Broomfield, Boulder, Lakewood, Littleton, Highlands Ranch,
              Centennial, Parker, Aurora, Brighton, and surrounding areas.
            </p>
            <p>
              We are a team of fully certified professionals who tackle
              everything from complex large projects to smaller-scale commercial
              jobs. Fueled by our commitment to excellence, Colorado Building
              Solutions goes the extra mile to make sure clients are completely
              satisfied with our work.
            </p>
          </div>
        </div>
      </section>

      {/* ---------------- LUMBER BUILT ON VALUES (feature band) ---------------- */}
      <section className="values-band">
        <div className="values-band__overlay"></div>
        <div className="container values-band__inner">
          <div className="values-band__card">
            <p className="kicker kicker--light">Our Promise</p>
            <h2 className="section-title section-title--light">
              Lumber built on values
            </h2>
            <p>
              When you work with CBS Lumber, you get more than high-quality
              lumber — though that's our main product. We're dedicated to
              outstanding customer service so our customers feel understood and
              that all their needs are met. Our team comes prepared with the
              knowledge and understanding of construction, and meeting your needs
              is our highest priority. Whether it's framing, new construction, or
              renovations, we have the lumber supply to get your commercial
              project moving quickly and on budget.
            </p>
          </div>
        </div>
      </section>

      {/* ---------------- ABOUT US ---------------- */}
      <section className="section about-section about-section--alt">
        <div className="container about-grid about-grid--reverse">
          <div className="about-grid__head">
            <p className="kicker">About Us</p>
            <h2 className="section-title">Founded to fix the shortage</h2>
            <div className="about-grid__rule" aria-hidden="true"></div>
          </div>
          <div className="about-grid__body">
            <p>
              CBS-Lumber supply division, based out of Englewood, Colorado, was
              founded in 2020 when our owners saw the impact supply shortages
              brought to the industry. Our goal is to bring the most affordable,
              quality lumber products for either pick-up or delivery.
            </p>
            <p>
              We value the relationships we form with our customers and strive to
              supply you with exactly what you need. CBS-Lumber is proud to serve
              the Denver metro and surrounding areas, and partners with Nova
              Incorporated. We take pride in every service we offer and strive to
              provide you with great service.
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}

export default Info;
