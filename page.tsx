// src/app/about/page.tsx

import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import Image from "next/image";

export default function AboutMePage() {
  return (
    <>
      {/* <Navbar /> */}

      <div className="relative min-h-screen bg-[url('/bg.jpg')] bg-cover bg-center rounded-xl">
        {/* Overlay */}
        <div className="absolute inset-0 bg-[#001233] bg-opacity-70 backdrop-blur-md" />

        <div className="relative z-10 text-gray-100">
          {/* Hero Section */}
          <section className="max-w-6xl mx-auto px-6 sm:px-12 py-16 flex flex-col-reverse md:flex-row items-center gap-8">
            <div className="md:w-2/3 text-center md:text-left">
              <h1 className="text-3xl sm:text-4xl font-bold mb-4">Hi, I’m Sidra Batool 👋</h1>
              <p className="text-base sm:text-lg leading-relaxed">
                I'm a passionate <strong>Full Stack Developer</strong> with a love for building elegant and scalable web applications. With a background in design and development, I combine creativity and logic to create user-centric digital experiences.
              </p>
              <p className="mt-4 text-base sm:text-lg leading-relaxed">
                From frontend interfaces to backend systems, I specialize in technologies like <strong>Next.js, React, Node.js, TypeScript, and Tailwind CSS</strong>. I'm also a tech mentor and lifelong learner, constantly improving and helping others grow.
              </p>
            </div>
            <div className="md:w-1/3 flex justify-center">
              <Image
                src="/profile.jpg"
                alt="Profile"
                width={300}
                height={300}
                className="rounded-full  object-cover w-40 h-40 sm:w-60 sm:h-60 border-4 border-blue-300   shadow-[0_0_15px_5px_rgba(59,130,246,0.7)]"
              />
            </div>
          </section>

          {/* Skills Section */}
          <section className="bg-[#001233] bg-opacity-90 rounded-xl max-w-6xl mx-auto py-12 px-6 sm:px-8 my-12">
            <h2 className="text-2xl sm:text-3xl font-bold mb-8 text-center text-white">My Skills</h2>
            <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6">
              {[
                "Next.js", "React.js", "TypeScript", "Tailwind CSS",
                "Node.js", "MongoDB", "REST & APIs", "Git & GitHub", "UI/UX Design",
              ].map((skill) => (
                <div
                  key={skill}
                  className="bg-[#01214d] rounded-xl p-6 border border-blue-600 shadow-[0_0_8px_2px_rgba(59,130,246,0.7)] transition"
                >
                  <h4 className="text-base sm:text-lg font-semibold text-center text-sky-300">{skill}</h4>
                </div>
              ))}
            </div>
          </section>

          {/* Mission Section */}
          <section className="max-w-4xl mx-auto px-6 sm:px-8 py-12 space-y-6 bg-[#001233] bg-opacity-60 backdrop-blur-md rounded-xl">
            <h2 className="text-2xl sm:text-3xl font-bold text-center text-white">Why I Do What I Do</h2>
            <p className="text-base sm:text-lg text-center text-sky-300 leading-relaxed">
              I believe that clean, accessible, and efficient code can change the way we interact with the digital world. My mission is to build tools and products that make people’s lives easier, businesses smarter, and experiences more delightful.
            </p>
            <p className="text-base sm:text-lg text-center text-sky-300 leading-relaxed">
              When I’m not coding, you’ll find me exploring design trends, mentoring aspiring developers, or diving into personal growth.
            </p>
          </section>
        </div>
      </div>

      {/* <Footer /> */}
    </>
  );
}
