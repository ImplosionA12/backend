const { PrismaClient } = require('@prisma/client');
const bcrypt = require('bcryptjs');

const prisma = new PrismaClient();

async function setup() {
  try {
    console.log('🚀 Setting up VIT-AP College Management System...');
    
    // Generate Prisma client
    console.log('📦 Generating Prisma client...');
    const { execSync } = require('child_process');
    execSync('npx prisma generate', { stdio: 'inherit' });
    
    // Push database schema
    console.log('🗄️ Pushing database schema...');
    execSync('npx prisma db push', { stdio: 'inherit' });
    
    // Check if admin user exists
    const existingAdmin = await prisma.user.findFirst({
      where: { email: 'admin@vitap.ac.in' }
    });
    
    if (!existingAdmin) {
      console.log('👤 Creating default admin user...');
      
      // Hash password
      const salt = await bcrypt.genSalt(10);
      const hashedPassword = await bcrypt.hash('admin123', salt);
      
      // Create admin user
      const adminUser = await prisma.user.create({
        data: {
          email: 'admin@vitap.ac.in',
          password: hashedPassword,
          role: 'ADMIN',
          profile: {
            create: {
              firstName: 'Admin',
              lastName: 'User',
              phone: '+91-1234567890',
              address: 'VIT-AP University, Amaravati, Andhra Pradesh'
            }
          }
        }
      });
      
      console.log('✅ Admin user created successfully!');
      console.log('📧 Email: admin@vitap.ac.in');
      console.log('🔑 Password: admin123');
    } else {
      console.log('✅ Admin user already exists');
    }
    
    // Create sample faculty
    const existingFaculty = await prisma.user.findFirst({
      where: { email: 'faculty@vitap.ac.in' }
    });
    
    if (!existingFaculty) {
      console.log('👨‍🏫 Creating sample faculty user...');
      
      const salt = await bcrypt.genSalt(10);
      const hashedPassword = await bcrypt.hash('faculty123', salt);
      
      const facultyUser = await prisma.user.create({
        data: {
          email: 'faculty@vitap.ac.in',
          password: hashedPassword,
          role: 'FACULTY',
          profile: {
            create: {
              firstName: 'Dr. John',
              lastName: 'Doe',
              phone: '+91-1234567891',
              address: 'VIT-AP University, Amaravati, Andhra Pradesh'
            }
          },
          faculty: {
            create: {
              employeeId: `FAC${Date.now()}`,
              department: 'Computer Science & Engineering',
              designation: 'Assistant Professor',
              qualification: 'Ph.D. Computer Science',
              experience: 8
            }
          }
        }
      });
      
      console.log('✅ Faculty user created successfully!');
      console.log('📧 Email: faculty@vitap.ac.in');
      console.log('🔑 Password: faculty123');
    }
    
    // Create sample student
    const existingStudent = await prisma.user.findFirst({
      where: { email: 'student@vitap.ac.in' }
    });
    
    if (!existingStudent) {
      console.log('👨‍🎓 Creating sample student user...');
      
      const salt = await bcrypt.genSalt(10);
      const hashedPassword = await bcrypt.hash('student123', salt);
      
      const studentUser = await prisma.user.create({
        data: {
          email: 'student@vitap.ac.in',
          password: hashedPassword,
          role: 'STUDENT',
          profile: {
            create: {
              firstName: 'Jane',
              lastName: 'Smith',
              phone: '+91-1234567892',
              address: 'VIT-AP University, Amaravati, Andhra Pradesh'
            }
          },
          student: {
            create: {
              studentId: `STU${Date.now()}`,
              currentSemester: 3,
              gpa: 3.8
            }
          }
        }
      });
      
      console.log('✅ Student user created successfully!');
      console.log('📧 Email: student@vitap.ac.in');
      console.log('🔑 Password: student123');
    }
    
    console.log('\n🎉 VIT-AP Management System setup completed successfully!');
    console.log('\n📋 Default Users:');
    console.log('👤 Admin: admin@vitap.ac.in / admin123');
    console.log('👨‍🏫 Faculty: faculty@vitap.ac.in / faculty123');
    console.log('👨‍🎓 Student: student@vitap.ac.in / student123');
    console.log('\n🏫 Vellore Institute of Technology, Andhra Pradesh');
    console.log('📍 Amaravati, Andhra Pradesh, India');
    console.log('\n🚀 You can now start the servers:');
    console.log('   Backend: npm run dev');
    console.log('   Frontend: npm start');
    
  } catch (error) {
    console.error('❌ Setup failed:', error);
  } finally {
    await prisma.$disconnect();
  }
}

setup(); 