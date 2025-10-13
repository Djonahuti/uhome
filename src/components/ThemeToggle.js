import React, { useEffect, useState } from "react";

function ThemeToggle() {
  // Check if the current time falls within "night" or "day"
  const isNightTime = () => {
    const hour = new Date().getHours();
    return hour >= 18 || hour < 6; // Nighttime: 6 PM to 6 AM
  };

  // Initial state based on data-theme or the time of day
  const [isDarkMode, setIsDarkMode] = useState(
    document.documentElement.getAttribute("data-theme") === "dark" || isNightTime()
  );

  useEffect(() => {
    // Set the data-theme attribute based on isDarkMode state
    document.documentElement.setAttribute("data-theme", isDarkMode ? "dark" : "light");
  }, [isDarkMode]);

  // Toggle the dark mode state
  const toggleTheme = () => setIsDarkMode((prevMode) => !prevMode);

  return (
    <button
      className="btn btn-link"
      onClick={toggleTheme}
      aria-label="Toggle theme"
    >
      {isDarkMode ? (
        <i className="bi bi-sun-fill" style={{ fontSize: "1.5rem", color: "gold" }}></i>
      ) : (
        <i className="bi bi-moon-fill" style={{ fontSize: "1.5rem", color: "blue" }}></i>
      )}
    </button>
  );
}

export default ThemeToggle;
