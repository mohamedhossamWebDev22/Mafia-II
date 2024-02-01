import React from "react";

import NavBar from "../components/navBar";

import img from "../assets/2.png";

const Plot = () => {
  return (
    <>
      <NavBar />
      <div className="page">
        <div className="first">
          <p className="plot">
            Mafia II is an action-adventure game developed by 2K Czech and
            published by 2K. The game is set in the fictional city of Empire Bay
            from 1945 to 1951 and follows the story of Vito Scaletta, a young
            Sicilian-American mobster and war veteran, who becomes caught in a
            power struggle among the city's Mafia crime families while
            attempting to pay back his father's debts and secure a better
            lifestyle ¹. The game is played from a third-person perspective and
            its world is navigated on foot or by vehicle. The player character's
            criminal activities may incite a response from law enforcement
            agencies, measured by a "wanted" system that governs the aggression
            of their response ¹. I hope this helps! Source: Conversation with
            Bing, 2/1/2024 (1) Mafia II - Wikipedia.
            https://en.wikipedia.org/wiki/Mafia_II. (2) Mafia II | Mafia Wiki |
            Fandom. https://mafiagame.fandom.com/wiki/Mafia_II. (3) Mafia II
            (Video Game 2010) - Plot Summary - IMDb.
            https://www.imdb.com/title/tt1181833/plotsummary/.
          </p>
        </div>
        <div className="second">
          <img src={img} alt="img for story" />
        </div>
      </div>
    </>
  );
};

export default Plot;
