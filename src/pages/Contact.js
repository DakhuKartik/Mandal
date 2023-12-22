import React, { Fragment, useRef } from "react";
import Menu from "./Menu";
import emailjs from '@emailjs/browser';
import Swiper from 'swiper';
import AOS from 'aos';
import 'aos/dist/aos.css'; // If needed, import styles for AOS
import 'swiper/swiper-bundle.css';

function Contact() {


      "use strict";

      /**
       * Easy selector helper function
       */
      const select = (el, all = false) => {
      el = el.trim()
      if (all) {
            return [...document.querySelectorAll(el)]
      } else {
            return document.querySelector(el)
      }
      }

      /**
       * Easy event listener function
       */
      const on = (type, el, listener, all = false) => {
      let selectEl = select(el, all)
      if (selectEl) {
            if (all) {
            selectEl.forEach(e => e.addEventListener(type, listener))
            } else {
            selectEl.addEventListener(type, listener)
            }
      }
      }

      /**
       * Easy on scroll event listener 
       */
      const onscroll = (el, listener) => {
      el.addEventListener('scroll', listener)
      }

      /**
       * Toggle .header-scrolled class to #header when page is scrolled
       */
      let selectHeader = select('#header')
      if (selectHeader) {
      const headerScrolled = () => {
            if (window.scrollY > 100) {
            selectHeader.classList.add('header-scrolled')
            } else {
            selectHeader.classList.remove('header-scrolled')
            }
      }
      window.addEventListener('load', headerScrolled)
      onscroll(document, headerScrolled)
      }

      /**
       * Mobile nav toggle
       */
      on('click', '.mobile-nav-toggle', function(e) {
      select('#navbar').classList.toggle('navbar-mobile')
      this.classList.toggle('bi-list')
      this.classList.toggle('bi-x')
      })

      /**
       * Back to top button
       */
      let backtotop = select('.back-to-top')
      if (backtotop) {
      const toggleBacktotop = () => {
            if (window.scrollY > 100) {
            backtotop.classList.add('active')
            } else {
            backtotop.classList.remove('active')
            }
      }
      window.addEventListener('load', toggleBacktotop)
      onscroll(document, toggleBacktotop)
      }

      /**
       * Mobile nav dropdowns activate
       */
      on('click', '.navbar .dropdown > a', function(e) {
      if (select('#navbar').classList.contains('navbar-mobile')) {
            e.preventDefault()
            this.nextElementSibling.classList.toggle('dropdown-active')
      }
      }, true)

      /**
       * Testimonials slider
       */
      new Swiper('.testimonials-slider', {
      speed: 600,
      loop: true,
      autoplay: {
            delay: 5000,
            disableOnInteraction: false
      },
      slidesPerView: 'auto',
      pagination: {
            el: '.swiper-pagination',
            type: 'bullets',
            clickable: true
      }
      });

      /**
       * Animation on scroll
       */
      window.addEventListener('load', () => {
      AOS.init({
            duration: 1000,
            easing: 'ease-in-out',
            once: true,
            mirror: false
      })
      });


      const form = useRef();

      const sendEmail = (e) => {
      e.preventDefault();

      emailjs.sendForm('service_4g03082', 'template_d6smu9g', form.current, '-pUHT2GloqaqqBZEa')
            .then((result) => {
            console.log(result.text);
            console.log("message sent");
            }, (error) => {
            console.log(error.text);
            console.log("unsuccesfull");
            });
      };

      return (
            <Fragment>
                  <Menu/>
                  <main id="main">
                        <section className="hero-section inner-page">
                              <div className="wave">
                                    <svg
                                          width="100%"
                                          height="355px"
                                          viewBox="0 0 1920 355"
                                          version="1.1"
                                    >
                                          <g
                                                id="Page-1"
                                                stroke="none"
                                                stroke-width="1"
                                                fill="none"
                                                fill-rule="evenodd"
                                          >
                                                <g
                                                      id="Apple-TV"
                                                      transform="translate(0.000000, -402.000000)"
                                                      fill="#FFFFFF"
                                                >
                                                      <path
                                                            d="M0,439.134243 C175.04074,464.89273 327.944386,477.771974 458.710937,477.771974 C654.860765,477.771974 870.645295,442.632362 1205.9828,410.192501 C1429.54114,388.565926 1667.54687,411.092417 1920,477.771974 L1920,667 L1017.15166,667 L0,667 L0,439.134243 Z"
                                                            id="Path"
                                                      ></path>
                                                </g>
                                          </g>
                                    </svg>
                              </div>

                              <div className="container">
                                    <div className="row align-items-center">
                                          <div className="col-12">
                                                <div className="row justify-content-center">
                                                      <div className="col-md-7 text-center hero-text">
                                                            <h1
                                                                  data-aos="fade-up"
                                                                  data-aos-delay=""
                                                            >
                                                                  Get in touch
                                                            </h1>
                                                            <p
                                                                  className="mb-5"
                                                                  data-aos="fade-up"
                                                                  data-aos-delay="100"
                                                            >
                                                                  Lorem ipsum
                                                                  dolor sit
                                                                  amet,
                                                                  consectetur
                                                                  adipisicing
                                                                  elit.
                                                            </p>
                                                      </div>
                                                </div>
                                          </div>
                                    </div>
                              </div>
                        </section>

                        <section className="section">
                              <div className="container">
                                    <div className="row mb-5 align-items-end">
                                          <div
                                                className="col-md-6"
                                                data-aos="fade-up"
                                          >
                                                <h2>Contact Form</h2>
                                                <p className="mb-0">
                                                      Lorem ipsum dolor sit amet
                                                      consectetur adipisicing
                                                      elit. Quisquam
                                                      necessitatibus incidunt ut
                                                      officiis explicabo
                                                      inventore.
                                                </p>
                                          </div>
                                    </div>

                                    <div className="row">
                                          <div
                                                className="col-md-4 ms-auto order-2"
                                                data-aos="fade-up"
                                          >
                                                <ul className="list-unstyled">
                                                      <li className="mb-3">
                                                            <strong className="d-block mb-1">
                                                                  Address
                                                            </strong>
                                                            <span>
                                                                  203 Fake St.
                                                                  Mountain View,
                                                                  San Francisco,
                                                                  California,
                                                                  USA
                                                            </span>
                                                      </li>
                                                      <li className="mb-3">
                                                            <strong className="d-block mb-1">
                                                                  Phone
                                                            </strong>
                                                            <span>
                                                                  +1 232 3235
                                                                  324
                                                            </span>
                                                      </li>
                                                      <li className="mb-3">
                                                            <strong className="d-block mb-1">
                                                                  Email
                                                            </strong>
                                                            <span>
                                                                  youremail@domain.com
                                                            </span>
                                                      </li>
                                                </ul>
                                          </div>

                                          <div
                                                className="col-md-6 mb-5 mb-md-0"
                                                data-aos="fade-up"
                                          >
                                                <form
                                                      ref={form} onsubmit = {sendEmail}
                                                      action="forms/contact.php"
                                                      method="post"
                                                      role="form"
                                                      className="php-email-form"
                                                >
                                                      <div className="row">
                                                            <div className="col-md-6 form-group">
                                                                  <label for="name">
                                                                        Name
                                                                  </label>
                                                                  <input
                                                                        type="text"
                                                                        name="name"
                                                                        className="form-control"
                                                                        id="name"
                                                                        required
                                                                  />
                                                            </div>
                                                            <div className="col-md-6 form-group mt-3 mt-md-0">
                                                                  <label for="name">
                                                                        Email
                                                                  </label>
                                                                  <input
                                                                        type="email"
                                                                        className="form-control"
                                                                        name="email"
                                                                        id="email"
                                                                        required
                                                                  />
                                                            </div>
                                                            <div className="col-md-12 form-group mt-3">
                                                                  <label for="name">
                                                                        Subject
                                                                  </label>
                                                                  <input
                                                                        type="text"
                                                                        className="form-control"
                                                                        name="subject"
                                                                        id="subject"
                                                                        required
                                                                  />
                                                            </div>
                                                            <div className="col-md-12 form-group mt-3">
                                                                  <label for="name">
                                                                        Message
                                                                  </label>
                                                                  <textarea
                                                                        className="form-control"
                                                                        name="message"
                                                                        required
                                                                  ></textarea>
                                                            </div>

                                                            <div className="col-md-12 mb-3">
                                                                  <div className="loading">
                                                                        Loading
                                                                  </div>
                                                                  <div className="error-message"></div>
                                                                  <div className="sent-message">
                                                                        Your
                                                                        message
                                                                        has been
                                                                        sent.
                                                                        Thank
                                                                        you!
                                                                  </div>
                                                            </div>

                                                            <div className="col-md-6 form-group">
                                                                  <input
                                                                        type="submit"
                                                                        className="btn btn-primary d-block w-100"
                                                                        value="Send"
                                                                  />
                                                            </div>
                                                      </div>
                                                </form>
                                          </div>
                                    </div>
                              </div>
                        </section>

                        <section className="section border-top border-bottom">
                              <div className="container">
                                    <div className="row justify-content-center text-center mb-5">
                                          <div className="col-md-4">
                                                <h2 className="section-heading">
                                                      Review From Our Users
                                                </h2>
                                          </div>
                                    </div>
                                    <div className="row justify-content-center text-center">
                                          <div className="col-md-7">
                                                <div
                                                      className="testimonials-slider swiper"
                                                      data-aos="fade-up"
                                                      data-aos-delay="100"
                                                >
                                                      <div className="swiper-wrapper">
                                                            <div className="swiper-slide">
                                                                  <div className="review text-center">
                                                                        <p className="stars">
                                                                              <span className="bi bi-star-fill"></span>
                                                                              <span className="bi bi-star-fill"></span>
                                                                              <span className="bi bi-star-fill"></span>
                                                                              <span className="bi bi-star-fill"></span>
                                                                              <span className="bi bi-star-fill muted"></span>
                                                                        </p>
                                                                        <h3>
                                                                              Excellent
                                                                              App!
                                                                        </h3>
                                                                        <blockquote>
                                                                              <p>
                                                                                    Lorem
                                                                                    ipsum
                                                                                    dolor
                                                                                    sit
                                                                                    amet,
                                                                                    consectetur
                                                                                    adipisicing
                                                                                    elit.
                                                                                    Eius
                                                                                    ea
                                                                                    delectus
                                                                                    pariatur,
                                                                                    numquam
                                                                                    aperiam
                                                                                    dolore
                                                                                    nam
                                                                                    optio
                                                                                    dolorem
                                                                                    facilis
                                                                                    itaque
                                                                                    voluptatum
                                                                                    recusandae
                                                                                    deleniti
                                                                                    minus
                                                                                    animi,
                                                                                    provident
                                                                                    voluptates
                                                                                    consectetur
                                                                                    maiores
                                                                                    quos.
                                                                              </p>
                                                                        </blockquote>

                                                                        <p className="review-user">
                                                                              <img
                                                                                    src="assets/img/person_1.jpg"
                                                                                    alt="Image"
                                                                                    className="img-fluid rounded-circle mb-3"
                                                                              />
                                                                              <span className="d-block">
                                                                                    <span className="text-black">
                                                                                          Jean
                                                                                          Doe
                                                                                    </span>
                                                                                    ,
                                                                                    &mdash;
                                                                                    App
                                                                                    User
                                                                              </span>
                                                                        </p>
                                                                  </div>
                                                            </div>

                                                            <div className="swiper-slide">
                                                                  <div className="review text-center">
                                                                        <p className="stars">
                                                                              <span className="bi bi-star-fill"></span>
                                                                              <span className="bi bi-star-fill"></span>
                                                                              <span className="bi bi-star-fill"></span>
                                                                              <span className="bi bi-star-fill"></span>
                                                                              <span className="bi bi-star-fill muted"></span>
                                                                        </p>
                                                                        <h3>
                                                                              This
                                                                              App
                                                                              is
                                                                              easy
                                                                              to
                                                                              use!
                                                                        </h3>
                                                                        <blockquote>
                                                                              <p>
                                                                                    Lorem
                                                                                    ipsum
                                                                                    dolor
                                                                                    sit
                                                                                    amet,
                                                                                    consectetur
                                                                                    adipisicing
                                                                                    elit.
                                                                                    Eius
                                                                                    ea
                                                                                    delectus
                                                                                    pariatur,
                                                                                    numquam
                                                                                    aperiam
                                                                                    dolore
                                                                                    nam
                                                                                    optio
                                                                                    dolorem
                                                                                    facilis
                                                                                    itaque
                                                                                    voluptatum
                                                                                    recusandae
                                                                                    deleniti
                                                                                    minus
                                                                                    animi,
                                                                                    provident
                                                                                    voluptates
                                                                                    consectetur
                                                                                    maiores
                                                                                    quos.
                                                                              </p>
                                                                        </blockquote>

                                                                        <p className="review-user">
                                                                              <img
                                                                                    src="assets/img/person_2.jpg"
                                                                                    alt="Image"
                                                                                    className="img-fluid rounded-circle mb-3"
                                                                              />
                                                                              <span className="d-block">
                                                                                    <span className="text-black">
                                                                                          Johan
                                                                                          Smith
                                                                                    </span>
                                                                                    ,
                                                                                    &mdash;
                                                                                    App
                                                                                    User
                                                                              </span>
                                                                        </p>
                                                                  </div>
                                                            </div>

                                                            <div className="swiper-slide">
                                                                  <div className="review text-center">
                                                                        <p className="stars">
                                                                              <span className="bi bi-star-fill"></span>
                                                                              <span className="bi bi-star-fill"></span>
                                                                              <span className="bi bi-star-fill"></span>
                                                                              <span className="bi bi-star-fill"></span>
                                                                              <span className="bi bi-star-fill muted"></span>
                                                                        </p>
                                                                        <h3>
                                                                              Awesome
                                                                              functionality!
                                                                        </h3>
                                                                        <blockquote>
                                                                              <p>
                                                                                    Lorem
                                                                                    ipsum
                                                                                    dolor
                                                                                    sit
                                                                                    amet,
                                                                                    consectetur
                                                                                    adipisicing
                                                                                    elit.
                                                                                    Eius
                                                                                    ea
                                                                                    delectus
                                                                                    pariatur,
                                                                                    numquam
                                                                                    aperiam
                                                                                    dolore
                                                                                    nam
                                                                                    optio
                                                                                    dolorem
                                                                                    facilis
                                                                                    itaque
                                                                                    voluptatum
                                                                                    recusandae
                                                                                    deleniti
                                                                                    minus
                                                                                    animi,
                                                                                    provident
                                                                                    voluptates
                                                                                    consectetur
                                                                                    maiores
                                                                                    quos.
                                                                              </p>
                                                                        </blockquote>

                                                                        <p className="review-user">
                                                                              <img
                                                                                    src="assets/img/person_3.jpg"
                                                                                    alt="Image"
                                                                                    className="img-fluid rounded-circle mb-3"
                                                                              />
                                                                              <span className="d-block">
                                                                                    <span className="text-black">
                                                                                          Jean
                                                                                          Thunberg
                                                                                    </span>
                                                                                    ,
                                                                                    &mdash;
                                                                                    App
                                                                                    User
                                                                              </span>
                                                                        </p>
                                                                  </div>
                                                            </div>
                                                      </div>
                                                      <div className="swiper-pagination"></div>
                                                </div>
                                          </div>
                                    </div>
                              </div>
                        </section>

                        <section className="section cta-section">
                              <div className="container">
                                    <div className="row align-items-center">
                                          <div className="col-md-6 me-auto text-center text-md-start mb-5 mb-md-0">
                                                <h2>
                                                      Starts Publishing Your
                                                      Apps
                                                </h2>
                                          </div>
                                          <div className="col-md-5 text-center text-md-end">
                                                <p>
                                                      <a
                                                            href="#"
                                                            className="btn d-inline-flex align-items-center"
                                                      >
                                                            <i className="bx bxl-apple"></i>
                                                            <span>
                                                                  App store
                                                            </span>
                                                      </a>{" "}
                                                      <a
                                                            href="#"
                                                            className="btn d-inline-flex align-items-center"
                                                      >
                                                            <i className="bx bxl-play-store"></i>
                                                            <span>
                                                                  Google play
                                                            </span>
                                                      </a>
                                                </p>
                                          </div>
                                    </div>
                              </div>
                        </section>
                  </main>

                  <footer className="footer" role="contentinfo">
                        <div className="container">
                              <div className="row">
                                    <div className="col-md-4 mb-4 mb-md-0">
                                          <h3>About SoftLand</h3>
                                          <p>
                                                Lorem ipsum dolor sit amet,
                                                consectetur adipisicing elit.
                                                Eius ea delectus pariatur,
                                                numquam aperiam dolore nam optio
                                                dolorem facilis itaque
                                                voluptatum recusandae deleniti
                                                minus animi.
                                          </p>
                                          <p className="social">
                                                <a href="#">
                                                      <span className="bi bi-twitter"></span>
                                                </a>
                                                <a href="#">
                                                      <span className="bi bi-facebook"></span>
                                                </a>
                                                <a href="#">
                                                      <span className="bi bi-instagram"></span>
                                                </a>
                                                <a href="#">
                                                      <span className="bi bi-linkedin"></span>
                                                </a>
                                          </p>
                                    </div>
                                    <div className="col-md-7 ms-auto">
                                          <div className="row site-section pt-0">
                                                <div className="col-md-4 mb-4 mb-md-0">
                                                      <h3>Navigation</h3>
                                                      <ul className="list-unstyled">
                                                            <li>
                                                                  <a href="#">
                                                                        Pricing
                                                                  </a>
                                                            </li>
                                                            <li>
                                                                  <a href="#">
                                                                        Features
                                                                  </a>
                                                            </li>
                                                            <li>
                                                                  <a href="#">
                                                                        Blog
                                                                  </a>
                                                            </li>
                                                            <li>
                                                                  <a href="#">
                                                                        Contact
                                                                  </a>
                                                            </li>
                                                      </ul>
                                                </div>
                                                <div className="col-md-4 mb-4 mb-md-0">
                                                      <h3>Services</h3>
                                                      <ul className="list-unstyled">
                                                            <li>
                                                                  <a href="#">
                                                                        Team
                                                                  </a>
                                                            </li>
                                                            <li>
                                                                  <a href="#">
                                                                        Collaboration
                                                                  </a>
                                                            </li>
                                                            <li>
                                                                  <a href="#">
                                                                        Todos
                                                                  </a>
                                                            </li>
                                                            <li>
                                                                  <a href="#">
                                                                        Events
                                                                  </a>
                                                            </li>
                                                      </ul>
                                                </div>
                                                <div className="col-md-4 mb-4 mb-md-0">
                                                      <h3>Downloads</h3>
                                                      <ul className="list-unstyled">
                                                            <li>
                                                                  <a href="#">
                                                                        Get from
                                                                        the App
                                                                        Store
                                                                  </a>
                                                            </li>
                                                            <li>
                                                                  <a href="#">
                                                                        Get from
                                                                        the Play
                                                                        Store
                                                                  </a>
                                                            </li>
                                                      </ul>
                                                </div>
                                          </div>
                                    </div>
                              </div>

                              <div className="row justify-content-center text-center">
                                    <div className="col-md-7">
                                          <p className="copyright">
                                                &copy; Copyright SoftLand. All
                                                Rights Reserved
                                          </p>
                                          <div className="credits">
                                                Designed by{" "}
                                                <a href="https://bootstrapmade.com/">
                                                      BootstrapMade
                                                </a>
                                          </div>
                                    </div>
                              </div>
                        </div>
                  </footer>

                  <a
                        href="#"
                        className="back-to-top d-flex align-items-center justify-content-center"
                  >
                        <i className="bi bi-arrow-up-short"></i>
                  </a>

                  <script src="assets/vendor/aos/aos.js"></script>
                  <script src="assets/vendor/bootstrap/js/bootstrap.bundle.min.js"></script>
                  <script src="assets/vendor/swiper/swiper-bundle.min.js"></script>
                  <script src="assets/vendor/php-email-form/validate.js"></script>

                  <script src="assets/js/main.js"></script>
            </Fragment>
      );
}

export default Contact;
