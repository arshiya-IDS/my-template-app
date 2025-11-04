// admin-all.js
// React conversion of admin-all-product.html
// Notes:
// - Place the original /assets folder inside your project's `public` folder so paths like /assets/images/... work.
// - This component uses vanilla JS inside useEffect instead of jQuery so you don't need jQuery.
// - Make sure Bootstrap CSS is available. This file imports bootstrap's CSS from node_modules; if you prefer CDN, add links to public/index.html.
// - For FontAwesome you can either install `@fortawesome/fontawesome-free` and import its CSS, or add this link to public/index.html:
//     <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.1.1/css/all.min.css" />

import React, { useEffect, useRef, useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
// If you moved the project's CSS into src, uncomment these imports and adapt paths:
// import '../assets/css/styles.css';
// import '../assets/subscrip.css';
// import '../assets/style.css';

const AdminAll = () => {
  const [modalOpen, setModalOpen] = useState(false);
  const dropAreaRef = useRef(null);

  useEffect(() => {
    // run only in browser
    if (typeof window === 'undefined') return;

    // Sidebar toggle
    const sidebarToggle = document.body.querySelector('#sidebarToggle');
    const onToggle = (e) => {
      e && e.preventDefault();
      document.body.classList.toggle('sb-sidenav-toggled');
      try {
        localStorage.setItem('sb|sidebar-toggle', document.body.classList.contains('sb-sidenav-toggled'));
      } catch (err) {}
    };
    if (sidebarToggle) sidebarToggle.addEventListener('click', onToggle);

    // subscription-icons dropdown behavior (same behavior as original)
    const dropdownEls = Array.from(document.getElementsByClassName('subscription-icons'));
    const dropdownHandlers = dropdownEls.map((el) => {
      const handler = () => {
        el.classList.toggle('active');
        const dropdownContent = el.nextElementSibling;
        if (dropdownContent) {
          dropdownContent.style.display = dropdownContent.style.display === 'contents' ? 'none' : 'contents';
        }
      };
      el.addEventListener('click', handler);
      return { el, handler };
    });

    // Drag & drop and file input preview logic
    const dropArea = dropAreaRef.current;
    let buttonClickHandler = null;
    let inputChangeHandler = null;
    let onDragOver = null;
    let onDragLeave = null;
    let onDrop = null;

    if (dropArea) {
      const input = dropArea.querySelector('input[type="file"]');
      const button = dropArea.querySelector('.browse-file');
      const dragText = dropArea.querySelector('header');
      const dragContent = dropArea.querySelector('.drag-content');

      const handleFile = (f) => {
        if (!f) return;
        const fileType = f.type;
        const validExtensions = ['image/jpeg', 'image/jpg', 'image/png', 'image/webp'];
        if (validExtensions.includes(fileType)) {
          const reader = new FileReader();
          reader.onload = (e) => {
            const fileURL = e.target.result;
            if (dragContent) {
              const img = document.createElement('img');
              img.src = fileURL;
              img.alt = '';
              dragContent.appendChild(img);
            }
          };
          reader.readAsDataURL(f);
        } else {
          alert('This is not an Image File!');
          dropArea.classList.remove('active');
          if (dragText) dragText.textContent = 'Drag & Drop to Upload File';
        }
      };

      if (button) {
        buttonClickHandler = () => input && input.click();
        button.addEventListener('click', buttonClickHandler);
      }

      if (input) {
        inputChangeHandler = (e) => {
          const file = e.target.files[0];
          if (file) {
            dropArea.classList.add('active');
            handleFile(file);
          }
        };
        input.addEventListener('change', inputChangeHandler);
      }

      onDragOver = (event) => {
        event.preventDefault();
        dropArea.classList.add('active');
        if (dragText) dragText.textContent = 'Release to Upload File';
      };
      onDragLeave = () => {
        dropArea.classList.remove('active');
        if (dragText) dragText.textContent = 'Drag & Drop to Upload File';
      };
      onDrop = (event) => {
        event.preventDefault();
        const file = event.dataTransfer.files[0];
        if (file) handleFile(file);
      };

      dropArea.addEventListener('dragover', onDragOver);
      dropArea.addEventListener('dragleave', onDragLeave);
      dropArea.addEventListener('drop', onDrop);
    }

    // cleanup
    return () => {
      if (sidebarToggle) sidebarToggle.removeEventListener('click', onToggle);
      dropdownHandlers.forEach(({ el, handler }) => el.removeEventListener('click', handler));
      if (dropArea) {
        const input = dropArea.querySelector('input[type="file"]');
        const button = dropArea.querySelector('.browse-file');
        if (button && buttonClickHandler) button.removeEventListener('click', buttonClickHandler);
        if (input && inputChangeHandler) input.removeEventListener('change', inputChangeHandler);
        if (onDragOver) dropArea.removeEventListener('dragover', onDragOver);
        if (onDragLeave) dropArea.removeEventListener('dragleave', onDragLeave);
        if (onDrop) dropArea.removeEventListener('drop', onDrop);
      }
    };
  }, []);

  return (
    <div className="d-flex" id="wrapper">
      {/* Sidebar */}
      <div className="border-end" id="sidebar-wrapper">
        <div className="sidebar-heading border-bottom bg-light">
          <a href="/">
            <img src="/assets/images/image_footer_logo.webp" style={{ width: '75%', padding: '26px 40px 13px' }} alt="" />
          </a>
        </div>
        <div className="list-group list-group-flush mt-5">
          {/* Sidebar items (kept identical to original) */}

          <div className="logout mt-5">
            <img src="/assets/images/admin/admin-home.svg" width="9%" alt="" />
            <a className="logout-item ml-3" href="./admin-page.html">Dashboard</a>
          </div>

          <div className="subscription-icons d-flex ">
            <img src="/assets/images/admin/admin-category.svg" className="add-icons" alt="" />
            <button className="dropdown-btn">Category <i className="fa fa-caret-downs"></i></button>
          </div>
          <div className="dropdown-container" style={{ display: 'none' }}>
            <a className="dropdown-linkss " href="./admin-category-1.html">Category 01</a>
          </div>

          <div className="subscription-icons d-flex ">
            <img src="/assets/images/admin/admin-user.svg" className="add-icons" alt="" />
            <button className="dropdown-btn">User <i className="fa fa-caret-downs"></i></button>
          </div>
          <div className="dropdown-container" style={{ display: 'none' }}>
            <a className="dropdown-linkss " href="./admin-user-page.html">User Management</a>
          </div>

          <div className="subscription-icons d-flex ">
            <img src="/assets/images/admin/admin-product.svg" className="add-icons" alt="" />
            <button className="dropdown-btn">Product <i className="fa fa-caret-downs"></i></button>
          </div>
          <div className="dropdown-container" style={{ display: 'none' }}>
            <a className="dropdown-linkss " href="./admin-view-all-product.html">View Products</a>
            <a className="dropdown-linkss " href="./admin-upload-product.html">Upload Product</a>
          </div>

          <div className="subscription-icons d-flex ">
            <img src="/assets/images/admin/admin-auction.svg" className="add-icons" alt="" />
            <button className="dropdown-btn">Auction <i className="fa fa-caret-downs"></i></button>
          </div>
          <div className="dropdown-container" style={{ display: 'none' }}>
            <a className="dropdown-linkss " href="./admin-create-auction.html">Create Auction</a>
          </div>

          <div className="subscription-icons d-flex ">
            <img src="/assets/images/admin/admin-category.svg" className="add-icons" alt="" />
            <button className="dropdown-btn">Subscription <i className="fa fa-caret-downs"></i></button>
          </div>
          <div className="dropdown-container" style={{ display: 'none' }}>
            <a className="dropdown-linkss " href="./admin-all-subscription.html">All Subscription</a>
            <a className="dropdown-linkss " href="./add-subscriptipn.html">Add Subscription</a>
          </div>

          <div className="subscription-icons d-flex ">
            <img src="/assets/images/admin/admin-content.svg" className="add-icons" alt="" />
            <button className="dropdown-btn">Content <i className="fa fa-caret-downs"></i></button>
          </div>
          <div className="dropdown-container" style={{ display: 'none' }}>
            <a className="dropdown-linkss " href="#">SSK PROJECT</a>
          </div>

          <div className="logout">
            <img src="/assets/images/setting-light.svg" width="9%" alt="" />
            <a className="logout-item ml-3" href="">LogOut</a>
          </div>

        </div>
      </div>

      {/* Page content wrapper */}
      <div id="page-content-wrapper">
        <div className="left-gradient mt-5"></div>
        <div className="right-gradient-top mt-5"></div>
        <div className="right-gradient-bottom mt-5"></div>

        {/* Top navigation*/}
        <nav className="navbar navbar-expand-lg navbar-light bg-light border-bottom">
          <div className="container-fluid">
            <button className="btn sidebar-toggle-btn" id="sidebarToggle"><img src="/assets/images/bars.svg" alt="" /></button>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation"><span className="navbar-toggler-icon"></span></button>
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
              <ul className="navbar-nav ms-auto mt-2 mt-lg-0">
                <li className="nav-item d-block d-lg-none"><a className="nav-link" aria-current="page" href="./signup.html">REGISTER</a></li>
                <li className="nav-item d-block d-lg-none"><a className="nav-link" aria-current="page" href="./login.html">LOGIN</a></li>

                <nav className="navbar navbar-expand-sm">
                  <div className="collapse navbar-collapse" id="navbar-list-4">
                    <ul className="navbar-nav">
                      <li className="nav-item dropdown">
                        <a className="nav-link dropdown-toggle" href="#" id="navbarDropdownMenuLink" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                          <img src="/assets/images/avatar.webp" width="40" height="40" className="rounded-circle" alt="" />
                        </a>
                        <div className="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">

                          <div className="subscription-icons d-flex ">
                            <img src="/assets/images/setting.svg" className="add-icons" alt="" />
                            <a className="dropdown-item" href="#">Settings</a>
                          </div>

                          <div className="subscription-icons d-flex ">
                            <img src="/assets/images/log-out.svg" className="add-icons" alt="" />
                            <a className="dropdown-item" href="#">Log Out</a>
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

        {/* Page content*/}
        <div className="container p-5">

          <div className="row">
            <div className="category-table pt-3 px-3">

              <div className="category-1-heading d-flex justify-content-between bg-success rounded-top">
                <h4 className="py-2 pl-3  text-white ">All Products</h4>
                <button className="btn craete-category-btn" id="create-new-modal-btn-open">Create New</button>
              </div>

              <div className="row">
                <div className="col-md-6">
                  <div className="btn-group mb-3 mt-3">
                    <button type="button" className="btn btn-secondary">Exel</button>
                    <button type="button" className="btn btn-secondary">PDF</button>
                    <button type="button" className="btn btn-secondary">PDF</button>
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="input-group d-flex justify-content-end w-100  mb-2 mt-3 " style={{ margin: 43 }}>
                    <div className="form-outline" style={{ width: '70%' }}>
                      <input type="search" placeholder="Search ...." id="form1" className="form-control" />

                    </div>
                    <button type="button" className="btn btn-serch">
                      <i className="fas fa-search"></i>
                    </button>
                  </div>
                </div>
              </div>

              <div className="user-align" style={{ overflow: 'auto' }}>
                <table id="create-table">
                  <thead>
                    <tr>
                      <th className="admin-category-sub-heading pl-3 p-3">Product Title</th>
                      <th className="admin-category-sub-heading pl-3">Product Category</th>
                      <th className="admin-category-sub-heading pl-3">Product Type</th>
                      <th className="admin-category-sub-heading pl-3">Market Price</th>
                      <th className="admin-category-sub-heading pl-3">Product Image</th>
                      <th className="admin-category-sub-heading pl-3">Action</th>
                    </tr>
                  </thead>
                  <tbody>

                    <tr>
                      <td className="admin-category-option pl-3">Artistic Grey</td>
                      <td className="admin-category-option pl-3">Furnitures</td>
                      <td className="admin-category-option pl-3">New</td>
                      <td className="admin-category-option pl-3">$99</td>
                      <td className="admin-category-option pl-3">
                        <div className="admin-category-images">
                          <img src="" alt="Category Image" />
                        </div>
                      </td>

                      <td>
                        <button className="btn btn-sm btn-outline-info" onClick={() => setModalOpen(true)}><i className="fa-solid fa-pen-to-square"></i></button>
                        <a href="#" className="btn btn-sm btn-outline-success"><i className="fa-solid fa-eye"></i></a>
                        <a href="#" className="btn btn-sm btn-outline-danger"><i className="fa-solid fa-trash"></i></a>
                      </td>

                    </tr>

                    <tr>
                      <td className="admin-category-option pl-3">iPad 12</td>
                      <td className="admin-category-option pl-3">Mobile & Tablets</td>
                      <td className="admin-category-option pl-3">Used</td>
                      <td className="admin-category-option pl-3">$78</td>
                      <td className="admin-category-option pl-3">
                        <div className="admin-category-images">
                          <img src="" alt="Category Image" />
                        </div>
                      </td>

                      <td>
                        <button className="btn btn-sm btn-outline-info" onClick={() => setModalOpen(true)}><i className="fa-solid fa-pen-to-square"></i></button>
                        <a href="#" className="btn btn-sm btn-outline-success"><i className="fa-solid fa-eye"></i></a>
                        <a href="#" className="btn btn-sm btn-outline-danger"><i className="fa-solid fa-trash"></i></a>
                      </td>

                    </tr>

                    <tr>
                      <td className="admin-category-option pl-3">The Abstract 1P</td>
                      <td className="admin-category-option pl-3">Laptops</td>
                      <td className="admin-category-option pl-3">New</td>
                      <td className="admin-category-option pl-3">$56</td>
                      <td className="admin-category-option pl-3">
                        <div className="admin-category-images">
                          <img src="" alt="Category Image" />
                        </div>
                      </td>

                      <td>
                        <button className="btn btn-sm btn-outline-info" onClick={() => setModalOpen(true)}><i className="fa-solid fa-pen-to-square"></i></button>
                        <a href="#" className="btn btn-sm btn-outline-success"><i className="fa-solid fa-eye"></i></a>
                        <a href="#" className="btn btn-sm btn-outline-danger"><i className="fa-solid fa-trash"></i></a>
                      </td>

                    </tr>

                    <tr>
                      <td className="admin-category-option pl-3">Swirling Spiral</td>
                      <td className="admin-category-option pl-3">Artifacts</td>
                      <td className="admin-category-option pl-3">Used</td>
                      <td className="admin-category-option pl-3">$67</td>
                      <td className="admin-category-option pl-3">
                        <div className="admin-category-images">
                          <img src="" alt="Category Image" />
                        </div>
                      </td>

                      <td>
                        <button className="btn btn-sm btn-outline-info" onClick={() => setModalOpen(true)}><i className="fa-solid fa-pen-to-square"></i></button>
                        <a href="#" className="btn btn-sm btn-outline-success"><i className="fa-solid fa-eye"></i></a>
                        <a href="#" className="btn btn-sm btn-outline-danger"><i className="fa-solid fa-trash"></i></a>
                      </td>

                    </tr>

                    <tr>
                      <td className="admin-category-option pl-3">Cynaide Circle</td>
                      <td className="admin-category-option pl-3">Furnitures</td>
                      <td className="admin-category-option pl-3">New</td>
                      <td className="admin-category-option pl-3">$99</td>
                      <td className="admin-category-option pl-3">
                        <div className="admin-category-images">
                          <img src="" alt="Category Image" />
                        </div>
                      </td>

                      <td>
                        <button className="btn btn-sm btn-outline-info" onClick={() => setModalOpen(true)}><i className="fa-solid fa-pen-to-square"></i></button>
                        <a href="#" className="btn btn-sm btn-outline-success"><i className="fa-solid fa-eye"></i></a>
                        <a href="#" className="btn btn-sm btn-outline-danger"><i className="fa-solid fa-trash"></i></a>
                      </td>

                    </tr>

                  </tbody>
                </table>
              </div>

              <div className="row">
                <div className="col-md-6">
                  <div className="mt-3">
                    <strong>Showing 1 to 5 of 5 entries</strong>
                  </div>
                </div>
                <div className="col-md-6">
                  <nav aria-label="Page navigation ">
                    <ul className="pagination d-flex justify-content-end w-100 mt-3">
                      <li className="page-item " aria-current="page">
                        <a className="page-link" href="#">Previous <span className="sr-only">(current)</span></a>
                      </li>
                      <li className="page-item active">
                        <a className="page-link" href="#" tabIndex={-1} aria-disabled="true">Page 1</a>
                      </li>
                      <li className="page-item">
                        <a className="page-link" href="#">Next</a>
                      </li>
                    </ul>
                  </nav>
                </div>
              </div>

            </div>
          </div>
        </div>



        <div style={{ background: '-webkit-linear-gradient(332deg,#ff5441, #294b8f)', marginTop: '10px' }}>
          <p className="px-5  p-3 mb-0 text-white">Copyright © 2021-2030 <strong className="text-dark">SSK PROJECT</strong>. All rights reserved.</p>
        </div>
      </div>

      {/* ====================edit admin modal (upload page))======================== */}

      <div id="Upload-edit-myModal" className="delete-modal" style={{ display: modalOpen ? 'block' : 'none' }}>
        <div className="upload-edit-modal-content">
          <div className="modal-body" style={{ backgroundColor: 'aliceblue', borderRadius: '12px' }}>

            <div className="row p-3" style={{ border: '3px dotted black', borderRadius: '12px' }}>
              <div className="d-flex justify-content-between">
                <h4 className="live-aucts mb-4 pl-3">Edit Product</h4>
                <button className="btn btn-sm btn-outline-secondary" onClick={() => setModalOpen(false)}>Close</button>

              </div>



              <div className=" col-md-6 col-lg-4 mb-3" id="dot">
                <div className="drag-area" ref={dropAreaRef}>

                  <div className="drag-content"></div>

                  <div className="icon"><i className="fas fa-cloud-upload-alt"></i></div>
                  <header>Drag & Drop to Upload File</header>
                  <p className="files-name"><strong>PNG, JPG, GIF</strong></p>
                  <span>OR</span>
                  <button className="browse-file">Browse File</button>
                  <input type="file" hidden />
                </div>
              </div>
              <div className=" col-md-6 col-lg-4 mb-3">
                <div className="auctions-title">
                  <h5 className="text-title">Auction Title</h5>
                </div>
                <form action="/action_page.php">
                  <div className="form-group">

                    <input type="text" className="form-control" placeholder="Enter auction title/ Name of the product" id="usr00" name="username" required />
                  </div>
                </form>
                <div className="auctions-title">
                  <h5 className="text-title">Choose a Category</h5>
                </div>

                <div className="input-group mb-3">
                  <select className="form-select" id="inputGroupSelect10" aria-label="Example select with button addon" defaultValue="3">
                    <option value="">Choose...</option>
                    <option value="1">Artifacts</option>
                    <option value="2">Mobile & Tablets</option>
                    <option value="3">Furniture</option>
                    <option value="4">Other</option>
                  </select>
                </div>

                <div className="form-group">

                  <div className="auctions-title">
                    <h5 className="text-title">Description</h5>
                  </div>
                  <textarea className="form-control" placeholder="Enter a detailed description" rows="5" id="comments" name="text"></textarea>
                </div>

              </div>



              <div className=" col-md-6 col-lg-4 mb-3">

                <div className="auctions-title">
                  <h5 className="text-title">Market Price</h5>
                </div>
                <form action="/action_page.php">
                  <div className="form-group">

                    <input type="text" className="form-control" placeholder="Enter market price of the product" id="usr-01" name="username" required />
                  </div>
                </form>

                <div className="auctions-title">
                  <h5 className="text-title">Types of product</h5>
                </div>
                <form action="/action_page.php">
                  <div className="form-group">

                    <input type="text" className="form-control" placeholder="New / used" id="usr-02" name="username" required />
                  </div>
                </form>

                <div className="auctions-title">
                  <h5 className="text-title">Delivery mood</h5>
                </div>
                <form action="/action_page.php">
                  <div className="form-group">

                    <input type="text" className="form-control" placeholder="Deliverable / pick up" id="usr-03" name="username" required />
                  </div>
                </form>

                <div className="auctions-title">
                  <h5 className="text-title">Dimensions</h5>
                </div>
                <form action="/action_page.php">
                  <div className="form-group">

                    <input type="text" className="form-control" placeholder="Enter the dimensions of the product" id="usr-04" name="username" required />
                  </div>
                </form>

              </div>
              <div className="submite  ">
                <button className="btn save-btn" onClick={() => { /* implement save logic */ }}>Save</button>
                <button className="btn Continue-btn">Continue</button>
                <a className="btn save-btn wrapper" href="./admin-view-all-product.html">Back</a>
              </div>


  <div className="container-fluid" id="footer-bg">
        <div className="row" style={{ paddingTop: "220px" }}>
          <div className="col-md-5">
            <img
              src="./assets/images/image_footer_logo.webp"
              style={{
                width: "160px",
                paddingTop: "40px",
                marginLeft: "40px",
              }}
              className="footer-logo"
              alt="ssk"
            />
          </div>
          <div className="col-md-7">
            <div className="row">
              <div className="col-sm-2">
                <ul className="footer-link">
                  <li className="footer-item">
                    <a href="/">Home</a>
                  </li>
                  <li className="footer-item">
                    <a href="./help.html">Help</a>
                  </li>
                  <li className="footer-item">
                    <a href="./subscription.html">Subscription</a>
                  </li>
                  <li className="footer-item">
                    <a href="./checkout.html">Checkout</a>
                  </li>
                </ul>
              </div>
              <div className="col-sm-2">
                <div className="footer-titles">
                  <ul className="footer-link">
                    <li className="footer-item">
                      <a href="#">Company</a>
                    </li>
                    <li className="footer-item">
                      <a href="./About-us.html">About</a>
                    </li>
                    <li className="footer-item">
                      <a href="#">Store</a>
                    </li>
                    <li className="footer-item">
                      <a href="./FAQs.html">FAQ</a>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="col-sm-2">
                <div className="footer-titles">
                  <ul className="footer-link">
                    <li className="footer-item">
                      <a href="#">Service</a>
                    </li>
                    <li className="footer-item">
                      <a href="#">Delivery</a>
                    </li>
                    <li className="footer-item">
                      <a href="#">Payment</a>
                    </li>
                    <li className="footer-item">
                      <a href="./contact.html">Contact</a>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="col-sm-6">
                <div className="footer-texted">
                  <p>
                    Get notified about everything <br /> related to our auction
                  </p>
                  <div className="form-group">
                    <input
                      type="email"
                      name="email"
                      value=""
                      placeholder="  Email"
                      required
                      id="subs"
                    />
                    <a href="">
                      <i className="fal fa-paper-plane" id="footer-subs"></i>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div
        className="container-fluid ids-info text-center"
        style={{ padding: "0px 0" }}
      >
        <p className="text-center mb-0" style={{ color: "white", fontSize: "14px" }}>
          Designed & Developed By
          <a className="text-white" href="https://i-diligence.com">
            IDILIGENCE SOLUTIONS PVT LTD
          </a>
        </p>
      </div>
            </div>
          </div>

        </div>
      </div>

    </div>

   
    
  );
};

export default AdminAll;
