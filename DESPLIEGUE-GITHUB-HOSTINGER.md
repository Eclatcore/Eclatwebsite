# 🚀 Despliegue en Hostinger con GitHub

## 📋 Preparación del Repositorio

### 1. **Crear Repositorio en GitHub**
1. Ir a [GitHub.com](https://github.com)
2. Hacer clic en **"New repository"**
3. Nombre: `eclat-website` (o el que prefieras)
4. Descripción: "Sitio web de Éclat Studio"
5. Marcar como **Private** (recomendado)
6. **NO** inicializar con README (ya tenemos archivos)
7. Hacer clic en **"Create repository"**

### 2. **Subir Código a GitHub**

```bash
# En tu terminal local:
git init
git add .
git commit -m "Initial commit: Éclat website"
git branch -M main
git remote add origin https://github.com/TU-USUARIO/eclat-website.git
git push -u origin main
```

## 🔧 Configuración en Hostinger

### 1. **Habilitar SSH en Hostinger**
1. Ir al panel de Hostinger
2. **Hosting** → **Avanzado** → **SSH**
3. Activar **SSH Access**
4. Generar **SSH Key** y descargar

### 2. **Configurar Node.js en Hostinger**
1. En el panel de Hostinger, ir a **Node.js**
2. Crear nueva aplicación Node.js
3. **Versión**: Node.js 18
4. **Directorio**: `/public_html`
5. **Comando de inicio**: `npm start`
6. **Puerto**: `3000`

## 🔐 Configurar Secrets en GitHub

### 1. **Ir a GitHub Repository Settings**
1. En tu repositorio, ir a **Settings**
2. **Secrets and variables** → **Actions**
3. Hacer clic en **"New repository secret"**

### 2. **Agregar los siguientes secrets:**

```
HOSTINGER_HOST = tu-ip-de-hostinger
HOSTINGER_USERNAME = tu-usuario-hostinger
HOSTINGER_SSH_KEY = contenido-de-tu-ssh-key
HOSTINGER_DOMAIN = tu-dominio.com
```

## 📧 Variables de Entorno

### 1. **En GitHub Secrets (adicionales):**
```
SMTP_HOST = smtp.hostinger.com
SMTP_PORT = 465
SMTP_SECURE = true
SMTP_USER = eclat@eclatcore.com
SMTP_PASS = Chiquinquira0205$
MAIL_TO = eclat@eclatcore.com
MAIL_FROM = "Éclat Web" <eclat@eclatcore.com>
NEXT_PUBLIC_BASE_URL = https://tu-dominio.com
```

### 2. **En Hostinger (.env.local):**
Crear archivo `.env.local` en Hostinger con las mismas variables.

## 🚀 Proceso de Despliegue

### **Automático (Recomendado)**
1. **Hacer push** a la rama `main`
2. **GitHub Actions** se ejecuta automáticamente
3. **Despliegue** se realiza en Hostinger
4. **Sitio** queda actualizado

### **Manual**
```bash
# En tu máquina local:
git add .
git commit -m "Update website"
git push origin main
```

## 🔧 Configuración Adicional

### 1. **PM2 para Gestión de Procesos**
```bash
# En Hostinger, instalar PM2:
npm install -g pm2

# Configurar PM2:
pm2 start npm --name "eclat-app" -- start
pm2 save
pm2 startup
```

### 2. **Nginx Configuration (si es necesario)**
```nginx
server {
    listen 80;
    server_name tu-dominio.com;
    
    location / {
        proxy_pass http://localhost:3000;
        proxy_http_version 1.1;
        proxy_set_header Upgrade $http_upgrade;
        proxy_set_header Connection 'upgrade';
        proxy_set_header Host $host;
        proxy_cache_bypass $http_upgrade;
    }
}
```

## 🧪 Verificar Despliegue

### 1. **Acceder al Sitio**
- Visitar `https://tu-dominio.com`
- Verificar que todas las páginas cargan
- Comprobar responsive design

### 2. **Probar Formulario de Contacto**
- Ir a la sección de contacto
- Enviar mensaje de prueba
- Verificar que llegue a ambos emails

### 3. **Verificar Logs**
```bash
# En Hostinger:
pm2 logs eclat-app
```

## 🚨 Solución de Problemas

### **Error en GitHub Actions**
- Verificar que todos los secrets estén configurados
- Comprobar SSH key en Hostinger
- Revisar logs en GitHub Actions

### **Error en Hostinger**
- Verificar que Node.js esté configurado
- Comprobar variables de entorno
- Revisar logs de PM2

### **Formulario no funciona**
- Verificar variables SMTP
- Comprobar que el archivo `.env.local` esté en Hostinger
- Revisar logs de la aplicación

## ✅ Checklist Final

- [ ] Repositorio creado en GitHub
- [ ] Código subido a GitHub
- [ ] SSH configurado en Hostinger
- [ ] Node.js app creada en Hostinger
- [ ] Secrets configurados en GitHub
- [ ] Variables de entorno configuradas
- [ ] GitHub Actions funcionando
- [ ] Sitio accesible desde el dominio
- [ ] Formulario de contacto funcionando
- [ ] PM2 configurado para gestión de procesos

## 🎉 ¡Ventajas del Despliegue con GitHub!

- ✅ **Despliegue automático** al hacer push
- ✅ **Historial de cambios** completo
- ✅ **Rollback fácil** si algo falla
- ✅ **Colaboración** con otros desarrolladores
- ✅ **Backup automático** del código
- ✅ **CI/CD** profesional

## 📞 Soporte

Si tienes problemas:
1. Revisar logs en GitHub Actions
2. Verificar configuración SSH en Hostinger
3. Comprobar variables de entorno
4. Revisar logs de PM2 en Hostinger
