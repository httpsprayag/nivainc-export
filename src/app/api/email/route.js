import {createTransport} from "nodemailer"
export async function POST(request) {
  const { name, contactNumber, email, query } = await request.json();
  console.log({name, email, contactNumber, query})
//   const transporter = createTransport({
//     service: EMAIL_SERVICE_PROVIDER,
//     auth: {
//       user: process.env.NEXT_PUBLIC_EMAIL,
//       pass: process.env.NEXT_PUBLIC_PASSWORD,
//     },
//   });

//   const emailOptions = {
//     to: process.env.NEXT_PUBLIC_EMAIL,
//     from: email,
//     subject: "A new Querry has arrived",
//     html: contactTemplate({ name, email, mobile, message }),
//   };
  return Response.json({ message: "success" });
}
