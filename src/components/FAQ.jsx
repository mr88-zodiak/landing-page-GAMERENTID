/* eslint-disable no-unused-vars */
import { useContext } from "react";
import FadeIn from "./FadeIn";
import { ThemeContext } from "../App";

function HowItWorks({ steps }) {
  const { theme, setTheme } = useContext(ThemeContext);
  return (
    <section className={theme === "dark" ? "bg-zinc-950 border-y border-zinc-800 py-20 px-6 transition-colors duration-300" : "bg-white border-y border-zinc-200 py-20 px-6 transition-colors duration-300"} id="how-it-works">
      <div className="max-w-5xl mx-auto">
        <FadeIn>
          <div className="text-center mb-14">
            <p className="text-xs font-bold text-red-600 dark:text-red-400 uppercase tracking-widest mb-2">Cara Kerja</p>
            <h2 className={theme === "dark" ? "font-orbitron font-bold text-3xl md:text-4xl  dark:text-white" : "font-orbitron font-bold text-3xl md:text-4xl text-zinc-900 "}>Sewa dalam 4 Langkah</h2>
          </div>
        </FadeIn>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((s, i) => (
            <FadeIn key={s.n} delay={i * 100}>
              <div className="flex flex-col items-center text-center">
                <div className="w-14 h-14 rounded-full bg-red-600 dark:bg-red-500 flex items-center justify-center mb-4 shadow-lg shadow-red-500/30">
                  <span className={theme === "dark" ? "font-orbitron font-black text-base text-white" : "font-orbitron font-black text-base text-white"}>{s.n}</span>
                </div>
                <h3 className={theme === "dark" ? "font-semibold text-base  dark:text-white mb-2" : "font-semibold text-base text-zinc-900  mb-2"}>{s.t}</h3>
                <p className={theme === "dark" ? "text-sm text-zinc-500 dark:text-zinc-400 leading-relaxed" : "text-sm text-zinc-800  leading-relaxed"}>{s.d}</p>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}

export default HowItWorks;
