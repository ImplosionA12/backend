import React from 'react';
import { Box, Typography } from '@mui/material';

const Grades: React.FC = () => {
  return (
    <Box>
      <Typography variant="h4" gutterBottom>
        Grade Management
      </Typography>
      <Typography variant="body1">
        Grade management page - to be implemented with grade entry, GPA calculation, and academic reports.
      </Typography>
    </Box>
  );
};

export default Grades; 