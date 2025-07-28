import Navbar from './components/Navbar'
import Footer from './components/Footer'
import './globals.css'

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="bg-[#001233] text-white min-h-screen flex flex-col">
        <Navbar />
        <main className="flex-grow max-w-5xl mx-auto w-full px-6 py-30 mr">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  )
}
