import React from "react";
import OrderFrom from "../components/OrderFrom";
import { Typewriter } from "react-simple-typewriter";
import OwlCarousel from "react-owl-carousel";
const Blog = () => {
  return (
    <>
      <div
        className="innerBanner"
        style={{
          backgroundImage: `url(https://theuniversalitservices.com/wp-content/uploads/2022/01/Blog-Page-Banner.jpg)`,
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
      <div class="sidebar-page-container">
        <div class="auto-container">
          <div class="row clearfix">
            <div class="content-side border_right_blog col-lg-9 col-md-12 col-sm-12">
              <div class="row">
                <h2 className="blogheadding">Tutoritan Blog</h2>
                <div class="col-lg-7">
                  <div class="blog-classic">
                    <div class="news-block-two">
                      <div class="inner-box">
                        <div class="image">
                          <a href="blog-detail.html">
                            <img src="images/resource/news-15.jpg" alt="" />
                          </a>
                        </div>
                        <div class="lower-content">
                          <ul class="post-info">
                            <li>
                              <a href="blog-detail.html">
                                <span class="icon fa fa-user"></span>Admin
                              </a>
                            </li>
                            <li>
                              <a href="blog-detail.html">
                                <span class="icon fa fa-calendar"></span>12 Feb
                                2023
                              </a>
                            </li>
                            <li>
                              <a href="blog-detail.html">
                                <span class="icon fa fa-bookmark-o"></span>
                                Education, teach , Course
                              </a>
                            </li>
                          </ul>
                          <h2 class="fa-2x">
                            <a href="blog-detail.html">
                              Interior Design Principles and Elements
                            </a>
                          </h2>
                          <div class="text">
                            Overview Interior Design Principles and Elements,
                            the best course for you to gain in-depth knowledge
                            of this topic. Experts and…
                          </div>
                          <a href="blog-detail.html" class="learn-more">
                            Learn More{" "}
                            <span class="icon flaticon-right-arrow-1"></span>
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="col-lg-5 sidebar">
                  <div class="sidebar-widget innerSidebar popular-posts">
                    <div class="widget-content">
                      <article class="post">
                        <figure class="post-thumb">
                          <img src="images/resource/post-thumb-3.jpg" alt="" />
                          <a href="blog-detail.html" class="overlay-box">
                            <span class="icon fa fa-link"></span>
                          </a>
                        </figure>
                        <div class="text">
                          <a href="blog-detail.html">
                            Is Baking a Good career? 15 Reasons{" "}
                          </a>
                        </div>
                        <div class="post-info">Admin, 10 Feb 2023</div>
                      </article>
                      <article class="post">
                        <figure class="post-thumb">
                          <img src="images/resource/post-thumb-4.jpg" alt="" />
                          <a href="blog-detail.html" class="overlay-box">
                            <span class="icon fa fa-link"></span>
                          </a>
                        </figure>
                        <div class="text">
                          <a href="blog-detail.html">
                            Is Baking a Good career? 15 Reasons{" "}
                          </a>
                        </div>
                        <div class="post-info">Admin, 10 Feb 2023</div>
                      </article>
                      <article class="post">
                        <figure class="post-thumb">
                          <img src="images/resource/post-thumb-5.jpg" alt="" />
                          <a href="blog-detail.html" class="overlay-box">
                            <span class="icon fa fa-link"></span>
                          </a>
                        </figure>
                        <div class="text">
                          <a href="blog-detail.html">
                            Is Baking a Good career? 15 Reasons{" "}
                          </a>
                        </div>
                        <div class="post-info">Admin, 10 Feb 2023</div>
                      </article>
                      <article class="post">
                        <figure class="post-thumb">
                          <img src="images/resource/post-thumb-4.jpg" alt="" />
                          <a href="blog-detail.html" class="overlay-box">
                            <span class="icon fa fa-link"></span>
                          </a>
                        </figure>
                        <div class="text">
                          <a href="blog-detail.html">
                            Is Baking a Good career? 15 Reasons{" "}
                          </a>
                        </div>
                        <div class="post-info">Admin, 10 Feb 2023</div>
                      </article>
                    </div>
                  </div>
                </div>
              </div>
              <div class="carousal">
                <h2 className="blogheadding">Tutoritan Categories</h2>
                <OwlCarousel
                  className="testimonial-carousel"
                  loop
                  margin={10}
                  autoplay={true}
                  items={5}
                  dots={false}
                  responsiveClass={true}
                  autoplaySpeed={5000}
                >
                  <div class="item">
                    <div class="blog-classic mt-0">
                      <div class="news-block-two">
                        <div class="inner-box">
                          <div class="image">
                            <a href="blog-detail.html">
                              <img src="images/resource/news-15.jpg" alt="" />
                            </a>
                          </div>
                          <div class="lower-content p-2">
                            <h2 class="fa">
                              <a href="blog-detail.html">
                                Interior Design Principles and Elements
                              </a>
                            </h2>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class="item">
                    <div class="blog-classic mt-0">
                      <div class="news-block-two">
                        <div class="inner-box">
                          <div class="image">
                            <a href="blog-detail.html">
                              <img src="images/resource/news-15.jpg" alt="" />
                            </a>
                          </div>
                          <div class="lower-content p-2">
                            <h2 class="fa">
                              <a href="blog-detail.html">
                                Interior Design Principles and Elements
                              </a>
                            </h2>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class="item">
                    <div class="blog-classic mt-0">
                      <div class="news-block-two">
                        <div class="inner-box">
                          <div class="image">
                            <a href="blog-detail.html">
                              <img src="images/resource/news-15.jpg" alt="" />
                            </a>
                          </div>
                          <div class="lower-content p-2">
                            <h2 class="fa">
                              <a href="blog-detail.html">
                                Interior Design Principles and Elements
                              </a>
                            </h2>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class="item">
                    <div class="blog-classic mt-0">
                      <div class="news-block-two">
                        <div class="inner-box">
                          <div class="image">
                            <a href="blog-detail.html">
                              <img src="images/resource/news-15.jpg" alt="" />
                            </a>
                          </div>
                          <div class="lower-content p-2">
                            <h2 class="fa">
                              <a href="blog-detail.html">
                                Interior Design Principles and Elements
                              </a>
                            </h2>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class="item">
                    <div class="blog-classic mt-0">
                      <div class="news-block-two">
                        <div class="inner-box">
                          <div class="image">
                            <a href="blog-detail.html">
                              <img src="images/resource/news-15.jpg" alt="" />
                            </a>
                          </div>
                          <div class="lower-content p-2">
                            <h2 class="fa">
                              <a href="blog-detail.html">
                                Interior Design Principles and Elements
                              </a>
                            </h2>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class="item">
                    <div class="blog-classic mt-0">
                      <div class="news-block-two">
                        <div class="inner-box">
                          <div class="image">
                            <a href="blog-detail.html">
                              <img src="images/resource/news-15.jpg" alt="" />
                            </a>
                          </div>
                          <div class="lower-content p-2">
                            <h2 class="fa">
                              <a href="blog-detail.html">
                                Interior Design Principles and Elements
                              </a>
                            </h2>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </OwlCarousel>
              </div>
              <div class="row">
                <div class="col-lg-6">
                  <div class="blog-classic mt-0">
                    <div class="news-block-two">
                      <div class="inner-box">
                        <div class="image">
                          <a href="blog-detail.html">
                            <img src="images/resource/news-15.jpg" alt="" />
                          </a>
                        </div>
                        <div class="lower-content">
                          <ul class="post-info">
                            <li>
                              <a href="blog-detail.html">
                                <span class="icon fa fa-user"></span>Admin
                              </a>
                            </li>
                            <li>
                              <a href="blog-detail.html">
                                <span class="icon fa fa-calendar"></span>12 Feb
                                2023
                              </a>
                            </li>
                            <li>
                              <a href="blog-detail.html">
                                <span class="icon fa fa-bookmark-o"></span>
                                Education, teach , Course
                              </a>
                            </li>
                          </ul>
                          <h2 class="fa-2x">
                            <a href="blog-detail.html">
                              Interior Design Principles and Elements
                            </a>
                          </h2>
                          <div class="text">
                            Overview Interior Design Principles and Elements,
                            the best course for you to gain in-depth knowledge
                            of this topic. Experts and…
                          </div>
                          <a href="blog-detail.html" class="learn-more">
                            Learn More{" "}
                            <span class="icon flaticon-right-arrow-1"></span>
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="col-lg-6">
                  <div class="blog-classic mt-0">
                    <div class="news-block-two">
                      <div class="inner-box">
                        <div class="image">
                          <a href="blog-detail.html">
                            <img src="images/resource/news-15.jpg" alt="" />
                          </a>
                        </div>
                        <div class="lower-content">
                          <ul class="post-info">
                            <li>
                              <a href="blog-detail.html">
                                <span class="icon fa fa-user"></span>Admin
                              </a>
                            </li>
                            <li>
                              <a href="blog-detail.html">
                                <span class="icon fa fa-calendar"></span>12 Feb
                                2023
                              </a>
                            </li>
                            <li>
                              <a href="blog-detail.html">
                                <span class="icon fa fa-bookmark-o"></span>
                                Education, teach , Course
                              </a>
                            </li>
                          </ul>
                          <h2 class="fa-2x">
                            <a href="blog-detail.html">
                              Interior Design Principles and Elements
                            </a>
                          </h2>
                          <div class="text">
                            Overview Interior Design Principles and Elements,
                            the best course for you to gain in-depth knowledge
                            of this topic. Experts and…
                          </div>
                          <a href="blog-detail.html" class="learn-more">
                            Learn More{" "}
                            <span class="icon flaticon-right-arrow-1"></span>
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div class="row">
                <div class="col-lg-7">
                  <div class="blog-classic">
                    <div class="news-block-two">
                      <div class="inner-box">
                        <div class="image">
                          <a href="blog-detail.html">
                            <img src="images/resource/news-15.jpg" alt="" />
                          </a>
                        </div>
                        <div class="lower-content">
                          <ul class="post-info">
                            <li>
                              <a href="blog-detail.html">
                                <span class="icon fa fa-user"></span>Admin
                              </a>
                            </li>
                            <li>
                              <a href="blog-detail.html">
                                <span class="icon fa fa-calendar"></span>12 Feb
                                2023
                              </a>
                            </li>
                            <li>
                              <a href="blog-detail.html">
                                <span class="icon fa fa-bookmark-o"></span>
                                Education, teach , Course
                              </a>
                            </li>
                          </ul>
                          <h2 class="fa-2x">
                            <a href="blog-detail.html">
                              Interior Design Principles and Elements
                            </a>
                          </h2>
                          <div class="text">
                            Overview Interior Design Principles and Elements,
                            the best course for you to gain in-depth knowledge
                            of this topic. Experts and…
                          </div>
                          <a href="blog-detail.html" class="learn-more">
                            Learn More{" "}
                            <span class="icon flaticon-right-arrow-1"></span>
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="col-lg-5 sidebar">
                  <div class="sidebar-widget innerSidebar popular-posts">
                    <div class="widget-content">
                      <article class="post">
                        <figure class="post-thumb">
                          <img src="images/resource/post-thumb-3.jpg" alt="" />
                          <a href="blog-detail.html" class="overlay-box">
                            <span class="icon fa fa-link"></span>
                          </a>
                        </figure>
                        <div class="text">
                          <a href="blog-detail.html">
                            Is Baking a Good career? 15 Reasons{" "}
                          </a>
                        </div>
                        <div class="post-info">Admin, 10 Feb 2023</div>
                      </article>
                      <article class="post">
                        <figure class="post-thumb">
                          <img src="images/resource/post-thumb-4.jpg" alt="" />
                          <a href="blog-detail.html" class="overlay-box">
                            <span class="icon fa fa-link"></span>
                          </a>
                        </figure>
                        <div class="text">
                          <a href="blog-detail.html">
                            Is Baking a Good career? 15 Reasons{" "}
                          </a>
                        </div>
                        <div class="post-info">Admin, 10 Feb 2023</div>
                      </article>
                      <article class="post">
                        <figure class="post-thumb">
                          <img src="images/resource/post-thumb-5.jpg" alt="" />
                          <a href="blog-detail.html" class="overlay-box">
                            <span class="icon fa fa-link"></span>
                          </a>
                        </figure>
                        <div class="text">
                          <a href="blog-detail.html">
                            Is Baking a Good career? 15 Reasons{" "}
                          </a>
                        </div>
                        <div class="post-info">Admin, 10 Feb 2023</div>
                      </article>
                      <article class="post">
                        <figure class="post-thumb">
                          <img src="images/resource/post-thumb-4.jpg" alt="" />
                          <a href="blog-detail.html" class="overlay-box">
                            <span class="icon fa fa-link"></span>
                          </a>
                        </figure>
                        <div class="text">
                          <a href="blog-detail.html">
                            Is Baking a Good career? 15 Reasons{" "}
                          </a>
                        </div>
                        <div class="post-info">Admin, 10 Feb 2023</div>
                      </article>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div class="sidebar-side col-lg-3 col-md-12 col-sm-12">
              <aside class="sidebar sticky-top">
                <div class="sidebar-widget links-widget">
                  <div class="sidebar-title">
                    <h4>All Categories</h4>
                  </div>
                  <div class="widget-content">
                    <ul class="blog-cat">
                      <li>
                        <a href="#">Business (3)</a>
                      </li>
                      <li>
                        <a href="#">Education (03)</a>
                      </li>
                      <li>
                        <a href="#">Technology (12)</a>
                      </li>
                      <li>
                        <a href="#">News (6)</a>
                      </li>
                      <li>
                        <a href="#">Design (4)</a>
                      </li>
                      <li>
                        <a href="#">Lifestyle News (6)</a>
                      </li>
                    </ul>
                  </div>
                </div>
                <div class="sidebar-widget popular-posts">
                  <div class="sidebar-title">
                    <h4>Recent Post</h4>
                  </div>
                  <div class="widget-content">
                    <article class="post">
                      <figure class="post-thumb">
                        <img src="images/resource/post-thumb-3.jpg" alt="" />
                        <a href="blog-detail.html" class="overlay-box">
                          <span class="icon fa fa-link"></span>
                        </a>
                      </figure>
                      <div class="text">
                        <a href="blog-detail.html">
                          Is Baking a Good career? 15 Reasons{" "}
                        </a>
                      </div>
                      <div class="post-info">Admin, 10 Feb 2023</div>
                    </article>
                    <article class="post">
                      <figure class="post-thumb">
                        <img src="images/resource/post-thumb-4.jpg" alt="" />
                        <a href="blog-detail.html" class="overlay-box">
                          <span class="icon fa fa-link"></span>
                        </a>
                      </figure>
                      <div class="text">
                        <a href="blog-detail.html">
                          Is Baking a Good career? 15 Reasons{" "}
                        </a>
                      </div>
                      <div class="post-info">Admin, 10 Feb 2023</div>
                    </article>
                    <article class="post">
                      <figure class="post-thumb">
                        <img src="images/resource/post-thumb-5.jpg" alt="" />
                        <a href="blog-detail.html" class="overlay-box">
                          <span class="icon fa fa-link"></span>
                        </a>
                      </figure>
                      <div class="text">
                        <a href="blog-detail.html">
                          Is Baking a Good career? 15 Reasons{" "}
                        </a>
                      </div>
                      <div class="post-info">Admin, 10 Feb 2023</div>
                    </article>
                  </div>
                </div>

                <div class="sidebar-widget popular-posts">
                  <div class="sidebar-title">
                    <h4>Popular Post</h4>
                  </div>
                  <div class="widget-content">
                    <article class="post">
                      <figure class="post-thumb">
                        <img src="images/resource/post-thumb-4.jpg" alt="" />
                        <a href="blog-detail.html" class="overlay-box">
                          <span class="icon fa fa-link"></span>
                        </a>
                      </figure>
                      <div class="text">
                        <a href="blog-detail.html">
                          Is Baking a Good career? 15 Reasons{" "}
                        </a>
                      </div>
                      <div class="post-info">Admin, 10 Feb 2023</div>
                    </article>
                    <article class="post">
                      <figure class="post-thumb">
                        <img src="images/resource/post-thumb-4.jpg" alt="" />
                        <a href="blog-detail.html" class="overlay-box">
                          <span class="icon fa fa-link"></span>
                        </a>
                      </figure>
                      <div class="text">
                        <a href="blog-detail.html">
                          Is Baking a Good career? 15 Reasons{" "}
                        </a>
                      </div>
                      <div class="post-info">Admin, 10 Feb 2023</div>
                    </article>
                    <article class="post">
                      <figure class="post-thumb">
                        <img src="images/resource/post-thumb-5.jpg" alt="" />
                        <a href="blog-detail.html" class="overlay-box">
                          <span class="icon fa fa-link"></span>
                        </a>
                      </figure>
                      <div class="text">
                        <a href="blog-detail.html">
                          Is Baking a Good career? 15 Reasons{" "}
                        </a>
                      </div>
                      <div class="post-info">Admin, 10 Feb 2023</div>
                    </article>
                  </div>
                </div>
              </aside>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Blog;
