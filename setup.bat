@echo off
echo 🚀 Setting up College Management System...

REM Install root dependencies
echo 📦 Installing root dependencies...
call npm install

REM Install backend dependencies
echo 📦 Installing backend dependencies...
cd backend
call npm install

REM Create .env file from example if it doesn't exist
if not exist .env (
    echo 📝 Creating .env file from example...
    copy env.example .env
    echo ✅ .env file created. Please update it with your configuration.
) else (
    echo ✅ .env file already exists.
)

REM Setup database
echo 🗄️ Setting up database...
call npm run db:generate
call npm run db:push

cd ..

REM Install frontend dependencies
echo 📦 Installing frontend dependencies...
cd frontend
call npm install
cd ..

echo ✅ Setup complete!
echo.
echo 🎯 To start development:
echo    npm run dev
echo.
echo 🔧 Available commands:
echo    npm run dev          - Start both frontend and backend in development mode
echo    npm run dev:backend  - Start only backend in development mode
echo    npm run dev:frontend - Start only frontend in development mode
echo    npm run build        - Build both frontend and backend
echo    npm run start        - Start both frontend and backend in production mode
echo    npm run db:setup     - Setup database
echo    npm run db:studio    - Open Prisma Studio
pause
