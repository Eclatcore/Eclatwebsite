# 🚀 Configuración para Vercel

## Variables de Entorno Requeridas

Configura estas variables en Vercel Dashboard → Settings → Environment Variables:

```
SMTP_HOST = smtp.hostinger.com
SMTP_PORT = 465
SMTP_SECURE = true
SMTP_USER = eclat@eclatcore.com
SMTP_PASS = Chiquinquira0205$
MAIL_TO = eclat@eclatcore.com
MAIL_FROM = "Éclat Web" <eclat@eclatcore.com>
```

## Configuración por Entorno
- **Production**: ✅ Todas las variables
- **Preview**: ✅ Todas las variables  
- **Development**: ✅ Todas las variables

## Después de configurar:
1. Haz un nuevo deploy
2. El formulario de contacto funcionará correctamente
3. Los emails se enviarán a `eclat@eclatcore.com` y `eclatcore2025@gmail.com`
