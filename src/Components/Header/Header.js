import React from 'react';
import { FaEnvelopeOpenText } from 'react-icons/fa';
import logo from "../../logo/letter-t- (1).png";
import "./Header.css";

const Header = () => {
    return (
      <div>
        <div className="navbar bg-base-100">
          <div className="navbar-start">
            <div className="dropdown">
              <label tabIndex={0} className="btn btn-ghost lg:hidden">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h8m-8 6h16"
                  />
                </svg>
              </label>
              <ul
                tabIndex={0}
                className="menu menu-compact dropdown-content text-[#bfcbf2] mt-3 p-2 shadow 
                 bg-base-100 rounded-box w-52"
              >
                <li>
                  <a href="#4">Home</a>
                </li>
                <li>
                  <a href="#skills">Skills</a>
                </li>
                <li>
                  <a href="#projects">Projects</a>
                </li>
                <li>
                  <a href="#conduct">Conduct</a>
                </li>
                <div className="navbar-end">
                  <a href="k">Get started</a>
                </div>
              </ul>
            </div>
            <a
              href="#home"
              className="normal-case text-xl font-serif outline outline-2 px-4 py-3 rounded-lg outline-[#64FFDA]  allsides-8 text-[#64ffda]"
            >
              <img className="w-5" src={logo} alt="" />
            </a>
          </div>
          <div className="navbar-center hidden lg:flex">
            <ul className="menu menu-horizontal px-1 text-[#bfcbf2]">
              <li>
                <a className="hover:text-[#64ffda]" href="#intro">
                  Home
                </a>
              </li>
              <li>
                <a className="hover:text-[#64ffda]" href="#skills">
                  Skills
                </a>
              </li>
              <li>
                <a className="hover:text-[#64ffda]" href="#projects">
                  Projects
                </a>
              </li>
              <li>
                <a className="hover:text-[#64ffda]" href="#conduct">
                  Conduct
                </a>
              </li>
            </ul>
          </div>
          <div
            data-aos="zoom-out-up"
            data-aos-duration="2000"
            className="navbar-end"
          >
            <a
              href="https://drive.google.com/file/d/1OB6MECjzqtaj5RVqGqXV-NZx4VcOl4oR/view? 
               usp=sharing"
              target="_blank"
              className="outline allsides-8 outline-2 px-4 flex items-center py-2 rounded-sm 
               outline-[#64FFDA] text-[#64ffda]"
              rel="noreferrer"
            >
              <FaEnvelopeOpenText className="mr-3"></FaEnvelopeOpenText>
              Resume
            </a>
          </div>
        </div>
      </div>
    );
};

export default Header;