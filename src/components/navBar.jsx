import React from "react";

import { NavLink } from "react-router-dom";

import icon from "../assets/icon.png";

const NavBar = () => {
  return (
    <>
      <div className="navBar">
        <div className="logo">
          <img src={icon} alt="Logo In NavBar" />
        </div>
        <div className="links">
          <NavLink to="/">
            Home
          </NavLink>
          <NavLink to="/gameplay">
            Gameplay
          </NavLink>
          <NavLink to="/Plot">
            Plot
          </NavLink>
        </div>
        <div className="btn">
          <a target="_blank" href="https://mafiagame.com/mafia-2/">
            <button>Buy The Game</button>
          </a>
        </div>
      </div>
    </>
  );
};

export default NavBar;
