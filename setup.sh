#!/bin/bash

echo "🚀 Setting up College Management System..."

# Install root dependencies
echo "📦 Installing root dependencies..."
npm install

# Install backend dependencies
echo "📦 Installing backend dependencies..."
cd backend
npm install

# Create .env file from example if it doesn't exist
if [ ! -f .env ]; then
    echo "📝 Creating .env file from example..."
    cp env.example .env
    echo "✅ .env file created. Please update it with your configuration."
else
    echo "✅ .env file already exists."
fi

# Setup database
echo "🗄️ Setting up database..."
npm run db:generate
npm run db:push

cd ..

# Install frontend dependencies
echo "📦 Installing frontend dependencies..."
cd frontend
npm install
cd ..

echo "✅ Setup complete!"
echo ""
echo "🎯 To start development:"
echo "   npm run dev"
echo ""
echo "🔧 Available commands:"
echo "   npm run dev          - Start both frontend and backend in development mode"
echo "   npm run dev:backend  - Start only backend in development mode"
echo "   npm run dev:frontend - Start only frontend in development mode"
echo "   npm run build        - Build both frontend and backend"
echo "   npm run start        - Start both frontend and backend in production mode"
echo "   npm run db:setup     - Setup database"
echo "   npm run db:studio    - Open Prisma Studio"
