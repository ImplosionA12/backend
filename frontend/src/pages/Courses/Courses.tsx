import React from 'react';
import { Box, Typography } from '@mui/material';

const Courses: React.FC = () => {
  return (
    <Box>
      <Typography variant="h4" gutterBottom>
        Course Management
      </Typography>
      <Typography variant="body1">
        Course management page - to be implemented with course creation, enrollment, scheduling, and curriculum management.
      </Typography>
    </Box>
  );
};

export default Courses; 