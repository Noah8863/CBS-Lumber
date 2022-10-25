import React from "react";
import "./product.scss";
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
          <h1>LUMBER</h1>
          <p>
            Colorado Building Solutions now has a bulk lumber supply at our
            warehouse, with supply avaliable today for pickup or delivery. CBS
            Lumber provides a variety of lumber to meet all of your building
            needs. Our Lumber supply includes OSB, OSB Tongue and Groove,
             Plywood, and traditional lumber. With a few other products being
            added soon. CBS Lumber is a wholesale lumber wendor serving Denver,
            Golden, Westminster, Thornton, Broomfield, Boulder, Lakewood,
            Littleton, Highlands Ranch, Centennial, Parker, Aurora, Brighton,
            and other surrounding areas.
          </p>
        </div>
      </div>
      <Certification />
      <Contact />
    </>
  );
}

export default Products;
