# 📊 SETUP: Cómo Crear el Archivo datos.xlsx

## ¿Qué es datos.xlsx?

Es el archivo de Excel que el programa carga automáticamente al iniciar. Debe estar en la **misma carpeta** que el archivo `index.html`.

---

## 📂 Ubicación Correcta

```
C:\Users\andru\Desktop\AsociacionBasket\
├── index.html          ✅ Archivo principal
├── styles.css
├── app.js
├── datos.xlsx          ⬅️ AQUÍ va tu Excel
├── package.json
└── README.md
```

**IMPORTANTE:** El archivo debe llamarse exactamente **`datos.xlsx`** (no datos.xls, no Datos.xlsx, no datos 2.xlsx)

---

## 📝 Paso 1: Crear el Archivo Excel

### Opción A: Crear desde cero en Excel
1. Abre Microsoft Excel o LibreOffice Calc
2. Crea 3 hojas con los nombres:
   - `Fixtures`
   - `Resultados`
   - `Avisos`

### Opción B: Descargar plantilla (más fácil)
Si tienes Google Sheets o Excel Online, copia esta estructura

---

## 📋 Paso 2: Llenar las Columnas

### HOJA 1: "Fixtures" (Próximos Partidos)

| equipo1 | equipo2 | fecha | hora | cancha |
|---------|---------|-------|------|--------|
| Titanes | Águilas | 2025-11-15 | 20:00 | Cancha Central |
| Leones | Dragones | 2025-11-16 | 19:30 | Cancha Norte |
| Panteras | Falcones | 2025-11-17 | 20:00 | Cancha Sur |

**Columnas obligatorias:**
- `equipo1` - Nombre equipo 1 (texto)
- `equipo2` - Nombre equipo 2 (texto)
- `fecha` - Fecha (formato: 2025-11-15)
- `hora` - Hora (formato: 20:00)
- `cancha` - Cancha/Ubicación (texto)

---

### HOJA 2: "Resultados" (Partidos Finalizados)

| team1 | score1 | team2 | score2 | date | location |
|-------|--------|-------|--------|------|----------|
| Titanes | 78 | Búhos | 72 | 2025-11-10 | Cancha Central |
| Leones | 85 | Panteras | 88 | 2025-11-09 | Cancha Norte |

**Columnas obligatorias:**
- `team1` - Nombre equipo 1 (texto)
- `score1` - Puntos equipo 1 (número)
- `team2` - Nombre equipo 2 (texto)
- `score2` - Puntos equipo 2 (número)
- `date` - Fecha (formato: 2025-11-15)
- `location` - Ubicación (texto)

---

### HOJA 3: "Avisos" (Notificaciones)

| title | message | type |
|-------|---------|------|
| ¡Campeonato Iniciado! | El torneo 2025 ha comenzado | info |
| Cambio de Cancha | El partido se trasladó a Cancha Sur | warning |
| ¡Victoria! | Los Titanes ganaron 78-72 | success |

**Columnas obligatorias:**
- `title` - Título del aviso (texto)
- `message` - Mensaje/descripción (texto)
- `type` - Tipo: `info`, `success`, `warning`, `danger`

---

## 💾 Paso 3: Guardar el Archivo

### En Microsoft Excel:
1. Presiona `Ctrl+S` o Archivo > Guardar
2. Nombre: **`datos.xlsx`** (IMPORTANTE: .xlsx, no .xls)
3. Formato: **Excel Workbook (.xlsx)**
4. Ubicación: **C:\Users\andru\Desktop\AsociacionBasket\**

### En LibreOffice Calc:
1. Archivo > Guardar Como
2. Nombre: **`datos.xlsx`**
3. Formato: **Excel 2007-365 (.xlsx)**
4. Ubicación: **C:\Users\andru\Desktop\AsociacionBasket\**

### En Google Sheets:
1. Archivo > Descargar > Microsoft Excel (.xlsx)
2. Guardar en: **C:\Users\andru\Desktop\AsociacionBasket\**
3. Renombrar a: **`datos.xlsx`**

---

## ✅ Verificar que Funciona

1. Abre `index.html` en el navegador
2. Si todo está correcto, verás:
   - ✅ Pantalla de "Cargando datos..."
   - ✅ Tus datos aparecer en cada sección
   - ✅ Mensaje verde "✅ Datos cargados desde Excel"

3. Si algo falla, verás:
   - ❌ Datos por defecto (Titanes, Águilas, etc.)
   - ⚠️ Revisar consola (F12) para errores

---

## 🔄 Actualizar Datos

### Opción 1: Editar el Excel y recargar
1. Edita el archivo `datos.xlsx`
2. Guárdalo (Ctrl+S)
3. Vuelve a abrir index.html
4. Haz clic en botón **"🔄 Recargar"**

### Opción 2: Importar archivo diferente
1. Haz clic en **"📥 Importar"**
2. Selecciona otro archivo Excel
3. Los datos se agregan

### Opción 3: Exportar y hacer backup
1. Haz clic en **"📤 Exportar"**
2. Se descarga un Excel con tus datos actuales
3. Guárdalo como backup

---

## ⚠️ Problemas Comunes

### ❌ "No se encontró datos.xlsx"
- Verifica que el archivo está en la carpeta correcta
- Verifica que se llama exactamente **`datos.xlsx`**
- Verifica que es formato `.xlsx`, no `.xls`

### ❌ Las columnas no se reconocen
- Verifica que los nombres son exactos (minúsculas):
  - `equipo1`, `equipo2`, `fecha`, `hora`, `cancha`
  - No: `Equipo1`, `EQUIPO1`, `Equipo 1`
  - Tampoco: `team1`, `team2`, `date`, `time`, `location` (aunque aún funciona por compatibilidad)

### ❌ Las fechas aparecen como números
- Asegúrate de que en Excel están en formato de fecha
- O usa formato: YYYY-MM-DD (2025-11-15)

### ❌ Los puntos no se cargan
- Verifica que son números, no texto
- En Excel, alinea a la derecha (números) vs izquierda (texto)

### ❌ El archivo pesa mucho
- Si tienes muchas filas vacías, elimínalas
- Guarda solo los datos necesarios

---

## 📱 Estructura Completa (Ejemplo)

```
Archivo: datos.xlsx
├── Hoja "Fixtures"
│   ├── Titanes vs Águilas - 2025-11-15
│   ├── Leones vs Dragones - 2025-11-16
│   └── Panteras vs Falcones - 2025-11-17
├── Hoja "Resultados"
│   ├── Titanes 78 - 72 Búhos
│   └── Leones 85 - 88 Panteras
└── Hoja "Avisos"
    ├── ¡Campeonato Iniciado!
    └── Cambio de Cancha
```

---

## 🚀 Flujo Automático

```
1. Abres index.html
        ↓
2. El navegador intenta cargar datos.xlsx
        ↓
3. Si encuentra el archivo:
   ✅ Lee las 3 hojas
   ✅ Importa todos los datos
   ✅ Muestra los datos en pantalla
        ↓
4. Si NO encuentra el archivo:
   ⚠️ Usa datos por defecto (demo)
   💡 Sugerencia: crea datos.xlsx en la carpeta
```

---

## 💡 Tips

✅ **Mejor formato de fecha:** YYYY-MM-DD (2025-11-15)
✅ **No dejes filas vacías:** Podrían causar problemas
✅ **Usa nombres claros:** "Titanes", "Águilas", etc.
✅ **Verifica puntuación:** Sin acentos en nombres de columnas
✅ **Haz backup:** Exporta regularmente

---

## 📊 Template Listo para Copiar

Si quieres empezar rápido, crea un Excel con esto:

```
HOJA: Fixtures
equipo1,equipo2,fecha,hora,cancha
Titanes,Águilas,2025-11-15,20:00,Cancha Central
Leones,Dragones,2025-11-16,19:30,Cancha Norte

HOJA: Resultados
team1,score1,team2,score2,date,location
Titanes,78,Búhos,72,2025-11-10,Cancha Central

HOJA: Avisos
title,message,type
¡Bienvenido!,Sistema funcionando correctamente,info
```

---

**¡Listo!** Ahora tu programa cargará automáticamente los datos desde `datos.xlsx` 🚀
