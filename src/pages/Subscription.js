import React from 'react'

function Subscription() {
  return (
    <>

      <div className="container mt-5">
        <div className="left-gradient"></div>
        <div className="right-gradient-top"></div>
        <div className="right-gradient-bottom"></div>

        <div className="d-flex justify-content-center w-100 mt-4">
          <h5>
            <img src="./assets/images/king-head.svg" className="king-image" alt="king" /> Subscription
          </h5>
          <img src="./assets/images/king-head.svg" className="king-image p-1" alt="king" />
        </div>

        <div className="row mt-3">
          {/* Example Card: Free */}
          <div className="col-sm-6 col-md-4 col-lg-3">
            <div className="subsc-featured p-3 mb-3">
              <div className="d-flex justify-content-center w-100">
                <img src="./assets/images/edit-new.svg" className="subscription-edit" alt="edit" />
                <img src="./assets/images/delete.png.png" className="subscription-delete" alt="delete" />
                <a href="./subscription-free.html">
                  <img
                    src="./assets/images/Subscription-img/01svg.svg"
                    style={{ width: "125px" }}
                    className="subsc-image mt-4"
                    alt="free plan"
                  />
                </a>
              </div>
              <div className="subsc-section">
                <h2 className="scbsc-sub-heading-1 mt-3 text-center">Free</h2>
                <h3 className="text-center">
                  <strong className="sbusc-count">$0</strong>/mo
                </h3>
              </div>
              <div className="subscription-check d-flex justify-content-center w-100 mt-3">
                <ul className="checked-list">
                  <li><img src="./assets/images/check.svg" alt="check" /> X No. Free auctions</li>
                  <li><img src="./assets/images/check.svg" alt="check" /> X No. Free Bids</li>
                  <li><img src="./assets/images/check.svg" alt="check" /> Charges $0.00</li>
                  <li><img src="./assets/images/check.svg" alt="check" /> 3 Month Validity</li>
                </ul>
              </div>
              <div className="buy-subs d-flex justify-content-center w-100 pl-4">
                <a className="btn buy-subscriptions-btn mb-5" href="./billing-page-free.html">
                  BUY SUBSCRIPTION
                </a>
              </div>
            </div>
          </div>

          {/* Repeat the above block for Silver, Gold, Platinum cards */}
        </div>
      </div>

      <div className="container d-flex justify-content-end w-100 mt-4">
        <a className="btn add-subscription-btn" href="./add-subscriptipn.html">
          Add Subscription
        </a>
      </div>

      {/* Modal */}
      <div className="container">
        <div className="modal fade" id="myModal" role="dialog">
          <div className="modal-dialog modal-dialog-scrollable modal-xl">
            <div className="modal-content">
              <div className="modal-header">
                <button type="button" className="close p-0" data-dismiss="modal">
                  &times;
                </button>
              </div>
              <div
                className="modal-body"
                style={{ backgroundColor: "aliceblue", border: "1px solid red" }}
              >
                <div className="container mt-3">
                  <div className="left-gradient"></div>
                  <div className="right-gradient-top"></div>
                  <div className="right-gradient-bottom"></div>
                  <div className="d-flex justify-content-center w-100">
                    <h5>
                      <img src="./assets/images/king-head.svg" className="king-image" alt="king" /> Edit Subscription
                    </h5>
                    <img src="./assets/images/king-head.svg" className="king-image p-1" alt="king" />
                  </div>
                  <div className="row">
                    <div className="col-md-6 col-md-offset-1 mt-2 px-5">
                      <div className="subscription-upload">
                        <div className="logoContainer d-flex justify-content-center w-100 mt-5">
                          <img src="./assets/images/upload.webp.webp" className="upload-image" alt="upload" />
                        </div>
                        <div className="fileContainer sprite mb-4">
                          <span>choose file</span>
                          <input type="file" />
                        </div>
                      </div>
                    </div>
                    <div className="col-md-5 mt-2">
                      <div className="subscription-add-data">
                        <div className="form-group">
                          <label className="subs-titless">Subscription Type (Name)</label>
                          <input type="text" className="form-control mb-3" placeholder="Subscription Name" required />
                        </div>

                        <div className="form-group">
                          <label className="subs-titless">Number of Free Auction</label>
                          <input type="number" className="form-control" placeholder="Number of Free Auction" required />
                        </div>

                        <div className="form-group">
                          <label className="subs-titless">Number Of Bid</label>
                          <input type="number" className="form-control" placeholder="Number Of Bid" required />
                        </div>

                        <div className="form-group">
                          <label className="subs-titless">Validity</label>
                          <input type="number" className="form-control" placeholder="Validity" required />
                        </div>

                        <div className="form-group">
                          <label className="subs-titless">Subscription Charges</label>
                          <input type="number" className="form-control mb-3" placeholder="Subscription Charges" required />
                        </div>
                      </div>
                    </div>

                    <div className="subs-save-button d-flex justify-content-center w-100 mt-2">
                      <a className="btn subs-save-btn mb-2" href="">
                        Save
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              {/* Optional footer */}
            </div>
          </div>
        </div>
      </div>
  

  <div id="delete-myModal" className="delete-modal">
  <div className="Delete-modal-content">
    <div
      className="modal-body"
      style={{ backgroundColor: "aliceblue", borderRadius: "12px" }}
    >
      <span className="close-delete">&times;</span>
      <div className="icon-box d-flex justify-content-center w-100">
        <img
          src="./assets/images/new-cross-icon.png"
          style={{ width: "10%", height: "10%", margin: "0px 8px" }}
          alt=""
        />
        <h5 className="delete-text text-center mt-3 mb-5">
          Are You Sure You Want To Delete This Subscription ?
        </h5>
      </div>

      <div className="container">
        <div className="row">
          <div className="col-md-4">
            <div className="delete-modal-image-section">
              <img src="./assets/images/Subscription-img/01svg.svg" alt="" />
            </div>
          </div>

          <div className="col-md-4">
            <div className="delete-modal-headings text-center">
              <h2 className="modal-headings">Free</h2>
              <h3>
                <strong>$0</strong>/mo
              </h3>
            </div>
          </div>

          <div className="col-md-4">
            <div className="subscription-check d-flex justify-content-center w-100 mt-3">
              <ul className="checked-list">
                <li>
                  <img src="./assets/images/check.svg" alt="" /> X No. Free auctions
                </li>
                <li>
                  <img src="./assets/images/check.svg" alt="" /> X No. Free Bids
                </li>
                <li>
                  <img src="./assets/images/check.svg" alt="" /> Charges $0.00
                </li>
                <li>
                  <img src="./assets/images/check.svg" alt="" /> 3 Month Validity
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      <div className="delete-button-group d-flex justify-content-center w-100 mt-5">
        <a className="btn delete-sure-btn" href="">
          Yes
        </a>
        <a className="btn delete-not-btn" href="">
          No
        </a>
      </div>
    </div>
  </div>
</div>

{/* Repeat the same structure for other modals with updated ids, images, headings, and pricing */}

<div id="delete-myModal-1" className="delete-modal">
  <div className="Delete-modal-content">
    <div
      className="modal-body"
      style={{ backgroundColor: "aliceblue", borderRadius: "12px" }}
    >
      <span className="close-delete">&times;</span>
      <div className="icon-box d-flex justify-content-center w-100">
        <img
          src="./assets/images/new-cross-icon.png"
          style={{ width: "10%", height: "10%", margin: "0px 8px" }}
          alt=""
        />
        <h5 className="delete-text text-center mt-3 mb-5">
          Are You Sure You Want To Delete <br /> This Subscription ?
        </h5>
      </div>

      <div className="container">
        <div className="row">
          <div className="col-md-4">
            <div className="delete-modal-image-section">
              <img src="./assets/images/Subscription-img/03svg.svg" alt="" />
            </div>
          </div>

          <div className="col-md-4">
            <div className="delete-modal-headings text-center">
              <h2 className="modal-headings">Gold</h2>
              <h3>
                <strong>$30</strong>/mo
              </h3>
            </div>
          </div>

          <div className="col-md-4">
            <div className="subscription-check d-flex justify-content-center w-100 mt-3">
              <ul className="checked-list">
                <li>
                  <img src="./assets/images/check.svg" alt="" /> X No. Free auctions
                </li>
                <li>
                  <img src="./assets/images/check.svg" alt="" /> X No. Free Bids
                </li>
                <li>
                  <img src="./assets/images/check.svg" alt="" /> Charges $30.00
                </li>
                <li>
                  <img src="./assets/images/check.svg" alt="" /> 1 Year Validity
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      <div className="delete-button-group d-flex justify-content-center w-100 mt-5">
        <a className="btn delete-sure-btn" href="">
          Yes
        </a>
        <a className="btn delete-not-btn" href="">
          No
        </a>
      </div>
    </div>
  </div>
</div>

{/* Similarly, update delete-myModal-2 and delete-myModal-3 */}


    </>
  )
}

export default Subscription