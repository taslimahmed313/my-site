import React from 'react';
import project1 from "../../../logo/project-1.png";
import project2 from "../../../logo/project-2.png";
import project3 from "../../../logo/project-3.png";

const Projects = () => {
    return (
      <div id="projects" className="my-32 lg:px-16 px-12">
        <div data-aos="zoom-out-up" data-aos-duration="2000">
          <h1
            className="lg:text-4xl text-2xl text-center uppercase underline text-[#dfe3f1] 
            font-semibold   font-mono underline-offset-8"
          >
            Projects
          </h1>
          <p className="text-[#BFCBF2] text-lg text-center mt-5">
            Here you will find some of the personal and clients projects that I
            created with each project <br /> containing its own case study.
          </p>
        </div>
        <div className="mt-24">
          <h2 className="lg:text-3xl text-2xl font-semibold text-[#dfe3f1]">
            Some Things I’ve Built
          </h2>
        </div>
        <div className="grid lg:grid-cols-3 mt-8 grid-cols-1 gap-6">
          <div
            className="px-3 py-3 mb-5 allsides-2  morphy text-white shadow-2xl"
            data-aos="fade-down"
            data-aos-easing="linear"
            data-aos-duration="2000"
          >
            <img
              className="h-[160px] border border-white rounded-xl w-full"
              src={project1}
              alt=""
            />
            <h2 className="text-xl text-center uppercase mt-2 font-serif font-medium">
              Benchmarks
            </h2>
            <p className="text-justify mt-3">
              Benchmarks is a Used product resealing website. I created
              targeting the business industry which anyone can use to present
              their business online.
            </p>
            <p
              className="outline cursor-pointer w-full text-center outline-2 font-serif allsides-8 text-lg text 
              text px-3 py-1 lg:mt-4 inline-block rounded-sm"
            >
              Case Study
            </p>
          </div>
          <div
            className="px-3 py-3 mb-5 allsides-2  morphy text-white shadow-2xl"
            data-aos="fade-down"
            data-aos-easing="linear"
            data-aos-duration="2000"
          >
            <img
              className="h-[160px] border border-white rounded-xl w-full"
              src={project2}
              alt=""
            />
            <h2 className="text-xl text-center uppercase mt-2 font-serif font-medium">
              Attorna
            </h2>
            <p className="text-justify mt-2">
              Benchmarks is a Used product resealing website. I created
              targeting the business industry which anyone can use to present
              their business online.
            </p>
            <p
              className="outline cursor-pointer w-full text-center outline-2 font-serif allsides-8 text-lg text 
              text px-3 py-1 lg:mt-4 inline-block rounded-sm"
            >
              Case Study
            </p>
          </div>
          <div
            className="px-3 py-3 mb-5 allsides-2  morphy text-white shadow-2xl"
            data-aos="fade-down"
            data-aos-easing="linear"
            data-aos-duration="2000"
          >
            <img
              className="h-[160px] border border-white rounded-xl w-full"
              src={project3}
              alt=""
            />
            <h2 className="text-xl text-center uppercase mt-2 font-serif font-medium">
              Bytecode Clods
            </h2>
            <p className="text-justify mt-3">
              Benchmarks is a Used product resealing website. I created
              targeting the business industry which anyone can use to present
              their business online.
            </p>
            <p
              className="outline cursor-pointer w-full text-center outline-2 font-serif allsides-8 text-lg text 
              text px-3 py-1 lg:mt-4 inline-block rounded-sm"
            >
              Case Study
            </p>
          </div>
        </div>
      </div>
    );
};

export default Projects;