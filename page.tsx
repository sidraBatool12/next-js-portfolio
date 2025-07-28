'use client';

import Link from 'next/link';
import { ArrowLeft, Download } from 'lucide-react';

export default function CVPage() {
  return (
    <section className="max-w-4xl mx-auto p-8 bg-[#001233] rounded-xl shadow-lg text-white min-h-[80vh] flex flex-col gap-6 items-center">
        
      <h2 className="text-4xl font-bold mb-4 text-center">My CV</h2>

      {/* Embed the CV */}
      <iframe
        src="/cv.pdf" // replace with your actual PDF path
        className="w-full h-[500px] rounded-lg  shadow-lg"
        title="CV"
      ></iframe>

      {/* Buttons */}
      <div className="flex flex-col sm:flex-row gap-4 mt-4">
        <a
          href="/cv.pdf"
          download
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-md shadow transition"
        >
          <Download size={18} /> Download CV
        </a>

        <Link
          href="/"
          className="flex items-center gap-2 border border-blue-400 text-blue-300 hover:bg-blue-700 hover:text-white px-6 py-3 rounded-md transition"
        >
          <ArrowLeft size={18} /> Go Back
        </Link>
      </div>
    </section>
  );
}
