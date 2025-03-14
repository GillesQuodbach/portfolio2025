import { render } from "@react-email/render" 
import KoalaWelcomeEmail from "../../../../emails"
import { Resend } from "resend"
import { NextResponse } from "next/server";

const resend = new Resend(process.env.RESEND_API_KEY)

export async function OPTIONS() {
    return NextResponse.json({}, { 
      status: 200,
      headers: {
        "Access-Control-Allow-Origin": "*", // Permet toutes les origines (à restreindre en prod)
        "Access-Control-Allow-Methods": "POST, OPTIONS",
        "Access-Control-Allow-Headers": "Content-Type",
      }
    });
  }

export async function POST(request: Request, res: Response){

    const { email, prenom, nom, message } = await request.json();

    const emailHtml = await render(KoalaWelcomeEmail({
        userFirstname: prenom,
        userLastname: nom, 
        userEmail: email, 
        userMessage: message}))

    const { data, error } = await resend.emails.send({
        from: "codebash <codebash@resend.dev>",
        to: ["quodbach.gilles@gmail.com"],
        subject: "Thank you",
        html: emailHtml,
    })

    if (error){
        return Response.json(error)
    }

    return Response.json({message: "Email sent successfully"})
}