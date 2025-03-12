import React from "react";
import Link from "next/link";

export function About() {
  return (
    <div className="min-h-screen bg-gray-900 text-white flex flex-col items-center justify-center p-10">
      <h1 className="text-4xl font-bold">À Propos de Moi</h1>
      <p className="text-lg mt-4 max-w-2xl text-center">Passionné par le développement et les nouvelles technologies, je suis un développeur fullstack curieux et toujours en quête de nouvelles connaissances. J’aime concevoir des solutions efficaces et intuitives, que ce soit pour le web ou le mobile.</p>
      <p className="text-lg mt-4 max-w-2xl text-center">En dehors du code, je suis un grand amateur de jeux vidéo et d’expériences interactives. Cette passion me pousse à toujours chercher l’innovation et la créativité dans mes projets.</p>
      <p className="text-lg mt-4 max-w-2xl text-center">Mon objectif est d’accompagner mes clients avec professionnalisme et bienveillance, en leur offrant des solutions adaptées à leurs besoins. N’hésitez pas à me contacter, je serais ravi d’échanger avec vous !</p>
      <Link href="/" className="mt-6 text-blue-400 hover:underline">Retour à l'accueil</Link>
    </div>

  );
}

export default About;
