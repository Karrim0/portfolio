@echo off
setlocal EnableExtensions

cd /d "%~dp0"

echo.
echo ======================================================
echo  Portfolio mobile, identity, and cursor polish check
echo ======================================================
echo.

if not exist package.json (
  echo [ERROR] package.json was not found.
  echo Extract this patch inside the portfolio project root.
  exit /b 1
)

if exist .next (
  echo [1/6] Removing previous Next.js build cache...
  rmdir /s /q .next
) else (
  echo [1/6] No previous .next cache found.
)

echo [2/6] Installing and synchronizing dependencies...
call npm install
if errorlevel 1 exit /b 1

echo [3/6] Running TypeScript validation...
call npx tsc --noEmit
if errorlevel 1 exit /b 1

echo [4/6] Running ESLint...
call npm run lint
if errorlevel 1 exit /b 1

echo [5/6] Running production build...
call npm run build
if errorlevel 1 exit /b 1

echo [6/6] Checking Git whitespace...
git diff --check
if errorlevel 1 exit /b 1

echo.
echo ======================================================
echo  SUCCESS - polish patch passed all checks.
echo ======================================================
echo.
echo Run: npm run dev
exit /b 0
