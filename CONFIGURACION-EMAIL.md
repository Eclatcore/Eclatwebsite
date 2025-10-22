# Configuración del Formulario de Contacto

## ✅ Estado Actual
El formulario de contacto está **funcionando correctamente** y enviando emails a `eclat@eclatcore.com` usando la configuración de Hostinger.

## 🔧 Configuración Actual

### Variables de entorno configuradas en `.env.local`:

```env
# remitente y autenticación SMTP (Hostinger)
SMTP_HOST=smtp.hostinger.com
SMTP_PORT=465
SMTP_SECURE=true
SMTP_USER=eclat@eclatcore.com
SMTP_PASS=Chiquinquira0205$

# a quién llegan los avisos
MAIL_TO=eclat@eclatcore.com
MAIL_FROM="Éclat Web" <eclat@eclatcore.com>
```

### ✅ Funcionamiento Verificado
- ✅ **Emails enviándose** a `eclat@eclatcore.com` (destinatario principal)
- ✅ **Copia automática** a `eclatcore2025@gmail.com` (CC)
- ✅ **Configuración SMTP** de Hostinger funcionando
- ✅ **Datos capturados** correctamente en consola
- ✅ **Validación** de campos obligatorios
- ✅ **Formulario completamente funcional**

### 📧 Configuración de Destinatarios
- **Destinatario principal:** `eclat@eclatcore.com`
- **Copia automática (CC):** `eclatcore2025@gmail.com`
- **Respuesta (Reply-To):** Email del formulario del usuario

### 🧪 Pruebas Realizadas
- ✅ **Envío básico** - Funcionando
- ✅ **Envío completo** (con teléfono y empresa) - Funcionando
- ✅ **Validación de campos** - Funcionando
- ✅ **Diseño del email** - Profesional y estructurado
- ✅ **Envío a múltiples destinatarios** - Funcionando

### 2. Alternativa: Usar otro proveedor de email

Si prefieres usar otro proveedor (Outlook, Yahoo, etc.), modifica la configuración en `src/app/api/contact/route.ts`:

```javascript
const transporter = nodemailer.createTransporter({
  host: 'smtp.live.com', // Para Outlook
  port: 587,
  secure: false,
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS,
  },
});
```

## Probar el Formulario

1. **Sin configuración**: Los datos se guardan en la consola del servidor
2. **Con configuración**: Los emails se envían a `eclat@eclatcore.com`

## 📋 Información que se envía

- ✅ Nombre completo
- ✅ Email de contacto  
- ✅ Teléfono (opcional)
- ✅ Empresa (opcional)
- ✅ Mensaje
- ✅ Confirmación de política de privacidad
- ✅ Fecha y hora del envío

## Diseño del Email

El email incluye:
- Header con gradiente de Éclat
- Información del contacto bien estructurada
- Mensaje destacado en caja
- Confirmación de política aceptada
- Footer con información de la empresa

## Seguridad

- Las credenciales están en variables de entorno (no en el código)
- El archivo `.env.local` está en `.gitignore`
- Validación de campos obligatorios
- Sanitización de datos de entrada

## Instrucciones Rápidas

1. **Configurar Gmail** (solo una vez)
2. **Editar `.env.local`** con tus credenciales
3. **Reemplazar `route.ts`** con `route-complete.ts`
4. **Reiniciar servidor** con `npm run dev`
5. **¡Listo!** Los emails llegarán a `eclat@eclatcore.com`
