import React from "react";

import NavBar from "../components/navBar";
import Animator from "../components/animator";

import logo from "../assets/logo.png";
import img from "../assets/1.png";

const Home = () => {
  return (
    <>
      <NavBar />

      <Animator>
        <div className="home">
          <div className="page">
            <div className="first">
              <img src={logo} alt="Logo" />
              <div className="txt">
                <h2>
                  Welcome to the world of <a>Mafia</a>!
                </h2>
                <p>
                  Try A Wanderful Experience In Empire Bay, With Italian Mafia And
                  The Battle Between Families.
                </p>
                <a target="_blank" href="https://mafiagame.com/mafia-2/">
                  <button>Buy The Game</button>
                </a>
              </div>
            </div>
            <div className="second">
              <img src={img} alt="Awesome Img" />
            </div>
          </div>
        </div>
      </Animator>
    </>
  );
};

export default Home;
