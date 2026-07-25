import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST(req: Request) {
    try {
        const { email } = await req.json();

        if (!email || !email.includes("@")) {
            return NextResponse.json({ error: "Invalid email" }, { status: 400 });
        }

        const transporter = nodemailer.createTransport({
            host: process.env.SMTP_HOST,
            port: Number(process.env.SMTP_PORT),
            secure: process.env.SMTP_PORT === "465", // true for 465, false for other ports
            auth: {
                user: process.env.SMTP_USER,
                pass: process.env.SMTP_PASS,
            },
        });

        // 1. Send confirmation to the user
        await transporter.sendMail({
            from: `"Wonder Kutor" <${process.env.SMTP_USER}>`,
            to: email,
            subject: "We've received your request! - Wonder Kutor",
            text: "Thank you for showing interest in Wonder Kutor. We will notify you as soon as we launch!",
            html: `
        <div style="font-family: sans-serif; color: #333; max-width: 600px; margin: auto; padding: 20px; border: 1px solid #eee;">
          <h1 style="color: #10b981;">Wonder Kutor</h1>
          <p>Hi there,</p>
          <p>Thank you for signing up to be notified about our launch! We're working hard to bring you something amazing.</p>
          <p>Stay tuned for more updates.</p>
          <br />
          <p style="font-size: 12px; color: #999;">&copy; ${new Date().getFullYear()} Wonder Kutor. All rights reserved.</p>
        </div>
      `,
        });

        // 2. Send notification to the admin
        await transporter.sendMail({
            from: `"Wonder Kutor System" <${process.env.SMTP_USER}>`,
            to: process.env.SMTP_USER,
            subject: "New Lead Collected! - Wonder Kutor",
            text: `A new user has signed up for notifications: ${email}`,
            html: `
        <div style="font-family: sans-serif; color: #333;">
          <h2>New Lead</h2>
          <p><strong>Email:</strong> ${email}</p>
          <p>This user wants to be notified when Wonder Kutor launches.</p>
        </div>
      `,
        });

        return NextResponse.json({ message: "Success" });
    } catch (error) {
        console.error("Email error:", error);
        return NextResponse.json({ error: "Failed to send email" }, { status: 500 });
    }
}
