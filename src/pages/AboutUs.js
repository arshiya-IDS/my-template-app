import React, { useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";


  
const AboutUs = () => {
  useEffect(() => {
    const scripts = [];

    const loadScript = (src) =>
      new Promise((resolve, reject) => {
        const s = document.createElement("script");
        s.src = src;
        // keep order for dependent scripts
        s.async = false;
        s.onload = () => resolve(s);
        s.onerror = () => reject(new Error(`Failed to load ${src}`));
        document.body.appendChild(s);
        scripts.push(s);
      });

    (async () => {
      try {
        // load the same local scripts the HTML was using (they should be placed in the public/assets folder)
        await loadScript("/assets/js/jqurey.min.js"); // note: original file name contains this typo
        // ensure global aliases exist
        if (!window.jQuery && window.$) window.jQuery = window.$;

        await loadScript("/assets/js/popper.min.js");
        await loadScript("/assets/js/bootstrap.min.js");
        await loadScript("/assets/owl.carousel.min.js");
        await loadScript("/assets/js/counterup.js");

        const $ = window.jQuery || window.$;

        // initialize counterup (if plugin attached)
        if ($ && $.fn && $.fn.counterUp) {
          $(".counter").counterUp({ time: 3000 });
        } else {
          // fallback: try again shortly in case plugin attaches a bit later
          setTimeout(() => {
            const $2 = window.jQuery || window.$;
            if ($2 && $2.fn && $2.fn.counterUp) $2(".counter").counterUp({ time: 3000 });
          }, 500);
        }

        // initialize testimonial carousel: support both bootstrap (jQuery plugin) and bootstrap 5 native API
        if (window.$ && window.$('#testimonial4') && window.$('#testimonial4').carousel) {
          window.$('#testimonial4').carousel({ interval: 5000, pause: 'hover' });
        } else if (window.bootstrap && document.getElementById('testimonial4')) {
          try {
            const el = document.getElementById('testimonial4');
            // either get existing instance or create new
            const inst = window.bootstrap.Carousel.getInstance(el) || new window.bootstrap.Carousel(el, { interval: 5000, pause: 'hover' });
          } catch (e) {}
        }
      } catch (err) {
        // eslint-disable-next-line no-console
        console.error("Error loading page scripts", err);
      }
    })();

    return () => {
      // cleanup appended scripts on unmount
      scripts.forEach((s) => {
        if (s && s.parentNode) s.parentNode.removeChild(s);
      });
    };
  }, []);

  return (
    <div>
      

      {/* ---------------- Breadcrumb ---------------- */}
      <div className="breadcrumb flex-column mb-0 pb-0 bg-light-gray">
        <div className="breadcrumb-heading">
          <h2 className="text-center"> About Us</h2>
          <p className="text-center">
            <a className="bread-links" href="/">
              Home
            </a>{" "}&gt; <a className="bread-links" href="/About-us.html">
              About Us
            </a>
          </p>
        </div>
      </div>

      {/* --------------------------------------About Us page------------------------------------------------ */}

      <div className="container mt-5">
        <div className="row">
          <div className="col-lg-6">
            <div className="sigma_about">
              <div className="sigma_about-image-1">
                <img src="/assets/images/about/vision-1.jpg" alt="img" />
              </div>
              <div className="sigma_about-image-2">
                <img src="/assets/images/about/vision-2.jpg" alt="img" />
              </div>
              <div className="sigma_about-image-3">
                <img src="/assets/images/about/vision-3.jpg" alt="img" />
              </div>
            </div>
          </div>

          <div className="col-lg-6">
            <h1 style={{ fontWeight: 900 }}>
              Talk to a <span className="primary-colour">Specialist</span>
            </h1>

            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse nesciunt itaque maxime
              ducimus ex, ipsam consequatur, fugit eum quaerat dolorum accusantium totam deleniti illum
              laboriosam? Quasi, provident saepe? Dolores, aliquid.
            </p>

            <div className="row">
              <div className="col-md-6">
                <h5 className="auct-exp mt-4">+1000</h5>
                <h2 className="mt-3">Auction</h2>
                <p>We tailor each valuation around the client and the collection, kimet asit.</p>
              </div>

              <div className="col-md-6">
                <h5 className="auct-exp mt-4">2 YEARS</h5>
                <h2 className="mt-3">Experience</h2>
                <p>We tailor each valuation around the client and the collection, kimet asit.</p>
              </div>
            </div>

            <button className="btn about-contact-btn mt-5">
              <a className="About-Contact-link" href="/contact.html">
                CONTACT US
              </a>
            </button>
          </div>
        </div>
      </div>

      {/* --------------------------------------------------------- */}

      <div className="container p-4">
        <h2 className="services-main-tittles mt-5 mb-4">
          About <span className="primary-colours">Us</span>
        </h2>

        <div className="row">
          <div className="col-md-6">
            <div className="vision-text">
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste dolore veritatis fugit?
                Asperiores cupiditate ex veritatis consectetur aperiam, est, voluptatum eveniet assumenda
                nihil sunt cum. Quae ex laudantium perspiciatis est soluta quia excepturi dolorum a
                temporibus quo, consequatur, qui veniam placeat debitis exercitationem fuga id hic
                voluptatem? Minus, corporis hic?
              </p>
            </div>

            <div className="vision-second-text d-flex">
              <img src="/assets/images/about/hammer-vision.webp" width="45px" alt="" />
              <h4 className="service-sub-heading pl-5 mt-1">
                <b>Online Bidding</b>
              </h4>
            </div>

            <p className="mt-2">
              The modern world is in a continuous movement and people everywhere are looking for quick,
              safe means of accessing accurate information. Prompt information is vital.
            </p>

            <div className="vision-second-text d-flex">
              <img src="/assets/images/about/company-enterprise.webp" width="45px" alt="" />
              <h4 className="service-sub-heading pl-5 mt-1">
                <b>Corporate Social Responsibility</b>
              </h4>
            </div>

            <p className="mt-2">
              The modern world is in a continuous movement and people everywhere are looking for quick,
              safe means of accessing accurate information. Prompt information is vital.
            </p>
          </div>

          <div className="col-md-6">
            <div className="vision-image">
              <img src="/assets/images/about/Auction-live.webp" alt="" />
            </div>
          </div>
        </div>
      </div>

      {/* -----------------------------------Our Services------------------------------ */}

      <div className="container mt-5">
        <h2 className="services-main-tittle">
          Our <span className="primary-colour">Service</span>
        </h2>

        <div className="row">
          {[1, 2, 3].map((i) => (
            <div className="col-md-4 mt-3" key={i}>
              <div className="our-servicess p-4">
                <img
                  src="/assets/images/about/company-enterprise.webp"
                  className="service-media-img"
                  alt=""
                />
                <div className="service-text">
                  <h3 className="service-tittle mt-3">Valuation for Auction</h3>
                  <p className="text-justify mt-4">
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nihil a vel sit tempore.
                  </p>
                  <hr className="service-line mt-4 mb-4" />
                </div>

                <div className="service-dot-line">
                  <ul className="service-line-un-order-list">
                    <li className="dot-line mt-3">Family Division, Divorce & Auction Remedy</li>
                    <li className="dot-line mt-3">Valuation for the Court Protection</li>
                    <li className="dot-line mt-3">Inventory & Valuation Services for Corporate</li>
                    <li className="dot-line mt-3">Family Division, Divorce & Auction Remedy</li>
                  </ul>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* ------------------------What Can You Expect?----------------------------- */}
      <div className="container mt-5">
        <div className="row">
          <div className="col-md-6">
            <img src="/assets/images/about/overview-bg.png" className="image-fluid" alt="" />
          </div>

          <div className="col-md-6">
            <h2 className="primary-colour">What Can You Expect?</h2>

            <p>
              Voluptate aut blanditiis accusantium officiis expedita dolorem inventore odio reiciendis
              obcaecati quod nisi quae
            </p>

            <div className="row">
              <div className="col-md-6">
                <div className="about-small-sec d-flex justify-content-center w-100">
                  <img src="/assets/images/about/hammer-new-1.png" alt="" />
                </div>
                <strong className="about-small-sec-heading">Real-Time Auction</strong>
              </div>

              <div className="col-md-6">
                <div className="about-small-sec d-flex justify-content-center w-100">
                  <img src="/assets/images/about/Multiple Currency.png" alt="" />
                </div>
                <strong className="about-small-sec-heading">Supports Multiple Currency</strong>
              </div>
            </div>

            <div className="row mt-3">
              <div className="col-md-6">
                <div className="about-small-sec d-flex justify-content-center w-100">
                  <img src="/assets/images/about/Winner-Announcement.png" alt="" />
                </div>
                <strong className="about-small-sec-heading">Winner Announcement</strong>
              </div>

              <div className="col-md-6">
                <div className="about-small-sec d-flex justify-content-center w-100">
                  <img src="/assets/images/about/Supports Multiple Currency.png" alt="" />
                </div>
                <strong className="about-small-sec-heading">Supports Multiple Currency</strong>
              </div>
            </div>

            <div className="row mt-3">
              <div className="col-md-6">
                <div className="about-small-sec d-flex justify-content-center w-100">
                  <img src="/assets/images/about/Show All Bidders History.png" alt="" />
                </div>
                <strong className="about-small-sec-heading">Show All Bidders History</strong>
              </div>

              <div className="col-md-6">
                <div className="about-small-sec d-flex justify-content-center w-100">
                  <img src="/assets/images/about/Add-To-Watchlist.png" alt="" />
                </div>
                <strong className="about-small-sec-heading mt-4">Add To Watchlist</strong>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* ------------------------What we have achieved------------------------------------ */}
      <div
        className="container-fluid mt-5 pr-0 pl-0"
        style={{
          backgroundImage: "url(/assets/images/about/auction-hammr-bg2.jpg)",
          backgroundAttachment: "fixed",
          backgroundPosition: "center",
        }}
      >
        <div className="container-fluid overlay py-4 w-100">
          <h2 className="section-heading text-center my-0 mb-4">
            What <span className="text-brand-color">We’ve </span> Achieved
          </h2>

          <div className="row px-5">
            <div className="col-md-4 d-flex justify-content-center align-items-center flex-column">
              <img src="/assets/images/about/Peace.webp" width="100px" alt="" />
              <span className="counter">+25</span>
              <p className="counter-desc mb-3">Complete Project Per Month</p>
            </div>

            <div className="col-md-4 d-flex justify-content-center align-items-center flex-column">
              <img src="/assets/images/about/engage.webp" width="100px" alt="" />
              <span className="counter">+43</span>
              <p className="counter-desc mb-3">Years Practical Experience</p>
            </div>

            <div className="col-md-4 d-flex justify-content-center align-items-center flex-column">
              <img src="/assets//images/about/training.webp" width="100px" alt="" />
              <span className="counter">+96</span>
              <p className="counter-desc">Awesome Team Members</p>
            </div>
          </div>
        </div>
      </div>

      {/* -----------------------------------Testimonial----------------------------------------- */}
      <div
        className="container-fluid py-4 reviews mt-3 p-0"
        style={{ backgroundImage: "url(/assets/images/pattern-1.jpg)" }}
      >
        <h3 className="testimonial-heading text-center" style={{ fontSize: 48 }}>
          Testimonials
        </h3>

        <div
          id="testimonial4"
          className="carousel slide testimonial4_indicators testimonial4_control_button thumb_scroll_x swipe_x"
          data-ride="carousel"
          data-pause="hover"
          data-interval="5000"
          data-duration="2000"
        >
          <div className="carousel-inner" role="listbox">
            <div className="carousel-item active">
              <div className="testimonial4_slide px-0 px-md-5 mx-5">
                <img
                  src="/assets/images/about/About-user.png"
                  className="rounded-circle mt-4"
                  style={{ width: 100, height: 100 }}
                  alt=""
                />
                <p className="text-white mt-4">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur ab assumenda
                  exercitationem. Nihil, temporibus! Enim officia quos excepturi voluptas, et at tempore ab
                  voluptatibus, sequi, nobis repellat iusto possimus. Non modi molestiae iste eligendi
                  laboriosam atque a fuga iusto quibusdam vitae similique, tempora magnam odio animi
                  excepturi possimus, ab quos.
                </p>
                <h4 className="text-white">Mr x - Director of abc Peace </h4>
              </div>
            </div>

            <div className="carousel-item">
              <div className="testimonial4_slide px-0 px-md-5 mx-5">
                <img
                  src="/assets/images/about/About-user.png"
                  className="rounded-circle mt-4"
                  style={{ width: 100, height: 100 }}
                  alt=""
                />
                <p className="text-white mt-4">
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit. Deserunt, consectetur. Maxime
                  totam perferendis voluptatibus unde neque? Quae a sed aliquid tempora debitis at. Optio iste
                  at ut. Odio obcaecati ratione amet blanditiis quod minus maxime voluptate quia ab eius a
                  dolorem alias vitae quo sunt eligendi officia asperiores, repellendus est.
                </p>
                <h4 className="text-white">Miss safiya - University of Manchester student </h4>
              </div>
            </div>

            <div className="carousel-item">
              <div className="testimonial4_slide px-0 px-md-5 mx-5">
                <img
                  src="/assets/images/about/About-user.png"
                  className="rounded-circle mt-4"
                  style={{ width: 100, height: 100 }}
                  alt=""
                />
                <p className="text-white mt-4">
                  Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nam reprehenderit, quam temporibus
                  earum dignissimos at ea recusandae soluta facere, impedit eius dolor repellendus, ex corporis
                  ratione dicta optio blanditiis vitae omnis cum sapiente sed aut architecto eum? Unde,
                  repellendus corrupti, error accusamus tempora similique omnis magni odio autem deserunt
                  qui.
                </p>
                <h4 className="text-white">saif Khan - Social Prescribing Link Worker </h4>
              </div>
            </div>

            <div className="carousel-item">
              <div className="testimonial4_slide px-0 px-md-5 mx-5">
                <img
                  src="/assets/images/about/About-user.png"
                  className="rounded-circle mt-4"
                  style={{ width: 100, height: 100 }}
                  alt=""
                />
                <p className="text-white mt-4">
                  Lorem ipsum dolor, sit amet consectetur adipisicing elit. Enim tempora facere ea soluta animi
                  porro repellat reiciendis veniam, expedita error, esse odit doloribus, assumenda quidem
                  laudantium impedit nesciunt! Labore cumque aliquam assumenda adipisci veritatis eius, totam
                  voluptatibus porro facere minima quia distinctio in, consectetur, earum repellat modi
                  provident consequuntur sit.
                </p>
                <h4 className="text-white">Lewisham Council Officer </h4>
              </div>
            </div>
          </div>

          <a className="carousel-control-prev" href="#testimonial4" data-slide="prev">
            <span className="carousel-control-prev-icon" />
          </a>
          <a className="carousel-control-next" href="#testimonial4" data-slide="next">
            <span className="carousel-control-next-icon" />
          </a>
        </div>
      </div>

     
    </div>
  );
};

export default AboutUs;
