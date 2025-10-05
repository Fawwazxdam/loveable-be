"use client";

import Layout from "../../components/Layout";
import Timeline from "../../components/Timeline";
import { motion } from "framer-motion";

const COMMITMENTS = [
  {
    title: "1. Mengubah Ketakutan Menjadi Kepastian",
    description:
      "Aku akan berhenti membiarkan keraguanku (takut merepotkan atau mengekang) membuatmu merasa terbebani dan sendirian.",
    old: 'Melempar kembali keputusan ("Terserah kamu saja") yang membuatmu merasa aku lepas tangan dan tidak peduli.',
    new: "Memimpin dengan pilihan yang bertanggung jawab. Aku akan berpikir logis, memberikan minimal satu opsi tegas dariku, dan meyakinkanmu bahwa aku siap menanggung keputusanku.",
    old2: "Menarik diri atau ambigu saat kamu sedang chaos karena aku tidak tahu harus berbuat apa.",
    new2: "Menyatakan kehadiran yang tanpa syarat. Ketika kamu rapuh, aku akan menyingkirkan logikaku sejenak, dan hanya fokus pada kehadiran. Aku akan berkata: 'Aku di sini. Kamu fokus saja pada perasaanmu, aku akan pegang kendalinya.'",
  },
  {
    title: "2. Menyuntikkan Perasaan ke Dalam Komunikasi",
    description:
      "Aku akan menjadikan komunikasi kita hidup lagi dengan memasukkan effort dan emosiku, memutus siklus monoton yang mengekang.",
    old: "Komunikasi yang datar dan hanya berisi fakta/rutinitas, membuatmu merasa kurang dicintai dan tulus.",
    new: "Menjelaskan proses emosional dan logisku. Aku akan berbagi perasaanku secara jujur, bukan hanya fakta. Contoh: 'Secara logika, aku capek, tapi perasaanku rindu. Aku butuh 10 menit rehat, setelah itu aku sepenuhnya milikmu.'",
    old2: "Menganggap effort itu hanya soal rutinitas dan hal-hal yang 'harus' dilakukan.",
    new2: "Melakukan investasi waktu yang berkualitas di luar kebiasaan. Aku akan berinisiatif merencanakan sesuatu yang memecah pola monoton, hanya untuk menunjukkan kalau aku mendengarkan dan memprioritaskanmu.",
  },
  {
    title: "3. Merangkul Peran Sebagai Pelabuhan yang Aman",
    description:
      "Aku akan mengakui dan menerima sepenuhnya peranku sebagai orang yang paling bisa kamu andalkan, terutama di saat kamu rapuh dan butuh sosok yang lebih besar.",
    old: "Membiarkanmu merasa tidak cukup baik karena pola burukku terus berulang.",
    new: "Mengakui usahamu dan mengambil tanggung jawab penuh. Aku akan memvalidasi semua usahamu yang keras untuk mengerti aku dan menegaskan bahwa masalahnya adalah pattern aku, bukan kekuranganmu.",
    old2: "Hanya menyelesaikan konflik secara reaktif saat ada masalah.",
    new2: "Mengaktifkan waktu 'audit' untuk perkembangan. Aku akan menggunakan logika dan menetapkan waktu yang tenang untuk kita bahas perkembangan hubungan kita, bukan hanya konflik. Aku ingin tahu apa yang bisa aku lakukan lebih baik minggu depan.",
  },
];

export default function Memories() {
  return (
    <Layout>
      <h2 className="text-2xl font-extrabold mb-6">Komitmen & Perubahan</h2>
      <div className="space-y-8">
        {COMMITMENTS.map((c, idx) => (
          <motion.div
            key={idx}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="card-paper p-6 rounded-2xl"
          >
            <h3 className="text-xl font-bold text-rose-500">{c.title}</h3>
            <p className="mt-2 text-gray-700">{c.description}</p>
            <div className="mt-4 grid md:grid-cols-2 gap-4">
              <div className="p-4 bg-rose-50 rounded-xl">
                <div className="text-sm font-semibold text-gray-500 mb-2">
                  Dulu Aku Melakukannya
                </div>
                <ul className="list-disc pl-5 space-y-2 text-gray-700 text-sm">
                  <li>{c.old}</li>
                  <li>{c.old2}</li>
                </ul>
              </div>
              <div className="p-4 bg-green-50 rounded-xl">
                <div className="text-sm font-semibold text-gray-500 mb-2">
                  Mulai Sekarang Aku Akan Melakukannya
                </div>
                <ul className="list-disc pl-5 space-y-2 text-gray-700 text-sm">
                  <li>{c.new}</li>
                  <li>{c.new2}</li>
                </ul>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </Layout>
  );
}
