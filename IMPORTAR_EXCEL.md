# 📊 GUÍA: Cómo Importar Datos desde Excel

## ¿Qué archivos puedo importar?

Soporta formatos:
- ✅ `.xlsx` (Excel moderno)
- ✅ `.xls` (Excel antiguo)
- ✅ `.csv` (Valores separados por comas)

---

## 📋 Formato de Fixtures (Próximos Partidos)

### Nombre de hoja: "Fixtures" o "Partidos"

| team1 | team2 | date | time | location |
|-------|-------|------|------|----------|
| Titanes | Águilas | 2025-11-15 | 20:00 | Cancha Central |
| Leones | Dragones | 2025-11-16 | 19:30 | Cancha Norte |
| Panteras | Falcones | 2025-11-17 | 20:00 | Cancha Sur |

**Columnas requeridas:**
- `team1` - Nombre del equipo 1
- `team2` - Nombre del equipo 2
- `date` - Fecha (formato: YYYY-MM-DD o cualquier formato de fecha)
- `time` - Hora (formato: HH:MM, ej: 20:00)
- `location` - Ubicación/Cancha

---

## 🏆 Formato de Resultados

### Nombre de hoja: "Resultados" o "Results"

| team1 | score1 | team2 | score2 | date | location |
|-------|--------|-------|--------|------|----------|
| Titanes | 78 | Búhos | 72 | 2025-11-10 | Cancha Central |
| Leones | 85 | Panteras | 88 | 2025-11-09 | Cancha Norte |

**Columnas requeridas:**
- `team1` - Nombre del equipo 1
- `score1` - Puntos del equipo 1 (número)
- `team2` - Nombre del equipo 2
- `score2` - Puntos del equipo 2 (número)
- `date` - Fecha
- `location` - Ubicación

---

## 📢 Formato de Avisos/Notificaciones

### Nombre de hoja: "Avisos" o "Notificaciones"

| title | message | type |
|-------|---------|------|
| ¡Campeonato Iniciado! | El torneo 2025 ha comenzado | info |
| Cambio de Cancha | El partido se trasladó a Cancha Sur | warning |
| ¡Victoria! | Los Titanes ganaron 78-72 | success |
| Equipo Cancelado | El partido fue cancelado | danger |

**Columnas requeridas:**
- `title` - Título del aviso
- `message` - Mensaje/descripción
- `type` - Tipo (info, success, warning, danger)

---

## 🚀 Cómo Importar

### Paso 1: Preparar archivo Excel
1. Crea un archivo Excel con tus datos
2. Usa los nombres de columnas exactos (sin acentos, en minúsculas)
3. Puedes tener múltiples hojas en el mismo archivo

### Paso 2: Importar en la App
1. Abre la página en tu navegador
2. Haz clic en el botón **"📥 Importar"**
3. Selecciona tu archivo Excel
4. ¡Los datos se cargan automáticamente!

### Paso 3: Exportar (Backup)
1. Haz clic en el botón **"📤 Exportar"**
2. Se descargará un archivo Excel con tus datos
3. Úsalo como backup o para modificar en Excel

---

## 💡 Tips Importantes

### Formatos de Fecha
Acepta múltiples formatos:
- `2025-11-15` (YYYY-MM-DD) ✅ Recomendado
- `15/11/2025` (DD/MM/YYYY) ✅
- `11/15/2025` (MM/DD/YYYY) ✅
- `15-Nov-2025` ✅
- Números de Excel (conversión automática) ✅

### Nombres de Hoja
No importa mayúsculas/minúsculas. Detecta automáticamente:
- `Fixtures`, `fixtures`, `FIXTURES`, `Partidos`
- `Resultados`, `resultados`, `RESULTADOS`, `Results`
- `Avisos`, `avisos`, `AVISOS`, `Notificaciones`

### Datos Vacíos
- Las filas con datos incompletos se ignoran
- No se pierden datos existentes (se agregan)
- Puedes importar múltiples veces

---

## 📝 Ejemplo Completo de Archivo

**LIBRO 1: archivo.xlsx**

### Hoja 1: Fixtures
```
team1          | team2        | date       | time  | location
Titanes        | Águilas      | 2025-11-15 | 20:00 | Cancha Central
Leones         | Dragones     | 2025-11-16 | 19:30 | Cancha Norte
Panteras       | Falcones     | 2025-11-17 | 20:00 | Cancha Sur
```

### Hoja 2: Resultados
```
team1          | score1 | team2      | score2 | date       | location
Titanes        | 78     | Búhos      | 72     | 2025-11-10 | Cancha Central
Leones         | 85     | Panteras   | 88     | 2025-11-09 | Cancha Norte
```

### Hoja 3: Avisos
```
title                    | message                                    | type
Campeonato Iniciado      | El torneo ha comenzado                     | info
Cambio de Cancha         | Trasladado a Cancha Sur                    | warning
```

---

## 🔄 Casos de Uso

### Caso 1: Migrar datos de otra plataforma
1. Exporta tus datos desde otra app a Excel
2. Adapta las columnas al formato esperado
3. Importa en Asociación Basket

### Caso 2: Cargar temporada completa
1. Crea un archivo Excel con todos los partidos
2. Importa de una sola vez
3. Luego edita individual si es necesario

### Caso 3: Hacer backup regular
1. Exporta tu Excel cada semana
2. Guarda copias de seguridad
3. Puedes recuperar datos si algo falla

---

## ❌ Solución de Problemas

### "Error al leer el archivo"
- Verifica que el formato sea .xlsx, .xls o .csv
- Abre el archivo en Excel y guárdalo nuevamente
- Intenta eliminar filas vacías

### "No se importaron los datos"
- Verifica los nombres de las columnas exactos
- Asegúrate de que sea el nombre correcto de hoja
- Revisa que los datos no tengan espacios extras

### "Falta la hora en los datos"
- Si no especificas hora, usa 20:00 por defecto
- Formatos soportados: 20:00, 20.00, 8 PM, etc.

### "Fechas con formato extraño"
- La app intenta convertir automáticamente
- Si falla, usa el formato: YYYY-MM-DD (2025-11-15)

---

## 📦 Descarga Archivos de Ejemplo

Crea un archivo en Excel siguiendo este modelo:

**OPCIÓN 1: CSV Simple**
```csv
team1,team2,date,time,location
Titanes,Águilas,2025-11-15,20:00,Cancha Central
Leones,Dragones,2025-11-16,19:30,Cancha Norte
```

**OPCIÓN 2: XLSX (Abre en Excel)**
- Copiar las tablas de arriba
- Guardar como .xlsx
- Importar en la app

---

**¡Listo!** Ahora puedes:
- ✅ Importar datos desde Excel
- ✅ Exportar tus datos
- ✅ Hacer backups
- ✅ Migrar datos fácilmente

¿Necesitas ayuda? Verifica que los nombres de columnas coincidan exactamente.
