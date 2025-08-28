import React from 'react';
import { Box, Typography } from '@mui/material';

const Library: React.FC = () => {
  return (
    <Box>
      <Typography variant="h4" gutterBottom>
        Library Management
      </Typography>
      <Typography variant="body1">
        Library management page - to be implemented with book catalog, borrowing system, and inventory management.
      </Typography>
    </Box>
  );
};

export default Library; 