/* eslint-disable no-unused-vars */
import { useContext, useEffect } from "react";
import { ThemeContext } from "../App";

function Footer() {
  const { theme, setTheme } = useContext(ThemeContext);
  return (
    <footer className={theme === "dark" ? "border-t border-zinc-800 bg-zinc-950 px-6 py-8 transition-colors duration-300" : "border-t border-zinc-200 bg-white px-6 py-8 transition-colors duration-300"}>
      <div className="max-w-5xl mx-auto flex flex-col md:flex-row items-center justify-between gap-3">
        <span className="font-orbitron font-black text-lg text-red-600 dark:text-red-400 tracking-widest">GAMERENTID</span>
        <p className="text-xs text-zinc-400 font-bold">© 2025 GameRentID. Rental PlayStation Terbaik.</p>
        <p className="text-xs text-zinc-400 font-bold">Made By Bima Software Solution</p>
      </div>
    </footer>
  );
}

export default Footer;
