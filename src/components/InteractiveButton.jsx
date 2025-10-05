'use client'

import dynamic from 'next/dynamic'
import { useState } from 'react'
import { motion } from 'framer-motion'

const Confetti = dynamic(() => import('react-confetti'), { ssr: false })

export default function InteractiveButton({ onAccept }) {
  const [accepted, setAccepted] = useState(false)
  return (
    <div className="mt-6">
      <motion.button whileTap={{ scale: 0.96 }} className="px-5 py-3 rounded-full bg-rose-400 text-white font-semibold shadow-lg" onClick={() => { setAccepted(true); onAccept?.() }}>
        Maafin Aku ❤️
      </motion.button>

      {accepted && (
        <div>
          <Confetti />
          <div className="mt-4 text-center text-gray-700">Terima kasih sudah mau mendengarkan. Aku berterima kasih atas kesabaranmu.</div>
        </div>
      )}
    </div>
  )
}