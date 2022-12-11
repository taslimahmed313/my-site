import React from 'react';
import Skills from '../Skills/Skills';

const About = () => {
    return (
      <div className="my-32 lg:px-16 px-8">
        <div>
          <h1
            className="lg:text-4xl text-center underline text-[#dfe3f1] font-semibold   
           font-mono underline-offset-8"
          >
            ABOUT ME
          </h1>
          <p className="text-[#BFCBF2] text-lg text-center mt-5">
            Here you will find more information about me, what I do, and my
            current skills mostly in terms <br /> of programming and technology.
          </p>
        </div>
        <div className="mt-24 grid lg:grid-cols-2 grid-cols-1">
          <div>
            <h3 className="text-3xl font-semibold text-[#dfe3f1]">
              Get to know me!
            </h3>
            <p className="mt-5 text-[#BFCBF2] text-lg text-justify">
              I'm a Frontend Web Developer building the Front-end of Websites
              and Web Applications that leads to the success of the overall
              product. Check out some of my work in the Projects section.
            </p>
            <p className="mt-5 text-[#BFCBF2] text-lg text-justify">
              I also like sharing content related to the stuff that I have
              learned over the years in Web Development so it can help other
              people of the Dev Community. Feel free to Connect or Follow me on
              my Linkedin where I post useful content related to Web Development
              and Programming
            </p>
            <p className="mt-5 text-[#BFCBF2] text-lg text-justify">
              I'm open to Job opportunities where I can contribute, learn and
              grow. If you have a good opportunity that matches my skills and
              experience then don't hesitate to contact me.
            </p>
          </div>
          <div>
            <Skills></Skills>
          </div>
        </div>
      </div>
    );
};

export default About;