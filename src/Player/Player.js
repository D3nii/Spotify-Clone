import React from "react";
import Body from "./Body/Body";
import Sidebar from "./Sidebar/Sidebar";

import "./Player.css";
import Footer from "./Footer/Footer";

let Player = ({ spotify }) => {
  return (
    <div className="player">
      <div className="player_body">
        <Sidebar />
        <Body spotify={spotify} />

        <Footer />
      </div>
    </div>
  );
};

export default Player;
