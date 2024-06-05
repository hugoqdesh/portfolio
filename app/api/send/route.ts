import { render } from "@react-email/render";
import { Resend } from "resend";
import { HireEmail } from "@/emails/HireEmail";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request: Request, res: Response) {
  const { email, title, message } = await request.json();

  const { error } = await resend.emails.send({
    from: "Website <onboarding@resend.dev>",
    to: "gitjohan5@gmail.com",
    subject: title,
    html: render(HireEmail({ email, title, message })),
  });

  if (error) {
    return Response.json(error);
  }

  return Response.json({ message: "Email sent successfully" });
}
