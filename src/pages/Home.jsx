/* eslint-disable no-unused-vars */
import { useState, useEffect, useRef, useContext } from "react";
import Navbar from "../components/Navbar";
import HeroSection from "../components/HeroSection";
import Console from "../components/Console";
import FAQ from "../components/FAQ";
import Feature from "../components/Feature";
import CtaBanner from "../components/CtaBanner";
import Footer from "../components/Footer";
import { ThemeContext } from "../App";
export default function Home() {
  const { theme, setTheme } = useContext(ThemeContext);
  //   const [dark, setDark] = useState(() => window.matchMedia("(prefers-color-scheme: dark)").matches);
  const heroStats = [
    { num: "500+", label: "Pelanggan" },
    { num: "50+", label: "Game Tersedia" },
    { num: "4.9★", label: "Rating" },
    { num: "24/7", label: "Siap Antar" },
  ];
  const consoles = [
    { icon: "🎮", name: "PlayStation 5", desc: "Next-gen 4K, SSD super cepat, DualSense haptic feedback.", price: "Mulai Rp 35.000/jam", hot: true },
    { icon: "🕹️", name: "PlayStation 4", desc: "Ribuan judul game, performa handal, harga terjangkau.", price: "Mulai Rp 20.000/jam", hot: false },
    { icon: "📺", name: "PS5 + Smart TV", desc: 'Paket lengkap dengan Smart TV 43" untuk pengalaman imersif.', price: "Mulai Rp 60.000/jam", hot: false },
    { icon: "👥", name: "Paket Duo", desc: "2 konsol PS4 + 4 controller. Cocok buat party bareng teman.", price: "Mulai Rp 70.000/jam", hot: false },
  ];
  const steps = [
    { n: "01", t: "Pilih Paket", d: "Pilih konsol, durasi, dan game yang ingin dimainkan." },
    { n: "02", t: "Pesan & Bayar", d: "Konfirmasi via WhatsApp, bayar di awal. Mudah & aman!" },
    { n: "03", t: "Antar ke Rumah", d: "Konsol tiba dalam 1 jam. Tinggal colok dan main!" },
    { n: "04", t: "Kembalikan", d: "Selesai? Kami yang jemput. Tidak perlu repot ke mana-mana." },
  ];
  const features = [
    { i: "🚀", t: "Antar Cepat 1 Jam", d: "Konsol sampai dalam 60 menit setelah pemesanan dikonfirmasi." },
    { i: "🎯", t: "50+ Judul Game", d: "Dari FIFA, GTA, hingga God of War dan Spider-Man." },
    { i: "🛡️", t: "Konsol Terawat", d: "Dicek dan dibersihkan sebelum dikirim ke kamu." },
    { i: "💬", t: "Support 24/7", d: "Tim kami siap bantu kapan saja via WhatsApp." },
    { i: "💳", t: "Bayar Fleksibel", d: "Transfer bank, dompet digital, atau tunai." },
    { i: "🎁", t: "Diskon Member", d: "Sewa 5x+, dapat diskon 15% untuk setiap order berikutnya." },
  ];
  const links = [
    { name: "Konsol", href: "#consoles" },
    { name: "Harga", href: "#pricing" },
    { name: "Cara Sewa", href: "#how-it-works" },
    { name: "Tentang", href: "#about" },
  ];
  //   useEffect(() => {
  //     document.documentElement.classList.toggle("dark", dark);
  //   }, [dark]);

  return (
    <div className={theme === "dark" ? "min-h-screen bg-zinc-950" : "min-h-screen bg-white"}>
      <Navbar links={links} />
      <main>
        <HeroSection heroStats={heroStats} />
        <Console consoles={consoles} />
        <FAQ steps={steps} />
        <Feature features={features} />
        <CtaBanner />
      </main>
      <Footer />
    </div>
  );
}
