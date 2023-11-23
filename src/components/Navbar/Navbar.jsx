import "./Navbar.css";
import DarkMode from "../DarkMode/DarkMode";
//이미지
import Fire from "../../assets/fire.png";
import Star from "../../assets/glowing-star.png";
import Party from "../../assets/partying-face.png";

import React from "react";

//rfc 단축키
export default function Navbar() {
  return (
    <nav className="navbar">
      <h1>MovieApp</h1>

      <div className="navbar_links">
        <DarkMode />
        <a href="#popular">
          <img className="navbar_emoji" src={Fire} alt="fire emoji" />
          인기순
        </a>
        <a href="#top_rated">
          <img className="navbar_emoji" src={Star} alt="star emoji" />
          평점순
        </a>
        <a href="#upcoming">
          <img className="navbar_emoji" src={Party} alt="party emoji" />
          최신순
        </a>
      </div>
    </nav>
  );
}
