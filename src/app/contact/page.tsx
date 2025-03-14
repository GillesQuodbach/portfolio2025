"use client"

import React, { useState } from "react";
import Link from "next/link";

export function Contact() {

const [formData, setFormData] = useState({
  email:"",
  nom:"",
  prenom:"",
  message:"",
})

const [status, setStatus] = useState("")

const handleChange = (event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>)=> {
  const {id, value} = event.target
  setFormData({...formData, [id]: value})
}

const handleSubmit = async (event: React.FormEvent)=> {
  event.preventDefault()
  console.log(formData)
  setStatus("Envoi en cours...")
  try {
    const response = await fetch("http://localhost:3000/api/mail", {
      method:"POST",
      headers: {"Content-type":"application/json"},
      body: JSON.stringify(formData)
    })

    const data = await response.json()
    if (response.ok){
      setStatus("Message envoyé avec succès !")
      setFormData({email: "", nom:"", prenom:"", message:""})
    } else {
      setStatus("Erreur lors de l'envoi du message")
    }
  } catch (error){
    setStatus("Erreur lors de l'envoi du message !")
  }
}

  return (
    <div className="min-h-screen bg-gray-900 text-white flex flex-col items-center justify-center p-10">
      <h1 className="text-4xl font-bold">Contactez-moi</h1>
      <p className="text-lg mt-4">Envoyez-moi un message pour discuter de vos projets.</p>
      <form className="mt-6 w-full max-w-md bg-gray-800 p-6 rounded-lg shadow-md" onSubmit={handleSubmit}>
        <div className="mb-4">
          <label className="block text-sm font-medium" htmlFor="email">Email</label>
          <input type="email" id="email" onChange={handleChange} className="w-full p-2 mt-1 rounded bg-gray-700 text-white" required />
        </div>
        <div className="mb-4">
          <label className="block text-sm font-medium" htmlFor="nom">Nom</label>
          <input type="text" id="nom" onChange={handleChange} className="w-full p-2 mt-1 rounded bg-gray-700 text-white" required />
        </div>
        <div className="mb-4">
          <label className="block text-sm font-medium" htmlFor="prenom">Prénom</label>
          <input type="text" id="prenom" onChange={handleChange} className="w-full p-2 mt-1 rounded bg-gray-700 text-white" required />
        </div>
        <div className="mb-4">
          <label className="block text-sm font-medium" htmlFor="message">Message</label>
          <textarea id="message" onChange={handleChange} className="w-full p-2 mt-1 rounded bg-gray-700 text-white" required></textarea>
        </div>
        <button type="submit" className="w-full bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded">Envoyer</button>
      </form>
      <Link href="/" className="mt-6 text-blue-400 hover:underline">Retour à l'accueil</Link>
    </div>
  );
}

export default Contact;
