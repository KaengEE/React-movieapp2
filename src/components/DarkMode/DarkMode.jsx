import React, { useEffect, useState } from "react";

import "./DarkMode.css";
import Sun from "../../assets/Sun.svg?react";
import Moon from "../../assets/Moon.svg?react";

const DarkMode = () => {
  const setDarkTheme = () =>
    document.querySelector("body").setAttribute("data-theme", "dark");
  const setLightTheme = () =>
    document.querySelector("body").setAttribute("data-theme", "light");
  // 토글 누르면 작동하는 함수
  const toggleTheme = (e) => {
    e.target.checked ? setDarkTheme() : setLightTheme();
  };

  //시작시 라이트 테마
  useEffect(() => {
    document.querySelector("body").setAttribute("data-theme", "light");
  }, []);

  return (
    <div className="dark_mode">
      <input
        onChange={toggleTheme}
        className="dark_mode_input"
        type="checkbox"
        id="darkmode-toggle"
      />
      <label className="dark_mode_label" htmlFor="darkmode-toggle">
        <Sun />
        <Moon />
      </label>
    </div>
  );
};

export default DarkMode;
