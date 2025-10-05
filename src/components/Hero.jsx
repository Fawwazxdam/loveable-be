'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'

export default function Hero({ name }) {
  return (
    <section className="card-paper p-8 rounded-2xl mb-6">
      <motion.h1 initial={{ y: -10, opacity: 0 }} animate={{ y: 0, opacity: 1 }} className="text-3xl md:text-4xl font-extrabold">
        Untuk {name}
      </motion.h1>
      <motion.p initial={{ y: 10, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ delay: 0.15 }} className="mt-3 text-gray-700">
        Maafkan aku. Aku menulis ini karena aku ingin kamu tahu perasaanku dan janji-janji yang akan kumiliki untuk perbaikan.
      </motion.p>
      <div className="mt-6 flex gap-3">
        <a href="/memories" className="px-4 py-2 rounded-lg bg-rose-300 text-white font-semibold">Mulai Membaca</a>
        <Link href="/apology" className="px-4 py-2 rounded-lg border border-rose-200">Baca Surat</Link>
      </div>
    </section>
  )
}