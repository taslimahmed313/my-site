import React from 'react';

const Skills = () => {
    return (
      <div id="skills">
        <h1 className="text-3xl font-semibold font-mono uppercase text-[#dfe3f1] lg:ml-8">My Top Skills</h1>
        {/* <div className="grid grid-cols-3">
          {skills.map((skill) => (
            <div
              className="rounded-sm outline outline-2 px-2 py-1         
             outline-[#64FFDA]"
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
        <div className=" mt-5 lg:ml-5">
          <p className=" outline px-3 py-3 lg:ml-5 ml-3 mb-5 inline-block  outline-[#64FFDA] text-[#64ffda]">
            HTML5
          </p>
          <p className=" outline px-3 py-3 mb-5 inline-block ml-5 outline-[#64FFDA] text-[#64ffda]">
            Vanilla CSS
          </p>
          <p className=" outline px-3 py-3 mb-5 inline-block lg:ml-5 ml-3 outline-[#64FFDA] text-[#64ffda]">
            JavaScript
          </p>
          <p className=" outline px-3 py-3 mb-5 inline-block ml-5  outline-[#64FFDA] text-[#64ffda]">
            React JS
          </p>
          <p className=" outline px-3 py-3 mb-5 inline-block lg:ml-5 ml-3 outline-[#64FFDA] text-[#64ffda]">
            MongoDB
          </p>
          <p className=" outline px-3 py-3 mb-5 inline-block ml-5 outline-[#64FFDA] text-[#64ffda]">
            Tailwind CSS
          </p>
          <p className=" outline px-3 py-3 mb-5 inline-block lg:ml-5 ml-3 outline-[#64FFDA] text-[#64ffda]">
            Bootstrap
          </p>
          <p className=" outline px-3 py-3 mb-5 inline-block ml-5 outline-[#64FFDA] text-[#64ffda]">
            Node JS
          </p>
          <p className=" outline px-3 py-3 mb-5 inline-block ml-5  outline-[#64FFDA] text-[#64ffda]">
            Git
          </p>
          <p className=" outline px-3 py-3 mb-5 inline-block lg:ml-5 ml-3  outline-[#64FFDA] text-[#64ffda]">
            GitHub
          </p>
        </div>
      </div>
    );
};

export default Skills;