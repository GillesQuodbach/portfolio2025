import { render } from "@react-email/render" 
import KoalaWelcomeEmail from "../../../../emails"
import { Resend } from "resend"

const resend = new Resend(process.env.RESEND_API_KEY)

export async function POST(request: Request, res: Response){

    const { email, userFirstname } = await request.json();

    const emailHtml = await render(KoalaWelcomeEmail({userFirstname}))

    const { data, error } = await resend.emails.send({
        from: "codebash <codebash@resend.dev>",
        to: [email],
        subject: "Thank you",
        html: emailHtml,
    })

    if (error){
        return Response.json(error)
    }

    return Response.json({message: "Email sent successfully"})
}