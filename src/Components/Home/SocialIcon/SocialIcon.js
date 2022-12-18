import React from 'react';
import { FaInstagram, FaLinkedinIn } from "react-icons/fa";
import { FiGithub, FiTwitter } from 'react-icons/fi';
import { IoMail } from "react-icons/io5";

const SocialIcon = () => {
    return (
      <div className="top-[300px] fixed vertical rounded-xl px-2 py-5">
        <a
          href="https://github.com/taslimahmed313"
          target="_blank"
          rel="noreferrer"
        >
          <FiGithub className=" hover:text-[#64ffda] hover:-translate-y-1  hover:scale-125 duration-500 text-white  text-xl"></FiGithub>{" "}
        </a>{" "}
        <br />
        <a href="mailto: [taslimahmed313@gmail.com]">
          <IoMail className=" hover:text-[#64ffda] hover:-translate-y-1  hover:scale-125 duration-500 text-white text-xl"></IoMail>
        </a>
        <br />
        <a
          href="https://www.linkedin.com/in/taslim-ahmed-020962250/"
          target="_blank"
          rel="noreferrer"
        >
          <FaInstagram className=" hover:text-[#64ffda] hover:-translate-y-1  hover:scale-125 duration-500 text-white text-xl"></FaInstagram>
        </a>
        <br />
        <a
          href="https://twitter.com/Taslim_313"
          target="_blank"
          rel="noreferrer"
        >
          <FiTwitter className=" hover:text-[#64ffda] hover:-translate-y-1  hover:scale-125 duration-500 text-white text-xl"></FiTwitter>
        </a>
        <br />
        <a
          href="https://www.linkedin.com/in/taslim-ahmed-020962250/"
          target="_blank"
          rel="noreferrer"
        >
          <FaLinkedinIn className=" hover:text-[#64ffda] hover:-translate-y-1  hover:scale-125 duration-500 text-white text-xl"></FaLinkedinIn>
        </a>
      </div>
    );
};

export default SocialIcon;