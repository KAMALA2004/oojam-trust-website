import React from "react";
import SlidingBanner from "./SlidingBanner";
import Goals from "./Goals";
import Quote from "./Quote";
import PossibleCauses from "./PossibleCauses";
import Causes from './Causes';

const Home = () => {
  return (
    <div className="home">
      <SlidingBanner />
      <Goals />
      <Causes />
      <Quote />
      <PossibleCauses />
      
      
    </div>
  );
};

export default Home;
