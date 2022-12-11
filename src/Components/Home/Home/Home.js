import React from 'react';
import About from '../About/About';
import Intro from '../Intro/Intro';
import SocialIcon from '../SocialIcon/SocialIcon';

const Home = () => {
    return (
      <div>
        <SocialIcon></SocialIcon>
        <Intro></Intro>
        <About></About>
      </div>
    );
};

export default Home;