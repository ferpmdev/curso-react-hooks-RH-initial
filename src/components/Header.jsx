import React, { useState } from "react";

function Header() {
  const [darkMode, setDarkMode] = useState(false);

  const handleClick = () => {
    setDarkMode(!darkMode);
  };
  return (
    <div className="Header">
      <h1>REACT HOOKS</h1>
      <button type="button" onClick={handleClick}>
        {darkMode ? "DARK MODE" : "LIGHT MODE"}
      </button>
    </div>
  );
}

export default Header;
