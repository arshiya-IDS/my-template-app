import React from 'react'

function AddSubscription() {
  return (
    <>
    
    <div className="d-flex" id="wrapper">
      {/* Sidebar */}
      <div className="border-end" id="sidebar-wrapper">
        <div className="sidebar-heading border-bottom bg-light">
          <a href="/">
            <img
              src="./assets/images/image_footer_logo.webp"
              style={{ width: "75%", padding: "26px 40px 13px" }}
              alt=""
            />
          </a>
        </div>

        <div className="list-group list-group-flush mt-5">
          <div className="logout mt-5">
            <img src="./assets/images/admin/admin-home.svg" width="9%" alt="" />
            <a className="logout-item ml-3" href="./admin-page.html">
              Dashboard
            </a>
          </div>

          <div className="logout">
            <img
              src="./assets/images/admin/admin-category.svg"
              width="9%"
              alt=""
            />
            <a className="logout-item ml-3" href="./admin-category-1.html">
              Category
            </a>
          </div>

          <div className="logout">
            <img src="./assets/images/admin/admin-user.svg" width="9%" alt="" />
            <a className="logout-item ml-3" href="./admin-user-page.html">
              User
            </a>
          </div>

          <div className="logout">
            <img
              src="./assets/images/admin/admin-product.svg"
              width="9%"
              alt=""
            />
            <a
              className="logout-item ml-3"
              href="./admin-view-all-product.html"
            >
              All Product
            </a>
          </div>

          <div className="logout">
            <img
              src="./assets/images/admin/admin-auction.svg"
              width="9%"
              alt=""
            />
            <a className="logout-item ml-3" href="./admin-auction-view.html">
              Auction
            </a>
          </div>

          <div className="logout">
            <img
              src="./assets/images/admin/admin-category.svg"
              width="9%"
              alt=""
            />
            <a
              className="logout-item ml-3"
              href="./admin-all-subscription.html"
            >
              All Subscription
            </a>
          </div>

          <div className="logout">
            <img
              src="./assets/images/admin/admin-content.svg"
              width="9%"
              alt=""
            />
            <a className="logout-item ml-3" href="./admin-content-page.html">
              Content
            </a>
          </div>

          <div className="logout">
            <img src="./assets/images/setting-light.svg" width="9%" alt="" />
            <a className="logout-item ml-3" href="">
              LogOut
            </a>
          </div>
        </div>
      </div>

      {/* Page content wrapper */}
      <div id="page-content-wrapper">
        {/* Top navigation */}
        <nav className="navbar navbar-expand-lg navbar-light bg-light border-bottom">
          <div className="container-fluid">
            <button className="btn sidebar-toggle-btn" id="sidebarToggle">
              <img src="./assets/images/bars.svg" alt="" />
            </button>
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarSupportedContent"
              aria-controls="navbarSupportedContent"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>

            <div className="collapse navbar-collapse" id="navbarSupportedContent">
              <ul className="navbar-nav ms-auto mt-2 mt-lg-0">
                <li className="nav-item d-block d-lg-none">
                  <a className="nav-link" aria-current="page" href="./signup.html">
                    REGISTER
                  </a>
                </li>
                <li className="nav-item d-block d-lg-none">
                  <a className="nav-link" aria-current="page" href="./login.html">
                    LOGIN
                  </a>
                </li>

                <nav className="navbar navbar-expand-sm">
                  <div className="collapse navbar-collapse" id="navbar-list-4">
                    <ul className="navbar-nav">
                      <li className="nav-item dropdown">
                        <a
                          className="nav-link dropdown-toggle"
                          href="#"
                          id="navbarDropdownMenuLink"
                          role="button"
                          data-toggle="dropdown"
                          aria-haspopup="true"
                          aria-expanded="false"
                        >
                          <img
                            src="./assets/images/avatar.webp"
                            width="40"
                            height="40"
                            className="rounded-circle"
                            alt=""
                          />
                        </a>
                        <div
                          className="dropdown-menu"
                          aria-labelledby="navbarDropdownMenuLink"
                        >
                          <div className="subscription-icons d-flex">
                            <img
                              src="./assets/images/setting.svg"
                              className="add-icons"
                              alt=""
                            />
                            <a className="dropdown-item" href="#">
                              Settings
                            </a>
                          </div>

                          <div className="subscription-icons d-flex">
                            <img
                              src="./assets/images/log-out.svg"
                              className="add-icons"
                              alt=""
                            />
                            <a className="dropdown-item" href="#">
                              Log Out
                            </a>
                          </div>
                        </div>
                      </li>
                    </ul>
                  </div>
                </nav>
              </ul>
            </div>
          </div>
        </nav>

        {/* Page content */}
        <div className="container mt-3">
          <div className="left-gradient"></div>
          <div className="right-gradient-top"></div>
          <div className="right-gradient-bottom"></div>
          <div className="d-flex justify-content-center w-100 mt-4">
            <h5>
              <img
                src="./assets/images/king-head.svg"
                className="king-image"
                alt=""
              />{" "}
              Add Subscription{" "}
            </h5>
            <img
              src="./assets/images/king-head.svg"
              className="king-image p-1"
              alt=""
            />
          </div>

          <div className="row">
            <div className="col-md-6 col-md-offset-1 mt-5 px-5">
              <div className="subscription-upload">
                <div className="logoContainer d-flex justify-content-center w-100 mt-5">
                  <img
                    src="./assets/images/upload.webp.webp"
                    className="upload-image"
                    alt=""
                  />
                </div>
                <div className="fileContainer sprite">
                  <span>choose file</span>
                  <input type="file" value="" />
                </div>
              </div>
            </div>

            <div className="col-md-5 mt-5">
              <div className="subscription-add-data">
                <div className="form-group">
                  <label className="subs-titless" htmlFor="usr13">
                    Subscription Type (Name)
                  </label>
                  <input
                    type="text"
                    className="form-control mb-3"
                    placeholder="Subscription Name"
                    id="usr13"
                    name="Name"
                    required
                  />
                </div>

                <div className="form-group">
                  <label className="subs-titless" htmlFor="usr10">
                    Subscription Charges
                  </label>
                  <input
                    type="number"
                    className="form-control mb-3"
                    placeholder="Subscription Charges"
                    id="usr10"
                    name="username"
                    required
                  />
                </div>

                <div className="form-group">
                  <label className="subs-titless" htmlFor="usra12">
                    Number Of Bid
                  </label>
                  <input
                    type="number"
                    className="form-control"
                    placeholder="Number Of Bid"
                    id="usra12"
                    name="username"
                    required
                  />
                </div>

                <div className="form-group">
                  <label className="subs-titless" htmlFor="usra14">
                    Number of Free Auction
                  </label>
                  <input
                    type="number"
                    className="form-control"
                    placeholder="Number of Free Auction"
                    id="usra14"
                    name="username"
                    required
                  />
                </div>

                <div className="form-group">
                  <label className="subs-titless" htmlFor="usra11">
                    Validity
                  </label>
                  <input
                    type="number"
                    className="form-control"
                    placeholder="Validity"
                    id="usra11"
                    name="username"
                    required
                  />
                </div>
              </div>
            </div>

            <div className="subs-save-button d-flex justify-content-center w-100 mt-5">
              <a className="btn subs-save-btn" href="">
                Save
              </a>
            </div>
          </div>
        </div>

        <div
          style={{
            background: "-webkit-linear-gradient(332deg,#ff5441, #294b8f)",
          }}
        >
          <p className="px-5 p-3 mt-5 mb-0 text-white">
            Copyright © 2021-2030{" "}
            <strong className="text-dark">SSK PROJECT</strong>. All rights
            reserved.
          </p>
        </div>
      </div>
    </div>
  
    </>
  )
}

export default AddSubscription