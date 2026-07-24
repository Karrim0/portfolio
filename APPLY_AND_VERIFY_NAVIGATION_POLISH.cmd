@echo off
setlocal

cd /d "%~dp0"

echo.
echo ========================================
echo  Portfolio navigation polish verification
echo ========================================
echo.

if not exist package.json (
  echo [ERROR] package.json was not found.
  echo Extract this patch inside the portfolio project root.
  exit /b 1
)

if exist .next rmdir /s /q .next

echo [1/4] Installing dependencies...
call npm install
if errorlevel 1 exit /b 1

echo.
echo [2/4] TypeScript check...
call npm run typecheck
if errorlevel 1 exit /b 1

echo.
echo [3/4] ESLint check...
call npm run lint
if errorlevel 1 exit /b 1

echo.
echo [4/4] Production build...
call npm run build
if errorlevel 1 exit /b 1

echo.
echo ========================================
echo  Navigation polish verified successfully.
echo ========================================
echo.
endlocal
