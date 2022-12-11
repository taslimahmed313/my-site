import React from 'react';
import About from '../About/About';
import Conduct from '../Conduct/Conduct';
import Intro from '../Intro/Intro';
import Projects from '../Projects/Projects';
import SocialIcon from '../SocialIcon/SocialIcon';

const Home = () => {
    return (
      <div>
        <SocialIcon></SocialIcon>
        <Intro></Intro>
        <About></About>
        <Projects></Projects>
        <Conduct></Conduct>
      </div>
    );
};

export default Home;