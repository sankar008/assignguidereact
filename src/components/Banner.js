import React from "react";
import { Typewriter } from "react-simple-typewriter";
const Banner = () => {
  return (
    <div>
      <section class="banner-section">
        <div class="auto-container">
          <div class="pattern-layer-six"></div>
          <div class="pattern-layer-seven"></div>
          <div class="pattern-layer-eight"></div>
          <div class="row clearfix">
            <div class="image-column col-lg-6 col-md-12 col-sm-12">
              <div class="inner-column">
                <div class="pattern-layer-one d-none"></div>
                <div class="pattern-layer-two"></div>
                <div class="pattern-layer-three d-none"></div>
                <div class="pattern-layer-four"></div>
                <div class="pattern-layer-five"></div>
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

                <div class="image">
                  <img src="images/main-slider/woma.png" alt="" />
                </div>
                {/* <div class="image-two">
                  <img src="images/main-slider/image-4.png" alt="" />
                </div> */}
                <div class="image-content d-none">
                  <p>
                    87% of people <br /> learning
                  </p>
                </div>
              </div>
            </div>

            <div class="content-column col-lg-6 col-md-12 col-sm-12">
              <div class="form-column ">
                <div
                  class="inner-columna wow fadeInRight animated"
                  data-wow-delay="0ms"
                  data-wow-duration="1500ms"
                >
                  <div class="color-box"></div>
                  <h3 className="mb-3">Place your order here!</h3>

                  <div class="trial-form">
                    <div className="row">
                      <div className="col-md-6">
                        <div class="form-group">
                          <input
                            type="email"
                            name="email"
                            value=""
                            placeholder="Email"
                            required=""
                          />
                        </div>
                      </div>
                      <div className="col-md-6">
                        <div class="form-group">
                          <input
                            type="text"
                            name="name"
                            value=""
                            placeholder="Subject/Course Code"
                            required=""
                          />
                        </div>
                      </div>
                    </div>
                    <div className="row mt-3 mb-3">
                      <div className="col-md-6">
                        <div class="form-group">
                          <input
                            type="email"
                            name="email"
                            value=""
                            placeholder="Choose Assistant Deadline"
                            required=""
                          />
                        </div>
                      </div>
                      <div className="col-md-6">
                        <div class="form-group">
                          <input
                            type="email"
                            name="email"
                            value=""
                            placeholder="No. Of Pages / Words"
                            required=""
                          />
                        </div>
                      </div>
                    </div>
                    <div class="form-group">
                      <textarea
                        name="message"
                        placeholder="Choose file"
                      ></textarea>
                    </div>

                    <div class="form-group">
                      <button type="submit" class="theme-btn submit-btn">
                        <span class="txt">Send now</span>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Banner;
