# Guía para aparecer en Google cuando busquen "Éclat Core"

## 📋 Pasos esenciales para indexar tu sitio en Google

### 1. **Google Search Console** (OBLIGATORIO)

1. Ve a [Google Search Console](https://search.google.com/search-console)
2. Inicia sesión con tu cuenta de Google
3. Haz clic en "Añadir propiedad"
4. Selecciona "Prefijo de URL" o "Dominio"
5. Ingresa tu URL: `https://eclatcore.com` (o tu dominio real)
6. Verifica la propiedad usando uno de estos métodos:
   - **Método HTML (Recomendado)**: Google te dará un código que debes añadir a tu sitio
   - **Método DNS**: Añade un registro TXT en tu proveedor de hosting
   - **Método Google Analytics**: Si ya tienes GA configurado

### 2. **Enviar Sitemap a Google**

Una vez verificado tu sitio:

1. En Google Search Console, ve a "Sitemaps" en el menú lateral
2. Ingresa: `https://eclatcore.com/sitemap.xml`
3. Haz clic en "Enviar"
4. Google comenzará a indexar tus páginas

### 3. **Solicitar indexación manual (Opcional pero útil)**

1. En Google Search Console, ve a "Inspección de URL"
2. Ingresa tu URL principal: `https://eclatcore.com`
3. Haz clic en "Solicitar indexación"
4. Repite para páginas importantes

### 4. **Optimización del contenido**

✅ **Ya está hecho en tu código:**
- Título optimizado con "Éclat Core"
- Descripción con keywords
- Metadatos completos
- Sitemap.xml generado automáticamente
- Robots.txt configurado

### 5. **Contenido en tu página principal**

Asegúrate de que en tu página principal (`page.tsx`) aparezca el texto "Éclat Core" varias veces:
- En el Hero
- En el About Us
- En el Footer
- En los títulos principales

### 6. **Backlinks (Enlaces externos)**

Para mejorar el ranking, consigue enlaces desde otros sitios:
- Redes sociales (LinkedIn, Facebook, Instagram)
- Directorios de empresas
- Blogs relacionados
- Colaboraciones con otras empresas

### 7. **Google My Business** (Si tienes negocio físico)

1. Ve a [Google My Business](https://www.google.com/business/)
2. Crea o reclama tu perfil
3. Añade tu información: dirección, teléfono, horarios
4. Añade fotos y publicaciones regulares

### 8. **Tiempo de espera**

- **Indexación inicial**: 1-7 días después de enviar el sitemap
- **Aparecer en búsquedas**: 2-4 semanas
- **Posicionamiento estable**: 2-3 meses

### 9. **Verificar que funciona**

Después de 1-2 semanas, prueba estas búsquedas en Google:
- `site:eclatcore.com` (debe mostrar todas tus páginas indexadas)
- `"Éclat Core"` (debe aparecer tu sitio)
- `Éclat Core diseño web` (debe aparecer tu sitio)

## 🔧 Configuración técnica adicional

### Variable de entorno

Añade en tu `.env.local` o en Vercel:
```
NEXT_PUBLIC_SITE_URL=https://eclatcore.com
```

### Verificación HTML (Si Google te lo pide)

Si Google te da un código de verificación HTML, puedes añadirlo en `layout.tsx` o crear un archivo específico.

## 📊 Monitoreo

1. **Google Search Console**: Revisa semanalmente
   - Errores de indexación
   - Rendimiento de búsquedas
   - Palabras clave que te encuentran

2. **Google Analytics**: Configura para ver tráfico orgánico

## ⚡ Consejos rápidos

1. **Publica contenido regularmente**: Blog, casos de éxito, noticias
2. **Optimiza imágenes**: Usa alt text descriptivo
3. **Velocidad del sitio**: Asegúrate de que cargue rápido (Next.js ya ayuda)
4. **Mobile-first**: Tu sitio ya es responsive ✅
5. **HTTPS**: Asegúrate de tener certificado SSL (Vercel lo incluye)

## 🚨 Problemas comunes

**"Mi sitio no aparece después de 2 semanas"**
- Verifica que el sitemap esté enviado
- Revisa errores en Search Console
- Asegúrate de que robots.txt no esté bloqueando

**"Aparezco pero muy abajo en los resultados"**
- Mejora el contenido con más menciones de "Éclat Core"
- Consigue más backlinks
- Optimiza para palabras clave específicas

**"Google no puede acceder a mi sitio"**
- Verifica que el sitio esté online
- Revisa la configuración de DNS
- Asegúrate de que no haya bloqueos de firewall

## 📞 Próximos pasos

1. ✅ Configura Google Search Console HOY
2. ✅ Envía el sitemap
3. ✅ Espera 1-2 semanas
4. ✅ Revisa resultados y optimiza

---

**Nota**: El SEO es un proceso continuo. Los resultados mejoran con el tiempo y contenido de calidad.


