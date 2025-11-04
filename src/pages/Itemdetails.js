// Itemdetails.js
import React, { useState } from "react";
import { Modal, Button, Carousel } from "react-bootstrap";

function Itemdetails() {
  const [show, setShow] = useState(false);

  return (
    <>
      <div className="container px-0">
        {/* Background image */}
        <img
          src="/assets/images/item-detail-page.webp"
          style={{ width: "100%", position: "absolute", left: 0 }}
          alt="Item Detail Background"
        />

        {/* Breadcrumb */}
        <div className="pages-likes">
          <p className="pl-5">
            <a className="bread-links" href="/">Home</a> &gt;{" "}
            <a className="bread-links" href="#">Trending Auction</a> &gt;{" "}
            <a className="bread-links" href="#">The Exclusive Frey</a>
          </p>
        </div>

        <div className="row">
          {/* Carousel Section */}
          <div className="col-md-6">
            <Carousel interval={3000} controls indicators>
              <Carousel.Item>
                <img
                  src="/assets/images/checkout-detail.webp"
                  className="d-block w-100"
                  style={{ height: "500px", borderRadius: "12px" }}
                  alt="Checkout Detail"
                />
              </Carousel.Item>
              <Carousel.Item>
                <img
                  src="/assets/images/Auctions-page/auction-page-2.webp"
                  className="d-block w-100"
                  style={{ height: "500px", borderRadius: "12px" }}
                  alt="Auction Slide 2"
                />
              </Carousel.Item>
              <Carousel.Item>
                <img
                  src="/assets/images/Auctions-page/auction-page-3.webp"
                  className="d-block w-100"
                  style={{ height: "500px", borderRadius: "12px" }}
                  alt="Auction Slide 3"
                />
              </Carousel.Item>
              <Carousel.Item>
                <img
                  src="/assets/images/Auctions-page/auction-page-4.webp"
                  className="d-block w-100"
                  style={{ height: "500px", borderRadius: "12px" }}
                  alt="Auction Slide 4"
                />
              </Carousel.Item>
              <Carousel.Item>
                <img
                  src="/assets/images/Auctions-page/auction-page-5.webp"
                  className="d-block w-100"
                  style={{ height: "500px", borderRadius: "12px" }}
                  alt="Auction Slide 5"
                />
              </Carousel.Item>
            </Carousel>

            <div className="item-slider-button pl-4 pr-4">
              <Button
                variant="primary"
                className="items-btn mt-4"
                onClick={() => setShow(true)}
              >
                Place Bid
              </Button>
            </div>
          </div>

          {/* Item Details Section */}
          <div className="col-md-6 px-5">
            {/* You can add item details here */}
            <h2 className="mt-4">Exclusive Item</h2>
            <p>
              This is a detailed description of the auction item. Add pricing,
              bid info, and specifications here.
            </p>
          </div>
        </div>
      </div>




      {/* Auction Modal */}
      <Modal show={show} onHide={() => setShow(false)} size="lg">
        <Modal.Header closeButton>
          <Modal.Title>Place Your Bid</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <p>Enter your bidding amount here...</p>
          {/* You can add form elements for bid input */}
        </Modal.Body>
        <Modal.Footer>
          <Button variant="danger" onClick={() => setShow(false)}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>


<div className="container px-0">
  <img
    src="./assets/images/item-detail-page.webp"
    style={{ width: "100%", position: "absolute", left: 0 }}
    alt=""
  />

  <div className="pages-likes">
    <p className="pl-5">
      <a className="bread-links" href="/">Home</a> &gt;{" "}
      <a className="bread-links" href="">Trending Auction</a> &gt;{" "}
      <a className="bread-links" href="">The Exclusive Frey</a>
    </p>
  </div>

  <div className="row">
    <div className="col-md-6">
      <div id="demo" className="carousel slide">
        {/* Indicators */}
        <ul className="carousels-indicatorss">
          <li data-target="#demo" data-slide-to="0" className="active"></li>
          <li data-target="#demo" data-slide-to="1"></li>
          <li data-target="#demo" data-slide-to="2"></li>
          <li data-target="#demo" data-slide-to="3"></li>
          <li data-target="#demo" data-slide-to="4"></li>
        </ul>

        {/* The slideshow */}
        <div className="carousel-inner">
          {[1, 2, 3, 4, 5].map((num, index) => (
            <div key={index} className={`carousel-item ${index === 0 ? "active d-flex" : ""}`}>
              <div className="col-12">
                <div className="container">
                  <div className="details-of-items mt-4">
                    {index === 0 && (
                      <>
                        <i className="fav fal fa-heart bg-2"></i>
                        <a href="https://web.telegram.org/z/">
                          <img
                            src="./assets/images/telegram.svg"
                            className="favo bg-share"
                            alt=""
                          />
                        </a>
                      </>
                    )}
                    <img
                      src={
                        index === 0
                          ? "./assets/images/checkout-detail.webp"
                          : `./assets/images/Auctions-page/auction-page-${num}.webp`
                      }
                      className="items-check-image"
                      style={{ width: "100%", height: "500px", borderRadius: "12px" }}
                      alt=""
                    />
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="item-slider-button pl-4 pr-4">
          <button data-toggle="modal" data-target="#myModal" className="btn items-btn mt-5">
            Place Bid
          </button>
        </div>
      </div>
    </div>

    <div className="col-md-6 px-5">
      <div className="itemss-head d-flex justify-content-between w-100 mt-4">
        <h5 className="subscription-title">The Exclusive Frey</h5>
        <a className="btn bidsreceve-btn" href="">
          <img src="./assets/images/receved-hammer.svg" className="btn-hammers" alt="" /> 17 Bids received
        </a>
      </div>

      <div className="buton-jump">
        <a className="btn bidsreceved-btn" href="">
          <img src="./assets/images/artifacts-icon.svg" className="btn-hammers" alt="" /> Artifacts
        </a>
        <a className="btn bidsreceved-btn" href="">
          <img src="./assets/images/new.svg" className="btn-hammers" alt="" /> New
        </a>
      </div>

      <p className="mt-4" style={{ textAlign: "justify", fontSize: "14px" }}>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure
      </p>

      <div className="row">
        <div className="col-md-6">
          <h5 className="title-colour">Types of product</h5>
          <p className="text-colours">New</p>
          <h5 className="title-colour">Market price</h5>
          <p className="text-colours">$99</p>
          <div className="checkout-rating mt-3">
            <h4 className="product-rating mb-0">Product Rating</h4>
            <span className="fa fa-star checked"></span>
            <span className="fa fa-star checked"></span>
            <span className="fa fa-star checked"></span>
            <span className="fa fa-star checked"></span>
            <span className="fa fa-star"></span>
          </div>
          <div className="details-items-bids">
            <h5 className="start-bidss mb-0 mt-2">Starting Bid</h5>
            <p className="details-items-bid-price"><strong>$40</strong></p>
          </div>
        </div>

        <div className="col-md-6">
          <h5 className="title-colour">Dimensions</h5>
          <p className="text-colours">364x254x23 mm</p>
          <h5 className="title-colour">Delivery mood</h5>
          <p className="text-colours">Deilverable</p>
          <div className="details-items-bids" style={{ position: "relative", top: "49px" }}>
            <h5 className="start-bidss mb-0">Starting Bid</h5>
            <p className="details-items-bid-price"><strong>$40</strong></p>
          </div>
        </div>

        <div className="container mt-3">
          <h4 className="auction-ending-heading mb-3">Auction Ending In</h4>
          <div className="row">
            {["08", "48", "33", "02"].map((val, idx) => (
              <div key={idx} className="col-sm-3">
                <div className="auction-ending-date">
                  <p className="ending-date text-center">{val}</p>
                  <p className="card-dhms text-center">{["Day", "Hours", "Minutes", "Seconds"][idx]}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  </div>

  {/* ------------------- Bidders & Auction Schedule Section ------------------- */}
  {/* Remaining part (bidders, modal, etc.) should follow same pattern: className, style={{}} and self-closing <img /> */}
</div>

    

       <div className="container mt-5 d-flex justify-content-between pr-0">
        <h2 className="section-headings first-heading px-0 mb-1">
          Live Auctions
        </h2>
      </div>

      <div className="container px-0">
        <div className="row align-items-center">
          {/* Card 1 */}
          <div className="col-md-4 col-sm-6 mt-3">
            <div className="slider-featured p-3">
              <i className="ico fal fa-heart bg-blue"></i>
              <img
                src="/assets/images/slider-product/product_img.webp"
                className="media-img"
                alt="Auction Item 1"
              />
              <div className="media-text">
                <h5 className="cards-headings">Da Vinci decor</h5>
                <p className="card-text">
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                </p>
                <div className="card-bid">
                  <p className="auction-bids-points">
                    Starting Bid{" "}
                    <strong style={{ color: "#f15d4c", marginBottom: 0 }}>
                      $46
                    </strong>{" "}
                    <a className="btn bids-btn" href="#">
                      9 Bid
                    </a>
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Card 2 */}
          <div className="col-md-4 col-sm-6 mt-3">
            <div className="slider-featured p-3">
              <i className="ico fal fa-heart bg-light-blue"></i>
              <img
                src="/assets/images/slider-product/Product_img_2.webp"
                className="media-img"
                alt="Auction Item 2"
              />
              <div className="media-text">
                <h5 className="cards-headings">Da Vinci decor</h5>
                <p className="card-text">
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                </p>
                <div className="card-bid">
                  <p className="auction-bids-points">
                    Starting Bid{" "}
                    <strong style={{ color: "#f15d4c", marginBottom: 0 }}>
                      $46
                    </strong>{" "}
                    <a className="btn bids-btn" href="#">
                      12 Bid
                    </a>
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Card 3 */}
          <div className="col-md-4 col-sm-6 mt-3">
            <div className="slider-featured p-3">
              <i className="ico fal fa-heart bg-pink"></i>
              <img
                src="/assets/images/slider-product/product_img_3.webp"
                className="media-img"
                alt="Auction Item 3"
              />
              <div className="media-text">
                <h5 className="cards-headings">Da Vinci decor</h5>
                <p className="card-text">
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                </p>
                <div className="card-bid">
                  <p className="auction-bids-points">
                    Starting Bid{" "}
                    <strong style={{ color: "#f15d4c", marginBottom: 0 }}>
                      $46
                    </strong>{" "}
                    <a className="btn bids-btn" href="#">
                      11 Bid
                    </a>
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Add more cards here with col-md-4 col-sm-6 */}
        </div>
      </div>
    </>
  );
}

export default Itemdetails;
