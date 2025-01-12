@echo off
REM Set the path to the touch-kiosk folder
set folderPath=%USERPROFILE%\Desktop\touch-kiosk

REM Navigate to the folder
cd /d "%folderPath%"
if %errorlevel% neq 0 (
    echo Failed to navigate to %folderPath%. Make sure the folder exists.
    exit /b 1
)

REM Perform git pull
git pull
if %errorlevel% neq 0 (
    echo Failed to pull updates from the repository. Please check your git configuration.
    exit /b 1
)

REM Run npm install (optional but recommended before build)
npm install
if %errorlevel% neq 0 (
    echo Failed to install npm dependencies. Please check your npm configuration.
    exit /b 1
)

REM Run npm run build:win
npm run build:win
if %errorlevel% neq 0 (
    echo Failed to build the application. Please check the build script.
    exit /b 1
)

REM Navigate to the dist/electron directory
cd dist\electron
if %errorlevel% neq 0 (
    echo Failed to navigate to dist\electron. Make sure the build was successful.
    exit /b 1
)

REM Find the installer (assume a .exe file is generated)
for %%f in (*.exe) do (
    set installer=%%f
    goto :install
)

echo No installer found in dist\electron. Please check the build output.
exit /b 1

:install
REM Run the installer
start "" "%installer%"
echo Installation process started for %installer%.
pause
