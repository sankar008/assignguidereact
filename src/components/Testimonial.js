import React from "react";
import OwlCarousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";
const Testimonial = () => {
  return (
    <>
      <section class="testimonial-section">
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
        <div
          class="pattern-layer-two"
          style={{ backgroundImage: `url(images/background/pattern-10.png)` }}
        ></div>
        <div class="auto-container">
          <div class="inner-container">
            <div
              class="pattern-layer"
              style={{
                backgroundImage: `url(images/background/pattern-9.png)`,
              }}
            ></div>

            <div class="sec-title centered">
              <div class="title">Testimonial</div>
              <h2>Words From Customers</h2>
              <div class="text">
                Duis aute irure dolor in reprehenderit in voluptate velit esse
                cillum dolore eu <br /> fugiat nulla pariatur Duis aute irure
                dolor in reprehenderit in
              </div>
            </div>
            <OwlCarousel
              className="testimonial-carousel"
              loop
              margin={10}
              autoplay={true}
              items={2}
              responsiveClass={true}
              autoplaySpeed={5000}
            >
              <div class="item">
                <div class="testimonial-block">
                  <div class="inner-box">
                    <div class="text">
                      We turn your experts into thought leaders by getting their
                      voices heard in the market and by building credibility and
                      brand advocates amongst industry influencers from the
                      media, analyst community
                    </div>
                    <div class="author-info">
                      <div class="info-inner">
                        <div class="author-image">
                          <img src="images/resource/author-1.jpg" alt="" />
                        </div>
                        <h6>Mahfuz Riad</h6>
                        <div class="designation">Online Teacher</div>
                      </div>
                    </div>
                    <div class="quote-icon flaticon-quote-2"></div>
                  </div>
                </div>
              </div>
              <div class="item">
                <div class="testimonial-block">
                  <div class="inner-box">
                    <div class="text">
                      We turn your experts into thought leaders by getting their
                      voices heard in the market and by building credibility and
                      brand advocates amongst industry influencers from the
                      media, analyst community
                    </div>
                    <div class="author-info">
                      <div class="info-inner">
                        <div class="author-image">
                          <img src="images/resource/author-1.jpg" alt="" />
                        </div>
                        <h6>Mahfuz Riad</h6>
                        <div class="designation">Online Teacher</div>
                      </div>
                    </div>
                    <div class="quote-icon flaticon-quote-2"></div>
                  </div>
                </div>
              </div>
              <div class="item">
                <div class="testimonial-block">
                  <div class="inner-box">
                    <div class="text">
                      We turn your experts into thought leaders by getting their
                      voices heard in the market and by building credibility and
                      brand advocates amongst industry influencers from the
                      media, analyst community
                    </div>
                    <div class="author-info">
                      <div class="info-inner">
                        <div class="author-image">
                          <img src="images/resource/author-1.jpg" alt="" />
                        </div>
                        <h6>Mahfuz Riad</h6>
                        <div class="designation">Online Teacher</div>
                      </div>
                    </div>
                    <div class="quote-icon flaticon-quote-2"></div>
                  </div>
                </div>
              </div>
              <div class="item">
                <div class="testimonial-block">
                  <div class="inner-box">
                    <div class="text">
                      We turn your experts into thought leaders by getting their
                      voices heard in the market and by building credibility and
                      brand advocates amongst industry influencers from the
                      media, analyst community
                    </div>
                    <div class="author-info">
                      <div class="info-inner">
                        <div class="author-image">
                          <img src="images/resource/author-1.jpg" alt="" />
                        </div>
                        <h6>Mahfuz Riad</h6>
                        <div class="designation">Online Teacher</div>
                      </div>
                    </div>
                    <div class="quote-icon flaticon-quote-2"></div>
                  </div>
                </div>
              </div>
              <div class="item">
                <div class="testimonial-block">
                  <div class="inner-box">
                    <div class="text">
                      We turn your experts into thought leaders by getting their
                      voices heard in the market and by building credibility and
                      brand advocates amongst industry influencers from the
                      media, analyst community
                    </div>
                    <div class="author-info">
                      <div class="info-inner">
                        <div class="author-image">
                          <img src="images/resource/author-1.jpg" alt="" />
                        </div>
                        <h6>Mahfuz Riad</h6>
                        <div class="designation">Online Teacher</div>
                      </div>
                    </div>
                    <div class="quote-icon flaticon-quote-2"></div>
                  </div>
                </div>
              </div>
              <div class="item">
                <div class="testimonial-block">
                  <div class="inner-box">
                    <div class="text">
                      We turn your experts into thought leaders by getting their
                      voices heard in the market and by building credibility and
                      brand advocates amongst industry influencers from the
                      media, analyst community
                    </div>
                    <div class="author-info">
                      <div class="info-inner">
                        <div class="author-image">
                          <img src="images/resource/author-1.jpg" alt="" />
                        </div>
                        <h6>Mahfuz Riad</h6>
                        <div class="designation">Online Teacher</div>
                      </div>
                    </div>
                    <div class="quote-icon flaticon-quote-2"></div>
                  </div>
                </div>
              </div>
            </OwlCarousel>
          </div>
        </div>
      </section>
      ;
    </>
  );
};

export default Testimonial;
