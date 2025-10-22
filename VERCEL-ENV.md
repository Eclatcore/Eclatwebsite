# 🔧 Configuración de Variables de Entorno en Vercel

## Variables que necesitas configurar en Vercel:

### 1. Accede al Dashboard de Vercel
- Ve a tu proyecto en Vercel
- Haz clic en "Settings"
- Selecciona "Environment Variables"

### 2. Agrega estas variables:

```
SMTP_HOST = smtp.hostinger.com
SMTP_PORT = 465
SMTP_SECURE = true
SMTP_USER = eclat@eclatcore.com
SMTP_PASS = Chiquinquira0205$
MAIL_TO = eclat@eclatcore.com
MAIL_FROM = "Éclat Web" <eclat@eclatcore.com>
```

### 3. Configuración por Entorno:
- **Production**: Todas las variables
- **Preview**: Todas las variables  
- **Development**: Todas las variables

### 4. Después de agregar las variables:
1. Haz un nuevo deploy
2. El formulario de contacto debería funcionar correctamente

## ✅ Verificación:
- El formulario enviará emails a `eclat@eclatcore.com`
- También se enviará una copia a `eclatcore2025@gmail.com`
- Los emails tendrán el formato HTML configurado
