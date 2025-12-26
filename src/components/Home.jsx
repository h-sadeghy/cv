import React, { useState } from "react";
import Navbar from "./Navbar";
import Banner from "./Banner";
import Carousel from "./Carousel";
import Stats from "./Stats";
import HowTo from "./HowTo";

export default function Home() {
  return (
    <div className="bg-base-300 ">
      <Banner />
      <Stats />
      <HowTo />
      <Carousel />
    </div>
  );
}
