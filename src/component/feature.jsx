/* eslint-disable no-unused-vars */
import { useContext } from "react";
import FadeIn from "./FadeIn";
import { ThemeContext } from "../App";
function Features({ features }) {
  const { theme, setTheme } = useContext(ThemeContext);
  return (
    <section className={theme === "dark" ? "bg-zinc-900/50 py-20 px-6 transition-colors duration-300" : "bg-zinc-50 py-20 px-6 transition-colors duration-300"}>
      <div className="max-w-5xl mx-auto">
        <FadeIn>
          <div className="text-center mb-12">
            <p className={theme === "dark" ? "text-xs font-bold text-red-600 dark:text-red-400 uppercase tracking-widest mb-2" : "text-xs font-bold text-red-600 dark:text-red-400 uppercase tracking-widest mb-2"}>Keunggulan</p>
            <h2 className={theme === "dark" ? "font-orbitron font-bold text-3xl md:text-4xl  dark:text-white" : "font-orbitron font-bold text-3xl md:text-4xl text-zinc-900 "}>Kenapa Pilih Kami?</h2>
          </div>
        </FadeIn>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {features.map((f, i) => (
            <FadeIn key={f.t} delay={i * 100}>
              <div
                className={
                  theme === "dark"
                    ? "group bg-zinc-900 border border-zinc-800 rounded-2xl p-6 hover:border-red-400 dark:hover:border-red-700 transition-all duration-300 hover:shadow-lg hover:shadow-red-500/5"
                    : "group bg-white border border-zinc-200 rounded-2xl p-6 hover:border-red-400 dark:hover:border-red-700 transition-all duration-300 hover:shadow-lg hover:shadow-red-500/5"
                }
              >
                <span className="text-3xl mb-3 block">{f.i}</span>
                <h3
                  className={
                    theme === "dark"
                      ? "font-semibold text-base  dark:text-white mb-2 group-hover:text-red-600 dark:group-hover:text-red-400 transition-colors"
                      : "font-semibold text-base text-zinc-900  mb-2 group-hover:text-red-600 dark:group-hover:text-red-400 transition-colors"
                  }
                >
                  {f.t}
                </h3>
                <p className={theme === "dark" ? "text-sm text-zinc-500 dark:text-zinc-400 leading-relaxed" : "text-sm text-zinc-800  leading-relaxed"}>{f.d}</p>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
export default Features;
