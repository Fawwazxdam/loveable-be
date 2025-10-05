'use client'

import { motion } from 'framer-motion'

export default function Timeline({ items = [] }) {
  return (
    <div className="space-y-6">
      {items.map((it, idx) => (
        <motion.div key={idx} initial={{ opacity: 0, y: 12 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="flex gap-4 items-start">
          <div className="w-12 h-12 rounded-full bg-rose-100 flex items-center justify-center">{idx+1}</div>
          <div>
            <div className="text-sm text-rose-500 font-semibold">{it.date}</div>
            <div className="mt-1 card-paper p-4 rounded-lg">
              <div className="font-medium">{it.title}</div>
              <div className="text-sm text-gray-600 mt-1">{it.caption}</div>
              {it.image && <img src={it.image} alt="mem" className="mt-3 rounded-md w-full max-w-xs" />}
            </div>
          </div>
        </motion.div>
      ))}
    </div>
  )
}