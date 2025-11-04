import React from 'react'

function Auction() {
  return (
   <>
     <div className="breadcrumb flex-column  mb-0 pb-0 bg-light-gray">
    <div className="breadcrumb-heading">
      <h2 className="text-center "> Auctions</h2>
      <p className="text-center "><a className="bread-links" href="/">Home</a> &gt; <a className="bread-links" href="./Auction.html">Auctions</a>
      </p>
    </div>
  </div>

<div className="container mt-3">
  <div className="container">
    <div className="row">
      <div className="col-md-8">
        <ul className="nav nav-tabs">
          <li className="nav-item">
            <a className="navss-linkss active" data-toggle="tab" href="#auction-tab-1">All</a>
          </li>
          <li className="nav-item">
            <a className="navss-linkss" data-toggle="tab" href="#auction-tab-2">Furniture</a>
          </li>
          <li className="nav-item">
            <a className="navss-linkss" data-toggle="tab" href="#auction-tab-3">Mobile &amp; Tablets</a>
          </li>
          <li className="nav-item">
            <a className="navss-linkss" data-toggle="tab" href="#auction-tab-4">Laptops</a>
          </li>
          <li className="nav-item">
            <a className="navss-linkss" data-toggle="tab" href="#auction-tab-5">Artifacts</a>
          </li>
          <li className="nav-item">
            <a className="navss-linkss" data-toggle="tab" href="#auction-tab-6">Others</a>
          </li>
        </ul>
      </div>

      <div className="col-md-4">
        <div className="dropdown-filters d-flex justify-content-end w-100">
          {/* First Dropdown */}
          <div className="dropdown">
            <button className="btn btn-default dropdown-toggle" type="button" data-toggle="dropdown">
              Filter by <span className="caret"></span>
            </button>
            <ul className="dropdown-menu">
              <li className="dropdown-submenu">
                <a className="test" tabIndex="-1" href="#">Brand Name <span className="caret"></span></a>
                <ul className="dropdown-menu">
                  <li><a tabIndex="-1" href="#">Brand Name1</a></li>
                  <li><a tabIndex="-1" href="#">Brand Name2</a></li>
                </ul>
              </li>

              <li className="dropdown-submenu">
                <a className="test" tabIndex="-1" href="#">Product Name <span className="caret"></span></a>
                <ul className="dropdown-menu">
                  <li><a tabIndex="-1" href="#">Product Name1</a></li>
                  <li><a tabIndex="-1" href="#">Product Name2</a></li>
                </ul>
              </li>

              <li className="dropdown-submenu">
                <a className="test" tabIndex="-1" href="#">Product rating <span className="caret"></span></a>
                <ul className="dropdown-menu">
                  <li><a tabIndex="-1" href="#">Product rating1</a></li>
                  <li><a tabIndex="-1" href="#">Product rating2</a></li>
                </ul>
              </li>

              <li className="dropdown-submenu">
                <a className="test" tabIndex="-1" href="#">Seller rating <span className="caret"></span></a>
                <ul className="dropdown-menu">
                  <li><a tabIndex="-1" href="#">Seller rating1</a></li>
                  <li><a tabIndex="-1" href="#">Seller rating2</a></li>
                </ul>
              </li>

              <li className="dropdown-submenu">
                <a className="test" tabIndex="-1" href="#">Price range <span className="caret"></span></a>
                <ul className="dropdown-menu">
                  <li><a tabIndex="-1" href="#">Price range1</a></li>
                  <li><a tabIndex="-1" href="#">Price range2</a></li>
                </ul>
              </li>

              <li className="dropdown-submenu">
                <a className="test" tabIndex="-1" href="#">Color <span className="caret"></span></a>
                <ul className="dropdown-menu">
                  <li><a tabIndex="-1" href="#">Color1</a></li>
                  <li><a tabIndex="-1" href="#">Color2</a></li>
                </ul>
              </li>

              <li className="dropdown-submenu">
                <a className="test" tabIndex="-1" href="#">Date uploaded <span className="caret"></span></a>
                <ul className="dropdown-menu">
                  <li><a tabIndex="-1" href="#">Date uploaded1</a></li>
                  <li><a tabIndex="-1" href="#">Date uploaded2</a></li>
                </ul>
              </li>
            </ul>
          </div>

          {/* Second Dropdown */}
          <div className="dropdown">
            <button type="button" className="btn btn-filter dropdown-toggle" data-toggle="dropdown">
              Sort by
            </button>
            <div className="dropdown-menu">
              <form action="/action_page.php">
                <a className="dropdown-item" href="#">
                  <input type="checkbox" id="price1" name="price" value="" />
                  <label htmlFor="price1"> By Price: High to low</label><br />
                </a>

                <a className="dropdown-item" href="#">
                  <input type="checkbox" id="price2" name="price" value="" />
                  <label htmlFor="price2"> By Price: Low to high</label><br />
                </a>

                <a className="dropdown-item" href="#">
                  <input type="checkbox" id="price3" name="price" value="" />
                  <label htmlFor="price3"> Auctions Expiring</label><br />
                </a>

                <a className="dropdown-item" href="#">
                  <input type="checkbox" id="price4" name="price" value="" />
                  <label htmlFor="price4"> Live Auctions</label><br />
                </a>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div> {/* closes row */}
  </div>   {/* closes inner container */}


<div className="tab-content">

  {/* ================= TAB 1 ================= */}
  <div id="auction-tab-1" className="container tab-pane active">
    <div className="container-fluid px-0 mt-5">
      <div className="row">

        {/* Auction Card Example */}
        <div className="col-sm-6 col-md-4 col-lg-3">
          <div className="slider-featured p-3 mb-3">
            <i className="ico fal fa-heart auction-1"></i>
            <img
              src="./assets/images/live-auction/image_by_Auction-1.webp"
              className="media-img"
              alt="Da Vinci decor1"
            />
            <div className="media-text">
              <h5 className="cards-headings">Da Vinci decor1</h5>
              <p className="card-text">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              </p>
              <div className="card-bid">
                <p>
                  Starting Bid <strong style={{ color: "#f15d4c" }}>$46</strong>
                </p>
                <button className="btn bids-btn">
                  <img
                    src="./assets/images/hammer.svg"
                    className="btn-hammer"
                    alt="hammer"
                  />{" "}
                  9 Bid
                </button>
              </div>
            </div>
          </div>
        </div>


{/*second card*/}

 <div className="col-sm-6 col-md-4 col-lg-3">
          <div className="slider-featured p-3 mb-3">
            <i className="ico fal fa-heart auction-1"></i>
            <img
              src="./assets/images/live-auction/image_by_Auction-3.webp"
              className="media-img"
              alt="Da Vinci decor1"
            />
            <div className="media-text">
              <h5 className="cards-headings">Da Vinci decor1</h5>
              <p className="card-text">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              </p>
              <div className="card-bid">
                <p>
                  Starting Bid <strong style={{ color: "#f15d4c" }}>$46</strong>
                </p>
                <button className="btn bids-btn">
                  <img
                    src="./assets/images/hammer.svg"
                    className="btn-hammer"
                    alt="hammer"
                  />{" "}
                  9 Bid
                </button>
              </div>
            </div>
          </div>
        </div>

        {/*third card*/}

 <div className="col-sm-6 col-md-4 col-lg-3">
          <div className="slider-featured p-3 mb-3">
            <i className="ico fal fa-heart auction-1"></i>
            <img
              src="./assets/images/live-auction/image_by_Auction-4.webp"
              className="media-img"
              alt="Da Vinci decor1"
            />
            <div className="media-text">
              <h5 className="cards-headings">Da Vinci decor1</h5>
              <p className="card-text">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              </p>
              <div className="card-bid">
                <p>
                  Starting Bid <strong style={{ color: "#f15d4c" }}>$46</strong>
                </p>
                <button className="btn bids-btn">
                  <img
                    src="./assets/images/hammer.svg"
                    className="btn-hammer"
                    alt="hammer"
                  />{" "}
                  9 Bid
                </button>
              </div>
            </div>
          </div>
        </div>

{/*forth card*/}

 <div className="col-sm-6 col-md-4 col-lg-3">
          <div className="slider-featured p-3 mb-3">
            <i className="ico fal fa-heart auction-1"></i>
            <img
              src="./assets/images/live-auction/image_by_Auction-5.webp"
              className="media-img"
              alt="Da Vinci decor1"
            />
            <div className="media-text">
              <h5 className="cards-headings">Da Vinci decor1</h5>
              <p className="card-text">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              </p>
              <div className="card-bid">
                <p>
                  Starting Bid <strong style={{ color: "#f15d4c" }}>$46</strong>
                </p>
                <button className="btn bids-btn">
                  <img
                    src="./assets/images/hammer.svg"
                    className="btn-hammer"
                    alt="hammer"
                  />{" "}
                  9 Bid
                </button>
              </div>
            </div>
          </div>
        </div>
        {/*second card*/}

 <div className="col-sm-6 col-md-4 col-lg-3">
          <div className="slider-featured p-3 mb-3">
            <i className="ico fal fa-heart auction-1"></i>
            <img
              src="./assets/images/live-auction/image_by_Auction-6.webp"
              className="media-img"
              alt="Da Vinci decor1"
            />
            <div className="media-text">
              <h5 className="cards-headings">Da Vinci decor1</h5>
              <p className="card-text">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              </p>
              <div className="card-bid">
                <p>
                  Starting Bid <strong style={{ color: "#f15d4c" }}>$46</strong>
                </p>
                <button className="btn bids-btn">
                  <img
                    src="./assets/images/hammer.svg"
                    className="btn-hammer"
                    alt="hammer"
                  />{" "}
                  9 Bid
                </button>
              </div>
            </div>
          </div>
        </div>
        {/*second card*/}

 <div className="col-sm-6 col-md-4 col-lg-3">
          <div className="slider-featured p-3 mb-3">
            <i className="ico fal fa-heart auction-1"></i>
            <img
              src="./assets/images/live-auction/image_by_Auction-7.webp"
              className="media-img"
              alt="Da Vinci decor1"
            />
            <div className="media-text">
              <h5 className="cards-headings">Da Vinci decor1</h5>
              <p className="card-text">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              </p>
              <div className="card-bid">
                <p>
                  Starting Bid <strong style={{ color: "#f15d4c" }}>$46</strong>
                </p>
                <button className="btn bids-btn">
                  <img
                    src="./assets/images/hammer.svg"
                    className="btn-hammer"
                    alt="hammer"
                  />{" "}
                  9 Bid
                </button>
              </div>
            </div>
          </div>
        </div>

        {/*second card*/}

 <div className="col-sm-6 col-md-4 col-lg-3">
          <div className="slider-featured p-3 mb-3">
            <i className="ico fal fa-heart auction-1"></i>
            <img
              src="./assets/images/live-auction/image_by_Auction-8.webp"
              className="media-img"
              alt="Da Vinci decor1"
            />
            <div className="media-text">
              <h5 className="cards-headings">Da Vinci decor1</h5>
              <p className="card-text">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              </p>
              <div className="card-bid">
                <p>
                  Starting Bid <strong style={{ color: "#f15d4c" }}>$46</strong>
                </p>
                <button className="btn bids-btn">
                  <img
                    src="./assets/images/hammer.svg"
                    className="btn-hammer"
                    alt="hammer"
                  />{" "}
                  9 Bid
                </button>
              </div>
            </div>
          </div>
        </div>
        {/* Another Card */}
        <div className="col-sm-6 col-md-4 col-lg-3">
          <div className="slider-featured p-3">
            <i className="ico fal fa-heart auction-2"></i>
            <img
              src="./assets/images/Auctions-page/auction-page-2.webp"
              className="media-img"
              alt="Da Vinci decor"
            />
            <div className="media-text">
              <h5 className="cards-headings">Da Vinci decor</h5>
              <p className="card-text">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              </p>
              <div className="card-bid">
                <p>
                  Starting Bid <strong style={{ color: "#f15d4c" }}>$46</strong>
                </p>
                <button className="btn bids-btn">
                  <img
                    src="./assets/images/hammer.svg"
                    className="btn-hammer"
                    alt="hammer"
                  />{" "}
                  9 Bid
                </button>
              </div>
            </div>
          </div>
        </div>


      </div>
    </div>
  </div>

  {/* ================= TAB 2 ================= */}
  <div id="auction-tab-2" className="container tab-pane fade">
    <div className="container-fluid px-0 mt-5">
      <div className="row">

        {/* Card 1 */}
        <div className="col-sm-6 col-md-4 col-lg-3">
          <div className="slider-featured p-3 mb-3">
            <i className="ico fal fa-heart bg-1"></i>
            <img
              src="./assets/images/live-auction/image_by_Auction-1.webp"
              className="media-img"
              alt=""
            />
            <div className="media-text">
              <h5 className="cards-headings">Da Vinci decor</h5>
              <p className="card-text">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              </p>
              <div className="card-bid">
                <p>
                  Starting Bid <strong style={{ color: "#f15d4c" }}>$46</strong>
                </p>
                <button className="btn bids-btn">
                  <img
                    src="./assets/images/hammer.svg"
                    className="btn-hammer"
                    alt=""
                  />{" "}
                  9 Bid
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Card 2 */}
        <div className="col-sm-6 col-md-4 col-lg-3">
          <div className="slider-featured p-3">
            <i className="ico fal fa-heart bg-2"></i>
            <img
              src="./assets/images/live-auction/image_by_Auction-2.webp"
              className="media-img"
              alt=""
            />
            <div className="media-text">
              <h5 className="cards-headings">Da Vinci decor</h5>
              <p className="card-text">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              </p>
              <div className="card-bid">
                <p>
                  Starting Bid <strong style={{ color: "#f15d4c" }}>$46</strong>
                </p>
                <button className="btn bids-btn">
                  <img
                    src="./assets/images/hammer.svg"
                    className="btn-hammer"
                    alt=""
                  />{" "}
                  9 Bid
                </button>
              </div>
            </div>
          </div>
        </div>

 {/* Card 3 */}
        <div className="col-sm-6 col-md-4 col-lg-3">
          <div className="slider-featured p-3 mb-3">
            <i className="ico fal fa-heart bg-1"></i>
            <img
              src="./assets/images/live-auction/image_by_Auction-3.webp"
              className="media-img"
              alt=""
            />
            <div className="media-text">
              <h5 className="cards-headings">Da Vinci decor</h5>
              <p className="card-text">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              </p>
              <div className="card-bid">
                <p>
                  Starting Bid <strong style={{ color: "#f15d4c" }}>$46</strong>
                </p>
                <button className="btn bids-btn">
                  <img
                    src="./assets/images/hammer.svg"
                    className="btn-hammer"
                    alt=""
                  />{" "}
                  9 Bid
                </button>
              </div>
            </div>
          </div>
        </div>

         {/* Card 1 */}
        <div className="col-sm-6 col-md-4 col-lg-3">
          <div className="slider-featured p-3 mb-3">
            <i className="ico fal fa-heart bg-1"></i>
            <img
              src="./assets/images/live-auction/image_by_Auction-4.webp"
              className="media-img"
              alt=""
            />
            <div className="media-text">
              <h5 className="cards-headings">Da Vinci decor</h5>
              <p className="card-text">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              </p>
              <div className="card-bid">
                <p>
                  Starting Bid <strong style={{ color: "#f15d4c" }}>$46</strong>
                </p>
                <button className="btn bids-btn">
                  <img
                    src="./assets/images/hammer.svg"
                    className="btn-hammer"
                    alt=""
                  />{" "}
                  9 Bid
                </button>
              </div>
            </div>
          </div>
        </div>

         {/* Card 1 */}
        <div className="col-sm-6 col-md-4 col-lg-3">
          <div className="slider-featured p-3 mb-3">
            <i className="ico fal fa-heart bg-1"></i>
            <img
              src="./assets/images/live-auction/image_by_Auction-5.webp"
              className="media-img"
              alt=""
            />
            <div className="media-text">
              <h5 className="cards-headings">Da Vinci decor</h5>
              <p className="card-text">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              </p>
              <div className="card-bid">
                <p>
                  Starting Bid <strong style={{ color: "#f15d4c" }}>$46</strong>
                </p>
                <button className="btn bids-btn">
                  <img
                    src="./assets/images/hammer.svg"
                    className="btn-hammer"
                    alt=""
                  />{" "}
                  9 Bid
                </button>
              </div>
            </div>
          </div>
        </div>

         {/* Card 1 */}
        <div className="col-sm-6 col-md-4 col-lg-3">
          <div className="slider-featured p-3 mb-3">
            <i className="ico fal fa-heart bg-1"></i>
            <img
              src="./assets/images/live-auction/image_by_Auction-6.webp"
              className="media-img"
              alt=""
            />
            <div className="media-text">
              <h5 className="cards-headings">Da Vinci decor</h5>
              <p className="card-text">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              </p>
              <div className="card-bid">
                <p>
                  Starting Bid <strong style={{ color: "#f15d4c" }}>$46</strong>
                </p>
                <button className="btn bids-btn">
                  <img
                    src="./assets/images/hammer.svg"
                    className="btn-hammer"
                    alt=""
                  />{" "}
                  9 Bid
                </button>
              </div>
            </div>
          </div>
        </div>

         {/* Card 1 */}
        <div className="col-sm-6 col-md-4 col-lg-3">
          <div className="slider-featured p-3 mb-3">
            <i className="ico fal fa-heart bg-1"></i>
            <img
              src="./assets/images/live-auction/image_by_Auction-7.webp"
              className="media-img"
              alt=""
            />
            <div className="media-text">
              <h5 className="cards-headings">Da Vinci decor</h5>
              <p className="card-text">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              </p>
              <div className="card-bid">
                <p>
                  Starting Bid <strong style={{ color: "#f15d4c" }}>$46</strong>
                </p>
                <button className="btn bids-btn">
                  <img
                    src="./assets/images/hammer.svg"
                    className="btn-hammer"
                    alt=""
                  />{" "}
                  9 Bid
                </button>
              </div>
            </div>
          </div>
        </div>

          {/* Card 1 */}
        <div className="col-sm-6 col-md-4 col-lg-3">
          <div className="slider-featured p-3 mb-3">
            <i className="ico fal fa-heart bg-1"></i>
            <img
              src="./assets/images/live-auction/image_by_Auction-8.webp"
              className="media-img"
              alt=""
            />
            <div className="media-text">
              <h5 className="cards-headings">Da Vinci decor</h5>
              <p className="card-text">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              </p>
              <div className="card-bid">
                <p>
                  Starting Bid <strong style={{ color: "#f15d4c" }}>$46</strong>
                </p>
                <button className="btn bids-btn">
                  <img
                    src="./assets/images/hammer.svg"
                    className="btn-hammer"
                    alt=""
                  />{" "}
                  9 Bid
                </button>
              </div>
            </div>
          </div>
        </div>

        

        {/* Add Card 3, 4 ... etc. */}

      </div>
    </div>
  </div>

</div>

<div className="tab-content">

  {/* ================= TAB 1 ================= */}
  <div id="auction-tab-1" className="container tab-pane active">
    <div className="container-fluid px-0 mt-5">
      <div className="row">

        {/* Auction Card Example */}
        <div className="col-sm-6 col-md-4 col-lg-3">
          <div className="slider-featured p-3 mb-3">
            <i className="ico fal fa-heart auction-1"></i>
            <img
              src="./assets/images/live-auction/image_by_Auction-1.webp"
              className="media-img"
              alt="Da Vinci decor1"
            />
            <div className="media-text">
              <h5 className="cards-headings">Da Vinci decor1</h5>
              <p className="card-text">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              </p>
              <div className="card-bid">
                <p>
                  Starting Bid <strong style={{ color: "#f15d4c" }}>$46</strong>
                </p>
                <button className="btn bids-btn">
                  <img
                    src="./assets/images/hammer.svg"
                    className="btn-hammer"
                    alt="hammer"
                  />{" "}
                  9 Bid
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Another Card */}
        <div className="col-sm-6 col-md-4 col-lg-3">
          <div className="slider-featured p-3">
            <i className="ico fal fa-heart auction-2"></i>
            <img
              src="./assets/images/Auctions-page/auction-page-2.webp"
              className="media-img"
              alt="Da Vinci decor"
            />
            <div className="media-text">
              <h5 className="cards-headings">Da Vinci decor</h5>
              <p className="card-text">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              </p>
              <div className="card-bid">
                <p>
                  Starting Bid <strong style={{ color: "#f15d4c" }}>$46</strong>
                </p>
                <button className="btn bids-btn">
                  <img
                    src="./assets/images/hammer.svg"
                    className="btn-hammer"
                    alt="hammer"
                  />{" "}
                  9 Bid
                </button>
              </div>
            </div>
          </div>
        </div>

      </div>
    </div>
  </div>

  {/* ================= TAB 3 ================= */}
  <div id="auction-tab-3" className="container tab-pane fade">
    <div className="container-fluid px-0 mt-5">
      <div className="row">

        {/* Card 1 */}
        <div className="col-sm-6 col-md-4 col-lg-3">
          <div className="slider-featured p-3 mb-3">
            <i className="ico fal fa-heart bg-1"></i>
            <img
              src="./assets/images/live-auction/image_by_Auction-1.webp"
              className="media-img"
              alt=""
            />
            <div className="media-text">
              <h5 className="cards-headings">Da Vinci decor</h5>
              <p className="card-text">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              </p>
              <div className="card-bid">
                <p>
                  Starting Bid <strong style={{ color: "#f15d4c" }}>$46</strong>
                </p>
                <button className="btn bids-btn">
                  <img
                    src="./assets/images/hammer.svg"
                    className="btn-hammer"
                    alt=""
                  />{" "}
                  9 Bid
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Card 2 */}
        <div className="col-sm-6 col-md-4 col-lg-3">
          <div className="slider-featured p-3">
            <i className="ico fal fa-heart bg-2"></i>
            <img
              src="./assets/images/live-auction/image_by_Auction-2.webp"
              className="media-img"
              alt=""
            />
            <div className="media-text">
              <h5 className="cards-headings">Da Vinci decor</h5>
              <p className="card-text">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              </p>
              <div className="card-bid">
                <p>
                  Starting Bid <strong style={{ color: "#f15d4c" }}>$46</strong>
                </p>
                <button className="btn bids-btn">
                  <img
                    src="./assets/images/hammer.svg"
                    className="btn-hammer"
                    alt=""
                  />{" "}
                  9 Bid
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Add Card 3, 4 ... etc. */}

      </div>
    </div>
  </div>

</div>




{/* Pagination (outside of tab-content) */}
<div className="container d-flex justify-content-center pt-3 pb-5">
  <ul className="pagination">
    <li className="page-item"><a className="page-link" href="#"><i className="fa fa-arrow-left"></i></a></li>
    <li className="page-item"><a className="page-link" href="#">1</a></li>
    <li className="page-item"><a className="page-link" href="#">2</a></li>
    <li className="page-item"><a className="page-link" href="#">3</a></li>
    <li className="page-item"><a className="page-link" href="#"><i className="fa fa-arrow-right"></i></a></li>
  </ul>
</div>


 


</div>     {/* closes outer container */}


    </>

   
  )
}

export default Auction