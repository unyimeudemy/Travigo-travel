import React, { Component, useState } from "react";
import { NavLink } from "react-router-dom";
import logo from "../images/logo.png";
import menu from "../images/menu.svg";
import PopUpMenu from "./PopUpMenu";
// import { navlinks } from "../data/travigodata";

const NavBar = ({ navlinks }) => {
  const [popUpState, setPopUpState] = useState(false);
  const [navState, setNavState] = useState(false);

  const onTriggerPopUp = () => {
    return setPopUpState(!popUpState);
  };

  return (
    <>
      <header
        className=" flex justify-center items-center w-auto 
      h-auto  absolute top-7 left-0 right-0"
      >
        <nav className=" flex  justify-between items-center travigo-container">
          <NavLink to={"/"} className="my-4 ">
            <img
              src={logo}
              alt="logo/image   "
              className="object-fill w-22 h-9 "
            />
          </NavLink>
          <ul className="flex items-center lg:hidden gap-7">
            {navlinks?.map((val, i) => (
              <li id={i}>
                <NavLink to={"#"} className="text-lg text-slate-900">
                  {val.link}
                </NavLink>
              </li>
            ))}
          </ul>
          <ul>
            <li>
              <button type="button" className="join-button px-7 my-5 lg:hidden">
                Join us
              </button>
            </li>
          </ul>
          <ul className="hidden lg:flex items-center">
            <li>
              <button
                type="button"
                onClick={onTriggerPopUp}
                className="flex items-center transition-all duration-200 active:scale-90 cursor-pointer"
              >
                <img
                  src={menu}
                  alt="menu/svg"
                  className="object-cover shadow-sm filter"
                />
              </button>
            </li>
          </ul>
        </nav>
      </header>
      <PopUpMenu
        key={navlinks.id}
        navlinks={navlinks}
        popUpState={popUpState}
      />
    </>
  );
};

export default NavBar;
