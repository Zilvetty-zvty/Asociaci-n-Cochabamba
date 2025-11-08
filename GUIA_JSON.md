# 📋 Guía de Estructura del JSON - Asociación Cochabamba Basketball

Esta guía explica cómo estructurar los datos en el archivo `data.json` para que la aplicación funcione correctamente.

---

## 📌 Estructura General

El archivo `data.json` contiene tres secciones principales:

```json
{
  "fixtures": [...],      // Próximos partidos
  "results": [...],       // Resultados de partidos
  "standings": [...]      // Tabla de posiciones
}
```

---

## 🏀 1. FIXTURES (Próximos Partidos)

### Descripción
Contiene la lista de partidos próximos a jugarse. Estos se mostrarán agrupados por cancha y ordenados por hora.

### Estructura de cada fixture

```json
{
  "id": 1,
  "team1": "I. Americano",
  "team2": "Ilussion",
  "date": "2025-11-10",
  "time": "19:00",
  "venue": "Israel Aviles (Aux. C)",
  "category": "1RA DE ASCENSO VARONES",
  "logo1": "IA",
  "logo2": "IL"
}
```

### Explicación de cada campo

| Campo | Tipo | Descripción | Ejemplo |
|-------|------|-------------|---------|
| `id` | Número | Identificador único del partido | `1` |
| `team1` | Texto | Nombre del primer equipo | `"I. Americano"` |
| `team2` | Texto | Nombre del segundo equipo | `"Ilussion"` |
| `date` | Fecha | Fecha del partido en formato YYYY-MM-DD | `"2025-11-10"` |
| `time` | Hora | Hora del partido en formato HH:MM (24 horas) | `"19:00"` |
| `venue` | Texto | Nombre de la cancha donde se juega | `"Israel Aviles (Aux. C)"` |
| `category` | Texto | Categoría/División del partido | `"1RA DE ASCENSO VARONES"` |
| `logo1` | Texto | Iniciales/Abreviatura del equipo 1 (máx. 3 caracteres) | `"IA"` |
| `logo2` | Texto | Iniciales/Abreviatura del equipo 2 (máx. 3 caracteres) | `"IL"` |

### ⚠️ Notas importantes sobre FIXTURES

- **Las fechas y horas deben ser en formato correcto** para que se ordenen adecuadamente
- **El `id` debe ser único** para cada partido
- **Los logos se mostrarán en círculos negros** como abreviaturas
- **Los partidos se agruparán automáticamente por `venue`** (cancha)
- **Los partidos se ordenarán por `time` dentro de cada cancha**

### ✅ Ejemplo completo de múltiples fixtures

```json
"fixtures": [
  {
    "id": 1,
    "team1": "I. Americano",
    "team2": "Ilussion",
    "date": "2025-11-10",
    "time": "19:00",
    "venue": "Israel Aviles (Aux. C)",
    "category": "1RA DE ASCENSO VARONES",
    "logo1": "IA",
    "logo2": "IL"
  },
  {
    "id": 2,
    "team1": "Salesianos Don Bosco",
    "team2": "Black Mamba",
    "date": "2025-11-10",
    "time": "20:10",
    "venue": "Israel Aviles (Aux. C)",
    "category": "1RA DE ASCENSO VARONES",
    "logo1": "SDB",
    "logo2": "BM"
  }
]
```

---

## 📊 2. RESULTS (Resultados)

### Descripción
Contiene los resultados de partidos ya jugados, mostrando los equipos, puntuaciones y ganador.

### Estructura de cada resultado

```json
{
  "id": 1,
  "team1": "Cochabamba United",
  "team2": "Santa Cruz Tigers",
  "score1": 82,
  "score2": 75,
  "date": "2025-11-08",
  "logo1": "CU",
  "logo2": "ST"
}
```

### Explicación de cada campo

| Campo | Tipo | Descripción | Ejemplo |
|-------|------|-------------|---------|
| `id` | Número | Identificador único del resultado | `1` |
| `team1` | Texto | Nombre del primer equipo | `"Cochabamba United"` |
| `team2` | Texto | Nombre del segundo equipo | `"Santa Cruz Tigers"` |
| `score1` | Número | Puntuación del equipo 1 | `82` |
| `score2` | Número | Puntuación del equipo 2 | `75` |
| `date` | Fecha | Fecha del partido en formato YYYY-MM-DD | `"2025-11-08"` |
| `logo1` | Texto | Iniciales/Abreviatura del equipo 1 | `"CU"` |
| `logo2` | Texto | Iniciales/Abreviatura del equipo 2 | `"ST"` |

### ⚠️ Notas importantes sobre RESULTS

- **El equipo con mayor puntuación se resaltará como ganador**
- **El `id` debe ser único** para cada resultado
- **Las fechas deben estar en formato YYYY-MM-DD**

### ✅ Ejemplo completo de múltiples resultados

```json
"results": [
  {
    "id": 1,
    "team1": "Cochabamba United",
    "team2": "Santa Cruz Tigers",
    "score1": 82,
    "score2": 75,
    "date": "2025-11-08",
    "logo1": "CU",
    "logo2": "ST"
  },
  {
    "id": 2,
    "team1": "La Paz Warriors",
    "team2": "Oruro Dragons",
    "score1": 78,
    "score2": 85,
    "date": "2025-11-07",
    "logo1": "LW",
    "logo2": "OD"
  }
]
```

---

## 🏆 3. STANDINGS (Tabla de Posiciones)

### Descripción
Contiene la tabla de clasificación de los equipos en la temporada actual.

### Estructura de cada posición

```json
{
  "position": 1,
  "team": "Cochabamba United",
  "played": 8,
  "wins": 7,
  "losses": 1,
  "points": 14
}
```

### Explicación de cada campo

| Campo | Tipo | Descripción | Ejemplo |
|-------|------|-------------|---------|
| `position` | Número | Posición en la tabla (1 = primero) | `1` |
| `team` | Texto | Nombre del equipo | `"Cochabamba United"` |
| `played` | Número | Partidos jugados | `8` |
| `wins` | Número | Partidos ganados | `7` |
| `losses` | Número | Partidos perdidos | `1` |
| `points` | Número | Puntos totales (normalmente Ganancias × 2) | `14` |

### ⚠️ Notas importantes sobre STANDINGS

- **La tabla debe estar ordenada por posición** (de menor a mayor)
- **Los puntos se muestran resaltados en azul**
- **Se recomienda: puntos = (ganancias × 2) + (empates × 1)**

### ✅ Ejemplo completo de tabla de posiciones

```json
"standings": [
  {
    "position": 1,
    "team": "Cochabamba United",
    "played": 8,
    "wins": 7,
    "losses": 1,
    "points": 14
  },
  {
    "position": 2,
    "team": "Santa Cruz Tigers",
    "played": 8,
    "wins": 6,
    "losses": 2,
    "points": 12
  },
  {
    "position": 3,
    "team": "La Paz Warriors",
    "played": 8,
    "wins": 5,
    "losses": 3,
    "points": 10
  },
  {
    "position": 4,
    "team": "Oruro Dragons",
    "played": 8,
    "wins": 3,
    "losses": 5,
    "points": 6
  }
]
```

---

## 📝 Ejemplo de JSON Completo

```json
{
  "fixtures": [
    {
      "id": 1,
      "team1": "Cochabamba United",
      "team2": "La Paz Warriors",
      "date": "2025-11-15",
      "time": "19:30",
      "venue": "Estadio Municipal",
      "category": "Senior A",
      "logo1": "CU",
      "logo2": "LW"
    },
    {
      "id": 2,
      "team1": "Santa Cruz Tigers",
      "team2": "Cochabamba United",
      "date": "2025-11-20",
      "time": "20:00",
      "venue": "Arena Santa Cruz",
      "category": "Senior B",
      "logo1": "ST",
      "logo2": "CU"
    }
  ],
  "results": [
    {
      "id": 1,
      "team1": "Cochabamba United",
      "team2": "Santa Cruz Tigers",
      "score1": 82,
      "score2": 75,
      "date": "2025-11-08",
      "logo1": "CU",
      "logo2": "ST"
    }
  ],
  "standings": [
    {
      "position": 1,
      "team": "Cochabamba United",
      "played": 8,
      "wins": 7,
      "losses": 1,
      "points": 14
    },
    {
      "position": 2,
      "team": "Santa Cruz Tigers",
      "played": 8,
      "wins": 6,
      "losses": 2,
      "points": 12
    }
  ]
}
```

---

## 🔍 Consejos Útiles

### Validar JSON
Puedes verificar si tu JSON es válido usando:
- Herramientas online: [jsonlint.com](https://www.jsonlint.com/)
- O ejecuta en PowerShell:
  ```powershell
  Get-Content data.json | ConvertFrom-Json | Out-Null; Write-Host "JSON válido"
  ```

### Formatos de Fecha y Hora
- **Fecha**: `YYYY-MM-DD` (ej: `2025-11-10`)
- **Hora**: `HH:MM` en formato 24 horas (ej: `19:00`, `20:30`)

### Logos/Abreviaturas
- Máximo 3 caracteres
- Se mostrarán en círculos negros
- Ejemplos: `"CU"`, `"BM"`, `"LS"`, `"AC"`

### Nombres de Canchas
Asegúrate de usar exactamente el mismo nombre de cancha para que se agrupen correctamente:
- ✅ Correcto: `"Israel Aviles (Aux. C)"` siempre igual
- ❌ Incorrecto: A veces `"Israel Aviles"`, a veces `"Israel Aviles (Aux. C)"`

---

## 🚀 Próximos Pasos

1. **Edita `data.json`** con tus datos reales
2. **Valida el JSON** para asegurar que está bien formado
3. **Actualiza GitHub** con los nuevos datos
4. **Recarga la página** para ver los cambios

¡Tu aplicación está lista para usar! 🎉
