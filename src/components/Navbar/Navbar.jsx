import "./Navbar.css";
import DarkMode from "../DarkMode/DarkMode";
//이미지
import Fire from "../../assets/fire.png";
import Star from "../../assets/glowing-star.png";
import Party from "../../assets/partying-face.png";

import React from "react";
import { Link, NavLink } from "react-router-dom";

//rfc 단축키
export default function Navbar() {
  return (
    <nav className="navbar">
      <Link to="/" className="link">
        <h1 className="main_title">MovieApp</h1>
      </Link>

      <div className="navbar_links">
        <DarkMode />
        <NavLink to="/">
          <img className="navbar_emoji" src={Fire} alt="fire emoji" />
          인기순
        </NavLink>
        <NavLink to="/top_rated">
          <img className="navbar_emoji" src={Star} alt="star emoji" />
          평점순
        </NavLink>
        <NavLink to="/upcoming">
          <img className="navbar_emoji" src={Party} alt="party emoji" />
          최신순
        </NavLink>
        <NavLink to="/search">🔎영화검색</NavLink>
      </div>
    </nav>
  );
}
