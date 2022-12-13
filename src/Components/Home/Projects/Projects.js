import React, { useEffect, useState } from 'react';
import { FiExternalLink, FiGithub } from "react-icons/fi";
import { IoBook } from "react-icons/io5";
import { Link } from 'react-router-dom';


const Projects = () => {
  const [projects, setProjects] = useState([]);
  useEffect(()=>{
    fetch("projects.json")
    .then(res => res.json())
    .then(data => setProjects(data))
  },[])
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
        <div data-aos="fade-up" data-aos-duration="2000" className="mt-24">
          <h2 className="lg:text-3xl text-2xl font-semibold text-[#dfe3f1]">
            Some Things I’ve Built
          </h2>
        </div>
        <div className="grid lg:grid-cols-3 mt-8 grid-cols-1 gap-6">
          {projects.map((project) => (
            <div
              key={project.id}
              className="px-3 py-3 mb-5   morphy
               text-white shadow-2xl"
              data-aos="fade-down"
              data-aos-easing="linear"
              data-aos-duration="2500"
            >
              <img
                className="h-[160px] hover:scale-105 duration-700 border border-white 
                rounded-xl w-full"
                src={project.img}
                alt=""
              />
              <h2 className="text-xl text-center uppercase mt-2 font-serif font-medium">
                {project.projectName}
              </h2>
              <div className="flex justify-between mt-3">
                <a
                  className="flex items-center border border-[#64FFDA] rounded-xl px-2 py-1 text-xs hover:scale-110 duration-500"
                  href="k"
                >
                  <FiExternalLink></FiExternalLink>{" "}
                  <span className="ml-1 font-serif">Live</span>
                </a>
                <a
                  className="flex items-center border border-[#64FFDA] rounded-xl px-2 py-1 text-xs hover:scale-110 duration-500"
                  href="k"
                >
                  <FiGithub></FiGithub>{" "}
                  <span className="ml-1 font-serif">Client</span>
                </a>
                <a
                  className="flex items-center border border-[#64FFDA] rounded-xl px-2 py-1 text-xs hover:scale-110 duration-500"
                  href="k"
                >
                  <FiGithub></FiGithub>{" "}
                  <span className="ml-1 font-serif">Server</span>
                </a>
              </div>
              <p className="text-justify mt-3">{project.description}</p>
              <Link
                to={`/details/${project.id}`}
                className="outline outline-[#64FFDA] text-[#64ffda] flex items-center  
                 justify-center cursor-pointer w-full hover:-translate-y-1  hover:scale-105  
                  text-center outline-2 font-serif  
                  allsides-8  duration-[1000ms] text-lg text 
                  text px-3 py-1 lg:mt-4  rounded-sm"
              >
                {" "}
                <IoBook className="mr-4"></IoBook>
                Case Study
              </Link>
            </div>
          ))}
        </div>
      </div>
    );
};

export default Projects;