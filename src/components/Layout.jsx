import Link from 'next/link'

export default function Layout({ children }) {
  return (
    <div className="min-h-screen flex flex-col items-center px-6 py-8">
      <header className="w-full max-w-3xl mb-6">
        <nav className="flex items-center justify-between">
          <div className="text-xl font-semibold">❤️ Untukmu</div>
          <div className="space-x-3 text-sm">
            <Link href="/">Home</Link>
            <Link href="/memories">Memories</Link>
            <Link href="/apology">Surat</Link>
            <Link href="/Surprise">Surprise</Link>
          </div>
        </nav>
      </header>

      <main className="w-full max-w-3xl">{children}</main>

      <footer className="w-full max-w-3xl mt-10 text-center text-sm text-gray-500">
        Dibuat dengan ❤️ olehmu — sebuah permintaan maaf tulus
      </footer>
    </div>
  )
}