@echo off
setlocal
cd /d "%~dp0"

 echo =====================================================
 echo   KAREEM PORTFOLIO - WEB FOCUS FINAL UPDATE
 echo =====================================================

if not exist package.json (
  echo [ERROR] Extract this patch inside the portfolio project root.
  pause
  exit /b 1
)

for /f "delims=" %%B in ('git branch --show-current 2^>nul') do set CURRENT_BRANCH=%%B
if not defined CURRENT_BRANCH (
  echo [ERROR] This folder is not a Git repository.
  pause
  exit /b 1
)

echo Current branch: %CURRENT_BRANCH%
if /I "%CURRENT_BRANCH%"=="main" (
  echo [ERROR] Do not apply the update directly on main.
  echo Switch to feature/portfolio-v2-foundation first.
  pause
  exit /b 1
)

echo.
echo [1/8] Removing generated build output...
if exist .next rmdir /s /q .next

echo [2/8] Removing obsolete template files...
if exist components\ui rmdir /s /q components\ui
if exist hooks rmdir /s /q hooks
if exist lib rmdir /s /q lib
if exist styles rmdir /s /q styles
if exist assets rmdir /s /q assets

del /q components\cursor.tsx 2>nul
del /q components\grid-background.tsx 2>nul
del /q components\theme-provider.tsx 2>nul
del /q components\typewriter.tsx 2>nul
del /q components.json 2>nul
del /q desktop.ini 2>nul
del /q z00.ico 2>nul

echo [3/8] Removing superseded helper files and legacy images...
del /q APPLY_AND_VERIFY_PHASE1.cmd 2>nul
del /q APPLY_AND_VERIFY_FINAL_PORTFOLIO.cmd 2>nul
del /q PHASE1_NOTES.md 2>nul
del /q FINAL_PORTFOLIO_NOTES.md 2>nul

del /q public\00.png 2>nul
del /q public\01.png 2>nul
del /q public\4map.png 2>nul
del /q public\kidorly.png 2>nul
del /q public\mfm.png 2>nul
del /q public\portal.png 2>nul
del /q public\primecart.png 2>nul
del /q public\og.png 2>nul
del /q public\4map.webp 2>nul
del /q public\kidorly.webp 2>nul
del /q public\mfm.webp 2>nul
del /q public\portal.webp 2>nul
del /q public\primecart.webp 2>nul

echo [4/8] Installing dependencies...
call npm install
if errorlevel 1 goto :failed

echo [5/8] Running TypeScript checks...
call npm run typecheck
if errorlevel 1 goto :failed

echo [6/8] Running ESLint...
call npm run lint
if errorlevel 1 goto :failed

echo [7/8] Running production build...
call npm run build
if errorlevel 1 goto :failed

echo [8/8] Checking Git whitespace errors...
git diff --check
if errorlevel 1 goto :failed

echo.
echo =====================================================
echo   SUCCESS - WEB PORTFOLIO IS READY TO REVIEW
 echo =====================================================
echo Replace project placeholders using PROJECT_IMAGES_GUIDE.md
pause
exit /b 0

:failed
echo.
echo =====================================================
echo   FAILED - REVIEW THE ERROR ABOVE
 echo =====================================================
pause
exit /b 1
