import React from "react";
import Link from "next/link";

export function Contact() {
  return (
    <div className="min-h-screen bg-gray-900 text-white flex flex-col items-center justify-center p-10">
      <h1 className="text-4xl font-bold">Contactez-moi</h1>
      <p className="text-lg mt-4">Envoyez-moi un message pour discuter de vos projets.</p>
      <form className="mt-6 w-full max-w-md bg-gray-800 p-6 rounded-lg shadow-md">
        <div className="mb-4">
          <label className="block text-sm font-medium" htmlFor="email">Email</label>
          <input type="email" id="email" className="w-full p-2 mt-1 rounded bg-gray-700 text-white" required />
        </div>
        <div className="mb-4">
          <label className="block text-sm font-medium" htmlFor="nom">Nom</label>
          <input type="text" id="nom" className="w-full p-2 mt-1 rounded bg-gray-700 text-white" required />
        </div>
        <div className="mb-4">
          <label className="block text-sm font-medium" htmlFor="prenom">Prénom</label>
          <input type="text" id="prenom" className="w-full p-2 mt-1 rounded bg-gray-700 text-white" required />
        </div>
        <div className="mb-4">
          <label className="block text-sm font-medium" htmlFor="message">Message</label>
          <textarea id="message" rows="4" className="w-full p-2 mt-1 rounded bg-gray-700 text-white" required></textarea>
        </div>
        <button type="submit" className="w-full bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded">Envoyer</button>
      </form>
      <Link href="/" className="mt-6 text-blue-400 hover:underline">Retour à l'accueil</Link>
    </div>
  );
}

export default Contact;
