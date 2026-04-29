/* eslint-disable no-unused-vars */
import { useContext } from "react";
import FadeIn from "./FadeIn";
import { ThemeContext } from "../App";

function Consoles({ consoles }) {
  const { theme, setTheme } = useContext(ThemeContext);
  return (
    <section className={theme === "dark" ? "bg-zinc-900/60 py-20 px-6 transition-colors duration-300" : "bg-zinc-50 py-20 px-6 transition-colors duration-300"} id="consoles">
      <div className="max-w-5xl mx-auto">
        <FadeIn>
          <div className="text-center mb-12">
            <p className="text-xs font-bold text-red-600 dark:text-red-400 uppercase tracking-widest mb-2">Pilih Konsol</p>
            <h2 className={theme === "dark" ? "font-orbitron font-bold text-3xl md:text-4xl  dark:text-white" : "font-orbitron font-bold text-3xl md:text-4xl text-zinc-900 "}>Koleksi Konsol Kami</h2>
          </div>
        </FadeIn>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {consoles.map((c, i) => (
            <FadeIn key={c.name} delay={i * 100}>
              <div
                className={
                  theme === "dark"
                    ? "group relative bg-zinc-900 border border-zinc-800 rounded-2xl p-6 text-center cursor-pointer transition-all duration-300 hover:-translate-y-2 hover:border-red-400 hover:shadow-xl hover:shadow-red-500/10 h-full flex flex-col"
                    : "group relative bg-white border border-zinc-200 rounded-2xl p-6 text-center cursor-pointer transition-all duration-300 hover:-translate-y-2 hover:border-red-400 hover:shadow-xl hover:shadow-red-500/10 h-full flex flex-col"
                }
              >
                {c.hot && <span className="absolute top-3 right-3 bg-red-600 text-white text-[10px] font-bold px-2.5 py-0.5 rounded-full uppercase tracking-wider">Terlaris</span>}
                <span className="text-5xl mb-4 block">{c.icon}</span>
                <h3 className="font-orbitron font-bold text-sm text-zinc-900 dark:text-white mb-2">{c.name}</h3>
                <p className="text-xs text-zinc-500 dark:text-zinc-400 leading-relaxed flex-1">{c.desc}</p>
                <p className="mt-4 text-sm font-semibold text-red-600 dark:text-red-400">{c.price}</p>
                <button className="mt-3 w-full border border-red-300 dark:border-red-800 text-red-600 dark:text-red-400 text-xs font-semibold py-2 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity bg-transparent cursor-pointer hover:bg-red-600 hover:text-white dark:hover:bg-red-500 dark:hover:border-red-500">
                  Sewa Ini
                </button>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Consoles;
