import React from 'react'

function Footer() {
  return (
    <>
   
<div className="container-fluid" id="footer-bg">
    <div className="row" style={{paddingTop: "220px"}}>
      <div className="col-md-5">
      
          <img
  src="./assets/images/image_footer_logo.webp"
  style={{ width: "160px", paddingTop: "40px", marginLeft: "40px" }}
  className="footer-logo"
  alt="ssk"
/>


      </div>
      <div className="col-md-7">
        <div className="row">
          <div className="col-sm-2">

            <ul className="footer-link">
              <li className="footer-item"><a href="/">Home</a></li>
              <li className="footer-item"><a href="./help.html">Help</a></li>
              <li className="footer-item"><a href="./subscription.html">Subscription</a></li>
              <li className="footer-item"><a href="./checkout.html">Checkout</a></li>
            </ul>

          </div>
          <div className="col-sm-2">
            <div className="footer-titles">
              <ul className="footer-link">
                <li className="footer-item"><a href="#">Company</a></li>
                <li className="footer-item"><a href="./About-us.html">About</a></li>
                <li className="footer-item"><a href="#">Store</a></li>
                <li className="footer-item"><a href="./FAQs.html">FAQ</a></li>
              </ul>
            </div>
          </div>
          <div className="col-sm-2">
            <div className="footer-titles">
              <ul className="footer-link">
                <li className="footer-item"><a href="#">Service</a></li>
                <li className="footer-item"><a href="#">Delivery</a></li>
                <li className="footer-item"><a href="#">Payment</a></li>
                <li className="footer-item"><a href="./contact.html">Contact</a></li>
              </ul>
            </div>
          </div>
          <div className="col-sm-6">
            <div className="footer-texted">
              <p>Get notified about everything <br/> releted to our auction</p>

              <div className="form-group">
                <input type="email" name="email" value="" placeholder="  Email" required="" id="subs"></input>
                <button type="submit" className="theme-btn"><span className="fa fa-paper-plane"></span></button>
                <a href=""><i className="fal fa-paper-plane" id="footer-subs"></i></a>
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>
    

  </div>
  <div className="container-fluid ids-info text-center" style={{padding: "0px 0"}}>
    <p className="text-center mb-0" style={{color: "white", fontSize: "14px"}}>
        Designed & Developed By
      <a className="text-white" href="https://i-diligence.com">IDILIGENCE SOLUTIONS PVT LTD</a>
    </p>
  </div>
    </>
  )
}

export default Footer