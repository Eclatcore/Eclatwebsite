import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

// Ensure this route runs on the Node.js runtime (required for nodemailer)
export const runtime = "nodejs";
// Ensure dynamic execution (avoid static optimization issues)
export const dynamic = "force-dynamic";

// Transporter will be created only when SMTP env vars are present

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

    console.log('=== NUEVO MENSAJE DE CONTACTO ===');
    console.log('Nombre:', name);
    console.log('Email:', email);
    console.log('Teléfono:', phone || 'No proporcionado');
    console.log('Empresa:', company || 'No proporcionada');
    console.log('Mensaje:', message);
    console.log('Política aceptada:', privacyAccepted);
    console.log('Fecha:', new Date().toLocaleString('es-ES'));
    console.log('================================');

    // Validar campos obligatorios
    if (!name || !email || !message || !privacyAccepted) {
      return NextResponse.json(
        { error: 'Todos los campos obligatorios deben ser completados' },
        { status: 400 }
      );
    }

    // Verificar si las variables de entorno están configuradas
    const missingEnv = [
      "SMTP_HOST",
      "SMTP_PORT",
      "SMTP_SECURE",
      "SMTP_USER",
      "SMTP_PASS",
      "MAIL_FROM",
      "MAIL_TO",
    ].filter((key) => !process.env[key as keyof NodeJS.ProcessEnv]);

    if (missingEnv.length > 0) {
      console.log('⚠️  Variables de entorno no configuradas - Solo guardando en consola');
      const body = {
        message: 'Faltan variables de entorno para enviar email',
        missing: missingEnv,
      } as const;
      // En desarrollo, respondemos 200 para poder probar el flujo sin SMTP
      if (!process.env.VERCEL) {
        return NextResponse.json(body);
      }
      // En producción, devolver 500 para que el cliente muestre error
      return NextResponse.json(body, { status: 500 });
    }

    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST,
      port: Number(process.env.SMTP_PORT || 465),
      secure: String(process.env.SMTP_SECURE).toLowerCase() === "true", // 465=true, 587=false
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS,
      },
    });

    // Verificar conexión SMTP para dar errores claros en Vercel
    try {
      await transporter.verify();
    } catch (verifyErr: any) {
      console.error('❌ Error verificando SMTP:', verifyErr);
      return NextResponse.json({
        message: 'No se pudo conectar al servidor SMTP. Revisa host/puerto/secure/credenciales.',
        error: verifyErr?.message ?? 'smtp_verify_failed',
      }, { status: 500 });
    }

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
          <p><strong>Política de privacidad:</strong> ${privacyAccepted ? "✅ Aceptada" : "❌ No aceptada"}</p>
          <p style="color:#6b7280;font-size:12px;margin-top:24px">Enviado: ${sentAt ?? new Date().toISOString()}</p>
        </div>
      </div>
    `;

    const fromAddress = process.env.MAIL_FROM || process.env.SMTP_USER as string;
    const toAddress = process.env.MAIL_TO || process.env.SMTP_USER as string;
    const ccAddress = process.env.MAIL_CC;

    await transporter.sendMail({
      from: fromAddress,
      to: toAddress,
      cc: ccAddress || undefined,
      subject: `Nuevo contacto: ${name ?? "Sin nombre"}`,
      replyTo: email,
      html,
    });

    console.log('✅ Email enviado correctamente');
    return NextResponse.json({ message: 'Email enviado correctamente' });
  } catch (err: any) {
    console.error("❌ Error enviando email:", err);
    return NextResponse.json({ 
      message: 'Mensaje recibido pero error al enviar email. Contactar manualmente a eclat@eclatcore.com',
      error: err?.message ?? 'unknown'
    }, { status: 500 });
  }
}
