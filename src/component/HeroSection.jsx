/* eslint-disable no-unused-vars */
import { useContext } from "react";
import FadeIn from "./FadeIn";
import { ThemeContext } from "../App";

function Hero({ heroStats }) {
  const { theme, setTheme } = useContext(ThemeContext);
  return (
    <section className={theme === "dark" ? "relative overflow-hidden bg-zinc-950" : "relative overflow-hidden bg-white"} id="hero">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-125 h-80 bg-red-500/10 rounded-full blur-3xl" />
      </div>

      <span className="absolute top-10 right-10 text-8xl opacity-[0.04] -rotate-12 select-none pointer-events-none">🎮</span>
      <span className="absolute bottom-10 left-6 text-7xl opacity-[0.04] rotate-12 select-none pointer-events-none">🕹️</span>

      <div className="relative max-w-4xl mx-auto px-6 py-24 flex flex-col items-center text-center">
        <FadeIn delay={0}>
          <span className="inline-flex items-center gap-2 bg-red-50 dark:bg-red-950/50 border border-red-200 dark:border-red-800 text-red-600 dark:text-red-400 rounded-full px-4 py-1.5 text-xs font-bold tracking-widest uppercase mb-6">
            <span className="w-2 h-2 rounded-full bg-red-500 animate-pulse inline-block" />
            Tersedia Hari Ini
          </span>
        </FadeIn>

        <FadeIn delay={100}>
          <h1 className={theme === "dark" ? "font-orbitron font-bold text-4xl md:text-6xl leading-tight  dark:text-white mb-5" : "font-orbitron font-bold text-4xl md:text-6xl leading-tight text-zinc-800  mb-5"}>
            Rental <span className="text-red-600 dark:text-red-400">PlayStation</span>
            <br />
            Terbaik di Kotamu
          </h1>
        </FadeIn>

        <FadeIn delay={200}>
          <p className={theme === "dark" ? "text-zinc-500 dark:text-zinc-400 text-lg max-w-md leading-relaxed mb-8" : "text-zinc-900  text-lg max-w-md leading-relaxed mb-8"}>
            Main game favorit tanpa harus beli konsol. Sewa PS4 & PS5 mulai <strong className={theme === "dark" ? " dark:text-zinc-200" : "text-zinc-800 "}>Rp 20.000/jam</strong> — antar ke rumah, langsung main!
          </p>
        </FadeIn>

        <FadeIn delay={300}>
          <div className="flex flex-wrap gap-3 justify-center mb-14">
            <button className="flex items-center gap-2 bg-red-600 dark:bg-red-500 text-white font-semibold px-7 py-3.5 rounded-xl border-0 cursor-pointer transition-all hover:opacity-90 hover:scale-105 active:scale-95 shadow-lg shadow-red-500/30">
              🎮 Mulai Sewa →
            </button>
            <button className="flex items-center gap-2 border border-zinc-300 dark:border-zinc-700 text-zinc-700 dark:text-zinc-300 hover:border-red-500 hover:text-red-600 dark:hover:text-red-400 font-medium px-7 py-3.5 rounded-xl bg-transparent cursor-pointer transition-all">
              ⚡ Lihat Koleksi
            </button>
          </div>
        </FadeIn>

        <FadeIn delay={400}>
          <div className="w-full border-t border-zinc-200 dark:border-zinc-800 pt-10 grid grid-cols-2 md:grid-cols-4 gap-6">
            {heroStats.map(({ num, label }) => (
              <div key={label} className="text-center">
                <p className="font-orbitron font-bold text-2xl text-red-600 dark:text-red-400">{num}</p>
                <p className="text-xs text-zinc-500 dark:text-zinc-400 uppercase tracking-widest mt-1">{label}</p>
              </div>
            ))}
          </div>
        </FadeIn>
      </div>
    </section>
  );
}

export default Hero;
