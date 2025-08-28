# 🚀 Deployment Guide - College Management System

This guide covers multiple deployment options for your full-stack College Management System.

## 📋 Prerequisites

1. **GitHub Account** - Push your code to GitHub
2. **Environment Variables** - Set up production environment variables
3. **Database** - Choose a production database (PostgreSQL recommended)

## 🎯 Quick Deploy Options

### Option 1: Railway (Recommended - Easiest)

**Backend Deployment:**
1. Go to [Railway.app](https://railway.app)
2. Sign up with GitHub
3. Click "New Project" → "Deploy from GitHub repo"
4. Select your repository
5. Railway will automatically detect the Dockerfile and deploy
6. Add environment variables in Railway dashboard:
   ```
   NODE_ENV=production
   JWT_SECRET=your-super-secret-jwt-key
   DATABASE_URL=your-database-url
   FRONTEND_URL=https://your-frontend-url.vercel.app
   ```

**Frontend Deployment:**
1. Go to [Vercel.com](https://vercel.com)
2. Sign up with GitHub
3. Import your repository
4. Set root directory to `frontend`
5. Update `vercel.json` with your backend URL
6. Deploy!

### Option 2: Render

**Backend Deployment:**
1. Go to [Render.com](https://render.com)
2. Sign up with GitHub
3. Click "New Web Service"
4. Connect your repository
5. Configure:
   - **Name**: college-management-backend
   - **Environment**: Node
   - **Build Command**: `npm install && npm run build`
   - **Start Command**: `npm start`
6. Add environment variables
7. Deploy!

**Frontend Deployment:**
1. Create new "Static Site" on Render
2. Connect your repository
3. Set root directory to `frontend`
4. Build command: `npm run build`
5. Publish directory: `build`

### Option 3: Heroku

**Backend Deployment:**
1. Install Heroku CLI
2. Login: `heroku login`
3. Create app: `heroku create your-app-name`
4. Add PostgreSQL: `heroku addons:create heroku-postgresql:mini`
5. Set environment variables:
   ```bash
   heroku config:set NODE_ENV=production
   heroku config:set JWT_SECRET=your-secret-key
   ```
6. Deploy: `git push heroku main`

**Frontend Deployment:**
1. Create new Heroku app
2. Add buildpack: `heroku buildpacks:set mars/create-react-app`
3. Deploy: `git push heroku main`

## 🔧 Environment Variables Setup

### Backend (.env)
```env
# Database (Use PostgreSQL in production)
DATABASE_URL="postgresql://username:password@host:port/database"

# JWT Secret (Generate a strong secret)
JWT_SECRET="your-super-secret-jwt-key-change-this-in-production"

# Server Configuration
PORT=5000
NODE_ENV=production

# Frontend URL (Update with your deployed frontend URL)
FRONTEND_URL=https://your-frontend-url.vercel.app

# Email Configuration
SMTP_HOST=smtp.gmail.com
SMTP_PORT=587
SMTP_USER=your-email@gmail.com
SMTP_PASS=your-app-password

# File Upload
UPLOAD_PATH=./uploads
MAX_FILE_SIZE=5242880

# Rate Limiting
RATE_LIMIT_WINDOW=15
RATE_LIMIT_MAX_REQUESTS=100
```

### Frontend (.env)
```env
REACT_APP_API_URL=https://your-backend-url.railway.app
REACT_APP_SOCKET_URL=https://your-backend-url.railway.app
```

## 🗄️ Database Setup

### Option 1: Railway PostgreSQL (Recommended)
1. Create new PostgreSQL service in Railway
2. Copy the connection URL
3. Update `DATABASE_URL` in environment variables

### Option 2: Supabase (Free PostgreSQL)
1. Go to [Supabase.com](https://supabase.com)
2. Create new project
3. Get connection string from Settings → Database
4. Update `DATABASE_URL`

### Option 3: PlanetScale (MySQL)
1. Go to [PlanetScale.com](https://planetscale.com)
2. Create new database
3. Update Prisma schema to use MySQL
4. Update `DATABASE_URL`

## 🔄 Database Migration

After setting up your production database:

```bash
# Generate Prisma client
npx prisma generate

# Push schema to database
npx prisma db push

# Or run migrations
npx prisma migrate deploy
```

## 📁 File Upload Setup

For production, consider using cloud storage:

### Option 1: AWS S3
1. Create S3 bucket
2. Install: `npm install @aws-sdk/client-s3 multer-s3`
3. Update upload middleware

### Option 2: Cloudinary
1. Sign up at [Cloudinary.com](https://cloudinary.com)
2. Install: `npm install cloudinary multer-storage-cloudinary`
3. Update upload configuration

## 🔒 Security Checklist

- [ ] Change default JWT secret
- [ ] Set up HTTPS (automatic on most platforms)
- [ ] Configure CORS properly
- [ ] Set up rate limiting
- [ ] Use environment variables for secrets
- [ ] Enable helmet security headers
- [ ] Set up proper database backups

## 🚀 Deployment Commands

### Local Testing
```bash
# Backend
cd backend
npm install
npm run build
npm start

# Frontend
cd frontend
npm install
npm start
```

### Production Build
```bash
# Backend
cd backend
npm ci --only=production
npm run build

# Frontend
cd frontend
npm ci --only=production
npm run build
```

## 📊 Monitoring & Logs

### Railway
- View logs in Railway dashboard
- Set up alerts for errors
- Monitor resource usage

### Vercel
- View deployment logs
- Set up analytics
- Monitor performance

### Heroku
- View logs: `heroku logs --tail`
- Set up add-ons for monitoring
- Configure error tracking

## 🔧 Troubleshooting

### Common Issues:

1. **Build Fails**
   - Check Node.js version compatibility
   - Verify all dependencies are installed
   - Check for TypeScript errors

2. **Database Connection Issues**
   - Verify DATABASE_URL format
   - Check database credentials
   - Ensure database is accessible

3. **CORS Errors**
   - Update FRONTEND_URL in backend
   - Check CORS configuration
   - Verify frontend URL is correct

4. **File Upload Issues**
   - Check upload directory permissions
   - Verify file size limits
   - Consider using cloud storage

## 📞 Support

If you encounter issues:
1. Check platform-specific documentation
2. Review error logs
3. Verify environment variables
4. Test locally first

## 🎉 Success!

Once deployed, your College Management System will be accessible at:
- **Frontend**: https://your-app.vercel.app
- **Backend API**: https://your-app.railway.app
- **Health Check**: https://your-app.railway.app/health

Remember to update your frontend configuration with the correct backend URL!
