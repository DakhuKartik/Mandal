import React, { Fragment } from "react";
import { Link } from "react-router-dom";

function Menu(){
      return(
            <Fragment>
                  <header
                        id="header"
                        className="fixed-top d-flex align-items-center"
                  >
                        <div className="container d-flex justify-content-between align-items-center">
                              <div className="logo">
                                    <h1>
                                          <a href="index.html">SoftLand</a>
                                    </h1>
                              </div>

                              <nav id="navbar" className="navbar">
                                    <ul>
                                          <li>
                                                <Link to = "/">Home</Link>
                                          </li>
                                          <li>
                                                <a href="features.html">
                                                      Features
                                                </a>
                                          </li>
                                          <li>
                                                <a href="pricing.html">
                                                      Pricing
                                                </a>
                                          </li>
                                          <li>
                                                <a href="blog.html">Blog</a>
                                          </li>
                                          <li className="dropdown">
                                                <a href="#">
                                                      <span>Drop Down</span>{" "}
                                                      <i className="bi bi-chevron-down"></i>
                                                </a>
                                                <ul>
                                                      <li>
                                                            <a href="#">
                                                                  Drop Down 1
                                                            </a>
                                                      </li>
                                                      <li className="dropdown">
                                                            <a href="#">
                                                                  <span>
                                                                        Deep
                                                                        Drop
                                                                        Down
                                                                  </span>{" "}
                                                                  <i className="bi bi-chevron-right"></i>
                                                            </a>
                                                            <ul>
                                                                  <li>
                                                                        <a href="#">
                                                                              Deep
                                                                              Drop
                                                                              Down
                                                                              1
                                                                        </a>
                                                                  </li>
                                                                  <li>
                                                                        <a href="#">
                                                                              Deep
                                                                              Drop
                                                                              Down
                                                                              2
                                                                        </a>
                                                                  </li>
                                                                  <li>
                                                                        <a href="#">
                                                                              Deep
                                                                              Drop
                                                                              Down
                                                                              3
                                                                        </a>
                                                                  </li>
                                                                  <li>
                                                                        <a href="#">
                                                                              Deep
                                                                              Drop
                                                                              Down
                                                                              4
                                                                        </a>
                                                                  </li>
                                                                  <li>
                                                                        <a href="#">
                                                                              Deep
                                                                              Drop
                                                                              Down
                                                                              5
                                                                        </a>
                                                                  </li>
                                                            </ul>
                                                      </li>
                                                      <li>
                                                            <a href="#">
                                                                  Drop Down 2
                                                            </a>
                                                      </li>
                                                      <li>
                                                            <a href="#">
                                                                  Drop Down 3
                                                            </a>
                                                      </li>
                                                      <li>
                                                            <a href="#">
                                                                  Drop Down 4
                                                            </a>
                                                      </li>
                                                </ul>
                                          </li>
                                          <li>
                                                <Link to ="/contact">Contact</Link>
                                          </li>
                                    </ul>
                                    <i className="bi bi-list mobile-nav-toggle"></i>
                              </nav>
                        </div>
                  </header>

            </Fragment>
      )
}

export default Menu;