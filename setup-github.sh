#!/bin/bash

# Script para configurar GitHub y Hostinger
echo "🚀 Configurando despliegue con GitHub y Hostinger..."

# 1. Verificar que estamos en un repositorio git
if [ ! -d ".git" ]; then
    echo "📦 Inicializando repositorio Git..."
    git init
    git branch -M main
fi

# 2. Agregar todos los archivos
echo "📁 Agregando archivos al repositorio..."
git add .

# 3. Hacer commit inicial
echo "💾 Haciendo commit inicial..."
git commit -m "Initial commit: Éclat website with GitHub deployment"

# 4. Mostrar instrucciones para conectar con GitHub
echo ""
echo "✅ Repositorio local configurado!"
echo ""
echo "📋 Próximos pasos:"
echo "1. Crear repositorio en GitHub:"
echo "   - Ir a https://github.com/new"
echo "   - Nombre: eclat-website"
echo "   - Marcar como Private"
echo "   - NO inicializar con README"
echo ""
echo "2. Conectar repositorio local con GitHub:"
echo "   git remote add origin https://github.com/TU-USUARIO/eclat-website.git"
echo "   git push -u origin main"
echo ""
echo "3. Configurar secrets en GitHub:"
echo "   - HOSTINGER_HOST"
echo "   - HOSTINGER_USERNAME" 
echo "   - HOSTINGER_SSH_KEY"
echo "   - HOSTINGER_DOMAIN"
echo "   - Variables SMTP"
echo ""
echo "4. Configurar Node.js en Hostinger"
echo "5. ¡Despliegue automático listo!"
echo ""
echo "📚 Revisa DESPLIEGUE-GITHUB-HOSTINGER.md para más detalles"
