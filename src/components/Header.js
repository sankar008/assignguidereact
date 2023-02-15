import React from "react";
import { Link, NavLink } from "react-router-dom";

const Header = () => {
  return (
    <div>
      <header class="main-header">
        <div class="header-upper">
          <div class="outer-container clearfix">
            <div class="pull-left logo-box">
              <div class="logo">
                <a href="index.html">
                  <img src="images/logos.png" alt="" title="" />
                </a>
              </div>
            </div>

            <div class="nav-outer clearfix">
              <div class="mobile-nav-toggler">
                <span class="icon flaticon-menu"></span>
              </div>
              <nav class="main-menu navbar-expand-md">
                <div class="navbar-header">
                  <button
                    class="navbar-toggler"
                    type="button"
                    data-toggle="collapse"
                    data-target="#navbarSupportedContent"
                    aria-controls="navbarSupportedContent"
                    aria-expanded="false"
                    aria-label="Toggle navigation"
                  >
                    <span class="icon-bar"></span>
                    <span class="icon-bar"></span>
                    <span class="icon-bar"></span>
                  </button>
                </div>

                <div
                  class="navbar-collapse collapse clearfix"
                  id="navbarSupportedContent"
                >
                  <ul class="navigation clearfix">
                    <li class="dropdown has-mega-menu">
                      <a href="#">
                        <span>
                          Courses <i class="fa fa-arrow-down"></i>
                        </span>
                      </a>
                      <div class="mega-menu d-none">
                        <div class="upper-box">
                          <div class="page-links-box">
                            <a href="course.html" class="link">
                              <span class="icon flaticon-bullhorn"></span>
                              Marketing
                            </a>
                            <a href="course-2.html" class="link">
                              <span class="icon flaticon-cyclist"></span>
                              Lifestyle
                            </a>
                            <a href="course-3.html" class="link">
                              <span class="icon flaticon-bar-chart"></span>
                              Business
                            </a>
                            <a href="course-4.html" class="link">
                              <span class="icon flaticon-software"></span>
                              Software
                            </a>
                            <a href="course-3.html" class="link">
                              <span class="icon flaticon-atom"></span>Science
                            </a>
                            <a href="course.html" class="link">
                              <span class="icon flaticon-webpage"></span>IT
                              Management
                            </a>
                            <a href="course-2.html" class="link">
                              <span class="icon flaticon-language"></span>
                              Language
                            </a>
                            <a href="course-3.html" class="link">
                              <span class="icon flaticon-team"></span>Human
                              Resources
                            </a>
                            <a href="course-4.html" class="link">
                              <span class="icon flaticon-healthcare"></span>
                              Health Care
                            </a>
                          </div>
                        </div>
                        <div class="lower-box">
                          <h3>Become an Instructor</h3>
                          <div class="text">
                            Top instructors from around the Neque convallis a
                            cras semper auctor. <br /> Libero id faucibus nisl
                            tincidunt egetnvallis{" "}
                          </div>
                          <div class="btn-box">
                            <a href="#" class="theme-btn btn-style-five">
                              Start teaching today
                            </a>
                          </div>
                          <div class="side-icon">
                            <img
                              src="images/resource/mega-menu-icon.png"
                              alt=""
                            />
                          </div>
                        </div>
                      </div>
                    </li>
                    <li class="current dropdown">
                      <NavLink to="/">Home</NavLink>
                    </li>
                    <li class="dropdown">
                      <NavLink to="/about-us">About</NavLink>
                    </li>

                    <li class="dropdown">
                      <Link to="/services">Services </Link>
                    </li>
                    <li>
                      <NavLink to="/blog">Blog</NavLink>
                    </li>
                    {/* <li>
                      <a href="contact.html">Contact</a>
                    </li> */}
                  </ul>
                </div>
              </nav>

              <div class="outer-box clearfix pt-1">
                <ul class="social-box">
                  <div class="btn-box">
                    <Link to="/login" class="theme-btn btn-style-two">
                      <span class="txt">Login</span>
                    </Link>
                  </div>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div class="sticky-header">
          <div class="auto-container clearfix">
            <div class="logo pull-left">
              <a href="index.html" title="">
                <img src="images/logo.png" alt="" title="" />
              </a>
            </div>
            <div class="pull-right">
              <nav class="main-menu"></nav>
              <div class="outer-box clearfix"></div>
            </div>
          </div>
        </div>
        <div class="mobile-menu">
          <div class="menu-backdrop"></div>
          <div class="close-btn">
            <span class="icon flaticon-multiply"></span>
          </div>

          <nav class="menu-box">
            <div class="nav-logo">
              <a href="index.html">
                <img src="images/logo.png" alt="" title="" />
              </a>
            </div>
            <div class="menu-outer"></div>
          </nav>
        </div>
      </header>
    </div>
  );
};

export default Header;
