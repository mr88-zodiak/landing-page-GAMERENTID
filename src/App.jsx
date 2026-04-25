/* eslint-disable react-refresh/only-export-components */
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import { createContext, useEffect, useState } from "react";

export const ThemeContext = createContext();
function App() {
  const [theme, setTheme] = useState(() => {
    return localStorage.getItem("theme") || "dark";
  });

  useEffect(() => {
    localStorage.setItem("theme", theme);
    if (theme === "dark") {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [theme]);
  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      <div className={theme === "dark" ? "bg-zinc-950 text-white" : "bg-white text-black"}>
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
      </div>
    </ThemeContext.Provider>
  );
}

export default App;
