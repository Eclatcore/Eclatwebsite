# 🌟 Éclat Studio - Sitio Web

Sitio web profesional para Éclat Studio, desarrollado con Next.js 15, Tailwind CSS y Framer Motion.

## ✨ Características

- 🎨 **Diseño moderno** con gradientes y animaciones
- 📱 **Totalmente responsive** para todos los dispositivos
- ⚡ **Rendimiento optimizado** con Next.js 15
- 📧 **Formulario de contacto funcional** con envío de emails
- 🔒 **Páginas legales** (Aviso Legal, Política de Cookies, Política de Privacidad)
- 🚀 **Despliegue automático** con GitHub Actions

## 🛠️ Tecnologías

- **Next.js 15** - Framework de React
- **Tailwind CSS** - Framework de CSS
- **Framer Motion** - Animaciones
- **TypeScript** - Tipado estático
- **Nodemailer** - Envío de emails
- **GitHub Actions** - CI/CD

## 🚀 Despliegue

### Desarrollo Local
```bash
npm install
npm run dev
```

### Despliegue en Hostinger
1. **Configurar GitHub** (ver `DESPLIEGUE-GITHUB-HOSTINGER.md`)
2. **Configurar Hostinger** con Node.js
3. **Configurar secrets** en GitHub
4. **Push automático** despliega el sitio

## 📧 Formulario de Contacto

- **Destinatario principal**: `eclat@eclatcore.com`
- **Copia automática**: `eclatcore2025@gmail.com`
- **Configuración SMTP**: Hostinger

## 📁 Estructura del Proyecto

```
src/
├── app/
│   ├── components/          # Componentes reutilizables
│   ├── layout/             # Header y Footer
│   ├── legal/              # Páginas legales
│   └── api/contact/        # API del formulario
├── globals.css             # Estilos globales
└── layout.tsx              # Layout principal
```

## 🔧 Configuración

### Variables de Entorno
```env
SMTP_HOST=smtp.hostinger.com
SMTP_PORT=465
SMTP_SECURE=true
SMTP_USER=eclat@eclatcore.com
SMTP_PASS=tu-contraseña
MAIL_TO=eclat@eclatcore.com
MAIL_FROM="Éclat Web" <eclat@eclatcore.com>
```

## 📚 Documentación

- `DESPLIEGUE-GITHUB-HOSTINGER.md` - Guía de despliegue con GitHub
- `CONFIGURACION-EMAIL.md` - Configuración del formulario
- `RESUMEN-DESPLIEGUE.md` - Resumen de despliegue

## 🎯 Funcionalidades

### ✅ Implementadas
- [x] Diseño responsive completo
- [x] Animaciones con Framer Motion
- [x] Formulario de contacto funcional
- [x] Páginas legales
- [x] Optimización de rendimiento
- [x] Despliegue automático
- [x] Envío de emails a múltiples destinatarios

### 🔄 Envío de Emails
- **Validación** de campos obligatorios
- **Diseño profesional** del email
- **Múltiples destinatarios** (principal + copia)
- **Configuración SMTP** de Hostinger

## 🚀 Comandos Útiles

```bash
# Desarrollo
npm run dev

# Build de producción
npm run build

# Configurar GitHub
./setup-github.sh

# Despliegue manual
./deploy.sh
```

## 📞 Soporte

Para problemas o dudas:
1. Revisar documentación en `/docs`
2. Verificar logs en GitHub Actions
3. Comprobar configuración en Hostinger

## 🎉 ¡Listo para Producción!

El sitio está completamente preparado para desplegar en Hostinger con GitHub Actions para un flujo de trabajo profesional y automatizado.