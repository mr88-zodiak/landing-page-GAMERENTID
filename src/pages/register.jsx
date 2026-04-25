import { useState } from "react";

const PS_ICON = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" className="w-7 h-7">
    <path d="M8.985 2.596v17.548l3.915 1.261V6.688c0-.69.304-1.151.794-.991.636.181.76.814.76 1.505v5.876c2.441 1.08 4.209-.18 4.209-3.367 0-3.27-1.122-4.912-4.435-6.022-1.261-.41-3.516-1.009-5.243-1.093zM2 18.17l4.918 1.698V16.02L2 14.545zm17.225-9.487c-1.547-.503-2.04.099-2.04 1.078 0 1.022.617 1.424 2.04 1.984 2.428.93 3.543 2.053 3.543 4.511 0 2.97-2.06 4.05-5.11 3.22v-3.44c1.71.688 3.015.778 3.015-.507 0-1.005-.655-1.408-2.094-2.024C16.467 12.5 15 11.36 15 8.937c0-2.702 1.65-3.951 4.225-3.274z" />
  </svg>
);

const EyeIcon = ({ open }) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-4 h-4">
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

const FieldIcon = ({ type }) => {
  const icons = {
    user: (
      <>
        <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />
        <circle cx="12" cy="7" r="4" />
      </>
    ),
    email: (
      <>
        <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
        <polyline points="22,6 12,13 2,6" />
      </>
    ),
    phone: (
      <>
        <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 13a19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 3.56 2h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z" />
      </>
    ),
    lock: (
      <>
        <rect x="3" y="11" width="18" height="11" rx="2" ry="2" />
        <path d="M7 11V7a5 5 0 0 1 10 0v4" />
      </>
    ),
    id: (
      <>
        <rect x="2" y="5" width="20" height="14" rx="2" />
        <path d="M16 10a2 2 0 1 1-4 0 2 2 0 0 1 4 0z" />
        <line x1="16" y1="14" x2="21" y2="14" />
        <line x1="16" y1="17" x2="21" y2="17" />
      </>
    ),
  };
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-4 h-4 opacity-35">
      {icons[type]}
    </svg>
  );
};

const steps = ["Akun", "Identitas", "Selesai"];

export default function RegisterPage() {
  const [step, setStep] = useState(0);
  const [showPass, setShowPass] = useState(false);
  const [showConfirm, setShowConfirm] = useState(false);
  const [loading, setLoading] = useState(false);
  const [done, setDone] = useState(false);

  const [form, setForm] = useState({
    username: "",
    email: "",
    phone: "",
    password: "",
    confirm: "",
    fullname: "",
    nik: "",
    address: "",
    agree: false,
  });

  const set = (k) => (e) => setForm({ ...form, [k]: e.target.type === "checkbox" ? e.target.checked : e.target.value });

  const strengthLevel = () => {
    const p = form.password;
    if (!p) return 0;
    let s = 0;
    if (p.length >= 8) s++;
    if (/[A-Z]/.test(p)) s++;
    if (/[0-9]/.test(p)) s++;
    if (/[^A-Za-z0-9]/.test(p)) s++;
    return s;
  };

  const strengthLabel = ["", "Lemah", "Sedang", "Kuat", "Sangat Kuat"];
  const strengthColor = ["", "#e24b4a", "#ef9f27", "#0070d2", "#1d9e75"];
  const sl = strengthLevel();

  const handleNext = () => {
    if (step < 1) setStep(step + 1);
  };
  const handleBack = () => {
    if (step > 0) setStep(step - 1);
  };
  const handleSubmit = () => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setDone(true);
      setStep(2);
    }, 2000);
  };

  return (
    <div className="min-h-screen bg-[#0a0a0f] flex items-center justify-center relative overflow-hidden px-4 py-8" style={{ fontFamily: "'Rajdhani', sans-serif" }}>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Rajdhani:wght@400;500;600;700&family=Orbitron:wght@400;700;900&display=swap');
        .grid-bg {
          background-image:
            linear-gradient(rgba(0,112,210,0.06) 1px, transparent 1px),
            linear-gradient(90deg, rgba(0,112,210,0.06) 1px, transparent 1px);
          background-size: 40px 40px;
        }
        .scanline::before {
          content:''; position:absolute; inset:0; pointer-events:none; border-radius:inherit;
          background: repeating-linear-gradient(0deg,transparent,transparent 2px,rgba(0,0,0,0.07) 2px,rgba(0,0,0,0.07) 4px);
        }
        .inp {
          background: rgba(255,255,255,0.04);
          border: 1px solid rgba(255,255,255,0.08);
          transition: all 0.2s;
          color: white;
          width: 100%;
          border-radius: 12px;
          padding: 11px 40px 11px 14px;
          font-size: 15px;
          font-family: 'Rajdhani', sans-serif;
        }
        .inp::placeholder { color: rgba(255,255,255,0.2); }
        .inp:focus {
          outline: none;
          border-color: #0070d2;
          background: rgba(0,112,210,0.08);
          box-shadow: 0 0 0 3px rgba(0,112,210,0.15);
        }
        .inp.err { border-color: rgba(226,75,74,0.6); background: rgba(226,75,74,0.05); }
        .btn-primary {
          background: linear-gradient(135deg, #0070d2, #003d7a);
          transition: all 0.2s; position: relative; overflow: hidden;
        }
        .btn-primary::after { content:''; position:absolute; inset:0; background:linear-gradient(135deg,rgba(255,255,255,0.1),transparent); }
        .btn-primary:hover { transform:translateY(-1px); box-shadow:0 8px 25px rgba(0,112,210,0.5); }
        .btn-primary:active { transform:translateY(0); }
        .btn-primary:disabled { opacity:0.5; transform:none; }
        .corner-tl { border-top:2px solid #0070d2; border-left:2px solid #0070d2; }
        .corner-br { border-bottom:2px solid #0070d2; border-right:2px solid #0070d2; }
        .float { animation: float 6s ease-in-out infinite; }
        @keyframes float { 0%,100%{transform:translateY(0) rotate(-3deg)} 50%{transform:translateY(-12px) rotate(-3deg)} }
        .check-anim { animation: popIn 0.5s cubic-bezier(0.34,1.56,0.64,1); }
        @keyframes popIn { 0%{transform:scale(0) rotate(-20deg)} 100%{transform:scale(1) rotate(0deg)} }
        .slide-in { animation: slideIn 0.35s ease; }
        @keyframes slideIn { 0%{opacity:0;transform:translateX(20px)} 100%{opacity:1;transform:translateX(0)} }
        textarea.inp { resize: none; padding: 10px 14px; }
        .step-line { transition: width 0.5s ease; }
        .glow-green { box-shadow: 0 0 30px rgba(29,158,117,0.4), 0 0 60px rgba(29,158,117,0.15); }
      `}</style>

      <div className="absolute inset-0 grid-bg" />
      <div className="absolute top-0 left-1/3 w-96 h-96 rounded-full opacity-8 pointer-events-none" style={{ background: "radial-gradient(circle,#0070d2,transparent 70%)", filter: "blur(70px)" }} />
      <div className="absolute bottom-0 right-1/4 w-72 h-72 rounded-full opacity-6 pointer-events-none" style={{ background: "radial-gradient(circle,#003d7a,transparent 70%)", filter: "blur(80px)" }} />

      {/* Floating decoration */}
      <div className="absolute top-20 right-12 opacity-15 float text-[#0070d2] pointer-events-none">
        <svg viewBox="0 0 60 40" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-16 h-12">
          <rect x="2" y="8" width="56" height="28" rx="10" />
          <path d="M15 18v8M11 22h8" />
          <circle cx="40" cy="19" r="2.5" fill="currentColor" stroke="none" />
          <circle cx="46" cy="23" r="2.5" fill="currentColor" stroke="none" />
          <circle cx="46" cy="15" r="2.5" fill="currentColor" stroke="none" />
          <circle cx="52" cy="19" r="2.5" fill="currentColor" stroke="none" />
        </svg>
      </div>

      <div className="relative w-full max-w-md">
        <div className="absolute -top-2 -left-2 w-8 h-8 corner-tl" />
        <div className="absolute -bottom-2 -right-2 w-8 h-8 corner-br" />

        <div className="scanline rounded-2xl p-8 relative" style={{ background: "rgba(12,12,20,0.92)", border: "1px solid rgba(255,255,255,0.07)" }}>
          {/* Header */}
          <div className="text-center mb-6">
            <div className="inline-flex items-center justify-center w-14 h-14 rounded-xl mb-3" style={{ background: "linear-gradient(135deg,#0070d2,#003d7a)", boxShadow: "0 0 20px rgba(0,112,210,0.4)" }}>
              <PS_ICON />
            </div>
            <h1 className="text-2xl font-bold text-white" style={{ fontFamily: "'Orbitron',sans-serif", letterSpacing: "0.05em" }}>
              PLAY<span className="text-[#0070d2]">ZONE</span>
            </h1>
            <p className="text-xs text-gray-600 tracking-widest uppercase mt-0.5">Buat Akun Baru</p>
          </div>

          {/* Stepper */}
          <div className="flex items-center mb-7">
            {steps.map((label, i) => (
              <div key={i} className="flex items-center flex-1">
                <div className="flex flex-col items-center gap-1">
                  <div
                    className="w-8 h-8 rounded-full flex items-center justify-center text-xs font-bold transition-all duration-300"
                    style={{
                      fontFamily: "'Orbitron',sans-serif",
                      background: i < step || (i === 2 && done) ? "#0070d2" : i === step ? "rgba(0,112,210,0.2)" : "rgba(255,255,255,0.05)",
                      border: i <= step ? "1.5px solid #0070d2" : "1.5px solid rgba(255,255,255,0.1)",
                      color: i <= step ? "white" : "#555",
                    }}
                  >
                    {i < step || (i === 2 && done) ? (
                      <svg viewBox="0 0 16 16" fill="none" stroke="white" strokeWidth="2.5" className="w-3.5 h-3.5">
                        <polyline points="3,8 7,12 13,4" />
                      </svg>
                    ) : (
                      i + 1
                    )}
                  </div>
                  <span className="text-xs tracking-wider" style={{ color: i === step ? "#0070d2" : "#555" }}>
                    {label}
                  </span>
                </div>
                {i < steps.length - 1 && <div className="flex-1 h-px mx-2 mb-4" style={{ background: i < step ? "#0070d2" : "rgba(255,255,255,0.08)" }} />}
              </div>
            ))}
          </div>

          {/* Step 0 — Akun */}
          {step === 0 && (
            <div className="space-y-4 slide-in">
              <div>
                <label className="block text-xs text-gray-500 mb-1.5 tracking-widest uppercase">Username</label>
                <div className="relative">
                  <input className="inp" placeholder="username_kamu" value={form.username} onChange={set("username")} />
                  <span className="absolute right-3 top-1/2 -translate-y-1/2">
                    <FieldIcon type="user" />
                  </span>
                </div>
              </div>
              <div>
                <label className="block text-xs text-gray-500 mb-1.5 tracking-widest uppercase">Email</label>
                <div className="relative">
                  <input className="inp" type="email" placeholder="nama@email.com" value={form.email} onChange={set("email")} />
                  <span className="absolute right-3 top-1/2 -translate-y-1/2">
                    <FieldIcon type="email" />
                  </span>
                </div>
              </div>
              <div>
                <label className="block text-xs text-gray-500 mb-1.5 tracking-widest uppercase">No. Telepon</label>
                <div className="relative">
                  <input className="inp" type="tel" placeholder="08xxxxxxxxxx" value={form.phone} onChange={set("phone")} />
                  <span className="absolute right-3 top-1/2 -translate-y-1/2">
                    <FieldIcon type="phone" />
                  </span>
                </div>
              </div>
              <div>
                <label className="block text-xs text-gray-500 mb-1.5 tracking-widest uppercase">Password</label>
                <div className="relative">
                  <input className="inp" type={showPass ? "text" : "password"} placeholder="••••••••" value={form.password} onChange={set("password")} style={{ paddingRight: "44px" }} />
                  <button type="button" onClick={() => setShowPass(!showPass)} className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-600 hover:text-[#0070d2] transition-colors">
                    <EyeIcon open={showPass} />
                  </button>
                </div>
                {form.password && (
                  <div className="mt-2">
                    <div className="flex gap-1 mb-1">
                      {[1, 2, 3, 4].map((i) => (
                        <div key={i} className="h-1 flex-1 rounded-full transition-all duration-300" style={{ background: i <= sl ? strengthColor[sl] : "rgba(255,255,255,0.08)" }} />
                      ))}
                    </div>
                    <p className="text-xs" style={{ color: strengthColor[sl] }}>
                      {strengthLabel[sl]}
                    </p>
                  </div>
                )}
              </div>
              <div>
                <label className="block text-xs text-gray-500 mb-1.5 tracking-widest uppercase">Konfirmasi Password</label>
                <div className="relative">
                  <input
                    className={`inp${form.confirm && form.confirm !== form.password ? " err" : ""}`}
                    type={showConfirm ? "text" : "password"}
                    placeholder="••••••••"
                    value={form.confirm}
                    onChange={set("confirm")}
                    style={{ paddingRight: "44px" }}
                  />
                  <button type="button" onClick={() => setShowConfirm(!showConfirm)} className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-600 hover:text-[#0070d2] transition-colors">
                    <EyeIcon open={showConfirm} />
                  </button>
                </div>
                {form.confirm && form.confirm !== form.password && (
                  <p className="text-xs mt-1" style={{ color: "#e24b4a" }}>
                    Password tidak cocok
                  </p>
                )}
              </div>
              <button onClick={handleNext} className="btn-primary w-full rounded-xl py-3.5 text-white font-bold tracking-widest uppercase mt-2" style={{ fontFamily: "'Orbitron',sans-serif", fontSize: "13px", letterSpacing: "0.15em" }}>
                Lanjut →
              </button>
            </div>
          )}

          {/* Step 1 — Identitas */}
          {step === 1 && (
            <div className="space-y-4 slide-in">
              <div>
                <label className="block text-xs text-gray-500 mb-1.5 tracking-widest uppercase">Nama Lengkap</label>
                <div className="relative">
                  <input className="inp" placeholder="Nama sesuai KTP" value={form.fullname} onChange={set("fullname")} />
                  <span className="absolute right-3 top-1/2 -translate-y-1/2">
                    <FieldIcon type="user" />
                  </span>
                </div>
              </div>
              <div>
                <label className="block text-xs text-gray-500 mb-1.5 tracking-widest uppercase">NIK (KTP)</label>
                <div className="relative">
                  <input className="inp" placeholder="16 digit NIK" maxLength={16} value={form.nik} onChange={set("nik")} />
                  <span className="absolute right-3 top-1/2 -translate-y-1/2">
                    <FieldIcon type="id" />
                  </span>
                </div>
                <p className="text-xs mt-1 text-gray-700">Diperlukan untuk verifikasi sewa</p>
              </div>
              <div>
                <label className="block text-xs text-gray-500 mb-1.5 tracking-widest uppercase">Alamat</label>
                <textarea className="inp" rows={3} placeholder="Jl. Contoh No. 1, Kota..." value={form.address} onChange={set("address")} />
              </div>

              {/* Paket */}
              <div>
                <label className="block text-xs text-gray-500 mb-2 tracking-widest uppercase">Pilih Konsol</label>
                <div className="grid grid-cols-3 gap-2">
                  {["PS4", "PS5", "PS VR"].map((c) => (
                    <label key={c} className="cursor-pointer">
                      <input type="radio" name="console" className="sr-only" />
                      <div
                        className="rounded-xl py-2.5 text-center text-sm font-semibold transition-all duration-200 hover:border-[#0070d2]"
                        style={{ background: "rgba(255,255,255,0.04)", border: "1px solid rgba(255,255,255,0.08)", color: "#888" }}
                      >
                        {c}
                      </div>
                    </label>
                  ))}
                </div>
              </div>

              <label className="flex items-start gap-3 cursor-pointer group">
                <div
                  className="mt-0.5 w-4 h-4 rounded flex-shrink-0 flex items-center justify-center transition-all"
                  style={{ background: form.agree ? "#0070d2" : "rgba(255,255,255,0.04)", border: `1px solid ${form.agree ? "#0070d2" : "rgba(255,255,255,0.1)"}` }}
                  onClick={() => setForm({ ...form, agree: !form.agree })}
                >
                  {form.agree && (
                    <svg viewBox="0 0 12 12" fill="none" stroke="white" strokeWidth="2.5" className="w-2.5 h-2.5">
                      <polyline points="2,6 5,9 10,3" />
                    </svg>
                  )}
                </div>
                <span className="text-xs text-gray-600 leading-relaxed group-hover:text-gray-400 transition-colors">
                  Saya setuju dengan{" "}
                  <a href="#" className="text-[#0070d2]">
                    Syarat & Ketentuan
                  </a>{" "}
                  dan{" "}
                  <a href="#" className="text-[#0070d2]">
                    Kebijakan Privasi
                  </a>{" "}
                  PlayZone
                </span>
              </label>

              <div className="flex gap-3 mt-2">
                <button
                  onClick={handleBack}
                  className="flex-1 rounded-xl py-3.5 text-sm font-semibold tracking-widest uppercase transition-all hover:border-gray-600"
                  style={{ background: "rgba(255,255,255,0.04)", border: "1px solid rgba(255,255,255,0.08)", color: "#888", fontFamily: "'Orbitron',sans-serif", fontSize: "12px" }}
                >
                  ← Kembali
                </button>
                <button
                  onClick={handleSubmit}
                  disabled={!form.agree || loading}
                  className="btn-primary flex-1 rounded-xl py-3.5 text-white font-bold tracking-widest uppercase"
                  style={{ fontFamily: "'Orbitron',sans-serif", fontSize: "12px", letterSpacing: "0.12em" }}
                >
                  {loading ? (
                    <span className="flex items-center justify-center gap-2">
                      <svg className="animate-spin w-4 h-4" viewBox="0 0 24 24" fill="none">
                        <circle cx="12" cy="12" r="10" stroke="rgba(255,255,255,0.2)" strokeWidth="3" />
                        <path d="M12 2a10 10 0 0 1 10 10" stroke="white" strokeWidth="3" strokeLinecap="round" />
                      </svg>
                      Memproses...
                    </span>
                  ) : (
                    "Daftar"
                  )}
                </button>
              </div>
            </div>
          )}

          {/* Step 2 — Selesai */}
          {step === 2 && (
            <div className="text-center py-4 slide-in">
              <div className="inline-flex items-center justify-center w-20 h-20 rounded-full mb-5 check-anim glow-green" style={{ background: "linear-gradient(135deg,#1d9e75,#0f6e56)" }}>
                <svg viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2.5" className="w-10 h-10">
                  <polyline points="20,6 9,17 4,12" />
                </svg>
              </div>
              <h2 className="text-xl font-bold text-white mb-2" style={{ fontFamily: "'Orbitron',sans-serif" }}>
                Pendaftaran Berhasil!
              </h2>
              <p className="text-sm text-gray-500 mb-1">
                Selamat datang di <span className="text-[#0070d2]">PlayZone</span>
              </p>
              <p className="text-xs text-gray-600 mb-6">
                Email verifikasi telah dikirim ke
                <br />
                <span className="text-gray-400">{form.email || "email kamu"}</span>
              </p>

              <div className="rounded-xl p-4 mb-6 text-left space-y-2" style={{ background: "rgba(0,112,210,0.07)", border: "1px solid rgba(0,112,210,0.2)" }}>
                <p className="text-xs text-gray-600 tracking-widest uppercase mb-2">Langkah Selanjutnya</p>
                {["Cek email & verifikasi akun", "Login dan lengkapi profil", "Mulai sewa PlayStation!"].map((t, i) => (
                  <div key={i} className="flex items-center gap-3">
                    <span className="w-5 h-5 rounded-full flex items-center justify-center text-xs font-bold flex-shrink-0" style={{ background: "rgba(0,112,210,0.3)", color: "#0070d2", fontFamily: "'Orbitron',sans-serif" }}>
                      {i + 1}
                    </span>
                    <span className="text-sm text-gray-400">{t}</span>
                  </div>
                ))}
              </div>

              <a
                href="#"
                className="btn-primary inline-flex items-center justify-center w-full rounded-xl py-3.5 text-white font-bold tracking-widest uppercase"
                style={{ fontFamily: "'Orbitron',sans-serif", fontSize: "12px", letterSpacing: "0.15em" }}
              >
                Masuk Sekarang
              </a>
            </div>
          )}

          {/* Footer */}
          {step < 2 && (
            <p className="text-center text-xs text-gray-700 mt-5">
              Sudah punya akun?{" "}
              <a href="#" className="text-[#0070d2] hover:text-blue-300 transition-colors font-semibold">
                Masuk di sini
              </a>
            </p>
          )}
        </div>
      </div>
    </div>
  );
}
