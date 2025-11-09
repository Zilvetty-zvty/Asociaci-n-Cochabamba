# 🎯 Guía de Herramientas para Agregar Fixtures

Hemos creado **3 formas diferentes** de agregar fixtures. Elige la que más te convenga:

---

## 🔧 Opción 1: Formulario Interactivo (agregar_fixtures.html)

**Ideal para:** Agregar 1-2 fixtures de forma rápida

### Características:
- ✅ Interfaz con formulario completo
- ✅ Dropdown con todos los equipos, canchas y categorías
- ✅ Validación en tiempo real
- ✅ Vista previa de cada fixture agregado
- ✅ Copiar o descargar JSON

### Cómo usar:
1. Abre `agregar_fixtures.html` en el navegador
2. Selecciona los dos equipos
3. Ingresa fecha, hora, cancha y categoría
4. Haz clic en **"Agregar Fixture"**
5. Repite para más fixtures
6. Presiona **"Copiar JSON"** o **"Descargar JSON"**
7. Pega el resultado en `data.json` (en el array "fixtures")

### Ventajas:
- Interfaz amigable
- No hay errores de escritura
- Autocompletado con logos

---

## 📊 Opción 2: Vista Tabla (agregar_fixtures_tabla.html)

**Ideal para:** Agregar varios fixtures al mismo tiempo

### Características:
- ✅ Tabla editable donde completas los datos
- ✅ Agregar/eliminar filas dinámicamente
- ✅ Actualización de JSON en tiempo real
- ✅ Estadísticas en vivo
- ✅ Mejor para ver múltiples filas a la vez

### Cómo usar:
1. Abre `agregar_fixtures_tabla.html` en el navegador
2. Completa cada fila con:
   - Equipo 1 (dropdown)
   - Equipo 2 (dropdown)
   - Fecha (YYYY-MM-DD)
   - Hora (HH:MM)
   - Cancha (dropdown)
   - Categoría (dropdown)
3. Presiona **"Copiar JSON"** o **"Descargar JSON"**
4. Pega en `data.json`

### Ventajas:
- Ve todos los datos de una vez
- Mejor para agregar muchos fixtures
- Controles visuales claros

---

## 📋 Opción 3: CSV/Excel (importar_csv.html)

**Ideal para:** Agregar muchos fixtures desde Excel o Google Sheets

### Características:
- ✅ Descarga plantilla Excel lista para usar
- ✅ Copia/pega desde Excel
- ✅ Importa archivos CSV
- ✅ Validación automática
- ✅ Mejor para operaciones en lote

### Cómo usar - Método A (Excel):
1. Abre `importar_csv.html` en el navegador
2. Presiona **"Descargar Plantilla Excel"**
3. Abre el archivo en Excel
4. Completa los datos:
   ```
   equipo1,equipo2,fecha,hora,cancha,categoria
   I. Americano,Ilussion,2025-11-10,19:00,Israel Aviles (Aux. C),1RA DE ASCENSO VARONES
   ```
5. Selecciona todas las filas de datos (SIN el encabezado)
6. Copia (Ctrl+C)
7. Vuelve a `importar_csv.html`
8. Pega en el cuadro de texto
9. Presiona **"Procesar Datos"**
10. Copia o descarga el JSON

### Cómo usar - Método B (Archivo CSV):
1. Prepara un archivo `.csv` en tu formato preferido
2. En `importar_csv.html`, usa el botón **"Seleccionar archivo"**
3. El resto es igual

### Ventajas:
- Rápido para muchos datos
- Compatible con Excel, Google Sheets, etc.
- Plantilla lista para usar

---

## 📊 Comparativa Rápida

| Característica | Formulario | Tabla | CSV |
|---|---|---|---|
| Agregar 1-2 fixtures | ⭐⭐⭐ | ⭐⭐ | ⭐ |
| Agregar 5-10 fixtures | ⭐⭐ | ⭐⭐⭐ | ⭐⭐ |
| Agregar 20+ fixtures | ⭐ | ⭐⭐ | ⭐⭐⭐ |
| Interfaz amigable | ⭐⭐⭐ | ⭐⭐⭐ | ⭐⭐ |
| Uso desde Excel | ❌ | ❌ | ✅ |
| Validación visual | ⭐⭐⭐ | ⭐⭐⭐ | ⭐⭐ |

---

## ✅ Validaciones Automáticas

Todas las herramientas validan automáticamente:

### Equipos válidos:
- I. Americano (IA)
- Ilussion (IL)
- Salesianos Don Bosco (SDB)
- Black Mamba (BM)
- Olimpic (OL)
- Atletas de Cristo (AC)
- Sallor Atenas (SA)
- Atletico Obrero (AO)
- Eagles (EA)
- Los Angeles (LA)

### Canchas válidas:
- Israel Aviles (Aux. C)
- Coliseo Grover Suarez
- Casimiro Vargas

### Categorías válidas:
- 1RA DE ASCENSO VARONES
- 2DA DE ASCENSO DAMAS
- INFANTIL VARONES
- INFANTIL DAMAS
- JUVENIL VARONES
- JUVENIL DAMAS

### Validaciones de datos:
- ✅ No pueden ser iguales los dos equipos
- ✅ Fecha en formato YYYY-MM-DD (ej: 2025-11-10)
- ✅ Hora en formato HH:MM (ej: 19:00)
- ✅ Los logos se asignan automáticamente

---

## 📝 Cómo pegar el JSON en data.json

Una vez que generaste el JSON:

1. Abre `data.json` en el editor
2. Localiza el array `"fixtures":`
3. **Opción A - Reemplazar todo:**
   - Borra todo el contenido del array
   - Pega el nuevo JSON
   
4. **Opción B - Agregar al final:**
   - Coloca el cursor antes del `]` final
   - Agrega una coma
   - Pega el nuevo JSON sin las llaves exteriores
   
Ejemplo de Opción B:
```json
{
  "fixtures": [
    { fixture 1 },
    { fixture 2 },
    { fixture 3 }   ← aquí va el último fixture sin coma
  ]
}
```

---

## 🚀 Recomendación

- **Un solo fixture:** Usa el **Formulario** (más rápido)
- **Varios fixtures:** Usa la **Tabla** (mejor visualización)
- **Muchos fixtures:** Usa **CSV desde Excel** (eficiente)

---

## 💡 Tips

1. **Primero prueba en local:** Abre cualquiera de estas páginas directamente en el navegador (no necesitas servidor)
2. **Valida siempre:** Las herramientas te avisan si hay errores
3. **Haz backup:** Antes de editar `data.json`, copia su contenido
4. **Verifica en la web:** Después de pegar, abre `index.html` para ver si se muestra correctamente

---

¡Ahora es mucho más fácil agregar fixtures! 🎉
