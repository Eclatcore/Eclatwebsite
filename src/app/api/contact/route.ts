import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

// Requerido para Nodemailer en Vercel
export const runtime = "nodejs";
export const dynamic = "force-dynamic";

function getSecureFromEnv() {
  const port = Number(process.env.SMTP_PORT || 465);
  const secureEnv = (process.env.SMTP_SECURE || "").toString().toLowerCase();
  // Si no definen SMTP_SECURE, deduce por puerto: 465 => secure true
  if (secureEnv === "true") return true;
  if (secureEnv === "false") return false;
  return port === 465;
}

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
    } = data || {};

    // Log útil
    console.log("=== NUEVO MENSAJE DE CONTACTO ===");
    console.log("Nombre:", name);
    console.log("Email:", email);
    console.log("Teléfono:", phone || "No proporcionado");
    console.log("Empresa:", company || "No proporcionada");
    console.log("Mensaje:", message);
    console.log("Política aceptada:", privacyAccepted);
    console.log("Fecha:", new Date().toLocaleString("es-ES"));
    console.log("================================");

    // Validación básica
    if (!name || !email || !message || !privacyAccepted) {
      return NextResponse.json(
        { error: "Todos los campos obligatorios deben ser completados" },
        { status: 400 }
      );
    }

    // Comprobar variables de entorno mínimas
    const required = [
      "SMTP_HOST",
      "SMTP_PORT",
      "SMTP_USER",
      "SMTP_PASS",
      "MAIL_FROM",
      "MAIL_TO",
    ];
    const missing = required.filter((k) => !process.env[k as any]);
    if (missing.length) {
      const body = {
        message:
          "Faltan variables de entorno para enviar email (revisa Settings → Environment Variables).",
        missing,
      } as const;

      console.warn("⚠️ ENV faltantes:", missing);
      // En local, permite probar sin SMTP
      if (!process.env.VERCEL) return NextResponse.json(body);
      // En producción, error 500
      return NextResponse.json(body, { status: 500 });
    }

    // Transporter SMTP
    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST!,
      port: Number(process.env.SMTP_PORT!),
      secure: getSecureFromEnv(),
      auth: {
        user: process.env.SMTP_USER!,
        pass: process.env.SMTP_PASS!,
      },
    });

    // Verificación de conexión para errores claros
    try {
      await transporter.verify();
    } catch (e: any) {
      console.error("❌ Error verificando SMTP:", e?.message || e);
      return NextResponse.json(
        {
          message:
            "No se pudo conectar al servidor SMTP. Revisa host/puerto/secure/credenciales.",
          error: e?.message ?? "smtp_verify_failed",
        },
        { status: 500 }
      );
    }

    // ⚠️ IMPORTANTE: usa backticks aquí (template literal)
    const html = `
      <div style="font-family:system-ui,Segoe UI,Roboto,Arial,sans-serif">
        <div style="padding:16px;border-radius:12px;background:linear-gradient(135deg,#8b5cf6,#ec4899);color:white;">
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
          <p><strong>Política de privacidad:</strong> ${
            privacyAccepted ? "✅ Aceptada" : "❌ No aceptada"
          }</p>
          <p style="color:#6b7280;font-size:12px;margin-top:24px">Enviado: ${
            sentAt ?? new Date().toISOString()
          }</p>
        </div>
      </div>
    `;

    const fromAddress =
      (process.env.MAIL_FROM as string) ||
      (process.env.SMTP_USER as string);
    const toAddress =
      (process.env.MAIL_TO as string) || (process.env.SMTP_USER as string);
    const ccAddress = process.env.MAIL_CC;

    await transporter.sendMail({
      from: fromAddress,
      to: toAddress,
      cc: ccAddress || undefined,
      // ⚠️ IMPORTANTE: también backticks aquí para interpolar name
      subject: `Nuevo contacto: ${name ?? "Sin nombre"}`,
      replyTo: email,
      html,
    });

    console.log("✅ Email enviado correctamente");
    return NextResponse.json({ ok: true, message: "Email enviado correctamente" });
  } catch (err: any) {
    console.error("❌ Error enviando email:", err?.message || err);
    return NextResponse.json(
      {
        ok: false,
        message:
          "Mensaje recibido pero hubo un error al enviar el email. Revisa los logs en Vercel → Deployments → Functions.",
        error: err?.message ?? "unknown",
      },
      { status: 500 }
    );
  }
}
