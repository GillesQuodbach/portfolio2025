import React from "react";
import Link from "next/link";

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-900 text-white flex flex-col items-center justify-center p-10">
      <h1 className="text-4xl font-bold">Bienvenue sur mon Portfolio</h1>
      <p className="text-lg mt-4">Je suis un développeur fullstack spécialisé en Angular, React, JavaScript, Python et Java.</p>
      <nav className="mt-6">
        <ul className="flex space-x-6">
          <li><Link href="/projects" className="text-blue-400 hover:underline">Projets</Link></li>
          <li><Link href="/services" className="text-blue-400 hover:underline">Services</Link></li>
          <li><Link href="/about" className="text-blue-400 hover:underline">À propos</Link></li>
          <li><Link href="/contact" className="text-blue-400 hover:underline">Contact</Link></li>
        </ul>
      </nav>
    </div>
  );
}

