import React from 'react';

const Intro = () => {
    return (
      <div id="intro" className="lg:px-16 px-8 lg:mt-10">
        <p className="text-[#64ffda] text-xl font-mono font-medium">
          Hi, my name is
        </p>
        <h1 className="text-[#dfe3f1] lg:text-7xl font-semibold font-serif lg:mt-5">
          Taslim Ahmed.
        </h1>
        <h1 className="text-[#bfcbf2] lg:text-7xl font-semibold lg:mt-5">
          I build things for the web.
        </h1>
        <p className="text-[#becaf3] lg:mt-5 text-lg">
          I'm a software engineer specializing in building (and occasionally{" "}
          <br />
          designing) exceptional digital experiences. Currently, I'm focused on{" "}
          <br />
          building accessible, human-centered products at Upstatement.
        </p>
        <a
          href="https://drive.google.com/file/d/1OB6MECjzqtaj5RVqGqXV-NZx4VcOl4oR/view? 
               usp=sharing"
          target="_blank"
          className="outline outline-2 font-serif allsides-8 text-lg text-[#64ffda] px-8 py-4 
           lg:mt-12 inline-block rounded-sm outline-[#64FFDA]"
          rel="noreferrer"
        >
          Check Out My Projects!
        </a>
      </div>
    );
};

export default Intro;