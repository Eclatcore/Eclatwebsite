# 🚀 Resumen para Desplegar en Hostinger

## ✅ Estado Actual
- ✅ **Build de producción** creado exitosamente
- ✅ **Formulario de contacto** funcionando
- ✅ **Emails configurados** para múltiples destinatarios
- ✅ **Archivos de configuración** creados

## 📁 Archivos Listos para Subir

### Archivos Principales
- `.next/` - Build de producción (carpeta completa)
- `public/` - Archivos estáticos (backgrounds, videos, etc.)
- `package.json` - Dependencias del proyecto
- `.htaccess` - Configuración de Apache
- `.env.local` - Variables de entorno (crear en Hostinger)

### Archivos de Configuración
- `hostinger.config.js` - Configuración específica
- `next.config.js` - Configuración de Next.js
- `tailwind.config.js` - Configuración de Tailwind
- `postcss.config.js` - Configuración de PostCSS

## 🔧 Pasos para Desplegar

### 1. **Acceder al Panel de Hostinger**
1. Iniciar sesión en tu cuenta de Hostinger
2. Ir a **"Hosting"** → **"File Manager"**
3. Navegar a la carpeta `public_html`

### 2. **Subir Archivos**
1. **Subir la carpeta `.next/` completa**
2. **Subir la carpeta `public/` completa**
3. **Subir archivos de configuración**:
   - `package.json`
   - `.htaccess`
   - `next.config.js`
   - `tailwind.config.js`
   - `postcss.config.js`

### 3. **Configurar Variables de Entorno**
En el panel de Hostinger, crear archivo `.env.local`:

```env
NODE_ENV=production
SMTP_HOST=smtp.hostinger.com
SMTP_PORT=465
SMTP_SECURE=true
SMTP_USER=eclat@eclatcore.com
SMTP_PASS=Chiquinquira0205$
MAIL_TO=eclat@eclatcore.com
MAIL_FROM="Éclat Web" <eclat@eclatcore.com>
NEXT_PUBLIC_BASE_URL=https://tu-dominio.com
```

### 4. **Configurar Node.js App (Recomendado)**
1. En el panel de Hostinger, ir a **"Node.js"**
2. Crear nueva aplicación Node.js
3. **Comando de inicio**: `npm start`
4. **Puerto**: `3000`
5. **Directorio**: `/public_html`

### 5. **Configurar Dominio**
1. **DNS**: Asegurar que apunte a Hostinger
2. **SSL**: Activar certificado SSL gratuito
3. **Subdominio**: Si usas subdominio, configurar en DNS

## 📧 Configuración del Formulario

### Variables Requeridas
```env
SMTP_HOST=smtp.hostinger.com
SMTP_PORT=465
SMTP_SECURE=true
SMTP_USER=eclat@eclatcore.com
SMTP_PASS=Chiquinquira0205$
MAIL_TO=eclat@eclatcore.com
MAIL_FROM="Éclat Web" <eclat@eclatcore.com>
```

### Destinatarios Configurados
- **Principal**: `eclat@eclatcore.com`
- **Copia**: `eclatcore2025@gmail.com`

## 🧪 Verificar Despliegue

### 1. **Acceder al Sitio**
- Visitar tu dominio
- Verificar que todas las páginas cargan
- Comprobar que el diseño se ve correctamente

### 2. **Probar Formulario de Contacto**
- Ir a la sección de contacto
- Enviar un mensaje de prueba
- Verificar que llegue a ambos emails

### 3. **Verificar Funcionalidades**
- Navegación entre secciones
- Enlaces funcionando
- Responsive design
- Animaciones funcionando

## 🚨 Solución de Problemas

### Error 500 - Internal Server Error
- Verificar variables de entorno
- Revisar logs en el panel de Hostinger
- Comprobar configuración SMTP

### Formulario no envía emails
- Verificar credenciales SMTP
- Comprobar que las variables estén en `.env.local`
- Revisar configuración de Node.js App

### Páginas no cargan
- Verificar archivo `.htaccess`
- Comprobar configuración de rutas
- Revisar permisos de archivos

## 📞 Soporte

Si tienes problemas:
1. Revisar logs en el panel de Hostinger
2. Verificar configuración de variables de entorno
3. Comprobar que todos los archivos estén subidos correctamente

## ✅ Checklist Final

- [ ] Build de producción creado
- [ ] Archivos subidos a Hostinger
- [ ] Variables de entorno configuradas
- [ ] Node.js App configurada
- [ ] Dominio configurado
- [ ] SSL activado
- [ ] Formulario de contacto funcionando
- [ ] Emails llegando correctamente
- [ ] Sitio accesible desde el dominio

## 🎉 ¡Listo para Desplegar!

Tu proyecto está completamente preparado para subir a Hostinger. Sigue los pasos del checklist y tendrás tu sitio web funcionando en tu dominio.
