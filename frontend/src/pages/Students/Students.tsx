import React from 'react';
import { Box, Typography } from '@mui/material';

const Students: React.FC = () => {
  return (
    <Box>
      <Typography variant="h4" gutterBottom>
        Students Management
      </Typography>
      <Typography variant="body1">
        Students management page - to be implemented with full CRUD operations, search, filtering, and student profiles.
      </Typography>
    </Box>
  );
};

export default Students; 