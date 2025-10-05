import Layout from '../components/Layout'
import Hero from '../components/Hero'

export default function Home() {
  return (
    <Layout>
      <Hero name={'Bebe'} />

      <section id="memories" className="mt-6">
        <div className="card-paper p-6 rounded-2xl">
          <h3 className="text-lg font-semibold">Sekilas Tentang Kita</h3>
          <p className="mt-2 text-gray-600">Terima kasih sudah menjadi bagian dari hidupku. </p>
        </div>
      </section>

    </Layout>
  )
}
