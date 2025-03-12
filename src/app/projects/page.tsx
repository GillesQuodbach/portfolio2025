import React from "react";
import Link from "next/link";

export function Projects() {
  return (
    <div className="min-h-screen bg-gray-900 text-white flex flex-col items-center justify-center p-10">
      <h1 className="text-4xl font-bold">Mes Projets</h1>
      <p className="text-lg mt-4">Découvrez les projets sur lesquels j'ai travaillé.</p>
      <Link href="/" className="mt-6 text-blue-400 hover:underline">Retour à l'accueil</Link>
    </div>
  );
}

export default Projects;


