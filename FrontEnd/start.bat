@echo off
echo ============================================
echo Smart Governance Portal - Starting...
echo ============================================
echo.

echo Checking if node_modules exists...
if not exist "node_modules" (
    echo Installing dependencies...
    call npm install
    echo.
)

echo Starting development server...
echo.
echo Open your browser at: http://localhost:3000
echo Press Ctrl+C to stop the server
echo.

call npm run dev

