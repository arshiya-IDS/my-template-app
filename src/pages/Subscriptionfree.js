import React from 'react'

function Subscriptionfree() {
  return (
    <>
    
    <div class="subscription-first-section">
        <img src="./assets/images/subscriptin-bg.webp" class="subs-bread" style={{width: "100%", position: "absolute",left: "0"}} alt=""/>
    </div>

    <div className="subs-main">
  <div className="subs-section">
    <div className="container">
      <h4 className="subscription-titles mt-3 pl-3 mb-3">Free</h4>
    </div>

    <div className="container mt-4">
      <h4 className="subscription-title pl-3 mb-3">Select A Payment Method</h4>
      <div className="row px-3 mb-3">
        <div className="col-md-4">
          <div className="debit-card-check select-1 p-1 pl-4">
            <div className="form-check">
              <input
                className="form-check-input"
                type="radio"
                name="flexRadioDefault"
                id="flexRadioDefault1"
              />
              <label className="form-check-labels" htmlFor="flexRadioDefault1">
                Debit Or Credit card
              </label>
            </div>
            <img src="./assets/images/debit.svg" className="debit-card-image" alt="" />
          </div>

          <div className="debit-card-check select-2 p-1 pl-4 mt-3">
            <div className="form-check">
              <input
                className="form-check-input"
                type="radio"
                name="flexRadioDefault"
                id="flexRadioDefault2"
              />
              <label className="form-check-labels" htmlFor="flexRadioDefault2">
                Apple Pay
              </label>
            </div>
            <img
              src="./assets/images/payments-cards-images/apple.svg"
              className="debit-card-image"
              alt=""
            />
          </div>

          <div className="debits-card-checks select-3 p-1 pl-4 mb-3 mt-3">
            <div className="form-check">
              <input
                className="form-check-input"
                type="radio"
                name="flexRadioDefault"
                id="flexRadioDefault3"
              />
              <label className="form-check-labels" htmlFor="flexRadioDefault3">
                different currency
              </label>
            </div>
            <img
              src="./assets/images/payments-cards-images/currency-symbols.png"
              width="19%"
              className="debit-card-image"
              alt=""
            />
          </div>
        </div>

        <div className="col-md-4">
          <div className="debit-card-check select-4 p-1 pl-4">
            <div className="form-check">
              <input
                className="form-check-input"
                type="radio"
                name="flexRadioDefault"
                id="flexRadioDefault4"
              />
              <label className="form-check-labels" htmlFor="flexRadioDefault4">
                Netbanking
              </label>
            </div>
            <img
              src="./assets/images/payments-cards-images/net.banking-new.webp"
              width="19%"
              className="debit-card-image"
              alt=""
            />
          </div>

          <div className="debit-card-check select-5 p-1 pl-4 mb-3 mt-3">
            <div className="form-check">
              <input
                className="form-check-input"
                type="radio"
                name="flexRadioDefault"
                id="flexRadioDefault5"
              />
              <label className="form-check-labels" htmlFor="flexRadioDefault5">
                Stc Pay
              </label>
            </div>
            <img
              src="./assets/images/payments-cards-images/stc-pay.svg"
              className="debit-card-image"
              alt=""
            />
          </div>
        </div>

        <div className="col-md-4">
          <div className="debit-card-check select-6 p-1 pl-4">
            <div className="form-check">
              <input
                className="form-check-input"
                type="radio"
                name="flexRadioDefault"
                id="flexRadioDefault6"
              />
              <label className="form-check-labels" htmlFor="flexRadioDefault6">
                Aber
              </label>
            </div>
            <img
              src="./assets/images/payments-cards-images/AberLogo.png"
              width="23%"
              className="debit-card-image"
              alt=""
            />
          </div>

          <div className="debits-card-checks select-7 p-1 pl-4 mb-3 mt-3">
            <div className="form-check">
              <input
                className="form-check-input"
                type="radio"
                name="flexRadioDefault"
                id="flexRadioDefault7"
              />
              <label className="form-check-labels" htmlFor="flexRadioDefault7">
                Cash
              </label>
            </div>
            <img src="./assets/images/debit.svg" className="debit-card-image" alt="" />
          </div>
        </div>
      </div>
    </div>

    <div className="container">
      <div className="row px-3 mb-5">
        <div className="col-md-7 px-5 py-4 ml-3" style={{ border: "1px dotted grey" }}>
          <div className="row">
            <div className="col-md-6">
              <form action="/action_page.php">
                <div className="form-group">
                  <label htmlFor="usr1">Name on card</label>
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Enter the name on card"
                    id="usr1"
                    name="username"
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="pwd">Expiry date</label>
                  <input
                    type="date"
                    id="pwd"
                    name="start"
                    min="1949-08"
                    className="form-control"
                    defaultValue="2022-02"
                  />
                </div>
              </form>
            </div>

            <div className="col-md-6">
              <form action="/action_page.php">
                <div className="form-group">
                  <label htmlFor="usr2">Card number</label>
                  <input
                    type="text"
                    className="form-control"
                    placeholder="0000 0000 0000 0000"
                    id="usr2"
                    name="username"
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="usr5">CVC code</label>
                  <input
                    type="text"
                    className="form-control"
                    placeholder="CVC CODE"
                    id="usr5"
                    name="username"
                  />
                </div>
              </form>
            </div>

            <div className="subscription-planes d-flex justify-content-between w-100 mt-5">
              <h5 className="pl-3">Free plan</h5>
              <p className="pr-3">
                <strong>$00</strong>
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
                <strong></strong>
              </p>
            </div>
            <hr className="paira-line" />

            <div className="subscription-planes d-flex justify-content-between w-100 mt-2">
              <h5 className="pl-3">
                <strong>Total</strong>
              </h5>
              <p className="pr-3">
                <strong>$00</strong>
              </p>
            </div>

            <div className="mt-5 pl-2">
              <a className="btn secure-btn" href="">
                Submit secure payment
              </a>
            </div>
          </div>
        </div>

        <div className="col-md-4"></div>
        <div className="subscription-last-sec">
          <p className="subscription-text">
            By submitting you agree to the terms of service and privacy policy
          </p>
        </div>
      </div>
    </div>
  </div>
</div>

    </>
  )
}

export default Subscriptionfree