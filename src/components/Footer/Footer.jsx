import "./Footer.css";

import React from "react";

export const Footer = () => {
  return (
    <div className="footer">
      <div className="footer_text">
        React + Vite 로 만든 MovieApp ver2 입니다.
      </div>
      <div className="footer_text">
        <a target="_blank" href="https://react-movie-kaenghee.netlify.app/">
          MovieApp.ver1
        </a>
      </div>
      <div className="footer_text">
        <a target="_blank" href="https://github.com/KaengEE/React-movieapp2">
          Git Hub
        </a>
      </div>
      <div className="footer_text">
        영화 DB API:
        <a target="_blank" href="https://www.themoviedb.org/">
          TMDB
        </a>
      </div>
      <div className="footer_text">
        <p>copyright(C) 2023 KaengEE all rights reserved.</p>
      </div>
    </div>
  );
};
