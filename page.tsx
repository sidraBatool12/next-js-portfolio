// src/app/page.tsx (Home page)
import Navbar from './components/Navbar'

import Link from 'next/link'

export default function Home() {
  return (
    
      <section className="bg-[#001233] text-white min-h-screen flex flex-col justify-center items-center px-6 py-16">
        <h1 className="text-5xl font-extrabold mb-4">Hi, I'm Sidra Batool</h1>
        <p className="text-lg text-[#cbd5e1] mb-8">Frontend Web Developer | Learner | Dreamer</p>

<img
  src="/profile.jpg"
  alt="Sidra Profile"
  className="w-40 h-40 rounded-full object-cover mb-8 border-2 border-blue-300
             shadow-[0_0_15px_5px_rgba(59,130,246,0.7)]"
/>




        <p className="max-w-2xl text-center text-[#cbd5e1] mb-8">
          Passionate about building clean, modern, and responsive websites using Next.js, React, and Tailwind CSS.
        </p>

        <div className="flex flex-col sm:flex-row justify-center items-center gap-6">
          <Link
            href="/cv"
            className="bg-blue-800 hover:bg-blue-700 text-white px-6 py-3 rounded-md shadow-md transition"
          >
            View CV
          </Link>

          <Link
            href="/contact"
            className="border border-blue-400 text-blue-400 
            hover:shadow-[0_0_10px_2px_rgba(59,130,246,0.7)]   hover:text-white px-6 py-3 rounded-md "
          >
            Contact Me
          </Link>
        </div>
      </section>
    
  )
}
