# 🔧 Configuración de Variables de Entorno en Vercel

## Variables que necesitas configurar en Vercel:

### 1. Accede al Dashboard de Vercel
- Ve a tu proyecto en Vercel
- Haz clic en "Settings"
- Selecciona "Environment Variables"

### 2. Agrega estas variables (una por una):

| Variable | Valor | Entorno |
|----------|-------|---------|
| `SMTP_HOST` | `smtp.hostinger.com` | Production, Preview, Development |
| `SMTP_PORT` | `465` | Production, Preview, Development |
| `SMTP_SECURE` | `true` | Production, Preview, Development |
| `SMTP_USER` | `eclat@eclatcore.com` | Production, Preview, Development |
| `SMTP_PASS` | `Chiquinquira0205$` | Production, Preview, Development |
| `MAIL_TO` | `eclat@eclatcore.com` | Production, Preview, Development |
| `MAIL_FROM` | `"Éclat Web" <eclat@eclatcore.com>` | Production, Preview, Development |

### 3. Pasos detallados:
1. **Haz clic en "Add New"**
2. **Nombre**: `SMTP_HOST`
3. **Valor**: `smtp.hostinger.com`
4. **Entornos**: Selecciona Production, Preview, Development
5. **Repite para cada variable**

### 4. Después de agregar todas las variables:
1. Haz un nuevo deploy
2. El formulario de contacto debería funcionar correctamente

## ✅ Verificación:
- El formulario enviará emails a `eclat@eclatcore.com`
- También se enviará una copia a `eclatcore2025@gmail.com`
- Los emails tendrán el formato HTML configurado

## 🚨 Importante:
- **NO** uses la configuración de secretos de Vercel
- Usa **Environment Variables** normales
- Asegúrate de que todas las variables estén en los 3 entornos
