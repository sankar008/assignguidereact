import React from "react";
import { Typewriter } from "react-simple-typewriter";
import Banner from "../components/Banner";
import OrderFrom from "../components/OrderFrom";
import Services from "../pages/Services";
const ServicesS = () => {
  return (
    <>
      <div
        className="innerBanner"
        style={{
          backgroundImage: `url(https://png.pngtree.com/thumb_back/fh260/back_our/20190617/ourmid/pngtree-blue-technology-e-commerce-learning-education-business-poster-banner-image_123753.jpg)`,
        }}
      >
        <div className="auto-container">
          <div className="row">
            <div className="col-md-6">
              <h1>
                Get Personalized <br />
                <span className="typingColor">
                  <Typewriter
                    words={[
                      "Lab Reports",
                      "Presentations",
                      "Project Reports",
                      "Live Sessions",
                    ]}
                    loop={100}
                    cursor
                    cursorStyle="|"
                    typeSpeed={70}
                    deleteSpeed={50}
                    delaySpeed={1000}
                    // onLoopDone={handleDone}
                    // onType={handleType}
                  />{" "}
                </span>
                <br />
                available24X7
              </h1>
            </div>
            <div className="col-md-6">
              <OrderFrom />
            </div>
          </div>
        </div>
      </div>
      <section class="courses-section">
        <div
          class="pattern-layer"
          style={{ backgroundImage: `url(images/background/pattern-2.png)` }}
        ></div>
        <div
          class="circle-one paroller"
          data-paroller-factor="-0.20"
          data-paroller-factor-lg="0.20"
          data-paroller-type="foreground"
          data-paroller-direction="horizontal"
        ></div>
        <div
          class="circle-two paroller"
          data-paroller-factor="0.20"
          data-paroller-factor-lg="-0.20"
          data-paroller-type="foreground"
          data-paroller-direction="horizontal"
        ></div>
        <div class="auto-container">
          <div class="sec-title centered">
            <h2>
              You can learn anything, Explore <br /> featured courses
            </h2>
            <div class="text">
              Duis aute irure dolor in reprehenderit in voluptate velit esse
              cillum dolore eu fugiat <br /> nulla pariatur Duis aute irure
              dolor in reprehenderit in
            </div>
          </div>
          <div class="row clearfix">
            <div class="course-block col-lg-4 col-md-6 col-sm-12">
              <div
                class="inner-box wow fadeInLeft"
                data-wow-delay="0ms"
                data-wow-duration="1500ms"
              >
                <div class="image">
                  <a href="course-detail.html">
                    <img src="images/assignment.png" alt="" />
                  </a>
                </div>
                <div class="lower-content px-0">
                  <h4>
                    <a href="course-detail.html">Assignment Help</a>
                  </h4>
                  <div class="uni-namdde">
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                    Praesentium, et similique harum pariatur, assumenda ratione
                    voluptates nam quos id earum quasi ab asperiores eos facere
                    saepe optio perferendis? Fugit, itaque!
                  </div>
                </div>
              </div>
            </div>

            <div class="course-block col-lg-4 col-md-6 col-sm-12">
              <div
                class="inner-box wow fadeInUp"
                data-wow-delay="0ms"
                data-wow-duration="1500ms"
              >
                <div class="image">
                  <a href="course-detail.html">
                    <img src="images/report.png" alt="" />
                  </a>
                </div>
                <div class="lower-content px-0">
                  <h4>
                    <a href="course-detail.html">Lab Report</a>
                  </h4>
                  <div class="uni-namdde">
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                    Praesentium, et similique harum pariatur, assumenda ratione
                    voluptates nam quos id earum quasi ab asperiores eos facere
                    saepe optio perferendis? Fugit, itaque!
                  </div>
                </div>
              </div>
            </div>
            <div class="course-block col-lg-4 col-md-6 col-sm-12">
              <div
                class="inner-box wow fadeInRight"
                data-wow-delay="0ms"
                data-wow-duration="1500ms"
              >
                <div class="image">
                  <a href="course-detail.html">
                    <img src="images/copy-writing.png" alt="" />
                  </a>
                </div>
                <div class="lower-content px-0">
                  <h4>
                    <a href="course-detail.html">Project Report Writing</a>
                  </h4>
                  <div class="uni-namdde">
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                    Praesentium, et similique harum pariatur, assumenda ratione
                    voluptates nam quos id earum quasi ab asperiores eos facere
                    saepe optio perferendis? Fugit, itaque!
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="row clearfix">
            <div class="course-block col-lg-4 col-md-6 col-sm-12">
              <div
                class="inner-box wow fadeInLeft"
                data-wow-delay="0ms"
                data-wow-duration="1500ms"
              >
                <div class="image">
                  <a href="course-detail.html">
                    <img src="images/calculating.png" alt="" />
                  </a>
                </div>
                <div class="lower-content px-0">
                  <h4>
                    <a href="course-detail.html">Math Solver</a>
                  </h4>
                  <div class="uni-namdde">
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                    Praesentium, et similique harum pariatur, assumenda ratione
                    voluptates nam quos id earum quasi ab asperiores eos facere
                    saepe optio perferendis? Fugit, itaque!
                  </div>
                </div>
              </div>
            </div>
            <div class="course-block col-lg-4 col-md-6 col-sm-12">
              <div
                class="inner-box wow fadeInUp"
                data-wow-delay="0ms"
                data-wow-duration="1500ms"
              >
                <div class="image">
                  <a href="course-detail.html">
                    <img src="images/essay.png" alt="" />
                  </a>
                </div>
                <div class="lower-content px-0">
                  <h4>
                    <a href="course-detail.html">Essay Writing</a>
                  </h4>
                  <div class="uni-namdde">
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                    Praesentium, et similique harum pariatur, assumenda ratione
                    voluptates nam quos id earum quasi ab asperiores eos facere
                    saepe optio perferendis? Fugit, itaque!
                  </div>
                </div>
              </div>
            </div>

            <div class="course-block col-lg-4 col-md-6 col-sm-12">
              <div
                class="inner-box wow fadeInRight"
                data-wow-delay="0ms"
                data-wow-duration="1500ms"
              >
                <div class="image">
                  <a href="course-detail.html">
                    <img src="images/live.png" alt="" />
                  </a>
                </div>
                <div class="lower-content px-0">
                  <h4>
                    <a href="course-detail.html">Live Session</a>
                  </h4>
                  <div class="uni-namdde">
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                    Praesentium, et similique harum pariatur, assumenda ratione
                    voluptates nam quos id earum quasi ab asperiores eos facere
                    saepe optio perferendis? Fugit, itaque!
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default ServicesS;
