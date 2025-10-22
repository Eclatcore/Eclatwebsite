import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

const transporter = nodemailer.createTransport({
  host: process.env.SMTP_HOST,
  port: Number(process.env.SMTP_PORT || 465),
  secure: String(process.env.SMTP_SECURE).toLowerCase() === "true", // 465=true, 587=false
  auth: {
    user: process.env.SMTP_USER,
    pass: process.env.SMTP_PASS,
  },
});

export async function POST(req: Request) {
  try {
    const data = await req.json();
    const {
      name,
      email,
      phone,
      company,
      message,
      privacyAccepted,
      sentAt,
    } = data;

    const html = `
      <div style="font-family:system-ui,Segoe UI,Roboto,Arial,sans-serif">
        <div style="padding:16px;border-radius:12px;background:linear-gradient(135deg,#0ea5e9,#6366f1);color:white;">
          <h2 style="margin:0">Nuevo contacto — Éclat</h2>
        </div>
        <div style="padding:20px">
          <p><strong>Nombre:</strong> ${name}</p>
          <p><strong>Email:</strong> ${email}</p>
          ${phone ? `<p><strong>Teléfono:</strong> ${phone}</p>` : ""}
          ${company ? `<p><strong>Empresa:</strong> ${company}</p>` : ""}
          <div style="margin:16px 0;padding:12px;border:1px solid #e5e7eb;border-radius:10px;background:#f9fafb;">
            <strong>Mensaje:</strong>
            <p style="white-space:pre-wrap;margin:8px 0 0">${message}</p>
          </div>
          <p><strong>Política de privacidad:</strong> ${privacyAccepted ? "✅ Aceptada" : "❌ No aceptada"}</p>
          <p style="color:#6b7280;font-size:12px;margin-top:24px">Enviado: ${sentAt ?? new Date().toISOString()}</p>
        </div>
      </div>
    `;

    await transporter.sendMail({
      from: process.env.MAIL_FROM,
      to: process.env.MAIL_TO,
      subject: `Nuevo contacto: ${name ?? "Sin nombre"}`,
      replyTo: email,
      html,
    });

    return NextResponse.json({ ok: true });
  } catch (err: any) {
    console.error("MAIL_ERROR", err);
    return NextResponse.json({ ok: false, error: err?.message ?? "error" }, { status: 500 });
  }
}
