import React from 'react';
import { useLoaderData } from 'react-router-dom';

const Details = () => {
    const project = useLoaderData();
    console.log(project)
    return (
      <div>
        <div className="grid items-center h-[500px] justify-center">
          <div className=" text-center">
            <h1 className="lg:text-6xl font-semibold uppercase">
              {project.name}
            </h1>
            <p className="lg:w-[630px] text-center mt-5 text-lg">
              This page contains the case study of{" "}
              <strong>{project.name}</strong> Website which includes the Project
              Overview, Tools Used and Live Links to the official product.
            </p>
            <button
              className="outline outline-2 hover:-translate-y-1 duration-[800ms] font-serif 
               allsides-8 text-lg text-[#64ffda] px-12 py-2 lg:mt-10 mt-4 inline-block 
                rounded-sm outline-[#64FFDA]"
            >
              Live Link
            </button>
          </div>
        </div>
        <div className="my-12  grid lg:grid-cols-3 grid-cols-1 gap-6">
          {project.img.map((im, i) => (
            <div
              className="rounded-xl border-4 p-2 hover:scale-105 duration-700 
              border-[#64ffda]  "
              key={i}
            >
              <img
                className="lg:w-[300px] w-full h-[250px] rounded-xl object-cover"
                src={im}
                alt=""
              />
            </div>
          ))}
        </div>
        <div className="lg:mx-20">
          <h2 className="lg:text-3xl text-2xl font-semibold">
            Project Overview
          </h2>
          <p className="mt-5">
            Yubter is a platform for people to join the community of their
            favorite youtube channel. I had an idea and I thought it will be
            cool and helpful for Youtube users to have a place where they can
            chat with other like-minded people who follow the same Youtube
            channel as them and build a stronger community.
          </p>
          <p className="mt-5">
            I took inspiration from other similar platforms like Discord, Slack,
            etc. which are similar in terms of having a place for people of
            certain communities and providing them a space to communicate and
            meet like-minded people of the same community.
          </p>
          <p className="mt-5">
            Feel free to check out the Project by visiting the Live Link.
          </p>
        </div>
        <div className="lg:mx-20">
          <h2 className="lg:text-3xl text-2xl mt-10 font-semibold">
            Tools Used
          </h2>
        </div>
      </div>
    );
};

export default Details;