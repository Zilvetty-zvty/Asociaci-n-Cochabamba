# 🌐 Servidor Local - Asociación Cochabamba Basketball

Este archivo contiene instrucciones para ejecutar un servidor local y ver los cambios en tiempo real.

## ⚡ Opción 1: Ejecución Rápida (Recomendado para Windows)

### Hacer doble clic en `iniciar_servidor.bat`

1. Abre el explorador de archivos
2. Ve a la carpeta del proyecto `AsociacionBasket`
3. **Haz doble clic** en `iniciar_servidor.bat`
4. Se abrirá automáticamente tu navegador en `http://localhost:8000`
5. Para detener el servidor, presiona **Ctrl+C** en la consola

---

## 💻 Opción 2: Línea de Comandos (PowerShell o CMD)

### Paso 1: Abre PowerShell o CMD

```powershell
# En PowerShell
cd C:\Users\andru\Desktop\AsociacionBasket
```

O en CMD:
```cmd
cd C:\Users\andru\Desktop\AsociacionBasket
```

### Paso 2: Ejecuta el servidor

```powershell
python server.py
```

Verás algo como:
```
============================================================
🏀 Servidor Asociación Cochabamba Basketball
============================================================
📂 Directorio: C:\Users\andru\Desktop\AsociacionBasket
🌐 URL: http://localhost:8000
============================================================
💡 Presiona Ctrl+C para detener el servidor

✅ Servidor ejecutándose en http://localhost:8000
🌐 Abriendo navegador...
```

### Paso 3: Abre tu navegador

Automáticamente se abrirá `http://localhost:8000` en tu navegador predeterminado.

---

## 🔄 Ver Cambios en Tiempo Real

1. **Edita los archivos** (HTML, CSS, JavaScript, JSON)
2. **Guarda los cambios** (Ctrl+S)
3. **Recarga la página** en el navegador (F5 o Ctrl+R)
4. Los cambios se verán inmediatamente

---

## 🛑 Detener el Servidor

### Opción 1: En la Consola
Presiona **Ctrl+C**

### Opción 2: En PowerShell
```powershell
# Si quieres matar el proceso específico
Stop-Process -Name python -Force
```

---

## 🔧 Solución de Problemas

### ❌ "El puerto 8000 ya está en uso"

Si ves este error, otro programa está usando el puerto 8000. Puedes:

**Opción A:** Detener el otro programa que usa el puerto

**Opción B:** Cambiar el puerto en `server.py`

Abre `server.py` y cambia esta línea:
```python
PORT = 8000  # Cambia 8000 a otro número, ej: 8001, 8080, 3000, etc.
```

---

## 📱 Acceder desde Otros Dispositivos

Si quieres acceder desde otro dispositivo en la red local:

1. Obtén tu IP local ejecutando en PowerShell:
```powershell
ipconfig
```

Busca "IPv4 Address" (generalmente es algo como `192.168.x.x`)

2. Accede desde otro dispositivo usando:
```
http://[tu-ip]:8000
```

Por ejemplo: `http://192.168.1.100:8000`

---

## 🎯 Características del Servidor

✅ **Auto-reload de estilos** - No es necesario limpiar caché  
✅ **Sin caché** - Siempre cargas la última versión  
✅ **Log de conexiones** - Ves qué archivos se solicitan  
✅ **Soporte CORS** - Funciona correctamente con AJAX/Fetch  
✅ **Inicio automático del navegador** - Se abre solo al iniciar  

---

## 🚀 Próximos Pasos

1. Inicia el servidor con `iniciar_servidor.bat` o `python server.py`
2. Edita tus archivos HTML, CSS, JavaScript
3. Guarda los cambios
4. Recarga la página del navegador (F5)
5. ¡Listo! Ves los cambios al instante

¡Que disfrutes! 🎉
