import React from 'react'

function AuctionWinnerBilling() {
  return (
    <>
     <div className="subscription-first-section">
    <img src="./assets/images/subscriptin-bg.webp" class="subs-bread" style={{width: "100%", position: "absolute",left: "0"}}
      alt=""/>
  </div>


 <div className="subs-main">
      <div className="subs-section" style={{ top: "100px" }}>
        <div className="container mt-4">
          <div className="d-flex justify-content-center w-100 mt-5 mb-3">
            <h5 className="auction-winner-heading">
              <img
                src="./assets/images/king-head.svg"
                className="king-image"
                alt=""
              />
              Auction Winner
            </h5>
            <img
              src="./assets/images/king-head.svg"
              className="king-image p-1"
              alt=""
            />
          </div>

          <div className="row">
            {/* Left Section - Image */}
            <div className="col-md-4">
              <div className="billing-page-view">
                <img src="./assets/images/hp-3.jpg" width="100%" alt="" />
              </div>
            </div>

            {/* Middle Section - Product Info */}
            <div className="col-md-4">
              <div className="billing-page-text-and-features">
                <h3 className="subscription-titles">Laptop</h3>
                <div className="subscription-check mt-3">
                  <ul className="checked-list">
                    <li>
                      <img src="./assets/images/check.svg" alt="" /> HP Pavilion
                      Aero 13-Be0048AU
                    </li>
                    <li>
                      <img src="./assets/images/check.svg" alt="" /> Rose Gold
                    </li>
                    <li>
                      <img src="./assets/images/check.svg" alt="" /> 8GB, 512GB
                      SSD, ATI, W10, HS
                    </li>
                    <li>
                      <img src="./assets/images/check.svg" alt="" /> 1 Year
                      warranty
                    </li>
                  </ul>
                </div>
                <div className="billing-disc-info">
                  <h3 style={{ color: "#415BA9" }}>Description</h3>
                  <p className="mb-5" style={{ textAlign: "justify" }}>
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                    Laborum, esse? Facere necessitatibus impedit,
                  </p>
                </div>
              </div>
            </div>

            {/* Right Section - Price Info */}
            <div className="col-md-4">
              <div className="price-detail">
                <h3 className="price-info text-center">Price Detail</h3>

                <div className="d-flex justify-content-around">
                  <p className="mb-3">Price (1 item)</p>
                  <p className="pl-3 mb-3">$ 45</p>
                </div>

                <div className="d-flex justify-content-around">
                  <p className="mb-3">Discount</p>
                  <p className="pl-5 mb-3">$ -8</p>
                </div>

                <div className="d-flex justify-content-around">
                  <p className="mb-3">VAT (Tax)</p>
                  <p className="pl-5 mb-3">$ 2</p>
                </div>

                <div className="billing-total-amount d-flex justify-content-around">
                  <p className="mb-3">
                    <strong>Total Amount:- </strong>
                  </p>
                  <p className="pl-3 mb-3">
                    <strong>$ 39</strong>
                  </p>
                </div>
              </div>

              <div className="order-btn d-flex justify-content-end w-100 mb-5 mt-4">
                <a
                  className="btn order-place-btn"
                  href="./acution-winner-payment.html"
                >
                  PROCEED TO PAY
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    </>
  )
}

export default AuctionWinnerBilling