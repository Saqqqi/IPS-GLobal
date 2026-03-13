import { NextResponse } from 'next/server';
import dbConnect from '@/lib/dbConnect';
import Contact from '@/models/Contact';
import nodemailer from 'nodemailer';

// Initialize transporter outside the handler for connection reuse and performance
const transporter = nodemailer.createTransport({
  host: process.env.EMAIL_HOST,
  port: Number(process.env.EMAIL_PORT),
  secure: Number(process.env.EMAIL_PORT) === 465,
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS,
  },
  tls: {
    rejectUnauthorized: false
  },
  pool: true, // Use a connection pool for better performance with shared hosting
});

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const { name, email, service, details } = body;

    // 1. Basic Backend Validation
    if (!name || !email || !service) {
      return NextResponse.json({ success: false, error: 'Missing required fields' }, { status: 400 });
    }

    // 2. Save to MongoDB (Critical step - we await this)
    await dbConnect();
    const newContact = await Contact.create({
      name,
      email,
      service,
      details,
    });

    // 3. Send Email (Fire and forget to keep the response FAST for the user)
    const mailOptions = {
      from: `"IPS Global Website" <${process.env.EMAIL_USER}>`,
      to: process.env.EMAIL_TO,
      subject: `New Lead: ${service} - ${name}`,
      text: `
        Name: ${name}
        Email: ${email}
        Service: ${service}
        Details: ${details}
      `,
      html: `
        <div style="font-family: sans-serif; color: #0d3553; border: 1px solid #0d3553; padding: 20px; border-radius: 10px;">
          <h2 style="margin-top: 0;">New Project Inquiry</h2>
          <hr />
          <p><strong>Full Name:</strong> ${name}</p>
          <p><strong>Email:</strong> ${email}</p>
          <p><strong>Requested Service:</strong> ${service}</p>
          <p><strong>Project Details:</strong></p>
          <div style="background: #f4f7f9; padding: 15px; border-radius: 5px; color: #333;">
            ${details.replace(/\n/g, '<br>')}
          </div>
          <p style="font-size: 10px; margin-top: 20px; color: #999;">Database Entry ID: ${newContact._id}</p>
        </div>
      `,
    };

    // Note: We don't 'await' the email send to ensure the user gets a <2s response time.
    // The server will continue the task in the background.
    transporter.sendMail(mailOptions).catch(err => console.error("Background Email Error:", err));

    return NextResponse.json({ success: true, message: 'Inquiry received' }, { status: 200 });
  } catch (error: any) {
    console.error('Contact API Error:', error);
    return NextResponse.json({ success: false, error: 'Internal Server Error' }, { status: 500 });
  }
}
