# 📧 Configurar Email en Vercel - Paso a Paso

## 🚨 PROBLEMA: No llegan los emails
**Causa**: Las variables de entorno no están configuradas en Vercel.

## ✅ SOLUCIÓN: Configurar Variables de Entorno

### Paso 1: Acceder a Vercel Dashboard
1. Ve a [vercel.com](https://vercel.com)
2. Inicia sesión con tu cuenta
3. Selecciona tu proyecto "Eclatwebsite"

### Paso 2: Ir a Settings
1. Haz clic en **"Settings"** (en el menú del proyecto)
2. Haz clic en **"Environment Variables"** (en el menú lateral)

### Paso 3: Agregar Variables (una por una)

#### Variable 1: SMTP_HOST
- **Name**: `SMTP_HOST`
- **Value**: `smtp.hostinger.com`
- **Environments**: ✅ Production, ✅ Preview, ✅ Development
- Haz clic en **"Save"**

#### Variable 2: SMTP_PORT
- **Name**: `SMTP_PORT`
- **Value**: `465`
- **Environments**: ✅ Production, ✅ Preview, ✅ Development
- Haz clic en **"Save"**

#### Variable 3: SMTP_SECURE
- **Name**: `SMTP_SECURE`
- **Value**: `true`
- **Environments**: ✅ Production, ✅ Preview, ✅ Development
- Haz clic en **"Save"**

#### Variable 4: SMTP_USER
- **Name**: `SMTP_USER`
- **Value**: `eclat@eclatcore.com`
- **Environments**: ✅ Production, ✅ Preview, ✅ Development
- Haz clic en **"Save"**

#### Variable 5: SMTP_PASS
- **Name**: `SMTP_PASS`
- **Value**: `Chiquinquira0205$`
- **Environments**: ✅ Production, ✅ Preview, ✅ Development
- Haz clic en **"Save"**

#### Variable 6: MAIL_TO
- **Name**: `MAIL_TO`
- **Value**: `eclat@eclatcore.com`
- **Environments**: ✅ Production, ✅ Preview, ✅ Development
- Haz clic en **"Save"**

#### Variable 7: MAIL_FROM
- **Name**: `MAIL_FROM`
- **Value**: `"Éclat Web" <eclat@eclatcore.com>`
- **Environments**: ✅ Production, ✅ Preview, ✅ Development
- Haz clic en **"Save"**

### Paso 4: Hacer Nuevo Deploy
1. Ve a la pestaña **"Deployments"**
2. Haz clic en **"Redeploy"** en el último deployment
3. O haz un nuevo push a GitHub

## ✅ Verificación
Una vez configurado:
- Los emails llegarán a `eclat@eclatcore.com`
- También se enviará copia a `eclatcore2025@gmail.com`
- El formulario mostrará "¡Mensaje enviado correctamente!"

## 🚨 IMPORTANTE
- **TODAS** las variables deben estar en los 3 entornos
- **NO** uses secretos, usa Environment Variables normales
- Después de agregar las variables, haz un nuevo deploy
