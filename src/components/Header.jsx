import React, { useState, useContext } from "react";
import ThemeContext from "../context/ThemeContext";

function Header() {
  const [darkMode, setDarkMode] = useState(false);
  const color = useContext(ThemeContext);

  const handleClick = () => {
    setDarkMode(!darkMode);
  };
  return (
    <div
      style={{
        display: "flex",
        height: 160,
        justifyContent: "center",
        alignContent: "center",
        flexDirection: "column",
        alignItems: "center",
      }}
    >
      <h1>REACT HOOKS</h1>
      <button type="button" onClick={handleClick}>
        {darkMode ? "DARK MODE" : "LIGHT MODE"}
      </button>
    </div>
  );
}

export default Header;
