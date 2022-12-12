import React from 'react';
import { FaFacebook, FaGithub, FaInstagram, FaLinkedinIn } from "react-icons/fa";
import { IoMail } from "react-icons/io5";

const SocialIcon = () => {
    return (
      <div className="top-[300px] fixed morphy px-2 py-5">
        <a href="https://github.com/taslimahmed313">
          <FaGithub className=" hover:text-[#64ffda] hover:scale-125 duration-500 text-white  text-xl"></FaGithub>{" "}
        </a>{" "}
        <br />
        <a href="mailto: [taslimahmed313@gmail.com]">
          <IoMail className=" hover:text-[#64ffda] hover:scale-125 duration-500 text-white text-xl"></IoMail>
        </a>
        <br />
        <a href="https://www.linkedin.com/in/taslim-ahmed-020962250/">
          <FaFacebook className=" hover:text-[#64ffda] hover:scale-125 duration-500 text-white text-xl"></FaFacebook>
        </a>{" "}
        <br />
        <a href="https://www.instagram.com/mr_beard_bro_313/">
          <FaInstagram className=" hover:text-[#64ffda] hover:scale-125 duration-500 text-white text-xl"></FaInstagram>
        </a>
        <br />
        <a href="https://www.linkedin.com/in/taslim-ahmed-020962250/">
          <FaLinkedinIn className=" hover:text-[#64ffda] hover:scale-125 duration-500 text-white text-xl"></FaLinkedinIn>
        </a>
      </div>
    );
};

export default SocialIcon;