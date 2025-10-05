'use client'

import dynamic from 'next/dynamic'
import Layout from '../../components/Layout'

const Confetti = dynamic(() => import('react-confetti'), { ssr: false })

export default function ThankYou() {
  return (
    <Layout>
      <Confetti />
      <div className="card-paper p-8 rounded-2xl text-center">
        <h2 className="text-2xl font-extrabold">Terima kasih sudah mau mendengarkan</h2>
        <p className="mt-3 text-gray-700">Aku berterima kasih atas kesabaranmu. Aku berjanji akan memperbaiki diri.</p>
        <div className="mt-6">
          <a href="https://t.me/MagentaaDesign" className="px-4 py-2 rounded-lg bg-rose-300 text-white">Hubungi Aku</a>
        </div>
      </div>
    </Layout>
  )
}