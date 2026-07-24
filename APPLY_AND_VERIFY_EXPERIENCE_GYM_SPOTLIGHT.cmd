@echo off
setlocal
cd /d "%~dp0"

echo.
echo ===============================================
echo Portfolio Experience + Gym Crew Spotlight Check
echo ===============================================
echo.

if not exist package.json (
  echo [ERROR] Run this file from the portfolio project root.
  exit /b 1
)

if exist .next rmdir /s /q .next

echo [1/3] TypeScript...
call npm run typecheck
if errorlevel 1 exit /b 1

echo.
echo [2/3] ESLint...
call npm run lint
if errorlevel 1 exit /b 1

echo.
echo [3/3] Production build...
call npm run build
if errorlevel 1 exit /b 1

echo.
echo ===============================================
echo All checks passed.
echo Run: npm run dev
echo ===============================================
endlocal
