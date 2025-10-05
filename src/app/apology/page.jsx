'use client'
'use client'

import Layout from '../../components/Layout'
import ApologyCard from '../../components/ApologyCard'
import InteractiveButton from '../../components/InteractiveButton'
import { useRouter } from 'next/navigation'

const SAMPLE_TEXT = `"Bebe, aku ingin bicara tentang apa yang terjadi. Aku sudah merenungkan semua yang kamu rasakan, dan aku mengakui ini semua murni dari pola-pola yang salah dariku.

1. Soal Komunikasi dan Perhatianku

"Aku sadar betul kalau selama ini komunikasi dari aku sering kali terasa datar, kayak nggak ada effort dan nggak pakai perasaan. Rutinitas yang kita jalani jadi monoton, dan buat kamu itu bukan ketenangan, tapi justru rasa terkekang. Maaf, aku membuat hubungan kita terasa seperti kewajiban, padahal seharusnya diisi dengan semangat dan perasaan saling menyayangi simpati."

2. Soal Pattern Buruk yang Terus Berulang

"Aku paham, kamu pasti merasa capek banget karena Pattern burukku selalu terulang. Kamu sudah berusaha keras, sekuat tenaga, buat mengerti aku dan membereskan kekacauan ini, tapi aku yang terus-terusan mengulang kesalahan yang sama, terutama yang berkaitan dengan emosi dan tingkah lakuku.
Saat pattern itu terulang, kamu jadi merasa 'Aku nggak cukup baik ya, makanya ini nggak selesai-selesai.' itu bukan salah kamu. Itu sepenuhnya adalah tanggung jawabku untuk menghentikan siklus ini."

3. Soal Ketiadaanku Saat Kamu Rapuh

"Aku sangat merasa bersalah tentang ini. Ketika kamu sedang kacau, bingung, atau nggak baik-baik saja, kamu butuh aku untuk mengambil alih kendali dan jadi orang yang paling bisa diandalkan. Tapi aku malah lepas tangan dan membuatmu berjuang sendirian.
Analogi yang kamu kasih itu benar: Aku sudah masuk ke duniamu, tapi saat badai datang, aku malah keluar. Maafkan aku, aku harusnya menjadi 'rumah' dan opsi pertama kamu, bukan justru membuatmu mencari pegangan pada orang lain."

4. Soal Ketidak pastian yang Salah Alamat

"Dengarkan ini, Bebe. Selama ini, alasan aku ragu-ragu, ambigu, dan melempar kembali keputusan ke kamu adalah karena aku takut merepotkan atau mengekangmu.
Tapi aku sadar sekarang, keraguan dan ketidakpastianku itu JAUH lebih membebani kamu daripada mengambil keputusan dengan tegas. Niatku baik, tapi dampaknya jahat. Aku membuatmu punya beban ganda: mengurus perasaanmu sendiri, sambil juga harus mengurai dan memutuskan apa yang aku mau.
Aku akan mengubahnya. Aku akan berusaha menjadi sosok yang kuat, yang bisa memberikan rasa aman dan mengambil keputusan terbaik saat kamu sedang nggak mampu. Aku akan jadi 'orang dewasa' yang kamu butuhkan, persis seperti yang kamu lakukan padaku selama ini."
`

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