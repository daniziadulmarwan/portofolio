import React, { useRef, useState } from "react";
import { Link, NavLink, useParams } from "react-router-dom";

const Navbar = () => {
  const [activeHam, setActiveHam] = useState(false);
  const [nav, setNav] = useState(false);
  const [navLink, setNavLink] = useState(false);
  const navFix = useRef();

  const navBtn = () => {
    setActiveHam(!activeHam);
    setNavLink(!navLink);
  };

  window.onscroll = function () {
    let y = navFix.current.offsetTop;
    if (window.pageYOffset > y) {
      setNav(true);
    } else {
      setNav(false);
    }
  };

  return (
    <header
      ref={navFix}
      className={`bg-transparent ${
        nav ? "navbar-fixed" : "absolute"
      }  top-0 left-0 w-full flex items-center z-10`}
    >
      <div className="container">
        <div className="flex justify-between items-center relative">
          <div className="px-4">
            <NavLink
              id="#home"
              to="/"
              className="text-teal-500 font-bold text-lg block py-6"
            >
              ziadulmarwan
            </NavLink>
          </div>

          <div className="flex items-center px-4">
            <button
              id="hamburger"
              className={`block lg:hidden absolute right-4${
                activeHam ? " hamburger-active" : ""
              }`}
              onClick={navBtn}
            >
              <span className="hamburger-line transition duration-300 ease-in-out origin-top-left"></span>
              <span className="hamburger-line transition duration-300 ease-in-out"></span>
              <span className="hamburger-line transition duration-300 ease-in-out origin-bottom-left"></span>
            </button>

            {/* Nav */}
            <nav
              className={`${
                navLink ? "block" : "hidden"
              } absolute py-5 bg-white shadow-lg rounded-lg max-w-[250px] w-full right-4 top-full lg:block lg:static lg:bg-transparent lg:max-w-full lg:shadow-none lg:rounded-none`}
            >
              <ul id="nav-menu" className="block lg:flex">
                <li className="group">
                  <a
                    href="#home"
                    className="text-base text-slate-900 py-2 mx-8 flex group-hover:text-teal-500"
                  >
                    Beranda
                  </a>
                </li>
                <li className="group">
                  <a
                    href="#home"
                    className="text-base text-slate-900 py-2 mx-8 flex group-hover:text-teal-500"
                  >
                    About
                  </a>
                </li>
                <li className="group">
                  <a
                    href="#home"
                    className="text-base text-slate-900 py-2 mx-8 flex group-hover:text-teal-500"
                  >
                    Portfolio
                  </a>
                </li>
                <li className="group">
                  <a
                    href="#home"
                    className="text-base text-slate-900 py-2 mx-8 flex group-hover:text-teal-500"
                  >
                    Blog
                  </a>
                </li>
                <li className="group">
                  <a
                    href="#home"
                    className="text-base text-slate-900 py-2 mx-8 flex group-hover:text-teal-500"
                  >
                    Contact
                  </a>
                </li>
              </ul>
            </nav>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
