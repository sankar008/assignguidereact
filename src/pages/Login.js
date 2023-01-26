import React from "react";
import { Link } from "react-router-dom";

const Login = () => {
  return (
    <>
      <div className="loginPage">
        <div className="container">
          <div className="row">
            <div className="col-md-6">
              <section class="feature-section-three">
                <div class="auto-containers">
                  <div class="rows clearfix">
                    <div class="blocks-column">
                      <div class="inner-column">
                        <div class="row clearfix">
                          <div class="feature-block-five col-lg-5 col-md-6 col-sm-12">
                            <div class="inner-box">
                              <a
                                href="blog-detail.html"
                                class="overlay-box"
                              ></a>
                              <div class="icon flaticon-teaching"></div>
                              <h4>Full Day Sessions</h4>
                            </div>
                          </div>

                          <div class="feature-block-five col-lg-5 col-md-6 col-sm-12">
                            <div class="inner-box">
                              <a
                                href="blog-detail.html"
                                class="overlay-box"
                              ></a>
                              <div class="icon flaticon-graduation-cap"></div>
                              <h4>Car benefits</h4>
                            </div>
                          </div>
                        </div>
                        <div class="row clearfix">
                          <div class="feature-block-five col-lg-5 col-md-6 col-sm-12">
                            <div class="inner-box">
                              <a
                                href="blog-detail.html"
                                class="overlay-box"
                              ></a>
                              <div class="icon flaticon-bullhorn"></div>
                              <h4>Music Area</h4>
                            </div>
                          </div>

                          <div class="feature-block-five col-lg-5 col-md-6 col-sm-12">
                            <div class="inner-box">
                              <a
                                href="blog-detail.html"
                                class="overlay-box"
                              ></a>
                              <div class="icon flaticon-padlock-1"></div>
                              <h4>Lifetime Access</h4>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </section>
            </div>
            <div className="col-md-6">
              <div className="loginBox">
                <h1>Login</h1>
                <div class="form-group">
                  <input
                    type="email"
                    name="email"
                    placeholder="Email"
                    required=""
                  />
                </div>
                <div class="form-group">
                  <input
                    type="password"
                    name="password"
                    placeholder="Password"
                    required=""
                  />
                </div>
                <div class="btn-box">
                  <div class="theme-btn btn-style-two">
                    <span class="txt">Login</span>
                  </div>
                </div>
                <p>
                  <Link className="text-danger" to="/login">
                    Forgot password
                  </Link>
                </p>
                <p>
                  Don’t have an account? <Link to="/signup">Sign Up</Link>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;
