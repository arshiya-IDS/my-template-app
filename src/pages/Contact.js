import React from 'react'

function Contact() {
  return (
    <>
    <div className="breadcrumb flex-column  mb-0 pb-0 bg-light-gray">
    <div className="breadcrumb-heading">
      <h2 className="text-center "> Contact</h2>
      <p className="text-center "><a className="bread-links" href="/">Home</a> 
       <a className="bread-links"
          href="./contact.html">Contact</a>
      </p>
    </div>
  </div>


    <div className="container-fluid">
      <div className="row contact-area">
        <div className="col-md-4 contact-background">

          <div className="contact-face-1">
            <h4 className="mt-5 ml-4">
              <strong className="contact-heading">Get in touch</strong>
            </h4>
            <p className="mt-2 contact-text-info">
              We Love to hear from you. Our friendly team is always here to chat.
            </p>
          </div>


          <div className="chat d-flex mt-4">
            <i className="contact-text-info fa-regular fa-envelope"></i>
            <h5 className="contact-headings ml-3">Chat to us</h5>
          </div>
          <p className="contact-text-info-1">Come say Hello at our office HQ.</p>
          <a className="contact-text-info-1" href="mailto:ssk.123@gmail.com">ssk.123@gmail.com</a>

          <div className="chat d-flex mt-4">
            <i className="contact-text-info fa-regular fa-envelope"></i>
            <h5 className="contact-headings ml-3">Office</h5>
          </div>
          <p className="contact-text-info-1">Our friendly team here to help.</p>
          <strong className="contact-text-info-1">
            8228 King Abdulaziz Rd, <br />
            &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; Alamal Dist. SAUDI ARABIA. 345433.
          </strong>

          <div className="chat d-flex mt-4">
            <i className="contact-text-info fa-regular fa-envelope"></i>
            <h5 className="contact-headings ml-3">Phone</h5>
          </div>
          <p><a className="contact-text-info-1" href="tel:+65123456789">+65 123456789</a></p>

          <div className="contact-social-media">
            <ul className="contact-social">
              <li className="contact-social-link">
                <a href="#"><i className="contacticons fa-brands fa-google"></i></a>
                <a href="#"><i className="contacticons fa-brands fa-facebook-f"></i></a>
                <a href="#"><i className="contacticons fa-brands fa-twitter"></i></a>
                <a href="#"><i className="fa-brands fa-youtube"></i></a>
                <a href="#"><i className="fa-brands fa-linkedin"></i></a>
              </li>
            </ul>
          </div>

        </div>

        <div className="col-lg-8">
          <div className="contact-info-side">

            <div className="row ml-4 mt-5">
              <div className="col-md-6">
                <div className="form-group">
                  <label className="Contact-info-fill mb-0" htmlFor="firstName">FIRST NAME</label>
                  <input type="text" className="form-control Contact-form-control" placeholder="Enter your first name" id="firstName" />
                </div>
              </div>
              <div className="col-md-6">
                <div className="form-group order-sm-1">
                  <label className="Contact-info-fill mb-0" htmlFor="lastName">LAST NAME</label>
                  <input type="text" className="form-control Contact-form-control" placeholder="Enter your last name" id="lastName" />
                </div>
              </div>
            </div>

            <div className="row ml-4">
              <div className="col-md-6">
                <div className="form-group">
                  <label className="Contact-info-fill mb-0" htmlFor="email">EMAIL</label>
                  <input type="email" className="form-control Contact-form-control" placeholder="Enter your email" id="email" />
                </div>
              </div>
              <div className="col-md-6">
                <div className="form-group order-sm-1">
                  <label className="Contact-info-fill mb-0" htmlFor="phone">PHONE NUMBER</label>
                  <input type="text" className="form-control Contact-form-control" placeholder="Enter your phone number" id="phone" />
                </div>
              </div>
            </div>

            <div className="row ml-4 pb-5">
              <div className="col-lg-12">
                <div className="form-group">
                  <label className="Contact-info-fill mb-0" htmlFor="message">MESSAGE</label>
                  <input type="text" className="form-control Contact-form-control" placeholder="Enter your message" id="message" />
                </div>
              </div>
            </div>

            <div className="d-flex">
              <button className="btn contact-submit-btn ml-5">Submit</button>
            </div>

            <div className="mt-3">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3049.3160723311603!2d46.71382755442508!3d24.648889208393253!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e2f03a660284fbf%3A0x40095046d1eae3ec!2sKing%20Abdul%20Aziz%20Rd%2C%20Al%20Amal%2C%20Riyadh%20Saudi%20Arabia!5e0!3m2!1sen!2sin!4v1654500587322!5m2!1sen!2sin"
                width="100%"
                height="250"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="office-location"
              ></iframe>
            </div>

          </div>
        </div>

      </div>
    </div>
    </>
  );
};
export default Contact;

    
  