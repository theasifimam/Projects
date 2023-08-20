import React from "react";
import AboutCard from "../about/AboutCard";
import Hblog from "./Hblog";
import HAbout from "./hero/HAbout";
import Hero from "./hero/Hero";
import Hprice from "./Hprice";
import Test from "./testimonial/Test";

const Home = () => (
  <>
    <Hero />
    <AboutCard />
    <HAbout />
    <Test />
    <Hblog />
    <Hprice />
  </>
);

export default Home;
