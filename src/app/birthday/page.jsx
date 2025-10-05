// app/birthday/page.tsx
"use client";

import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import Confetti from "react-confetti";

export default function BirthdayPage() {
  const [showGift, setShowGift] = useState(false);
  const [showBalloons, setShowBalloons] = useState(false);

  // Tampilkan balon setelah 10 detik
  useEffect(() => {
    const timer = setTimeout(() => setShowBalloons(true), 10000);
    return () => clearTimeout(timer);
  }, []);

  const balloonColors = [
    "bg-pink-400",
    "bg-purple-400",
    "bg-yellow-300",
    "bg-blue-300",
    "bg-green-300",
  ];

  return (
    <div className="relative flex flex-col items-center justify-center min-h-screen bg-gradient-to-b from-pink-100 via-purple-100 to-yellow-100 overflow-hidden">
      {/* Confetti */}
      <Confetti
        width={typeof window !== "undefined" ? window.innerWidth : 300}
        height={typeof window !== "undefined" ? window.innerHeight : 300}
        recycle={false}
        numberOfPieces={300}
      />

      {/* Hero Section */}
      <motion.h1
        className="text-5xl md:text-7xl font-bold text-pink-600 drop-shadow-lg text-center"
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        🎂 Happy Birthday, Sayangku! 🎉
      </motion.h1>

      <motion.p
        className="mt-6 text-lg md:text-2xl text-gray-700 text-center max-w-2xl"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 1 }}
      >
        Hari ini spesial hanya untukmu. Aku bersyukur setiap hari bisa
        bersamamu. Semoga ulang tahun ini penuh kebahagiaan, cinta, dan semua
        impianmu segera terwujud. 💖
      </motion.p>

      {/* Card sederhana */}
      <motion.div
        className="mt-10 w-full max-w-md"
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 1.5, duration: 0.8 }}
      >
        <div className="rounded-2xl shadow-lg bg-white/70 backdrop-blur-md p-6 flex flex-col items-center">
          <h2 className="text-xl font-semibold text-pink-600 mb-4">
            Kejutan Untukmu 🎁
          </h2>
          <button
            onClick={() => setShowGift(true)}
            className="px-6 py-3 bg-pink-500 hover:bg-pink-600 text-white rounded-full shadow-md transition"
          >
            Open Gift 💌
          </button>
        </div>
      </motion.div>

      {/* Modal hadiah */}
      {showGift && (
        <div className="fixed inset-0 flex items-center justify-center bg-black/50 z-50">
          <div className="bg-gradient-to-b from-white to-pink-50 rounded-2xl p-8 max-w-md mx-auto shadow-lg text-center">
            <h3 className="text-2xl font-bold text-pink-600">
              💝 Hadiah Spesial Untukmu 💝
            </h3>
            <p className="text-gray-700 mt-4 text-lg leading-relaxed">
              Selamat ulang tahun, Bebecuu. Hari ini adalah hari kamu, dan aku
              ingin kamu tahu betapa berartinya kamu bagiku. Di hari yang
              spesial ini, aku mau mengucapkan terima kasih yang paling besar.
              Terima kasih karena kamu sudah berjuang keras untuk kita. Terima
              kasih karena kamu sudah jadi sosok yang begitu sabar dan penuh
              pengertian—aku sungguh melihat semua effort luar biasa itu.
            </p>
            <p className="text-gray-700 mt-4 text-lg leading-relaxed">
              "Mulai hari ini, di usiamu yang baru, aku mau kamu fokus untuk
              merasa aman, dicintai, dan tenang. Biar aku yang memegang kendali
              dan tanggung jawab untuk mengubah pola yang harus diubah. Aku
              ingin hubungan kita memasuki siklus yang baru. Semoga hari-harimu
              penuh kebahagiaan dan ketenangan yang selama ini kamu dambakan.
              Aku mencintaimu, dan aku berjanji akan menjadi pasangan yang bisa
              kamu percaya dan yang kamu banggakan. Selamat ulang tahun sekali
              lagi, Bebe."
            </p>
            <button
              onClick={() => setShowGift(false)}
              className="mt-6 px-6 py-2 bg-pink-500 hover:bg-pink-600 text-white rounded-lg shadow-md"
            >
              Close ✨
            </button>
          </div>
        </div>
      )}

      {/* Balon animasi */}
      {showBalloons &&
        Array.from({ length: 8 }).map((_, i) => (
          <motion.div
            key={i}
            className={`absolute bottom-0 w-10 h-14 rounded-full ${
              balloonColors[i % balloonColors.length]
            } shadow-md`}
            style={{ left: `${10 + i * 10}%` }}
            initial={{ y: 0, opacity: 0 }}
            animate={{ y: -800, opacity: 1 }}
            transition={{
              duration: 8 + i,
              delay: i * 0.5,
              repeat: Infinity,
              repeatType: "loop",
            }}
          />
        ))}
    </div>
  );
}
