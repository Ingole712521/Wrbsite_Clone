/** @format */

import React from "react";
import Navbar from "./components/Navbar";
import HeroSection from "./components/HeroSection";
import FeatureSection from "./components/FeatureSection";
import WorkFlow from "./components/WorkFlow";
import ProfileSection from "./components/ProfileSection";
import Twitte from "./components/Twitte";
import FooterSection from "./components/FooterSection";

const App = () => {
  return (
    <>
      <Navbar />
      <div className='max-v-7xl mx-auto pt-20 px-6'>
        <HeroSection />
        <FeatureSection />
        <WorkFlow />
        <ProfileSection />
        <Twitte />
        <FooterSection/>
      </div>
    </>
  );
};

export default App;
