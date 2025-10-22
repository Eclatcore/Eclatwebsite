#!/bin/bash

echo "🚀 Desplegando Éclat a Hostinger..."
echo "=================================="

# Limpiar builds anteriores
echo "🧹 Limpiando builds anteriores..."
rm -rf out/ .next/

# Instalar dependencias
echo "📦 Instalando dependencias..."
npm install

# Generar build optimizado
echo "🔨 Generando build optimizado para Hostinger..."
npm run build

# Verificar que el build se generó correctamente
if [ ! -d "out" ]; then
    echo "❌ Error: No se generó la carpeta 'out'"
    exit 1
fi

echo "✅ Build generado correctamente!"
echo ""
echo "📁 Contenido de la carpeta 'out':"
ls -la out/

echo ""
echo "🌐 Archivos listos para subir a Hostinger:"
echo "1. Carpeta 'out/' (todo el contenido)"
echo "2. Archivo '.htaccess'"
echo ""
echo "📋 INSTRUCCIONES PARA HOSTINGER:"
echo "================================"
echo "1. Accede al panel de control de Hostinger"
echo "2. Ve a 'File Manager'"
echo "3. Navega a 'public_html'"
echo "4. Sube TODO el contenido de la carpeta 'out/'"
echo "5. Sube también el archivo '.htaccess'"
echo "6. Asegúrate de que 'index.html' esté en la raíz de public_html"
echo ""
echo "🔧 Si sigues viendo pantalla en blanco:"
echo "- Verifica que todos los archivos se subieron correctamente"
echo "- Asegúrate de que '.htaccess' esté en public_html"
echo "- Verifica que 'index.html' esté en la raíz"
echo "- Revisa los permisos de archivos (644 para archivos, 755 para carpetas)"
echo ""
echo "✨ ¡Despliegue completado! Tu sitio debería estar funcionando."
