@echo off
setlocal

cd /d "%~dp0"

echo.
echo ==================================================
echo  Portfolio layout hotfix verification
echo ==================================================
echo.

if not exist package.json (
  echo [ERROR] package.json was not found.
  echo Extract this patch inside the portfolio project root.
  exit /b 1
)

if exist .next (
  echo [1/5] Removing the previous Next.js build cache...
  rmdir /s /q .next
) else (
  echo [1/5] No previous .next cache found.
)

echo [2/5] Installing dependencies...
call npm install
if errorlevel 1 exit /b 1

echo [3/5] Running TypeScript checks...
call npm run typecheck
if errorlevel 1 exit /b 1

echo [4/5] Running ESLint...
call npm run lint
if errorlevel 1 exit /b 1

echo [5/5] Running the production build...
call npm run build
if errorlevel 1 exit /b 1

echo.
echo ==================================================
echo  SUCCESS - Layout hotfix passed all checks.
echo ==================================================
echo.
endlocal
