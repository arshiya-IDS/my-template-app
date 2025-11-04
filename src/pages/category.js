import React, { useState, useRef } from "react";

function Category() {
  // States and Refs
  const [activeTab, setActiveTab] = useState("category-1");
  const [previews, setPreviews] = useState([]);
  const [profileSrc, setProfileSrc] = useState("/assets/images/category-page/default-profile.png");

  const profileInputRef = useRef(null);
  const dragInputRef = useRef(null);

  // Handlers for profile
  const onProfileEditClick = () => {
    profileInputRef.current.click();
  };

  const onProfileInputChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setProfileSrc(URL.createObjectURL(file));
    }
  };

  // Handlers for drag-drop upload
  const onBrowseClick = () => {
    dragInputRef.current.click();
  };

  const onDragInputChange = (e) => {
    const files = Array.from(e.target.files);
    setPreviews(files.map((f) => URL.createObjectURL(f)));
  };

  const onDragOver = (e) => e.preventDefault();
  const onDragLeave = (e) => e.preventDefault();
  const onDrop = (e) => {
    e.preventDefault();
    const files = Array.from(e.dataTransfer.files);
    setPreviews(files.map((f) => URL.createObjectURL(f)));
  };

  // Dummy data for products
  const sampleProducts = [
    { id: 1, title: "Product 1", img: "/assets/images/category-all/image_by_cat-1.webp" },
    { id: 2, title: "Product 2", img: "/assets/images/category-all/image_by_cat-2.webp" },
  ];

  return (
    <>
       <div className="container-fluid px-0">
        <div className="category-backg">
          <img
            src="/assets/images/category-page/category-bg.webp"
            style={{ width: "100%" }}
            alt="Category Background"
          />
        </div>
      </div>

      {/* Profile row */}
      <div className="container position-relative pt-75 pl-0">
        <div className="category-profile">
          <form action="#" onSubmit={(e) => e.preventDefault()}>
            <input
              type="file"
              className="file-input"
              hidden
              ref={profileInputRef}
              accept="image/*"
              onChange={onProfileInputChange}
            />
            <img src="/assets/images/edit.svg" className="edit" alt="Edit" onClick={onProfileEditClick} style={{ cursor: "pointer" }} />
          </form>

          <img src={profileSrc} className="cat-pro d-inline-block" alt="Category Profile" />
          <h5 className="profile-name d-inline-block">Mohammad Alharbi</h5>
        </div>
      </div>

      {/* Tabs */}
      <div className="container mt-3">
        <br />

        <ul className="nav nav-tabs">
          <li className="nav-item">
            <a
              href="#category-1"
              className={`navs-links ${activeTab === "category-1" ? "active" : ""}`}
              onClick={(e) => {
                e.preventDefault();
                setActiveTab("category-1");
              }}
            >
              Upload Product
            </a>
          </li>
          <li className="nav-item">
            <a
              href="#category-2"
              className={`navs-links ${activeTab === "category-2" ? "active" : ""}`}
              onClick={(e) => {
                e.preventDefault();
                setActiveTab("category-2");
              }}
            >
              Create Auction
            </a>
          </li>
          <li className="nav-item">
            <a
              href="#category-3"
              className={`navs-links ${activeTab === "category-3" ? "active" : ""}`}
              onClick={(e) => {
                e.preventDefault();
                setActiveTab("category-3");
              }}
            >
              Selling
            </a>
          </li>
          <li className="nav-item">
            <a
              href="#category-4"
              className={`navs-links ${activeTab === "category-4" ? "active" : ""}`}
              onClick={(e) => {
                e.preventDefault();
                setActiveTab("category-4");
              }}
            >
              Sold
            </a>
          </li>
          <li className="nav-item">
            <a
              href="#category-5"
              className={`navs-links ${activeTab === "category-5" ? "active" : ""}`}
              onClick={(e) => {
                e.preventDefault();
                setActiveTab("category-5");
              }}
            >
              My Bids
            </a>
          </li>
          <li className="nav-item">
            <a
              href="#category-6"
              className={`navs-links ${activeTab === "category-6" ? "active" : ""}`}
              onClick={(e) => {
                e.preventDefault();
                setActiveTab("category-6");
              }}
            >
              Category
            </a>
          </li>
        </ul>

        <div className="tab-content">
          {/* Category 1 - Upload */}
          <div id="category-1" className={`container tab-pane ${activeTab === "category-1" ? "active show" : "fade"}`}>
            <br />
            <div className="container">
              <h4 className="live-aucts mb-4">Upload A Product</h4>
              <div className="row">
                {/* Drag area */}
                <div className="col-md-6 col-lg-4 mb-3" id="dot">
                  <div
                    className="drag-area"
                    onDragOver={onDragOver}
                    onDragLeave={onDragLeave}
                    onDrop={onDrop}
                    style={{ minHeight: 180, padding: 12 }}
                  >
                    <div className="drag-content">
                      {/* image previews */}
                      {previews.length === 0 ? null : previews.map((p, i) => (
                        <img key={i} src={p} alt={`preview-${i}`} style={{ maxWidth: "100%", marginBottom: 8 }} />
                      ))}
                    </div>

                    <div className="icon">
                      <i className="fas fa-cloud-upload-alt"></i>
                    </div>
                    <header>Drag & Drop to Upload File</header>
                    <p className="files-name">
                      <strong>PNG, JPG, GIF</strong>
                    </p>
                    <span>OR</span>
                    <button type="button" className="browse-file btn btn-sm btn-outline-primary" onClick={onBrowseClick}>
                      Browse File
                    </button>
                    <input ref={dragInputRef} type="file" hidden accept="image/*" multiple onChange={onDragInputChange} />
                  </div>
                </div>

                {/* Auction Title */}
                <div className="col-md-6 col-lg-4 mb-3">
                  <div className="auctions-title">
                    <h5 className="text-title">Auction Title</h5>
                  </div>
                  <form>
                    <div className="form-group">
                      <input
                        type="text"
                        className="form-control"
                        placeholder="Enter auction title/ Name of the product"
                        id="usr"
                        name="username"
                        required
                      />
                    </div>
                  </form>

                  <div className="auctions-title">
                    <h5 className="text-title">Choose a Category</h5>
                  </div>
                  <div className="choose-cate">
                    <ul className="cate-section">
                      <li className="cate-itmes"><a href="/">Artifacts</a></li>
                      <li className="cate-itmes"><a href="/">Mobile & Tablets</a></li>
                      <li className="cate-itmes"><a href="/">Laptops</a></li>
                      <li className="cate-itmes"><a href="/">Furniture</a></li>
                      <li className="cate-itmes"><a href="/">Other</a></li>
                    </ul>
                  </div>

                  <div className="form-group">
                    <div className="auctions-title">
                      <h5 className="text-title">Description</h5>
                    </div>
                    <textarea className="form-control" placeholder="Enter a detailed description" rows="5" id="comment" name="text"></textarea>
                  </div>
                </div>

                {/* Price/Meta inputs */}
                <div className="col-md-6 col-lg-4 mb-3">
                  <div className="auctions-title">
                    <h5 className="text-title">Market Price</h5>
                  </div>
                  <div className="form-group">
                    <input type="text" className="form-control" placeholder="Enter market price of the product" id="usr-1" name="username" required />
                  </div>

                  <div className="auctions-title">
                    <h5 className="text-title">Types of product</h5>
                  </div>
                  <div className="form-group">
                    <input type="text" className="form-control" placeholder="New / used" id="usr-2" name="username" required />
                  </div>

                  <div className="auctions-title">
                    <h5 className="text-title">Delivery mood</h5>
                  </div>
                  <div className="form-group">
                    <input type="text" className="form-control" placeholder="Deliverable / pick up" id="usr-3" name="username" required />
                  </div>

                  <div className="auctions-title">
                    <h5 className="text-title">Dimensions</h5>
                  </div>
                  <div className="form-group">
                    <input type="text" className="form-control" placeholder="Enter the dimensions of the product" id="usr-4" name="username" required />
                  </div>
                </div>

                <div className="submite">
                  <a className="btn save-btn" href="/">Save</a>
                  <a className="btn Continue-btn" href="/">Continue</a>
                </div>
              </div>
            </div>
          </div>

          {/* Category 2 - Create Auction / Uploaded Products */}
          <div id="category-2" className={`container tab-pane ${activeTab === "category-2" ? "active show" : "fade"}`}>
            <br />
            <div className="container">
              <h4 className="mb-2" style={{ fontSize: 16, fontWeight: "bold", color: "#707070" }}>
                Uploaded Products:
              </h4>

              <div className="row">
                {sampleProducts.slice(0, 2).map((p) => (
                  <div key={p.id} className="col-sm-6 col-md-4 col-lg-3">
                    <div className="slider-featured p-3 mb-3">
                      <img src={p.img} className="media-img" alt={p.title} />
                      <div className="media-text">
                        <h5 className="cards-headings">{p.title}</h5>
                        <p className="card-text">Lorem ipsum dolor sit amet...</p>
                        <div className="edits">
                          <a className="btn edit-btn" href="/">Edit</a>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              {/* Create Auction preview */}
              <div className="container">
                <h4 className="live-aucts mx-0">Create Auction</h4>
                <h5 className="mt-4" style={{ color: "grey" }}>Product Preview:-</h5>

                <div className="row" style={{ marginBottom: 15, paddingTop: 15, border: "2px dotted grey" }}>
                  <div className="col-sm-6 col-md-4 col-lg-3">
                    <div className="slider-featured p-3 mb-3">
                      <img src="/assets/images/category-all/image_by_cat-1.webp" className="media-img" alt="preview" />
                      <div className="media-text">
                        <h5 className="cards-headings">Da Vinci decor</h5>
                        <p className="card-text">Lorem ipsum dolor sit amet...</p>
                      </div>
                    </div>
                  </div>

                  <div className="col-sm-6 col-md-4 col-lg-3">
                    <div className="Duration">
                      <h4>Duration</h4>
                    </div>
                    <div className="picker">
                      <label htmlFor="meeting-time">Start Day _ Start Time</label>
                      <input type="datetime-local" id="meeting-time" className="form-control" name="meeting-time" defaultValue="2022-06-07T00:00" />
                    </div>
                    <h4 className="Duration mt-3">Bidding Amount:</h4>
                    <div className="bidding-amount">
                      <input className="form-control" placeholder="Enter minimum bid" />
                    </div>
                  </div>

                  <div className="col-sm-6 col-md-4 col-lg-3">
                    <div className="pickers" style={{ paddingTop: 39 }}>
                      <label htmlFor="meeting-time2">End Day _ End Time</label>
                      <input type="datetime-local" id="meeting-time2" className="form-control" name="meeting-time" defaultValue="2022-06-07T00:00" />
                    </div>
                    <div className="biddings-amount" style={{ paddingTop: 52 }}>
                      <input className="form-control" placeholder="Enter maximum bid" />
                    </div>
                    <div className="publish mt-4 mb-3">
                      <a className="btn publish-btn" href="/">Publish</a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Category 3-6 - placeholders, show/hide with activeTab */}
          <div id="category-3" className={`container tab-pane ${activeTab === "category-3" ? "active show" : "fade"}`}>
            <br />
            <div className="container">
              <h4 className="live-aucts">Selling</h4>
              {/* ... replicate other parts from your HTML as needed */}
              <p>Sample selling content here.</p>
            </div>
          </div>

          <div id="category-4" className={`container tab-pane ${activeTab === "category-4" ? "active show" : "fade"}`}>
            <br />
            <div className="container">
              <h4 className="live-aucts">Sold</h4>
              <p>Sample sold content here.</p>
            </div>
          </div>

          <div id="category-5" className={`container tab-pane ${activeTab === "category-5" ? "active show" : "fade"}`}>
            <br />
            <div className="container">
              <h4 className="live-aucts">My Bids</h4>
              <p>Sample My Bids content here.</p>
            </div>
          </div>

          <div id="category-6" className={`container tab-pane ${activeTab === "category-6" ? "active show" : "fade"}`}>
            <br />
            <div className="container">
              <h4 className="live-aucts">Category</h4>
              <p>Category maintenance: upload category image / title / description</p>
              {/* replicate the form from HTML if needed */}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Category;
