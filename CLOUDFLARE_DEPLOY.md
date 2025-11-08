# Configuración para Cloudflare Pages

Esta configuración está optimizada para desplegar en Cloudflare Pages.

## Pasos para desplegar:

### 1. Configurar Git (si no lo has hecho)
```bash
git init
git add .
git commit -m "Initial commit"
git branch -M main
git remote add origin https://github.com/tu-usuario/asociacion-basket.git
git push -u origin main
```

### 2. En Cloudflare Pages:
1. Accede a tu dashboard de Cloudflare
2. Selecciona "Pages"
3. Haz clic en "Crear un proyecto"
4. Conecta tu repositorio de GitHub
5. Selecciona el repositorio `asociacion-basket`
6. En la configuración de construcción:
   - **Framework preset**: None
   - **Build command**: (dejar vacío)
   - **Build output directory**: `/`
7. Haz clic en "Guardar e implementar"

### 3. Dominio personalizado (opcional):
1. En las configuraciones del sitio en Pages
2. Ve a "Configuración personalizada"
3. Agrega tu dominio personalizado

## Variables de entorno

Si necesitas agregar variables (actualmente no son necesarias):
1. Ve a "Configuración" en tu sitio de Pages
2. Agrega las variables en "Variables de entorno"

## Notas importantes:

- El proyecto NO requiere build ni dependencias externas
- Todos los archivos se sirven como están
- Los datos se almacenan en localStorage del navegador
- No hay backend, todo es frontend

## URL de ejemplo:
```
https://tu-proyecto.pages.dev
```

¡Tu página estará lista en segundos!
