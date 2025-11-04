import React from 'react'

function Checkout() {
  return (
    <>

<div className="subscription-first-section">
        <img src="./assets/images/subscriptin-bg.webp" style={{width: "100%", position: "absolute",left: "0"}} alt=""/>
    </div>


<div className="subs-main">
      <div className="subs-section">
        {/* Checkout Title */}
        <div className="container">
          <h4 className="subsc-titles mt-5 pl-3 mb-3">Checkout</h4>
          {/* <h3 className="subscriptipn-main-title mb-4">Silver</h3> */}

          <div className="row px-3 mb-5">
            <div className="col-md-4">
              <div className="checkout-image">
                <img
                  src="/assets/images/checkout-detail.webp"
                  className="show-item"
                  alt="Checkout Detail"
                />
              </div>
            </div>

            <div className="col-md-8">
              <h4 className="subscription-title">The Exclusive Frey</h4>
              <p style={{ textAlign: "justify", fontSize: "14px" }}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat. Duis aute irure
              </p>

              <div className="row">
                <div className="col-md-6">
                  <h5 className="title-colour">Types of product</h5>
                  <p className="text-colours">New</p>

                  <h5 className="title-colour">Market price</h5>
                  <p className="text-colours">$99</p>

                  <div className="checkout-rating mb-0">
                    <h4 className="product-rating mb-0">Product Rating</h4>
                    <span className="fa fa-star checked"></span>
                    <span className="fa fa-star checked"></span>
                    <span className="fa fa-star checked"></span>
                    <span className="fa fa-star checked"></span>
                    <span className="fa fa-star"></span>
                  </div>
                </div>

                <div className="col-md-6">
                  <h5 className="title-colour">Dimensions</h5>
                  <p className="text-colours">364x254x23 mm</p>

                  <h5 className="title-colour">Delivery mode</h5>
                  <p className="text-colours">Deliverable</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Payment Method Section */}
        <div className="container mt-4">
          <h4 className="subscription-title pl-3 mb-3">
            Select A Payment Method
          </h4>
          <div className="row px-3 mb-3">
            {/* Column 1 */}
            <div className="col-md-4">
              <div className="debit-card-check p-1 pl-4">
                <div className="form-check">
                  <input
                    className="form-check-input"
                    type="radio"
                    name="paymentMethod"
                    id="paymentCard"
                  />
                  <label
                    className="form-check-labels"
                    htmlFor="paymentCard"
                  >
                    Debit Or Credit card
                  </label>
                </div>
                <img
                  src="/assets/images/debit.svg"
                  className="debit-card-image"
                  alt="Debit Card"
                />
              </div>

              <div className="debit-card-check p-1 pl-4 mt-3">
                <div className="form-check">
                  <input
                    className="form-check-input"
                    type="radio"
                    name="paymentMethod"
                    id="paymentApple"
                  />
                  <label
                    className="form-check-labels"
                    htmlFor="paymentApple"
                  >
                    Apple Pay
                  </label>
                </div>
                <img
                  src="/assets/images/debit.svg"
                  className="debit-card-image"
                  alt="Apple Pay"
                />
              </div>

              <div className="debits-card-checks p-1 pl-4 mb-3 mt-3">
                <div className="form-check">
                  <input
                    className="form-check-input"
                    type="radio"
                    name="paymentMethod"
                    id="paymentCurrency"
                  />
                  <label
                    className="form-check-labels"
                    htmlFor="paymentCurrency"
                  >
                    Different currency
                  </label>
                </div>
                <img
                  src="/assets/images/debit.svg"
                  className="debit-card-image"
                  alt="Currency"
                />
              </div>
            </div>

            {/* Column 2 */}
            <div className="col-md-4">
              <div className="debit-card-check p-1 pl-4">
                <div className="form-check">
                  <input
                    className="form-check-input"
                    type="radio"
                    name="paymentMethod"
                    id="paymentNetbanking"
                  />
                  <label
                    className="form-check-labels"
                    htmlFor="paymentNetbanking"
                  >
                    Netbanking
                  </label>
                </div>
                <img
                  src="/assets/images/debit.svg"
                  className="debit-card-image"
                  alt="Netbanking"
                />
              </div>

              <div className="debit-card-check p-1 pl-4 mb-3 mt-3">
                <div className="form-check">
                  <input
                    className="form-check-input"
                    type="radio"
                    name="paymentMethod"
                    id="paymentStc"
                  />
                  <label
                    className="form-check-labels"
                    htmlFor="paymentStc"
                  >
                    Stc Pay
                  </label>
                </div>
                <img
                  src="/assets/images/debit.svg"
                  className="debit-card-image"
                  alt="STC Pay"
                />
              </div>
            </div>

            {/* Column 3 */}
            <div className="col-md-4">
              <div className="debit-card-check p-1 pl-4">
                <div className="form-check">
                  <input
                    className="form-check-input"
                    type="radio"
                    name="paymentMethod"
                    id="paymentAber"
                  />
                  <label
                    className="form-check-labels"
                    htmlFor="paymentAber"
                  >
                    Aber
                  </label>
                </div>
                <img
                  src="/assets/images/debit.svg"
                  className="debit-card-image"
                  alt="Aber"
                />
              </div>

              <div className="debits-card-checks p-1 pl-4 mb-3 mt-3">
                <div className="form-check">
                  <input
                    className="form-check-input"
                    type="radio"
                    name="paymentMethod"
                    id="paymentCash"
                  />
                  <label
                    className="form-check-labels"
                    htmlFor="paymentCash"
                  >
                    Cash
                  </label>
                </div>
                <img
                  src="/assets/images/debit.svg"
                  className="debit-card-image"
                  alt="Cash"
                />
              </div>
            </div>
          </div>
        </div>

        {/* Card Details + Summary */}
        <div className="container">
          <div className="row px-3 mb-5">
            <div
              className="col-md-7 px-5 py-4 ml-3"
              style={{ border: "1px dotted grey" }}
            >
              <div className="row">
                <div className="col-md-6">
                  <form>
                    <div className="form-group">
                      <label htmlFor="cardName">Name on card</label>
                      <input
                        type="text"
                        className="form-control"
                        placeholder="Enter the name on card"
                        id="cardName"
                      />
                    </div>
                    <div className="form-group">
                      <label htmlFor="expiry">Expiry date</label>
                      <input
                        type="month"
                        className="form-control"
                        id="expiry"
                        defaultValue="2022-02"
                      />
                    </div>
                  </form>
                </div>

                <div className="col-md-6">
                  <form>
                    <div className="form-group">
                      <label htmlFor="cardNumber">Card Number</label>
                      <input
                        type="text"
                        className="form-control"
                        placeholder="0000 0000 0000 0000"
                        id="cardNumber"
                      />
                    </div>
                    <div className="form-group">
                      <label htmlFor="cvc">CVC Code</label>
                      <input
                        type="text"
                        className="form-control"
                        placeholder="CVC CODE"
                        id="cvc"
                      />
                    </div>
                  </form>
                </div>

                {/* Plan Summary */}
                <div className="subscription-planes d-flex justify-content-between w-100 mt-5">
                  <h5 className="pl-3">Silver plan</h5>
                  <p className="pr-3">
                    <strong>$59</strong>
                  </p>
                </div>
                <div className="subscription-planes d-flex justify-content-between w-100 mt-2">
                  <h5 className="pl-3">Coupons</h5>
                  <p className="pr-3">
                    <strong>$0</strong>
                  </p>
                </div>
                <hr className="paira-line" />
                <div className="subscription-planes d-flex justify-content-between w-100 mt-2">
                  <h5 className="pl-3">Taxes & Fees</h5>
                  <p className="pr-3">
                    <strong>$0</strong>
                  </p>
                </div>
                <hr className="paira-line" />
                <div className="subscription-planes d-flex justify-content-between w-100 mt-2">
                  <h5 className="pl-3">
                    <strong>Total</strong>
                  </h5>
                  <p className="pr-3">
                    <strong>$59</strong>
                  </p>
                </div>

                <div className="mt-5 pl-2">
                  <a className="btn secure-btn" href="/">
                    Submit secure payment
                  </a>
                </div>
              </div>
            </div>

            <div className="col-md-4"></div>
            <div className="subscription-last-sec">
              <p className="subscription-text">
                By submitting you agree to the terms of service and privacy
                policy
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>

    </>
  )
}

export default Checkout