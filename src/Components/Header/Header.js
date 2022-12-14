import React from 'react';
import { FaEnvelopeOpenText } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import CV from "../../assets/Junior Web Developer.pdf";
import logo from "../../logo/text.png";
import "./Header.css";

const Header = () => {
    return (
      <div className="sticky top-0 z-50">
        <div className="navbar morphy">
          <div className="navbar-start">
            <div className="dropdown">
              <label tabIndex={0} className="btn btn-ghost lg:hidden">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5 text-[#64ffda]"
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
                  <a href="#about">About</a>
                </li>
                <li>
                  <a href="#projects">Projects</a>
                </li>
                <li>
                  <a href="#conduct">Conduct</a>
                </li>
                <div className="navbar-end">
                  <a
                    href={CV}
                    download
                    className="outline allsides-8 outline-2 px-4 flex items-center py-2 
                    rounded-sm outline-[#64FFDA] text-[#64ffda]"
                    rel="noreferrer"
                  >
                    <FaEnvelopeOpenText className="mr-3"></FaEnvelopeOpenText>
                    Resume
                  </a>
                </div>
              </ul>
            </div>
            <a
              href="#intro"
              className="normal-case text-xl font-serif outline outline-2 px-4 py-3 rounded-lg 
                 allsides-8 outline-[#64FFDA] text-[#64ffda]"
            >
              <img className="w-5" src={logo} alt="" />
            </a>
          </div>
          <div className="navbar-center hidden lg:flex">
            <ul className="menu menu-horizontal px-1 text-[#bfcbf2]">
              <li>
                <Link className="hover:text-[#64ffda]" to="/">
                  Home
                </Link>
              </li>
              <li>
                <a className="hover:text-[#64ffda]" href="#about">
                  About
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
              <li>
                <Link to="/blog" className="hover:text-[#64ffda]">
                  Blog
                </Link>
              </li>
            </ul>
          </div>
          <div className="navbar-end">
            <a
              href={CV}
              download
              className="outline allsides-8 outline-2 px-4 hover:-translate-y-1 duration- 
               [800ms] flex items-center py-2 rounded-sm 
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