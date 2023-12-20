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

  // const emailOptions = {
  //   to: process.env.NEXT_PUBLIC_EMAI,
  //   from: email,
  //   subject: "A new Querry has arrived",
  //   html: contactTemplate({ name, email, contactNumber, query }),
  // };

  const mailOptions = {
    from: email, // Use the email from the contact form
    to: 'export@nivainc.com', // Replace with your Gmail address
    subject: 'New Querry Has Arrived',
    text: `
      Name: ${name}
      Contact Number: ${contactNumber}
      Email: ${email}
      Query: ${query}
    `,
  };

  try {
    // Send the email
    await transporter.sendMail(mailOptions);
    return Response.json({ message: 'Email sent successfully' });
  } catch (error) {
    console.error('Error sending email:', error);
    return Response.json({ message: 'Internal server error' });
  }
}
