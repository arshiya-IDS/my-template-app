import React from 'react'
import { Modal, Button } from "react-bootstrap";
import  { useState, useRef } from "react";


function Winbid() {
   const [show, setShow] = useState(false);

  return (

    <>

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

<div className="container mt-5">
      <div className="row" style={{ border: "2px dotted grey" }}>
        
        {/* Left Column - Winner */}
        <div className="col-md-4">
          <div className="bidder-image d-flex justify-content-center w-100 mt-4">
            <img
              src="/assets/images/m.alharbi.webp.webp"
              style={{ width: "20%" }}
              alt="Top Bidder"
            />
          </div>

          <div className="bids-winner d-flex justify-content-center w-100 mt-4">
            <h5>
              <img
                src="/assets/images/king-head.svg"
                className="king-image"
                alt="King Icon"
              />{" "}
              Top Bidder
            </h5>
            <img
              src="/assets/images/king-head.svg"
              className="king-image p-1"
              alt="King Icon"
            />
          </div>

          <div className="bids-winner mt-2">
            <h5 className="text-center">Mohammad Alharbi</h5>
          </div>

          <div className="Duration mt-5">
            <h5>The Exclusive Frey Bid Winner</h5>
            <p className="bid-win-texed">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Illo
              animi alias, ad earum assumenda deserunt.
            </p>
          </div>

          <div className="bid-winner-info d-flex pr-5">
            <strong style={{ color: "#415BA9" }}>Street:</strong>
            <p className="bid-win-texed pl-3">
              ELOB Office Number: E-85G-34 P.O.Box 53882 Hamriyah Free Zone UAE.
            </p>
          </div>
          <div className="bid-winner-info d-flex">
            <strong style={{ color: "#415BA9" }}>Phone Number:</strong>
            <p className="bid-win-texed pl-3">+971 50 2998857</p>
          </div>
        </div>

        {/* Middle Column - Top Bidders */}
        <div className="col-md-6 col-lg-4">
          <div className="Duration mt-3">
            <h5>Top bidders</h5>
          </div>

          {/* Example Top Bidder Entry */}
          <div className="about pb-4">
            <div className="chipss">
              <img
                src="/assets/images/m.alharbi.webp.webp"
                alt="Person"
                style={{ width: "35px", height: "35px" }}
              />
              <p className="selling-bid-text">Bid placed by</p>
              <p style={{ color: "#415BA9" }}>Ahmad bajama</p>
              <p className="prices">$99</p>
            </div>
            <div className="selling-date">
              <p>January 15th, 2021 at 1:22</p>
            </div>
          </div>

           <div className="about pb-4">
            <div className="chipss">
              <img
                src="/assets/images/m.alharbi.webp.webp"
                alt="Person"
                style={{ width: "35px", height: "35px" }}
              />
              <p className="selling-bid-text">Bid placed by</p>
              <p style={{ color: "#415BA9" }}>Ahmad bajama</p>
              <p className="prices">$89</p>
            </div>
            <div className="selling-date">
              <p>January 15th, 2021 at 1:22</p>
            </div>
          </div>

           <div className="about pb-4">
            <div className="chipss">
              <img
                src="/assets/images/m.alharbi.webp.webp"
                alt="Person"
                style={{ width: "35px", height: "35px" }}
              />
              <p className="selling-bid-text">Bid placed by</p>
              <p style={{ color: "#415BA9" }}>Ahmad bajama</p>
              <p className="prices">$79</p>
            </div>
            <div className="selling-date">
              <p>January 15th, 2021 at 1:22</p>
            </div>
          </div>

           <div className="about pb-4">
            <div className="chipss">
              <img
                src="/assets/images/m.alharbi.webp.webp"
                alt="Person"
                style={{ width: "35px", height: "35px" }}
              />
              <p className="selling-bid-text">Bid placed by</p>
              <p style={{ color: "#415BA9" }}>Ahmad bajama</p>
              <p className="prices">$59</p>
            </div>
            <div className="selling-date">
              <p>January 15th, 2021 at 1:22</p>
            </div>
          </div>

 <div className="about pb-4">
            <div className="chipss">
              <img
                src="/assets/images/m.alharbi.webp.webp"
                alt="Person"
                style={{ width: "35px", height: "35px" }}
              />
              <p className="selling-bid-text">Bid placed by</p>
              <p style={{ color: "#415BA9" }}>Ahmad bajama</p>
              <p className="prices">$39</p>
            </div>
            <div className="selling-date">
              <p>January 15th, 2021 at 1:22</p>
            </div>
          </div>
           <div className="about pb-4">
            <div className="chipss">
              <img
                src="/assets/images/m.alharbi.webp.webp"
                alt="Person"
                style={{ width: "35px", height: "35px" }}
              />
              <p className="selling-bid-text">Bid placed by</p>
              <p style={{ color: "#415BA9" }}>Ahmad bajama</p>
              <p className="prices">$49</p>
            </div>
            <div className="selling-date">
              <p>January 15th, 2021 at 1:22</p>
            </div>
          </div>
          {/* Duplicate more "about" blocks for each bidder... */}

          <div className="show-all mb-3">
            <p>Show all</p>
            <a href="#">
              <img src="/assets/images/down-arrow.svg" alt="Show More" />
            </a>
          </div>
        </div>

        {/* Right Column - Auction Schedule */}
        <div className="col-md-4">
          <div className="auction-times mt-3">
            <div className="Duration mt-3">
              <h5>Auction Schedule</h5>
            </div>

            <div className="picker">
              <label htmlFor="start-time">Start Day _ Start Time</label>
              <input
                type="datetime-local"
                id="start-time"
                className="form-control"
                defaultValue="2022-06-07T00:00"
              />
            </div>
            <div className="picker mt-3">
              <label htmlFor="end-time">End Day _ End Time</label>
              <input
                type="datetime-local"
                id="end-time"
                className="form-control"
                defaultValue="2022-06-07T00:00"
              />
            </div>

            <div className="close-win-button mt-4">
              <button className="btn cloded-btn mt-4 mb-3">
                Close Auction
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>



 <div className="container">
      {/* Open Modal Button */}
      <Button variant="primary" onClick={() => setShow(true)}>
        Open Auction Modal
      </Button>

      {/* Modal */}
      <Modal show={show} onHide={() => setShow(false)} size="xl">
        <Modal.Header closeButton></Modal.Header>
        <Modal.Body>
          <div className="container">
            <div className="row" style={{ border: "2px dotted grey" }}>
              {/* Left Column - Top 3 Bidders */}
              <div className="col-md-6 col-lg-4 offset-md-1 mt-3">
                <h5 className="text-center mb-4">Top 3 bidders:</h5>

                {[1, 2, 3].map((n) => (
                  <div className="about pb-5" key={n}>
                    <div className="chipss d-flex align-items-center">
                      <img
                        src="/assets/images/m.alharbi.webp.webp"
                        alt="Person"
                        style={{ width: "35px", height: "35px" }}
                      />
                      <div className="pl-2">
                        <p className="selling-bid-text mb-0">
                          Bid placed by <span style={{ color: "#415BA9" }}>Ahmad bajama</span>
                        </p>
                        <p className="prices mb-0">$46</p>
                      </div>
                    </div>
                    <div className="selling-date">
                      <p>January 15th, 2021 at 1:22</p>
                    </div>
                  </div>
                ))}

                <div className="show-all">
                  <p>Show all</p>
                  <a href="#">
                    <img src="/assets/images/down-arrow.svg" alt="Show all" />
                  </a>
                </div>
              </div>

              {/* Right Column - Auction Schedule */}
              <div className="col-md-6 mt-3">
                <h5 className="mb-4">Auction Schedule</h5>

                <div className="schedule-timeing d-flex">
                  <p style={{ fontWeight: "bold", color: "#415BA9" }}>Start Time :</p>
                  <p className="pl-2"> Monday 10:13AM</p>
                </div>

                <div className="schedule-timeing d-flex">
                  <p style={{ fontWeight: "bold", color: "#415BA9" }}>Time Left :</p>
                  <p className="pl-2"> 2d 22h Monday 9:15PM</p>
                </div>

                <h5 className="mt-3">Bidding Amount:</h5>
                <div className="row">
                  <div className="col-md-6">
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Enter minimum bid"
                    />
                  </div>
                  <div className="col-md-6">
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Enter maximum bid"
                    />
                  </div>
                </div>

                <div className="d-flex mt-3 mb-3">
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Enter $40.00 or More"
                  />
                  <Button className="ml-2 placed-btn">Place Bid</Button>
                </div>
              </div>
            </div>
          </div>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="danger" onClick={() => setShow(false)}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>

      {/* Live Auctions Section (Grid instead of OwlCarousel) */}
      <div className="container mt-5 d-flex justify-content-between pr-0">
        <h2 className="section-headings first-heading px-0 mb-1">
          Live Auctions
        </h2>
      </div>

      <div className="container px-0">
        <div className="row align-items-center">
          {[1, 2, 3, 4, 5, 6].map((n) => (
            <div className="col-md-4 mt-3" key={n}>
              <div className="slider-featured p-3">
                <i className="ico fal fa-heart bg-blue"></i>
                <img
                  src={`/assets/images/slider-product/product_img${n}.webp`}
                  className="media-img"
                  alt={`Auction Item ${n}`}
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
                        {5 * n} Bid
                      </a>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  {/* ------------------- Bidders & Auction Schedule Section ------------------- */}
  {/* Remaining part (bidders, modal, etc.) should follow same pattern: className, style={{}} and self-closing <img /> */}
</div>
    </>
  )
}

export default Winbid