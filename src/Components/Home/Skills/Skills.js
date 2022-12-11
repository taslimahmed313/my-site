import React from 'react';
import "./Skills.css";

const Skills = () => {
    return (
      <div id="skills">
        <h1 className="text-3xl lg:mt-0 mt-5 font-semibold font-mono uppercase text-[#dfe3f1] lg:ml-8">
          My Top Skills
        </h1>
        {/* <div className="grid grid-cols-3">
          {skills.map((skill) => (
            <div
              className="rounded-sm    -2 px-2 py-1         
              -[#64FFDA]"
              key={skill.id}
            >
              <div>
                <img className=" cursor-pointer" src={skill.img} alt="" />
              </div>
              <div>
                <p className="ml-5 text-[#64FFDA] text-lg font-serif">{skill.name}</p>
              </div>
            </div>
          ))}
        </div> */}
        <div className=" mt-5 lg:ml-5 font-serif">
          <p className=" px-3 py-3 lg:ml-5 ml-3 mb-5 inline-block allsides-2  morphy text-white">
            HTML5
          </p>
          <p className="px-3 py-3 mb-5 inline-block ml-5 allsides-2  morphy text-white">
            Vanilla CSS
          </p>
          <p className="px-3 py-3 mb-5 inline-block lg:ml-5 ml-3 allsides-2  morphy text-white">
            JavaScript
          </p>
          <p className="px-3 py-3 mb-5 inline-block ml-5  morphy allsides-2 text-white">
            React JS
          </p>
          <p className="px-3 py-3 mb-5 inline-block lg:ml-5 ml-3 allsides-2 morphy text-white">
            MongoDB
          </p>
          <p className="px-3 py-3 mb-5 inline-block ml-5 allsides-2 morphy text-white">
            Tailwind CSS
          </p>
          <p className="px-3 py-3 mb-5 inline-block lg:ml-5 ml-3 allsides-2 morphy text-white">
            Bootstrap
          </p>
          <p className="px-3 py-3 mb-5 inline-block ml-5 allsides-2 morphy text-white">
            Node JS
          </p>
          <p className="px-3 py-3 mb-5 inline-block ml-5 allsides-2 morphy text-white">
            Git
          </p>
          <p className="px-3 py-3 mb-5 inline-block lg:ml-5 ml-3 allsides-2 morphy text-white">
            GitHub
          </p>
        </div>
      </div>
    );
};

export default Skills;