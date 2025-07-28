// src/components/Footer.tsx
export default function Footer() {
  return (
    <footer className="bg-[#0a1a33] text-center py-6">
      <p className="text-sm text-gray-400">
        &copy; {new Date().getFullYear()} Sidra Batool. All rights reserved.
      </p>
    </footer>
  )
}
