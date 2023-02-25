import React from "react";
import { NavLink } from "react-router-dom";

const PopUpMenu = ({ navlinks, popUpState }) => {
  return (
    <>
      <nav
        className={`fixed top-14 right-14 font-bold bg-white  bg-opacity-100 opacity-100
        z-50 backdrop-filter backdrop-blur-xl rounded-lg w-44 h-auto py-5 px-6 shadow-2xl 
        hidden  lg:flex items-center justify-center transition-transform duration-300 
        ${popUpState ? "lg:flex translate-y-6 " : "lg:hidden  "}
        `}
      >
        <ul className=" flex items-center flex-col gap-3  ">
          {navlinks.map((val, i) => (
            <li id={i}>
              <NavLink to={"#"}>{val.link}</NavLink>
            </li>
          ))}
          <li>
            <button type="button" className="join-button">
              Join us
            </button>
          </li>
        </ul>
      </nav>
    </>
  );
};

export default PopUpMenu;
