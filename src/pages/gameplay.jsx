import React from "react";

import NavBar from "../components/navBar";
import Animator from "../components/animator";

import img from "../assets/3.png";

const Gameplay = () => {
  return (
    <>
      <NavBar />

      <Animator>
        <div className="page">
          <div className="first">
            <h1 className="titleGP">Gameplay</h1>
            <iframe
              
              src="https://www.youtube.com/embed/MGK5KrSitF0"
              title="Mafia 2 - Full Game Walkthrough in 4K"
              frameBorder={0}
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen=""
            />
          </div>
          <div className="second">
            <img src={img} alt="Gameplay img" />
          </div>
        </div>
      </Animator>
      
    </>
  );
};

export default Gameplay;
