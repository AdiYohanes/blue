import { NextApiRequest, NextApiResponse } from "next";
import nodemailer from "nodemailer";
import { allowCors } from "../../middleware/cors";

export default allowCors(async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method === "POST") {
    const { fullName, email, message } = req.body;

    try {
      // Configure nodemailer
      const transporter = nodemailer.createTransport({
        host: "smtp.example.com",
        port: 587,
        secure: false, // true for 465, false for other ports
        auth: {
          user: "technobite19@gmail.com",
          pass: "@T3chnobite19@gmail.com",
        },
      });

      const mailOptions = {
        from: email,
        to: "technobite19@gmail.com",
        subject: `Message from ${fullName}`,
        text: message,
        replyTo: email,
      };

      // Send email
      await transporter.sendMail(mailOptions);
      res.status(200).json({ message: "Email sent successfully" });
    } catch (error) {
      console.error("Error sending email:", error);
      res.status(500).json({ error: "Failed to send email" });
    }
  } else {
    res.status(405).json({ error: "Method not allowed" });
  }
});
