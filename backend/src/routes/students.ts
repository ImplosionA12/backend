import { Router, Request, Response } from 'express';
import { PrismaClient, Prisma } from '@prisma/client';
import { requireAdmin, requireFaculty } from '../middleware/auth';

const router = Router();
const prisma = new PrismaClient();

// Get all students
router.get('/', async (req: Request, res: Response) => {
  try {
    const { page = 1, limit = 10, search = '' } = req.query;
    const skip = (Number(page) - 1) * Number(limit);

    const where: Prisma.StudentWhereInput = (search as string)
      ? ({
          OR: [
            {
              studentId: {
                contains: search as string,
                mode: 'insensitive',
              } as any,
            },
            {
              user: {
                is: {
                  profile: {
                    is: {
                      OR: [
                        {
                          firstName: {
                            contains: search as string,
                            mode: 'insensitive',
                          } as any,
                        },
                        {
                          lastName: {
                            contains: search as string,
                            mode: 'insensitive',
                          } as any,
                        },
                      ],
                    },
                  },
                },
              },
            },
          ],
        } as unknown as Prisma.StudentWhereInput)
      : ({} as Prisma.StudentWhereInput);

    const students = await prisma.student.findMany({
      where,
      include: {
        user: {
          include: {
            profile: true
          }
        },
        enrollments: {
          include: {
            course: true
          }
        }
      },
      skip,
      take: Number(limit),
      orderBy: { createdAt: 'desc' }
    });

    const total = await prisma.student.count({ where });

    return res.json({
      students,
      pagination: {
        page: Number(page),
        limit: Number(limit),
        total,
        pages: Math.ceil(total / Number(limit))
      }
    });
  } catch (error) {
    console.error('Get students error:', error);
    return res.status(500).json({ message: 'Server error' });
  }
});

// Get student by ID
router.get('/:id', async (req: Request, res: Response) => {
  try {
    const { id } = req.params;

    const student = await prisma.student.findUnique({
      where: { id },
      include: {
        user: {
          include: {
            profile: true
          }
        },
        enrollments: {
          include: {
            course: true
          }
        },
        attendances: {
          include: {
            faculty: {
              include: {
                user: {
                  include: {
                    profile: true
                  }
                }
              }
            }
          }
        },
        grades: true,
        fees: true
      }
    });

    if (!student) {
      return res.status(404).json({ message: 'Student not found' });
    }

    return res.json({ student });
  } catch (error) {
    console.error('Get student error:', error);
    return res.status(500).json({ message: 'Server error' });
  }
});

// Update student
router.put('/:id', requireAdmin, async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const { currentSemester, gpa, isGraduated, graduationDate, ...profileData } = req.body;

    const student = await prisma.student.findUnique({
      where: { id },
      include: { user: { include: { profile: true } } }
    });

    if (!student) {
      return res.status(404).json({ message: 'Student not found' });
    }

    // Update student data
    const updatedStudent = await prisma.student.update({
      where: { id },
      data: {
        currentSemester,
        gpa,
        isGraduated,
        graduationDate: graduationDate ? new Date(graduationDate) : null
      },
      include: {
        user: {
          include: {
            profile: true
          }
        }
      }
    });

    // Update profile if provided
    if (Object.keys(profileData).length > 0) {
      await prisma.profile.update({
        where: { userId: student.userId },
        data: profileData
      });
    }

    return res.json({ 
      message: 'Student updated successfully',
      student: updatedStudent
    });
  } catch (error) {
    console.error('Update student error:', error);
    return res.status(500).json({ message: 'Server error' });
  }
});

// Delete student
router.delete('/:id', requireAdmin, async (req: Request, res: Response) => {
  try {
    const { id } = req.params;

    const student = await prisma.student.findUnique({
      where: { id }
    });

    if (!student) {
      return res.status(404).json({ message: 'Student not found' });
    }

    // Delete student (cascade will delete related records)
    await prisma.student.delete({
      where: { id }
    });

    return res.json({ message: 'Student deleted successfully' });
  } catch (error) {
    console.error('Delete student error:', error);
    return res.status(500).json({ message: 'Server error' });
  }
});

// Get student statistics
router.get('/:id/stats', async (req: Request, res: Response) => {
  try {
    const { id } = req.params;

    const student = await prisma.student.findUnique({
      where: { id },
      include: {
        enrollments: true,
        attendances: true,
        grades: true,
        fees: true
      }
    });

    if (!student) {
      return res.status(404).json({ message: 'Student not found' });
    }

    const totalCourses = student.enrollments.length;
    const totalAttendance = student.attendances.length;
    const presentAttendance = student.attendances.filter(a => a.status === 'PRESENT').length;
    const attendancePercentage = totalAttendance > 0 ? (presentAttendance / totalAttendance) * 100 : 0;
    
    const totalFees = student.fees.reduce((sum, fee) => sum + fee.amount, 0);
    const paidFees = student.fees.filter(fee => fee.status === 'PAID').reduce((sum, fee) => sum + fee.amount, 0);
    const pendingFees = totalFees - paidFees;

    const stats = {
      totalCourses,
      attendancePercentage: Math.round(attendancePercentage * 100) / 100,
      totalFees,
      paidFees,
      pendingFees,
      gpa: student.gpa,
      currentSemester: student.currentSemester,
      isGraduated: student.isGraduated
    };

    return res.json({ stats });
  } catch (error) {
    console.error('Get student stats error:', error);
    return res.status(500).json({ message: 'Server error' });
  }
});

export default router; 