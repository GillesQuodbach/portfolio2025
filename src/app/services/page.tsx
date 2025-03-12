import React from "react";
import Link from "next/link";

export function Services() {
  return (
<div className="min-h-screen bg-gray-900 text-white flex flex-col items-center justify-center p-10">
      <h1 className="text-4xl font-bold">Mes Services</h1>
      <p className="text-lg mt-4">Je propose une gamme complète de services en développement web et mobile pour répondre à vos besoins numériques :</p>
      <ul className="mt-4 list-disc list-inside text-left max-w-lg">
        <li><strong>Réalisation de sites web :</strong> Création de sites performants et optimisés pour le référencement.</li>
        <li><strong>Développement de landing pages :</strong> Pages attractives et efficaces pour maximiser vos conversions.</li>
        <li><strong>Correction de bugs :</strong> Identification et résolution rapide de problèmes techniques.</li>
        <li><strong>Modification de sites :</strong> Mise à jour et amélioration de sites existants selon vos besoins.</li>
        <li><strong>Création d'applications web :</strong> Conception d'applications modernes et évolutives.</li>
        <li><strong>Développement d'applications mobiles :</strong> Applications mobiles performantes adaptées à iOS et Android.</li>
      </ul>
      <p className="mt-6">Je mets mon expertise à votre service pour concevoir des solutions digitales sur mesure, adaptées à vos objectifs et à votre budget.</p>
      <Link href="/" className="mt-6 text-blue-400 hover:underline">Retour à l'accueil</Link>
    </div>
  );
}

export default Services;
