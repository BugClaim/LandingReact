import React from 'react';
// import sections
import Hero from '../components/sections/Hero';
import FeaturesTiles from '../components/sections/FeaturesTiles';
import FeaturesSplit from '../components/sections/FeaturesSplit';
import Cta from '../components/sections/Cta';
import Startingbb from '../components/sections/Startingbb';
import Pricing  from '../components/sections/Pricing';

const Home = () => {

  return (
    <>
      <Hero className="illustration-section-01" />
      <FeaturesTiles />
      <Startingbb />
      <FeaturesSplit invertMobile topDivider imageFill className="illustration-section-02" />
      <Pricing />
      <Cta split />
    </>
  );
}

export default Home;