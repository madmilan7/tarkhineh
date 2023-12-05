import React from "react";

// Components
import Navbar from "../ui/Navbar";
import Slider from "../components/Slider";
import HomeSections from "../components/HomeSections";
import Footer from "../ui/Footer";

const Home = () => {
  return (
    <div>
      <Navbar />
      <Slider />
      <HomeSections />
      <Footer />
    </div>
  );
};

export default Home;
