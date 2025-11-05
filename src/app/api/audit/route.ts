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
      businessType,
      hasWebsite,
      websiteUrl,
      websiteIssues,
      businessGoals,
      targetAudience,
      mainChallenges,
      instagramHandle,
      brandPersonality,
      websiteVision,
      contactEmail,
      contactPhone,
      sentAt,
    } = data || {};

    // Log útil
    console.log("=== NUEVA AUDITORÍA UX ===");
    console.log("Email:", contactEmail);
    console.log("Teléfono:", contactPhone || "No proporcionado");
    console.log("Tipo de negocio:", businessType);
    console.log("Tiene web:", hasWebsite);
    console.log("URL web:", websiteUrl || "No proporcionada");
    console.log("Fecha:", new Date().toLocaleString("es-ES"));
    console.log("================================");

    // Validación básica
    if (!contactEmail || !businessType) {
      return NextResponse.json(
        { error: "Email y tipo de negocio son campos obligatorios" },
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

    // Template HTML para el email de auditoría
    const html = `
      <div style="font-family:system-ui,Segoe UI,Roboto,Arial,sans-serif">
        <div style="padding:16px;border-radius:12px;background:linear-gradient(135deg,#8b5cf6,#ec4899);color:white;">
          <h2 style="margin:0">Nueva Auditoría UX — Éclat</h2>
        </div>
        <div style="padding:20px">
          <p><strong>Email de contacto:</strong> ${contactEmail}</p>
          ${contactPhone ? `<p><strong>Teléfono:</strong> ${contactPhone}</p>` : ""}
          
          <div style="margin:16px 0;padding:12px;border:1px solid #e5e7eb;border-radius:10px;background:#f9fafb;">
            <h3 style="margin-top:0;color:#8b5cf6">Información del Negocio</h3>
            <p><strong>Tipo de negocio:</strong> ${businessType}</p>
            <p><strong>¿Tiene página web?</strong> ${hasWebsite === "yes" ? "Sí" : hasWebsite === "no" ? "No" : "Está planeando crear una"}</p>
            ${websiteUrl && hasWebsite === "yes" ? `<p><strong>URL del sitio web:</strong> ${websiteUrl}</p>` : ""}
            ${websiteIssues && hasWebsite === "yes" ? `<p><strong>Problemas del sitio web:</strong> ${websiteIssues}</p>` : ""}
            ${businessGoals && hasWebsite !== "yes" ? `<p><strong>Objetivos principales:</strong> ${businessGoals}</p>` : ""}
          </div>

          <div style="margin:16px 0;padding:12px;border:1px solid #e5e7eb;border-radius:10px;background:#f9fafb;">
            <h3 style="margin-top:0;color:#8b5cf6">Audiencia y Estrategia</h3>
            ${targetAudience ? `<p><strong>Audiencia objetivo:</strong> ${targetAudience}</p>` : ""}
            ${mainChallenges ? `<p><strong>Desafíos principales:</strong> ${mainChallenges}</p>` : ""}
            ${instagramHandle ? `<p><strong>Instagram:</strong> ${instagramHandle}</p>` : ""}
          </div>

          <div style="margin:16px 0;padding:12px;border:1px solid #e5e7eb;border-radius:10px;background:#f9fafb;">
            <h3 style="margin-top:0;color:#8b5cf6">Personalidad y Visión</h3>
            ${brandPersonality ? `<p><strong>Personalidad de marca:</strong> ${brandPersonality}</p>` : ""}
            ${websiteVision ? `<p><strong>Visión del sitio web:</strong> ${websiteVision}</p>` : ""}
          </div>

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
      subject: `Nueva Auditoría UX: ${contactEmail}`,
      replyTo: contactEmail,
      html,
    });

    console.log("✅ Email de auditoría enviado correctamente");
    return NextResponse.json({ ok: true, message: "Auditoría enviada correctamente" });
  } catch (err: any) {
    console.error("❌ Error enviando email de auditoría:", err?.message || err);
    return NextResponse.json(
      {
        ok: false,
        message:
          "Auditoría recibida pero hubo un error al enviar el email. Revisa los logs en Vercel → Deployments → Functions.",
        error: err?.message ?? "unknown",
      },
      { status: 500 }
    );
  }
}

