/* eslint-disable no-unused-vars */
import { useState } from "react";

const PS_ICON = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" className="w-8 h-8">
    <path d="M8.985 2.596v17.548l3.915 1.261V6.688c0-.69.304-1.151.794-.991.636.181.76.814.76 1.505v5.876c2.441 1.08 4.209-.18 4.209-3.367 0-3.27-1.122-4.912-4.435-6.022-1.261-.41-3.516-1.009-5.243-1.093zM2 18.17l4.918 1.698V16.02L2 14.545zm17.225-9.487c-1.547-.503-2.04.099-2.04 1.078 0 1.022.617 1.424 2.04 1.984 2.428.93 3.543 2.053 3.543 4.511 0 2.97-2.06 4.05-5.11 3.22v-3.44c1.71.688 3.015.778 3.015-.507 0-1.005-.655-1.408-2.094-2.024C16.467 12.5 15 11.36 15 8.937c0-2.702 1.65-3.951 4.225-3.274z" />
  </svg>
);

const EyeIcon = ({ open }) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-5 h-5">
    {open ? (
      <>
        <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z" />
        <circle cx="12" cy="12" r="3" />
      </>
    ) : (
      <>
        <path d="M17.94 17.94A10.07 10.07 0 0 1 12 20c-7 0-11-8-11-8a18.45 18.45 0 0 1 5.06-5.94M9.9 4.24A9.12 9.12 0 0 1 12 4c7 0 11 8 11 8a18.5 18.5 0 0 1-2.16 3.19m-6.72-1.07a3 3 0 1 1-4.24-4.24" />
        <line x1="1" y1="1" x2="23" y2="23" />
      </>
    )}
  </svg>
);

const ControllerIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-5 h-5 opacity-30">
    <rect x="2" y="7" width="20" height="12" rx="4" />
    <path d="M7 11v4M5 13h4" />
    <circle cx="15" cy="12" r="1" fill="currentColor" />
    <circle cx="17" cy="14" r="1" fill="currentColor" />
    <circle cx="17" cy="10" r="1" fill="currentColor" />
    <circle cx="19" cy="12" r="1" fill="currentColor" />
  </svg>
);

export default function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading] = useState(false);
  const [focused, setFocused] = useState(null);

  const handleLogin = (e) => {
    e.preventDefault();
    setLoading(true);
    setTimeout(() => setLoading(false), 2000);
  };

  return (
    <div className="min-h-screen bg-[#0a0a0f] flex items-center justify-center relative overflow-hidden px-4 font-['Rajdhani',sans-serif]">
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Rajdhani:wght@400;500;600;700&family=Orbitron:wght@400;700;900&display=swap');
        
        .glow-blue { box-shadow: 0 0 20px rgba(0, 112, 210, 0.4), 0 0 40px rgba(0, 112, 210, 0.1); }
        .glow-text { text-shadow: 0 0 20px rgba(0, 160, 255, 0.6); }
        
        .grid-bg {
          background-image: 
            linear-gradient(rgba(0, 112, 210, 0.06) 1px, transparent 1px),
            linear-gradient(90deg, rgba(0, 112, 210, 0.06) 1px, transparent 1px);
          background-size: 40px 40px;
        }
        
        .scanline::before {
          content: '';
          position: absolute;
          inset: 0;
          background: repeating-linear-gradient(
            0deg,
            transparent,
            transparent 2px,
            rgba(0,0,0,0.07) 2px,
            rgba(0,0,0,0.07) 4px
          );
          pointer-events: none;
          border-radius: inherit;
        }
        
        .input-field {
          background: rgba(255,255,255,0.04);
          border: 1px solid rgba(255,255,255,0.08);
          transition: all 0.2s ease;
        }
        .input-field:focus {
          outline: none;
          border-color: #0070d2;
          background: rgba(0, 112, 210, 0.08);
          box-shadow: 0 0 0 3px rgba(0, 112, 210, 0.15);
        }
        
        .btn-primary {
          background: linear-gradient(135deg, #0070d2, #003d7a);
          transition: all 0.2s ease;
          position: relative;
          overflow: hidden;
        }
        .btn-primary::after {
          content: '';
          position: absolute;
          inset: 0;
          background: linear-gradient(135deg, rgba(255,255,255,0.1), transparent);
        }
        .btn-primary:hover {
          transform: translateY(-1px);
          box-shadow: 0 8px 25px rgba(0, 112, 210, 0.5);
        }
        .btn-primary:active { transform: translateY(0); }
        
        .card-border {
          border: 1px solid rgba(255,255,255,0.07);
          background: rgba(12, 12, 20, 0.9);
        }
        
        .accent-dot {
          animation: pulse 2s ease-in-out infinite;
        }
        @keyframes pulse {
          0%, 100% { opacity: 1; }
          50% { opacity: 0.4; }
        }
        
        .float {
          animation: float 6s ease-in-out infinite;
        }
        @keyframes float {
          0%, 100% { transform: translateY(0px) rotate(-3deg); }
          50% { transform: translateY(-12px) rotate(-3deg); }
        }
        
        .corner-tl { border-top: 2px solid #0070d2; border-left: 2px solid #0070d2; }
        .corner-br { border-bottom: 2px solid #0070d2; border-right: 2px solid #0070d2; }
      `}</style>

      {/* Grid background */}
      <div className="absolute inset-0 grid-bg" />

      {/* Ambient light blobs */}
      <div className="absolute top-0 left-1/4 w-96 h-96 rounded-full opacity-10" style={{ background: "radial-gradient(circle, #0070d2, transparent 70%)", filter: "blur(60px)" }} />
      <div className="absolute bottom-0 right-1/4 w-80 h-80 rounded-full opacity-8" style={{ background: "radial-gradient(circle, #003d7a, transparent 70%)", filter: "blur(80px)" }} />

      {/* Floating controller decorations */}
      <div className="absolute top-24 right-16 opacity-20 float text-[#0070d2]">
        <svg viewBox="0 0 60 40" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-16 h-12">
          <rect x="2" y="8" width="56" height="28" rx="10" />
          <path d="M15 18v8M11 22h8" />
          <circle cx="40" cy="19" r="2.5" fill="currentColor" stroke="none" />
          <circle cx="46" cy="23" r="2.5" fill="currentColor" stroke="none" />
          <circle cx="46" cy="15" r="2.5" fill="currentColor" stroke="none" />
          <circle cx="52" cy="19" r="2.5" fill="currentColor" stroke="none" />
          <ellipse cx="22" cy="32" rx="4" ry="2.5" />
          <ellipse cx="38" cy="32" rx="4" ry="2.5" />
        </svg>
      </div>
      <div className="absolute bottom-32 left-12 opacity-10 float text-[#0070d2]" style={{ animationDelay: "2s" }}>
        <svg viewBox="0 0 40 28" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-12 h-8">
          <rect x="1" y="5" width="38" height="20" rx="7" />
          <path d="M10 12v6M7 15h6" />
          <circle cx="27" cy="13" r="2" fill="currentColor" stroke="none" />
          <circle cx="31" cy="17" r="2" fill="currentColor" stroke="none" />
          <circle cx="31" cy="11" r="2" fill="currentColor" stroke="none" />
          <circle cx="35" cy="15" r="2" fill="currentColor" stroke="none" />
        </svg>
      </div>

      {/* Main card */}
      <div className="relative w-full max-w-md">
        {/* Corner brackets */}
        <div className="absolute -top-2 -left-2 w-8 h-8 corner-tl" />
        <div className="absolute -bottom-2 -right-2 w-8 h-8 corner-br" />

        <div className="card-border rounded-2xl p-8 relative scanline">
          {/* Header */}
          <div className="text-center mb-8">
            <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl mb-4 glow-blue" style={{ background: "linear-gradient(135deg, #0070d2, #003d7a)" }}>
              <PS_ICON />
            </div>
            <h1 className="text-3xl font-bold text-white mb-1" style={{ fontFamily: "'Orbitron', sans-serif", letterSpacing: "0.05em" }}>
              PLAY<span className="text-[#0070d2]">ZONE</span>
            </h1>
            <p className="text-sm text-gray-500 tracking-widest uppercase" style={{ fontFamily: "'Rajdhani', sans-serif" }}>
              PlayStation Rental
            </p>
            <div className="flex items-center justify-center gap-2 mt-3">
              <span className="accent-dot w-1.5 h-1.5 rounded-full bg-[#0070d2]" />
              <span className="text-xs text-gray-600 tracking-wider">SISTEM AKTIF</span>
              <span className="accent-dot w-1.5 h-1.5 rounded-full bg-[#0070d2]" style={{ animationDelay: "1s" }} />
            </div>
          </div>

          {/* Divider */}
          <div className="flex items-center gap-3 mb-6">
            <div className="flex-1 h-px" style={{ background: "linear-gradient(90deg, transparent, rgba(0,112,210,0.4))" }} />
            <span className="text-xs text-gray-600 tracking-widest">MASUK AKUN</span>
            <div className="flex-1 h-px" style={{ background: "linear-gradient(270deg, transparent, rgba(0,112,210,0.4))" }} />
          </div>

          {/* Form */}
          <form onSubmit={handleLogin} className="space-y-4">
            {/* Email */}
            <div>
              <label className="block text-xs text-gray-500 mb-1.5 tracking-widest uppercase">Email / Username</label>
              <div className="relative">
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  onFocus={() => setFocused("email")}
                  onBlur={() => setFocused(null)}
                  placeholder="nama@email.com"
                  className="input-field w-full rounded-xl px-4 py-3 text-white placeholder-gray-700 text-sm"
                  style={{ fontFamily: "'Rajdhani', sans-serif", fontSize: "15px" }}
                />
                <div className="absolute right-3 top-1/2 -translate-y-1/2 text-[#0070d2]">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-4 h-4 opacity-40">
                    <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />
                    <circle cx="12" cy="7" r="4" />
                  </svg>
                </div>
              </div>
            </div>

            {/* Password */}
            <div>
              <label className="block text-xs text-gray-500 mb-1.5 tracking-widest uppercase">Password</label>
              <div className="relative">
                <input
                  type={showPassword ? "text" : "password"}
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  onFocus={() => setFocused("password")}
                  onBlur={() => setFocused(null)}
                  placeholder="••••••••"
                  className="input-field w-full rounded-xl px-4 py-3 pr-12 text-white placeholder-gray-700 text-sm"
                  style={{ fontFamily: "'Rajdhani', sans-serif", fontSize: "15px" }}
                />
                <button type="button" onClick={() => setShowPassword(!showPassword)} className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-600 hover:text-[#0070d2] transition-colors">
                  <EyeIcon open={showPassword} />
                </button>
              </div>
            </div>

            {/* Remember & Forgot */}
            <div className="flex items-center justify-between pt-1">
              <label className="flex items-center gap-2 cursor-pointer group">
                <div className="relative">
                  <input type="checkbox" className="sr-only" />
                  <div className="w-4 h-4 rounded border border-gray-700 group-hover:border-[#0070d2] transition-colors" style={{ background: "rgba(255,255,255,0.03)" }} />
                </div>
                <span className="text-xs text-gray-600 group-hover:text-gray-400 transition-colors">Ingat saya</span>
              </label>
              <a href="#" className="text-xs text-[#0070d2] hover:text-blue-300 transition-colors">
                Lupa password?
              </a>
            </div>

            {/* Submit */}
            <button
              type="submit"
              disabled={loading}
              className="btn-primary w-full rounded-xl py-3.5 text-white font-semibold tracking-widest uppercase mt-2 disabled:opacity-60"
              style={{ fontFamily: "'Orbitron', sans-serif", fontSize: "13px", letterSpacing: "0.15em" }}
            >
              {loading ? (
                <span className="flex items-center justify-center gap-2">
                  <svg className="animate-spin w-4 h-4" viewBox="0 0 24 24" fill="none">
                    <circle cx="12" cy="12" r="10" stroke="rgba(255,255,255,0.2)" strokeWidth="3" />
                    <path d="M12 2a10 10 0 0 1 10 10" stroke="white" strokeWidth="3" strokeLinecap="round" />
                  </svg>
                  Memuat...
                </span>
              ) : (
                "Masuk"
              )}
            </button>
          </form>

          {/* Divider */}
          <div className="flex items-center gap-3 my-5">
            <div className="flex-1 h-px bg-gray-800" />
            <span className="text-xs text-gray-700">atau</span>
            <div className="flex-1 h-px bg-gray-800" />
          </div>

          {/* Register */}
          <p className="text-center text-sm text-gray-600">
            Belum punya akun?{" "}
            <a href="#" className="text-[#0070d2] hover:text-blue-300 font-semibold transition-colors">
              Daftar sekarang
            </a>
          </p>

          {/* Bottom strip */}
          <div className="mt-6 pt-5 border-t border-gray-800/60 flex items-center justify-center gap-4">
            {["PS4", "PS5", "PS VR"].map((tag) => (
              <span key={tag} className="text-xs tracking-widest text-gray-700 flex items-center gap-1">
                <span className="w-1 h-1 rounded-full bg-gray-700 inline-block" />
                {tag}
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
