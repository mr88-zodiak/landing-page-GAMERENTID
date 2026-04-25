import { useContext, useState } from "react";
import { ThemeContext } from "../App";
function Navbar({ links }) {
  const { theme, setTheme } = useContext(ThemeContext);
  const [open, setOpen] = useState(false);

  return (
    <nav className={theme === "dark" ? "sticky top-0 z-50 backdrop-blur-md bg-zinc-950/80 border-b border-zinc-800" : "sticky top-0 z-50 backdrop-blur-md bg-white/80 border-b border-zinc-200"}>
      <div className="max-w-6xl mx-auto px-5 h-16 flex items-center justify-between">
        <span className="font-orbitron font-black text-xl text-red-600 dark:text-red-400 tracking-widest">GAMERENTID</span>

        {/* Desktop Links */}
        <ul className="hidden md:flex gap-7 list-none m-0 p-0">
          {links.map((l) => (
            <li key={l.name}>
              <a
                href={l.href}
                className={
                  theme === "dark"
                    ? "text-sm font-medium  dark:text-zinc-400 hover:text-red-600 dark:hover:text-red-400 transition-colors no-underline"
                    : "text-sm font-medium text-zinc-800  hover:text-red-600 dark:hover:text-red-400 transition-colors no-underline"
                }
              >
                {l.name}
              </a>
            </li>
          ))}
        </ul>
        <div className="flex items-center gap-3">
          {/* Dark Mode Toggle */}
          <button
            onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
            aria-label="Toggle dark mode"
            className={
              theme === "dark"
                ? "relative w-14 h-7 rounded-full  dark:bg-zinc-700 transition-colors duration-300 border-0 cursor-pointer focus:outline-none focus:ring-2 focus:ring-red-400/50"
                : "relative w-14 h-7 rounded-full bg-zinc-100  transition-colors duration-300 border-0 cursor-pointer focus:outline-none focus:ring-2 focus:ring-red-400/50"
            }
          >
            <span
              className={`absolute top-0.5 left-0.5 w-6 h-6 rounded-full   shadow flex items-center justify-center text-sm transition-transform duration-300 ${theme === "dark" ? "dark:bg-zinc-900 translate-x-7" : "bg-white translate-x-0"}`}
            >
              {theme === "dark" ? "🌙" : "☀️"}
            </span>
          </button>

          {/* CTA Button */}
          <button className="hidden md:block bg-red-600 dark:bg-red-500 hover:opacity-90 text-white text-sm font-semibold px-5 py-2 rounded-lg border-0 cursor-pointer transition-all hover:scale-105 active:scale-95">Sewa Sekarang</button>

          {/* Hamburger (mobile) */}
          <button onClick={() => setOpen(!open)} className="md:hidden bg-transparent border-0 cursor-pointer text-lg text-zinc-700 dark:text-zinc-300" aria-label="Toggle menu">
            {open ? "✕" : "☰"}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {open && (
        <div className="md:hidden border-t border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-950 px-5 py-4 flex flex-col gap-3">
          {links.map((l) => (
            <a key={l.name} href={l.href} className="text-sm font-medium text-zinc-600 dark:text-zinc-300 hover:text-red-600 dark:hover:text-red-400 transition-colors no-underline">
              {l.name}
            </a>
          ))}
          <button className="bg-red-600 dark:bg-red-500 text-white text-sm font-semibold py-2.5 rounded-lg border-0 cursor-pointer">Sewa Sekarang</button>
        </div>
      )}
    </nav>
  );
}

export default Navbar;
