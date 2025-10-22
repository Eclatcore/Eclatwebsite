# 🚀 Guía de Despliegue en Hostinger

## 📋 Preparación del Proyecto

### ✅ Archivos Creados
- `.htaccess` - Configuración de Apache para Hostinger
- `hostinger.config.js` - Configuración específica de Next.js
- `env.production.txt` - Variables de entorno para producción

## 🔧 Pasos para Desplegar

### 1. **Preparar el Proyecto Localmente**

```bash
# 1. Instalar dependencias
npm install

# 2. Crear build de producción
npm run build

# 3. Crear archivos estáticos (si es necesario)
npm run export
```

### 2. **Configurar Variables de Entorno en Hostinger**

En el panel de Hostinger, crear un archivo `.env.local` con:

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

### 3. **Subir Archivos a Hostinger**

#### Opción A: File Manager (Recomendado para sitios estáticos)
1. Acceder al **File Manager** de Hostinger
2. Navegar a `public_html`
3. Subir todos los archivos de la carpeta `.next/out/` (si usas export)
4. O subir la carpeta `.next/` completa (si usas build)

#### Opción B: Node.js App (Para funcionalidad completa)
1. En el panel de Hostinger, crear una **Node.js App**
2. Subir todos los archivos del proyecto
3. Configurar el comando de inicio: `npm start`
4. Configurar el puerto: `3000`

### 4. **Configuración del Dominio**

1. **DNS**: Asegurar que el dominio apunte a Hostinger
2. **SSL**: Activar certificado SSL gratuito
3. **Subdominio**: Si usas subdominio, configurar en DNS

## 📁 Estructura de Archivos para Hostinger

```
public_html/
├── .htaccess
├── .env.local
├── package.json
├── next.config.js
├── .next/
│   ├── static/
│   ├── server/
│   └── ...
├── public/
│   ├── backgrounds/
│   ├── videos/
│   └── ...
└── src/
    └── app/
        └── ...
```

## ⚙️ Configuración Específica

### Para Sitio Estático (Recomendado)
```bash
# En local, ejecutar:
npm run build
npm run export

# Subir solo la carpeta 'out' a public_html
```

### Para Aplicación Node.js (Con API)
```bash
# En local, ejecutar:
npm run build

# Subir todo el proyecto
# Configurar en Hostinger: Node.js App
# Comando: npm start
# Puerto: 3000
```

## 🔧 Configuración del Formulario de Contacto

### Variables de Entorno Requeridas
```env
SMTP_HOST=smtp.hostinger.com
SMTP_PORT=465
SMTP_SECURE=true
SMTP_USER=eclat@eclatcore.com
SMTP_PASS=tu-contraseña
MAIL_TO=eclat@eclatcore.com
MAIL_FROM="Éclat Web" <eclat@eclatcore.com>
```

### Verificar Funcionamiento
1. Acceder al formulario de contacto
2. Enviar un mensaje de prueba
3. Verificar que llegue a ambos emails:
   - `eclat@eclatcore.com`
   - `eclatcore2025@gmail.com`

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
- [ ] Variables de entorno configuradas
- [ ] Archivos subidos a Hostinger
- [ ] Dominio configurado
- [ ] SSL activado
- [ ] Formulario de contacto funcionando
- [ ] Emails llegando correctamente
- [ ] Sitio accesible desde el dominio
