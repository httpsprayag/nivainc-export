import { contactTemplate } from '@/templates/email';

const { createTransport } = require('nodemailer')
export async function POST(request) {
  const { name, contactNumber, email, query } = await request.json();
  console.log({ name, email, contactNumber, query })
  const transporter = createTransport({
    service: 'gmail',
    auth: {
      user: process.env.NEXT_PUBLIC_EMAIL,
      pass: process.env.NEXT_PUBLIC_PASSWORD,
    },
  });

  const emailOptions = {
    to: process.env.NEXT_PUBLIC_EMAI,
    from: email,
    subject: "A new Querry has arrived",
    html: contactTemplate({ name, email, contactNumber, query }),
  };

  const emailInfo = transporter.sendMail(emailOptions, function (error, _info) {
    if (error) {
      console.log("errorr while sending email : ", error);
      return Response.json({ mesaage: 'something went wrong' })
    } else {
      return Response.json({ mesaage: 'Email Sent Successfully' })
    }
  });
  console.log({ emailInfo })
  return Response.json({ message: "success" })
}
