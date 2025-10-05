'use client'

import { motion } from 'framer-motion'

export default function ApologyCard({ text }) {
  return (
    <motion.div initial={{ scale: 0.98, opacity: 0 }} animate={{ scale: 1, opacity: 1 }} className="card-paper p-6 rounded-2xl">
      <div className="hands text-xl">Surat Untukmu</div>
      <div className="mt-4 whitespace-pre-wrap text-gray-700">{text}</div>
    </motion.div>
  )
}