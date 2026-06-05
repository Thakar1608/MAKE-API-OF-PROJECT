@echo off
echo ========================================
echo   Starting Backend and Frontend
echo ========================================

echo.
echo [1/2] Setting up Backend...
cd backend
if not exist node_modules (
    call npm install
)
start cmd /k "echo --- Backend Log --- && npm start"

echo.
echo [2/2] Setting up Frontend...
cd ../frontend
if not exist node_modules (
    call npm install
)
start cmd /k "echo --- Frontend Log --- && npm run dev"

echo.
echo ========================================
echo   Both services are starting!
echo ========================================
cd ..
