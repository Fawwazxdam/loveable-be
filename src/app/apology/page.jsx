'use client'
'use client'

import Layout from '../../components/Layout'
import ApologyCard from '../../components/ApologyCard'
import InteractiveButton from '../../components/InteractiveButton'
import { useRouter } from 'next/navigation'

const SAMPLE_TEXT = `Sayang,

Aku tahu aku menyakiti kamu dan aku minta maaf dari lubuk hati.
Aku tidak ingin mengulanginya dan aku siap berubah.

Aku mencintaimu.`

export default function Apology() {
  const router = useRouter()
  return (
    <Layout>
      <h2 className="text-2xl font-extrabold mb-4">Surat Maafku</h2>
      <ApologyCard text={SAMPLE_TEXT} />
      <InteractiveButton onAccept={() => setTimeout(() => router.push('/thankyou'), 1200)} />
    </Layout>
  )
}