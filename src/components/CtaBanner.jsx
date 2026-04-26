/* eslint-disable no-unused-vars */
import { useContext } from "react";
import FadeIn from "./FadeIn";
import { ThemeContext } from "../App";

function CtaBanner() {
  const { theme, setTheme } = useContext(ThemeContext);
  return (
    <section className={theme === "dark" ? "bg-zinc-950 py-16 px-6 transition-colors duration-300" : "bg-white py-16 px-6 transition-colors duration-300"}>
      <div className="max-w-4xl mx-auto">
        <FadeIn>
          <div className="relative overflow-hidden bg-red-600 dark:bg-red-700 rounded-3xl p-12 text-center">
            <span className="absolute -top-6 -right-6 text-[130px] opacity-10 pointer-events-none select-none">🎮</span>
            <span className="absolute -bottom-4 -left-4 text-[90px] opacity-10 pointer-events-none select-none rotate-12">🕹️</span>
            <h2 className="relative font-orbitron font-black text-2xl md:text-3xl text-white mb-3">Siap Main Sekarang?</h2>
            <p className="relative text-white/80 text-base mb-8 max-w-sm mx-auto">Hubungi kami dan konsol sudah di tanganmu dalam 1 jam!</p>
            <button className="relative bg-white text-red-600 font-bold text-sm px-8 py-3.5 rounded-xl border-0 cursor-pointer hover:scale-105 active:scale-95 transition-transform shadow-xl">💬 Chat via WhatsApp</button>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}

export default CtaBanner;
