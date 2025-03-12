import React from "react";
import Link from "next/link";

export function Projects() {
  return (
<section id="projects" className="min-h-screen bg-gray-900 text-white flex flex-col items-center justify-center p-10">
    <h2 className="text-3xl font-bold mb-4">🚀 Mes Projets</h2>
    <p className="text-lg text-center max-w-2xl">
        Au fil de mon parcours en tant que développeur fullstack, j'ai travaillé sur divers projets allant de la 
        conception de sites web interactifs à la création d'applications web et mobiles performantes. Que ce soit avec 
        <strong> React, Angular, Python, Java ou JavaScript</strong>, je mets un point d'honneur à produire un code propre, 
        maintenable et optimisé.
    </p>
    <p className="text-lg text-center max-w-2xl mt-4">
        Vous pouvez découvrir l’ensemble de mes réalisations sur mon <strong>GitHub</strong> :
    </p>
    <a href="https://github.com/GillesQuodbach" target="_blank" className="mt-4 px-6 py-3 bg-blue-500 text-white rounded-lg shadow-lg 
        hover:bg-blue-600 transition">
        🔗 Voir mes projets sur GitHub
    </a>
    <p className="text-lg text-center max-w-2xl mt-6">
        Chaque projet reflète mon engagement pour l’excellence et mon envie de proposer des solutions innovantes. 
        N'hésitez pas à explorer mon travail et à me contacter pour toute collaboration !
    </p>
</section>
  );
}

export default Projects;


