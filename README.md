# VIT-AP College Management System

A comprehensive, modern college management system built for **Vellore Institute of Technology, Andhra Pradesh (VIT-AP)**. This system provides a complete solution for managing academic institutions with features for students, faculty, courses, attendance, grades, fees, library, events, and announcements.

## 🏫 About VIT-AP

**Vellore Institute of Technology, Andhra Pradesh (VIT-AP)** is a premier institution of higher learning committed to excellence in education, research, and innovation. Located in Amaravati, Andhra Pradesh, India, VIT-AP offers world-class education across various disciplines.

## 🚀 Features

### Core Features
- **User Authentication & Authorization** - JWT-based authentication with role-based access control
- **Student Management** - Complete student lifecycle management
- **Faculty Management** - Faculty profiles, departments, and course assignments
- **Course Management** - Course creation, enrollment, and scheduling
- **Attendance Tracking** - Real-time attendance monitoring
- **Grade Management** - Comprehensive grading system
- **Fee Management** - Tuition and fee tracking
- **Library Management** - Book catalog and borrowing system
- **Event Management** - College events and announcements
- **Dashboard & Analytics** - Real-time insights and reports

### Technical Features
- **Real-time Updates** - Socket.io for live notifications
- **Responsive Design** - Mobile-first Material-UI design
- **Type Safety** - Full TypeScript implementation
- **Modern Architecture** - Redux Toolkit for state management
- **Database** - Prisma ORM with SQLite (easily migratable to PostgreSQL/MySQL)
- **API Security** - Rate limiting, CORS, and input validation

## 🛠️ Tech Stack

### Frontend
- **React 18** with TypeScript
- **Material-UI (MUI)** for UI components
- **Redux Toolkit** for state management
- **React Router** for navigation
- **Axios** for API communication
- **Socket.io Client** for real-time features
- **Chart.js** for data visualization

### Backend
- **Node.js** with Express
- **TypeScript** for type safety
- **Prisma ORM** for database management
- **JWT** for authentication
- **Socket.io** for real-time communication
- **bcryptjs** for password hashing
- **Express Validator** for input validation

### Database
- **SQLite** (development)
- **PostgreSQL/MySQL** (production ready)

## 📦 Installation

### Prerequisites
- Node.js (v16 or higher)
- npm or yarn

### Quick Setup (Recommended)

#### Option 1: Automated Setup Script
```bash
# For Windows
setup.bat

# For macOS/Linux
chmod +x setup.sh
./setup.sh
```

#### Option 2: Manual Setup

**1. Install all dependencies:**
```bash
npm run install:all
```

**2. Set up the backend:**
```bash
cd backend
cp env.example .env
# Edit .env with your configuration
npm run db:generate
npm run db:push
cd ..
```

**3. Start development servers:**
```bash
npm run dev
```

### Individual Setup

#### Backend Setup
```bash
cd backend

# Install dependencies
npm install

# Copy environment file
cp env.example .env

# Update .env with your configuration
# DATABASE_URL="file:./dev.db"
# JWT_SECRET="your-secret-key"

# Generate Prisma client
npm run db:generate

# Push database schema
npm run db:push

# Start development server
npm run dev
```

#### Frontend Setup
```bash
cd frontend

# Install dependencies
npm install

# Start development server
npm start
```

## 🚀 Quick Start

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd vit-ap-management-system
   ```

2. **Run the setup script (Recommended)**
   ```bash
   # For Windows
   setup.bat
   
   # For macOS/Linux
   chmod +x setup.sh
   ./setup.sh
   ```

3. **Or set up manually**
   ```bash
   # Install all dependencies
   npm run install:all
   
   # Set up backend environment and database
   cd backend
   cp env.example .env
   # Edit .env with your settings
   npm run db:generate
   npm run db:push
   cd ..
   
   # Start both frontend and backend
   npm run dev
   ```

4. **Access the application**
   - Frontend: http://localhost:3000
   - Backend API: http://localhost:5000
   - API Health Check: http://localhost:5000/health

## 🔧 Available Scripts

### Root Level Commands
```bash
npm run dev              # Start both frontend and backend in development mode
npm run dev:backend      # Start only backend in development mode
npm run dev:frontend     # Start only frontend in development mode
npm run build            # Build both frontend and backend
npm run start            # Start both frontend and backend in production mode
npm run install:all      # Install dependencies for all projects
npm run db:setup         # Setup database (generate client and push schema)
npm run db:studio        # Open Prisma Studio for database management
npm run clean            # Clean build directories
npm run clean:install    # Clean and reinstall all dependencies
```

### Backend Commands
```bash
cd backend
npm run dev              # Start development server with nodemon
npm run build            # Build TypeScript to JavaScript
npm run start            # Start production server
npm run db:generate      # Generate Prisma client
npm run db:push          # Push database schema
npm run db:migrate       # Run database migrations
npm run db:studio        # Open Prisma Studio
```

### Frontend Commands
```bash
cd frontend
npm start                # Start development server
npm run build            # Build for production
npm test                 # Run tests
npm run eject            # Eject from create-react-app
```

## 📋 Default Users

After setting up the database, you can create users through the registration API:

### Admin User
```json
{
  "email": "admin@vitap.ac.in",
  "password": "admin123",
  "role": "ADMIN",
  "firstName": "Admin",
  "lastName": "User"
}
```

### Faculty User
```json
{
  "email": "faculty@vitap.ac.in",
  "password": "faculty123",
  "role": "FACULTY",
  "firstName": "Dr. John",
  "lastName": "Doe",
  "department": "Computer Science & Engineering",
  "designation": "Assistant Professor"
}
```

### Student User
```json
{
  "email": "student@vitap.ac.in",
  "password": "student123",
  "role": "STUDENT",
  "firstName": "Jane",
  "lastName": "Smith"
}
```

## 🏗️ Project Structure

```
vit-ap-management-system/
├── backend/
│   ├── src/
│   │   ├── routes/          # API routes
│   │   ├── middleware/      # Custom middleware
│   │   └── index.ts         # Server entry point
│   ├── prisma/
│   │   └── schema.prisma    # Database schema
│   ├── package.json
│   └── tsconfig.json
├── frontend/
│   ├── src/
│   │   ├── components/      # Reusable components
│   │   ├── pages/          # Page components
│   │   ├── store/          # Redux store
│   │   ├── services/       # API services
│   │   └── App.tsx         # Main app component
│   ├── public/
│   │   └── vit-ap-logo.png # VIT-AP Logo
│   └── package.json
└── README.md
```

## 🔧 API Endpoints

### Authentication
- `POST /api/auth/register` - User registration
- `POST /api/auth/login` - User login
- `GET /api/auth/me` - Get current user
- `POST /api/auth/change-password` - Change password

### Students
- `GET /api/students` - Get all students
- `GET /api/students/:id` - Get student by ID
- `PUT /api/students/:id` - Update student
- `DELETE /api/students/:id` - Delete student
- `GET /api/students/:id/stats` - Get student statistics

### Faculty
- `GET /api/faculty` - Get all faculty
- `POST /api/faculty` - Create faculty
- `GET /api/faculty/:id` - Get faculty by ID
- `PUT /api/faculty/:id` - Update faculty
- `DELETE /api/faculty/:id` - Delete faculty

### Courses
- `GET /api/courses` - Get all courses
- `POST /api/courses` - Create course
- `GET /api/courses/:id` - Get course by ID
- `PUT /api/courses/:id` - Update course
- `DELETE /api/courses/:id` - Delete course

### Attendance
- `GET /api/attendance` - Get attendance records
- `POST /api/attendance` - Mark attendance
- `GET /api/attendance/student/:id` - Get student attendance

### Grades
- `GET /api/grades` - Get all grades
- `POST /api/grades` - Add grade
- `GET /api/grades/student/:id` - Get student grades

### Fees
- `GET /api/fees` - Get all fees
- `POST /api/fees` - Create fee record
- `PUT /api/fees/:id/pay` - Mark fee as paid

### Library
- `GET /api/library/books` - Get all books
- `POST /api/library/books` - Add book
- `POST /api/library/borrow` - Borrow book
- `PUT /api/library/return/:id` - Return book

### Events
- `GET /api/events` - Get all events
- `POST /api/events` - Create event
- `PUT /api/events/:id` - Update event
- `DELETE /api/events/:id` - Delete event

### Announcements
- `GET /api/announcements` - Get all announcements
- `POST /api/announcements` - Create announcement
- `PUT /api/announcements/:id` - Update announcement
- `DELETE /api/announcements/:id` - Delete announcement

## 🚀 Deployment

### Quick Deploy Options

#### Option 1: Railway (Recommended - Easiest)
1. **Backend**: Deploy to [Railway.app](https://railway.app) using the provided Dockerfile
2. **Frontend**: Deploy to [Vercel.com](https://vercel.com) with root directory set to `frontend`

#### Option 2: Render
1. **Backend**: Deploy as Web Service on [Render.com](https://render.com)
2. **Frontend**: Deploy as Static Site on Render

#### Option 3: Heroku
1. **Backend**: Use Heroku CLI with PostgreSQL addon
2. **Frontend**: Deploy using create-react-app buildpack

### Automated Deployment
Run the deployment script for guided setup:
```bash
chmod +x deploy.sh
./deploy.sh
```

### Manual Deployment Steps

#### Backend Deployment
1. **Push code to GitHub**
2. **Choose platform** (Railway/Render/Heroku)
3. **Connect repository** and configure:
   - Build Command: `npm install && npm run build`
   - Start Command: `npm start`
   - Environment Variables (see below)
4. **Set up database** (PostgreSQL recommended)
5. **Deploy**

#### Frontend Deployment
1. **Push code to GitHub**
2. **Choose platform** (Vercel/Netlify/Render)
3. **Configure**:
   - Root Directory: `frontend`
   - Build Command: `npm run build`
   - Publish Directory: `build`
4. **Update environment variables**
5. **Deploy**

### Environment Variables

#### Backend (.env)
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

#### Frontend (.env)
```env
REACT_APP_API_URL=https://your-backend-url.railway.app
REACT_APP_SOCKET_URL=https://your-backend-url.railway.app
```

### Database Setup
- **Development**: SQLite (included)
- **Production**: PostgreSQL (Railway/Supabase/PlanetScale)
- **Migration**: Run `npx prisma db push` after setting up production database

### File Upload Setup
For production, consider using cloud storage:
- **AWS S3**: Install `@aws-sdk/client-s3 multer-s3`
- **Cloudinary**: Install `cloudinary multer-storage-cloudinary`

### Security Checklist
- [ ] Change default JWT secret
- [ ] Set up HTTPS (automatic on most platforms)
- [ ] Configure CORS properly
- [ ] Set up rate limiting
- [ ] Use environment variables for secrets
- [ ] Enable helmet security headers
- [ ] Set up proper database backups

📖 **For detailed deployment instructions, see [DEPLOYMENT.md](DEPLOYMENT.md)**

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📝 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🆘 Support

If you encounter any issues or have questions:

1. Check the [Issues](https://github.com/your-repo/issues) page
2. Create a new issue with detailed information
3. Contact the development team

## 🔮 Future Enhancements

- [ ] Mobile app (React Native)
- [ ] Advanced analytics and reporting
- [ ] Integration with external LMS systems
- [ ] Multi-language support
- [ ] Advanced notification system
- [ ] Document management system
- [ ] Online examination module
- [ ] Student portal with self-service features
- [ ] Integration with VIT-AP's existing systems

## 📞 Contact

**Vellore Institute of Technology, Andhra Pradesh**
- **Address**: Amaravati, Andhra Pradesh, India
- **Website**: https://vitap.ac.in
- **Email**: info@vitap.ac.in

---

**Built with ❤️ for Vellore Institute of Technology, Andhra Pradesh** 