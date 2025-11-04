import React, { useEffect } from "react";

function Home() {
  useEffect(() => {
    // Ensure jQuery and OwlCarousel are loaded
    const $ = window.$;
    if ($ && $(".carousel-main").owlCarousel) {
      $(".carousel-main").owlCarousel({
        items: 4,
        loop: true,
        autoplay: true,
        autoplayTimeout: 1500,
        margin: 15,
        nav: true,
        dots: false,
        navText: [
          '<span className="fas fa-chevron-left fa-2x"></span>',
          '<span className="fas fa-chevron-right fa-2x"></span>',
        ],
        responsive: {
          0: { items: 1 },
          480: { items: 2 },
          700: { items: 2.5 },
          800: { items: 3 },
          1150: { items: 4 },
        },
      });
    }

    // Heart icon toggle
    $(".ico.fal").on("click", function () {
      $(this).toggleClass("ico heart-des");
    });

    // Scroll to top button visibility
    const mybutton = document.getElementById("myBtn");
    window.onscroll = function () {
      if (
        document.body.scrollTop > 20 ||
        document.documentElement.scrollTop > 20
      ) {
        mybutton.style.display = "block";
      } else {
        mybutton.style.display = "none";
      }
    };
  }, []);

  const topFunction = () => {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
  };

  return (
    <>
      <button onClick={topFunction} id="myBtn" title="Go to top">
        <i className="fa-solid fa-arrow-up"></i>
      </button> 
      
      <div className="container px-0" id="banner-bg">
        <img
          src="./assets/images/banner_bg.webp"
          style={{ width: "100%", position: "absolute", left: "0" }}
          alt=""
        />
        <div className="row">
          <div className="col-md-6">
            <div className="banners-sections">
              <h2 className="first-heading">
                Explore among various products <br /> auctioned daily.
              </h2>
              <p className="banner-text">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo
                natus esse iusto deleniti. Architecto, placeat.
              </p>
              <div className="first-sec-button">
                <a className="btn explore-btn" href="">
                  Explore
                </a>
                <a className="btn create-btn" href="./category.html">
                  Create auction
                </a>
              </div>
            </div>
          </div>

          <div className="col-md-6">
            <div id="demo" className="carousel slide" data-bs-ride="carousel">
              <ul className="carousel-indicators">
                <li
                  data-bs-target="#demo"
                  data-bs-slide-to="0"
                  className="active"
                ></li>
                <li data-bs-target="#demo" data-bs-slide-to="1"></li>
                <li data-bs-target="#demo" data-bs-slide-to="2"></li>
              </ul>

              <div className="carousel-inner">
                <div className="carousel-item active">
                  <div className="col-12">
                    <div className="container">
                      <div className="banners-card">
                        <div className="chip">
                          <img
                            src="./assets/images/m.alharbi.webp.webp"
                            alt="Person"
                            width="96"
                            height="96"
                          />
                          Mohammad Alharbi
                        </div>
                        <div className="cards-slide">
                          <img
                            className="card-img-top"
                            src="./assets/images/banner_front_img.webp"
                            alt="Card image"
                          />
                        </div>
                        <div className="card-body">
                          <h5 className="cards-title mt-5 pl-3">
                            A Thousand Lights
                          </h5>
                          <div className="d-flex flex-wrap">
                            <div className="starting-bids">
                              <p style={{ marginBottom: "0" }}>Starting Bids</p>
                              <strong>$4500</strong>
                            </div>
                            <div className="starting-bids">
                              <p style={{ marginBottom: "0" }}>Bids Received</p>
                              <strong>22 Bids</strong>
                            </div>
                            <div className="starting-bids">
                              <p style={{ marginBottom: "0" }}>
                                Time Remaining
                              </p>
                              <strong>04d: 27h : 25m : 02s</strong>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="carousel-item">
                  <div className="col-12">
                    <div className="container">
                      <div className="banners-card">
                        <div className="chip">
                          <img
                            src="./assets/images/m.alharbi.webp.webp"
                            alt="Person"
                            width="96"
                            height="96"
                          />
                          Mohammad Alharbi
                        </div>
                        <div className="cards-slide">
                          <img
                            className="card-img-top"
                            src="./assets/images/slider-2.webp"
                            alt="Card image"
                          />
                        </div>
                        <div className="card-body">
                          <h5 className="cards-title mt-5 pl-3">
                            A Thousand Lights
                          </h5>
                          <div className="d-flex flex-wrap">
                            <div className="starting-bids">
                              <p style={{ marginBottom: "0" }}>Starting Bids</p>
                              <strong>$4500</strong>
                            </div>
                            <div className="starting-bids">
                              <p style={{ marginBottom: "0" }}>Bids Received</p>
                              <strong>22 Bids</strong>
                            </div>
                            <div className="starting-bids">
                              <p style={{ marginBottom: "0" }}>
                                Time Remaining
                              </p>
                              <strong>04d: 27h : 25m : 02s</strong>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="carousel-item">
                  <div className="col-12">
                    <div className="container">
                      <div className="banners-card">
                        <div className="chip">
                          <img
                            src="./assets/images/m.alharbi.webp.webp"
                            alt="Person"
                            width="96"
                            height="96"
                          />
                          Mohammad Alharbi
                        </div>
                        <div className="cards-slide">
                          <img
                            className="card-img-top"
                            src="./assets/images/banner_front_img.webp"
                            alt="Card image"
                          />
                        </div>
                        <div className="card-body">
                          <h5 className="cards-title mt-5 pl-3">
                            A Thousand Lights
                          </h5>
                          <div className="d-flex flex-wrap">
                            <div className="starting-bids">
                              <p style={{ marginBottom: "0" }}>Starting Bids</p>
                              <strong>$4500</strong>
                            </div>
                            <div className="starting-bids">
                              <p style={{ marginBottom: "0" }}>Bids Received</p>
                              <strong>22 Bids</strong>
                            </div>
                            <div className="starting-bids">
                              <p style={{ marginBottom: "0" }}>
                                Time Remaining
                              </p>
                              <strong>04d: 27h : 25m : 02s</strong>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="container mt-5 d-flex justify-content-between flex-wrap pr-0">
        <h2 className="section-headings first-heading px-0 mb-1">
          Trending Auctions
        </h2>
        <a className="btn exploed-btn" href="">
          Explore
        </a>
      </div>
      <div className="container px-0">
        <div className="row align-items-center">
          <div className="col-12 col-carousel mt-3">
            <div className="owl-carousel carousel-main">
              <div className="slider-featured p-3">
                <i className="ico fal fa-heart bg-blue"></i>
                <img
                  src="./assets/images/slider-product/product_img.webp"
                  className="media-img"
                  alt=""
                />
                <div className="media-text">
                  <h5 className="cards-headings">Da Vinci decor</h5>
                  <p className="card-text">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  </p>
                  <div className="card-bid">
                    <p className="auction-bids-points">
                      Starting Bid{" "}
                      <strong style={{ color: "#f15d4c", marginBottom: "0" }}>
                        $46
                      </strong>
                      <a className="btn bids-btn" href="./item-detail">
                        9Bid
                      </a>
                    </p>
                  </div>
                </div>
              </div>

              <div className="slider-featured p-3">
                <i className="ico fal fa-heart bg-light-blue"></i>
                <img
                  src="./assets/images/slider-product/Product_img_2.webp"
                  className="media-img"
                  alt=""
                />
                <div className="media-text">
                  <h5 className="cards-headings">Da Vinci decor</h5>
                  <p className="card-text">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  </p>
                  <div className="card-bid">
                    <p className="auction-bids-points">
                      Starting Bid{" "}
                      <strong style={{ color: "#f15d4c", marginBottom: "0" }}>
                        $46
                      </strong>
                      <a className="btn bids-btn" href="./item-details">
                        9Bid
                      </a>
                    </p>
                  </div>
                </div>
              </div>

              <div className="slider-featured p-3">
                <i className="ico fal fa-heart bg-pink"></i>
                <img
                  src="./assets/images/slider-product/product_img_3.webp"
                  className="media-img"
                  alt=""
                />
                <div className="media-text">
                  <h5 className="cards-headings">Da Vinci decor</h5>
                  <p className="card-text">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  </p>
                  <div className="card-bid">
                    <p className="auction-bids-points">
                      Starting Bid{" "}
                      <strong style={{ color: "#f15d4c", marginBottom: "0" }}>
                        $46
                      </strong>
                      <a className="btn bids-btn" href="./item-details">
                        9Bid
                      </a>
                    </p>
                  </div>
                </div>
              </div>

              <div className="slider-featured p-3">
                <i className="ico fal fa-heart bg-purple"></i>
                <img
                  src="./assets/images/slider-product/product_img_4.webp"
                  className="media-img"
                  alt=""
                />
                <div className="media-text">
                  <h5 className="cards-headings">Da Vinci decor</h5>
                  <p className="card-text">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  </p>
                  <div className="card-bid">
                    <p className="auction-bids-points">
                      Starting Bid{" "}
                      <strong style={{ color: "#f15d4c", marginBottom: "0" }}>
                        $46
                      </strong>
                      <a className="btn bids-btn" href="./item-details">
                        9Bid
                      </a>
                    </p>
                  </div>
                </div>
              </div>

              <div className="slider-featured p-3">
                <i className="ico fal fa-heart bg-light-black"></i>
                <img
                  src="./assets/images/slider-product/product_img_5.webp"
                  className="media-img"
                  alt=""
                />
                <div className="media-text">
                  <h5 className="cards-headings">Da Vinci decor</h5>
                  <p className="card-text">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  </p>
                  <div className="card-bid">
                    <p className="auction-bids-points">
                      Starting Bid{" "}
                      <strong style={{ color: "#f15d4c", marginBottom: "0" }}>
                        $46
                      </strong>
                      <a className="btn bids-btn" href="./item-details">
                        9Bid
                      </a>
                    </p>
                  </div>
                </div>
              </div>

              <div className="slider-featured p-3">
                <i className="ico fal fa-heart bg-black"></i>
                <img
                  src="./assets/images/slider-product/product_image_6.webp"
                  className="media-img"
                  alt=""
                />
                <div className="media-text">
                  <h5 className="cards-headings">Da Vinci decor</h5>
                  <p className="card-text">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  </p>
                  <div className="card-bid">
                    <p className="auction-bids-points">
                      Starting Bid{" "}
                      <strong style={{ color: "#f15d4c", marginBottom: "0" }}>
                        $46
                      </strong>
                      <a className="btn bids-btn" href="./item-details">
                        9Bid
                      </a>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="container mt-4">
        <h2 className="live-auct px-0 mt-4 pb-3">Live Auctions</h2>
        <div className="row">
          {Array.from({ length: 10 }).map((_, index) => (
            <div className="col-sm-6 col-md-4 col-lg-3" key={index}>
              <div className="slider-featured p-3 mb-3">
                <i className={`ico fal fa-heart bg-${index + 1}`}></i>
                <img
                  src={`./assets/images/live-auction/image_by_Auction-${
                    (index % 8) + 1
                  }.webp`}
                  className="media-img"
                  alt=""
                />
                <div className="media-text">
                  <h5 className="cards-headings">
                    <a
                      className="card-heading-links"
                      href="./item-details"
                    >
                      Da Vinci decor
                    </a>
                  </h5>
                  <p className="card-text">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  </p>
                  <div className="card-bid">
                    <p>
                      Starting Bid{" "}
                      <strong style={{ color: "#f15d4c" }}>$46</strong>
                    </p>
                    <a className="btn bids-btn" href="./item-details">
                      <img
                        src="./assets/images/hammer.svg"
                        className="btn-hammer"
                        alt=""
                      />
                      9 Bid
                    </a>
                  </div>
                </div>
              </div>
            </div>
          ))}
          <div className="more d-flex justify-content-center w-100">
            <a className="btn loads-btn mt-4 mb-5" href="">
              Load More
            </a>
          </div>
        </div>
      </div>

      <div className="container pr-0">
        <div className="row">
          <div className="col-md-6">
            <h2 className="lives-auct px-0">Explore By Category</h2>
          </div>
          <div className="col-md-6">
            <div className="w-100 d-flex justify-content-center">
              <ul className="nav nav-pills" role="tablist" id="featured-tab">
                <li className="nav-item my-2">
                  <a
                    className="nav-links active"
                    data-bs-toggle="tab"
                    href="#home"
                  >
                    All
                  </a>
                </li>
                <li className="nav-item my-2">
                  <a className="nav-links" data-bs-toggle="tab" href="#menu1">
                    Furniture
                  </a>
                </li>
                <li className="nav-item my-2">
                  <a className="nav-links" data-bs-toggle="tab" href="#menu2">
                    Mobiles & Tablets
                  </a>
                </li>
                <li className="nav-item my-2">
                  <a className="nav-links" data-bs-toggle="tab" href="#menu3">
                    Laptops
                  </a>
                </li>
                <li className="nav-item my-2">
                  <a className="nav-links" data-bs-toggle="tab" href="#menu4">
                    Artifacts
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <section className="sect pb-5" style={{ background: "#f8fcff" }}>
        <div className="container">
          <div className="tab-content">
            <div id="home" className="tab-pane active">
              <br />
              <div className="tabs container-fluid px-0">
                <div className="row">
                  {["a", "b", "c", "d"].map((suffix, index) => (
                    <div
                      className="col-sm-6 col-md-4 col-lg-3"
                      key={`home-${index}`}
                    >
                      <div className="slider-featured p-3 mb-3">
                        <i className={`ico fal fa-heart bg-${suffix}`}></i>
                        <img
                          src={`./assets/images/category-all/image_by_cat-${
                            index + 1
                          }.webp`}
                          className="media-img"
                          alt=""
                        />
                        <div className="media-text">
                          <h5 className="cards-headings">Da Vinci decor</h5>
                          <p className="card-text">
                            Lorem ipsum dolor sit amet, consectetur adipisicing
                            elit.
                          </p>
                          <div className="card-bid">
                            <p>
                              Starting Bid{" "}
                              <strong style={{ color: "#f15d4c" }}>$46</strong>
                            </p>
                            <a
                              className="btn bids-btn"
                              href="./item-details"
                            >
                              <img
                                src="./assets/images/hammer.svg"
                                className="btn-hammer"
                                alt=""
                              />
                              9 Bid
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div id="menu1" className="tab-pane fade">
              <br />
              <div className="container-fluid px-0">
                <div className="row">
                  {[1, 2, 3, 4].map((num, index) => (
                    <div
                      className="col-sm-6 col-md-4 col-lg-3"
                      key={`menu1-${index}`}
                    >
                      <div className="slider-featured p-3 mb-3">
                        <i className={`ico fal fa-heart featured-${num}`}></i>
                        <img
                          src="./assets/images/category-all/image_by_cat-1.webp"
                          className="media-img"
                          alt=""
                        />
                        <div className="media-text">
                          <h5 className="cards-headings">Da Vinci decor</h5>
                          <p className="card-text">
                            Lorem ipsum dolor sit amet, consectetur adipisicing
                            elit.
                          </p>
                          <div className="card-bid">
                            <p>
                              Starting Bid{" "}
                              <strong style={{ color: "#f15d4c" }}>$46</strong>
                            </p>
                            <a
                              className="btn bids-btn"
                              href="./item-details"
                            >
                              <img
                                src="./assets/images/hammer.svg"
                                className="btn-hammer"
                                alt=""
                              />
                              9 Bid
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div id="menu2" className="tab-pane fade">
              <br />
              <div className="container-fluid px-0">
                <div className="row">
                  {[1, 2, 3, 4].map((num, index) => (
                    <div
                      className="col-sm-6 col-md-4 col-lg-3"
                      key={`menu2-${index}`}
                    >
                      <div className="slider-featured p-3 mb-3">
                        <i className={`ico fal fa-heart mobile-${num}`}></i>
                        <img
                          src="./assets/images/category-all/image_by_cat-2.webp"
                          className="media-img"
                          alt=""
                        />
                        <div className="media-text">
                          <h5 className="cards-headings">Da Vinci decor</h5>
                          <p className="card-text">
                            Lorem ipsum dolor sit amet, consectetur adipisicing
                            elit.
                          </p>
                          <div className="card-bid">
                            <p>
                              Starting Bid{" "}
                              <strong style={{ color: "#f15d4c" }}>$46</strong>
                            </p>
                            <a
                              className="btn bids-btn"
                              href="./item-details"
                            >
                              <img
                                src="./assets/images/hammer.svg"
                                className="btn-hammer"
                                alt=""
                              />
                              9 Bid
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div id="menu3" className="tab-pane fade">
              <br />
              <div className="container-fluid px-0">
                <div className="row">
                  {[1, 2, 3, 4, 5, 6, 7, 8].map((num, index) => (
                    <div
                      className="col-sm-6 col-md-4 col-lg-3"
                      key={`menu3-${index}`}
                    >
                      <div className="slider-featured p-3 mb-3">
                        <i className={`ico fal fa-heart laptop-${num}`}></i>
                        <img
                          src="./assets/images/category-all/image_by_cat-3.webp"
                          className="media-img"
                          alt=""
                        />
                        <div className="media-text">
                          <h5 className="cards-headings">Da Vinci decor</h5>
                          <p className="card-text">
                            Lorem ipsum dolor sit amet, consectetur adipisicing
                            elit.
                          </p>
                          <div className="card-bid">
                            <p>
                              Starting Bid{" "}
                              <strong style={{ color: "#f15d4c" }}>$46</strong>
                            </p>
                            <a
                              className="btn bids-btn"
                              href="./item-details"
                            >
                              <img
                                src="./assets/images/hammer.svg"
                                className="btn-hammer"
                                alt=""
                              />
                              9 Bid
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div id="menu4" className="tab-pane fade">
              <br />
              <div className="container-fluid px-0">
                <div className="row">
                  {[1, 2, 3, 4, 5].map((num, index) => (
                    <div
                      className="col-sm-6 col-md-4 col-lg-3"
                      key={`menu4-${index}`}
                    >
                      <div className="slider-featured p-3 mb-3">
                        <i className={`ico fal fa-heart artifacts-${num}`}></i>
                        <img
                          src="./assets/images/category-all/image_by_cat-4.webp"
                          className="media-img"
                          alt=""
                        />
                        <div className="media-text">
                          <h5 className="cards-headings">Da Vinci decor</h5>
                          <p className="card-text">
                            Lorem ipsum dolor sit amet, consectetur adipisicing
                            elit.
                          </p>
                          <div className="card-bid">
                            <p>
                              Starting Bid{" "}
                              <strong style={{ color: "#f15d4c" }}>$46</strong>
                            </p>
                            <a
                              className="btn bids-btn"
                              href="./item-details"
                            >
                              <img
                                src="./assets/images/hammer.svg"
                                className="btn-hammer"
                                alt=""
                              />
                              9 Bid
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="container">
        <h3 className="second-last-section text-center mt-3 mb-4">
          Create An Auction Yourself
        </h3>
        <div className="row">
          <div className="col-md-6">
            <img
              src="./assets/images/mobiles.webp"
              style={{ width: "90%" }}
              alt=""
            />
          </div>
          <div className="col-md-6 mt-5">
            <div className="row">
              <div className="col-sm-6">
                <div className="upload-icon">
                  <a href="">
                    <img src="./assets/images/upload.svg" alt="" />
                  </a>
                </div>
                <p className="upload-heading">Upload your product</p>
                <p className="section-text">
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                  Aperiam culpa quos dolorum repellat, odit ab.
                </p>
              </div>
              <div className="col-sm-6">
                <div className="upload-icon">
                  <a href="">
                    <img src="./assets/images/create.svg" alt="" />
                  </a>
                </div>
                <p className="upload-heading">Create or schedule auction</p>
                <p className="section-text">
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                  Aperiam culpa quos dolorum repellat, odit ab.
                </p>
              </div>
              <div className="col-sm-3"></div>
              <div className="col-md-6 mt-4">
                <div className="upload-icon">
                  <a href="">
                    <img src="./assets/images/list.svg" alt="" />
                  </a>
                </div>
                <p className="upload-heading">List theme for scale</p>
                <p className="section-text">
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                  Aperiam culpa quos dolorum repellat, odit ab.
                </p>
              </div>
              <div className="col-sm-3"></div>
            </div>
          </div>
        </div>
      </div>

      
    </>
  );
}

export default Home;