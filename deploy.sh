#!/bin/bash

# 🚀 College Management System Deployment Script
# This script helps you deploy your application

echo "🚀 Starting deployment process..."

# Colors for output
RED='\033[0;31m'
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
NC='\033[0m' # No Color

# Function to print colored output
print_status() {
    echo -e "${GREEN}[INFO]${NC} $1"
}

print_warning() {
    echo -e "${YELLOW}[WARNING]${NC} $1"
}

print_error() {
    echo -e "${RED}[ERROR]${NC} $1"
}

# Check if git is installed
if ! command -v git &> /dev/null; then
    print_error "Git is not installed. Please install Git first."
    exit 1
fi

# Check if Node.js is installed
if ! command -v node &> /dev/null; then
    print_error "Node.js is not installed. Please install Node.js first."
    exit 1
fi

# Check if npm is installed
if ! command -v npm &> /dev/null; then
    print_error "npm is not installed. Please install npm first."
    exit 1
fi

print_status "Prerequisites check passed!"

# Ask user for deployment platform
echo ""
echo "Choose your deployment platform:"
echo "1) Railway (Recommended)"
echo "2) Render"
echo "3) Heroku"
echo "4) Vercel + Railway"
echo "5) Exit"
echo ""
read -p "Enter your choice (1-5): " choice

case $choice in
    1)
        print_status "Deploying to Railway..."
        print_warning "Make sure you have:"
        print_warning "1. Railway account (railway.app)"
        print_warning "2. Code pushed to GitHub"
        print_warning "3. Environment variables ready"
        echo ""
        echo "Steps:"
        echo "1. Go to railway.app"
        echo "2. Sign up with GitHub"
        echo "3. Click 'New Project' → 'Deploy from GitHub repo'"
        echo "4. Select your repository"
        echo "5. Add environment variables in Railway dashboard"
        echo "6. Deploy!"
        ;;
    2)
        print_status "Deploying to Render..."
        print_warning "Make sure you have:"
        print_warning "1. Render account (render.com)"
        print_warning "2. Code pushed to GitHub"
        print_warning "3. Environment variables ready"
        echo ""
        echo "Steps:"
        echo "1. Go to render.com"
        echo "2. Sign up with GitHub"
        echo "3. Click 'New Web Service'"
        echo "4. Connect your repository"
        echo "5. Configure build and start commands"
        echo "6. Add environment variables"
        echo "7. Deploy!"
        ;;
    3)
        print_status "Deploying to Heroku..."
        print_warning "Make sure you have:"
        print_warning "1. Heroku account (heroku.com)"
        print_warning "2. Heroku CLI installed"
        print_warning "3. Code pushed to GitHub"
        echo ""
        echo "Steps:"
        echo "1. Install Heroku CLI: https://devcenter.heroku.com/articles/heroku-cli"
        echo "2. Login: heroku login"
        echo "3. Create app: heroku create your-app-name"
        echo "4. Add PostgreSQL: heroku addons:create heroku-postgresql:mini"
        echo "5. Set environment variables"
        echo "6. Deploy: git push heroku main"
        ;;
    4)
        print_status "Deploying to Vercel + Railway..."
        print_warning "This is the recommended approach for best performance"
        echo ""
        echo "Backend (Railway):"
        echo "1. Go to railway.app"
        echo "2. Deploy backend using Dockerfile"
        echo "3. Get your backend URL"
        echo ""
        echo "Frontend (Vercel):"
        echo "1. Go to vercel.com"
        echo "2. Import your repository"
        echo "3. Set root directory to 'frontend'"
        echo "4. Update vercel.json with backend URL"
        echo "5. Deploy!"
        ;;
    5)
        print_status "Exiting..."
        exit 0
        ;;
    *)
        print_error "Invalid choice. Please run the script again."
        exit 1
        ;;
esac

echo ""
print_status "Deployment instructions provided!"
echo ""
print_warning "Don't forget to:"
print_warning "1. Set up your production database (PostgreSQL recommended)"
print_warning "2. Update environment variables"
print_warning "3. Configure CORS settings"
print_warning "4. Set up file upload storage (S3/Cloudinary)"
print_warning "5. Test your deployment thoroughly"
echo ""
print_status "Check DEPLOYMENT.md for detailed instructions!"
