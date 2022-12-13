import React from 'react';

const Intro = () => {
    return (
      <div id="intro" className="lg:px-16 px-12 lg:mt-10">
        <div data-aos="zoom-in" data-aos-duration="2000">
          <p className="text-[#64ffda] text-xl font-mono font-medium">
            Hi, my name is
          </p>
          <h1 className="text-[#dfe3f1] lg:text-7xl text-3xl  my-2 font-semibold font-serif lg:mt-5">
            Taslim Ahmed.
          </h1>
          <h1 className="text-[#bfcbf2] lg:text-7xl text-4xl my-4 font-semibold lg:mt-5">
            I build things for the web.
          </h1>
          <p className="text-[#becaf3] lg:w-[550px] text-justify lg:mt-5 text-lg">
            I'm a software engineer specializing in building (and occasionally
            designing) exceptional digital experiences. Currently, I'm focused
            on building accessible, human-centered products at Upstatement.
          </p>
        </div>
        <div data-aos="zoom-out-up" data-aos-duration="2000">
          <a
            href="#projects"
            className="outline outline-2 hover:scale-105 duration-1000 font-serif allsides-8 text-lg text-[#64ffda] px-8 py-4 
           lg:mt-12 mt-8 inline-block rounded-sm outline-[#64FFDA]"
            rel="noreferrer"
          >
            Check Out My Projects!
          </a>
        </div>
      </div>
    );
};

export default Intro;