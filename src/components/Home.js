import React from "react";
import Banner from "./Banner";
import Blog from "./Blog";
import Counter from "./Counter";
import HowItWorks from "./HowItWorks";
import Instructor from "./Instructor";
import OurStatus from "./OurStatus";
import Services from "./Services";
import Testimonial from "./Testimonial";

const Home = () => {
  return (
    <>
      <Banner />
      <Instructor />
      <HowItWorks />
      <Counter />
      <Services />
      <OurStatus />
      <Testimonial />
      <Blog />
    </>
  );
};

export default Home;
