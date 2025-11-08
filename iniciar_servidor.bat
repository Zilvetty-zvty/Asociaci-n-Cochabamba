@echo off
REM Inicia el servidor local para Asociación Cochabamba Basketball
title Servidor Local - Asociación Cochabamba Basketball

echo.
echo ===============================================================
echo   Servidor Local - Asociación Cochabamba Basketball
echo ===============================================================
echo.

cd /d "%~dp0"

python server.py

pause
