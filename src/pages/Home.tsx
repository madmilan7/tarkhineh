import React from "react";

// Components
import Navbar from "../ui/Navbar";
import Slider from "../components/Slider";
import HomeSections from "../components/HomeSections";

const Home = () => {
  return (
    <div>
      <Navbar />
      <Slider />
      <HomeSections />
    </div>
  );
};

export default Home;
