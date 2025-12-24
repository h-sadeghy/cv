import React from "react";
import Navbar from "./Navbar";
import Banner from "./Banner";
import Carousel from "./Carousel";
import Stats from "./Stats";
import HowTo from "./HowTo";
export default function Home() {
  return (
    <div>
      <Banner />
      <Stats />
      <HowTo />
      <Carousel />
    </div>
  );
}
