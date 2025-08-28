import React from 'react';
import { Box, Typography, Grid, Card, CardContent } from '@mui/material';
import { People, School, Book, Assessment } from '@mui/icons-material';

const Dashboard: React.FC = () => {
  const stats = [
    { title: 'Total Students', value: '8,500+', icon: <People />, color: '#1976d2' },
    { title: 'Faculty Members', value: '450+', icon: <School />, color: '#dc004e' },
    { title: 'Active Courses', value: '120+', icon: <Book />, color: '#2e7d32' },
    { title: 'Attendance Rate', value: '96%', icon: <Assessment />, color: '#ed6c02' },
  ];

  return (
    <Box>
      <Box sx={{ mb: 4 }}>
        <Typography variant="h4" gutterBottom sx={{ fontWeight: 600, color: '#1976d2' }}>
          VIT-AP Dashboard
        </Typography>
        <Typography variant="body1" color="text.secondary">
          Welcome to Vellore Institute of Technology, Andhra Pradesh Management System
        </Typography>
      </Box>
      
      <Grid container spacing={3}>
        {stats.map((stat, index) => (
          <Grid item xs={12} sm={6} md={3} key={index}>
            <Card sx={{ height: '100%', transition: 'transform 0.2s', '&:hover': { transform: 'translateY(-4px)' } }}>
              <CardContent>
                <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
                  <Box sx={{ color: stat.color, mr: 1 }}>
                    {stat.icon}
                  </Box>
                  <Typography variant="h6" component="div">
                    {stat.title}
                  </Typography>
                </Box>
                <Typography variant="h4" component="div" sx={{ color: stat.color, fontWeight: 600 }}>
                  {stat.value}
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>

      <Box sx={{ mt: 4 }}>
        <Typography variant="h5" gutterBottom sx={{ fontWeight: 600, color: '#1976d2' }}>
          About VIT-AP
        </Typography>
        <Typography variant="body1" color="text.secondary" sx={{ mb: 2 }}>
          Vellore Institute of Technology, Andhra Pradesh (VIT-AP) is a premier institution of higher learning 
          committed to excellence in education, research, and innovation. Our comprehensive management system 
          provides seamless administration of academic operations.
        </Typography>
        <Typography variant="body1" color="text.secondary">
          This system manages students, faculty, courses, attendance, grades, fees, library resources, events, 
          and announcements to ensure efficient academic administration and enhance the learning experience.
        </Typography>
      </Box>
    </Box>
  );
};

export default Dashboard; 