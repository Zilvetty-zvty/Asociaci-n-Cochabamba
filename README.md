# Asociación Basket - Página de Fixtures y Resultados

Una página ligera y moderna para gestionar fixtures de partidos, resultados y avisos sobre eventos deportivos. Ideal para alojar en Cloudflare Pages.

## ✨ Características

- **Fixtures**: Gestiona los próximos partidos con fecha, hora y ubicación
- **Resultados**: Registra los resultados finales de los partidos
- **Avisos**: Sistema de notificaciones para eventos importantes
- **Datos Persistentes**: Almacenamiento local (localStorage) para mantener datos entre sesiones
- **Responsive**: Diseño adaptable a cualquier dispositivo
- **Tema Oscuro**: Interfaz moderna con gradientes y animaciones
- **Sin Dependencias Externas**: Solo HTML, CSS y JavaScript vanilla

## 🚀 Inicio Rápido

### Localmente
1. Clona o descarga el proyecto
2. Abre `index.html` en tu navegador
3. ¡Listo para usar!

### En Cloudflare Pages

#### Opción 1: Usando Git (Recomendado)
1. Sube tu repositorio a GitHub, GitLab o Gitea
2. Ve a [Cloudflare Pages](https://pages.cloudflare.com/)
3. Selecciona "Conectar a Git"
4. Elige tu repositorio
5. En build settings:
   - Build command: (dejar vacío)
   - Build output directory: `/`
6. Haz clic en "Guardar e implementar"

#### Opción 2: Cargar manualmente
1. Ve a [Cloudflare Pages](https://pages.cloudflare.com/)
2. Selecciona "Cargar sitio"
3. Arrastra y suelta la carpeta del proyecto
4. ¡Listo!

## 📱 Estructura de Archivos

```
AsociacionBasket/
├── index.html      # Estructura HTML principal
├── styles.css      # Estilos y diseño responsivo
├── app.js          # Lógica de la aplicación
├── package.json    # Información del proyecto
└── README.md       # Este archivo
```

## 🛠️ Uso

### Agregar Fixtures
1. Ve a la sección "Fixtures"
2. Haz clic en el botón "+"
3. Completa:
   - Nombre del equipo 1 y 2
   - Fecha y hora del partido
   - Ubicación
4. Haz clic en "Guardar"

### Registrar Resultados
1. Ve a la sección "Resultados"
2. Haz clic en el botón "+"
3. Completa:
   - Nombres de los equipos
   - Puntos finales
   - Fecha y ubicación
4. Los resultados se mostrarán automáticamente con el ganador destacado

### Crear Avisos
1. Ve a la sección "Avisos"
2. Haz clic en el botón "+"
3. Completa:
   - Título del aviso
   - Mensaje/descripción
   - Tipo (Información, Éxito, Advertencia o Peligro)
4. Se mostrará inmediatamente

## 🎨 Personalización

### Cambiar Colores
Abre `styles.css` y modifica las variables CSS al inicio:

```css
:root {
    --primary-color: #ff6b35;      /* Color principal */
    --secondary-color: #004e89;    /* Color secundario */
    --accent-color: #1ac8ed;       /* Color de acento */
    --bg-primary: #0f1419;         /* Fondo principal */
    /* ... más colores */
}
```

### Cambiar Datos Iniciales
Abre `app.js` y modifica los métodos:
- `getDefaultFixtures()`
- `getDefaultResults()`
- `getDefaultNotifications()`

## 💾 Almacenamiento de Datos

Los datos se guardan automáticamente en el localStorage de tu navegador. Para limpiar todo:

```javascript
// En la consola del navegador
localStorage.clear();
```

## 📊 Características Técnicas

- **JavaScript Vanilla**: Sin frameworks, carga ultrarrápida
- **Local Storage**: Persistencia de datos sin servidor
- **CSS Grid & Flexbox**: Diseño responsive moderno
- **Animaciones Suaves**: Transiciones y efectos visuales
- **Optimizado para SEO**: Estructura HTML semántica
- **Performance**: Tamaño total < 50KB

## 🔒 Privacidad

Todos los datos se almacenan localmente en tu navegador. No se envía información a servidores externos.

## 📝 Notas

- Los datos se pierden si limpias el almacenamiento del navegador
- Para backup, exporta los datos del localStorage regularmente
- Compatible con navegadores modernos (Chrome, Firefox, Safari, Edge)

## 🤝 Contribuciones

Siéntete libre de mejorar el proyecto y compartir tus cambios.

## 📄 Licencia

MIT - Libre para usar, modificar y distribuir

---

**¿Necesitas ayuda?** Revisa el código comentado en `app.js` y `styles.css` para entender mejor cómo funciona la aplicación.
