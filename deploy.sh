#!/bin/bash

# Script de despliegue para Hostinger
echo "🚀 Iniciando despliegue para Hostinger..."

# 1. Limpiar builds anteriores
echo "🧹 Limpiando builds anteriores..."
rm -rf .next
rm -rf out

# 2. Instalar dependencias
echo "📦 Instalando dependencias..."
npm install

# 3. Crear build de producción
echo "🔨 Creando build de producción..."
npm run build

# 4. Verificar que el build se creó correctamente
if [ -d ".next" ]; then
    echo "✅ Build creado exitosamente"
else
    echo "❌ Error: Build no se creó correctamente"
    exit 1
fi

# 5. Crear archivo de información del despliegue
echo "📝 Creando archivo de información..."
cat > DEPLOY_INFO.txt << EOF
Fecha de despliegue: $(date)
Versión: $(node -v)
NPM: $(npm -v)
Build exitoso: ✅

Archivos importantes:
- .htaccess (configuración Apache)
- .env.local (variables de entorno)
- .next/ (build de producción)

Para subir a Hostinger:
1. Subir todos los archivos a public_html
2. Configurar variables de entorno en el panel
3. Verificar que el dominio esté configurado
EOF

echo "✅ Preparación completada. Revisa DEPLOY_INFO.txt para más detalles."
echo "📁 Archivos listos para subir a Hostinger"
