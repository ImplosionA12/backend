import React from 'react';
import { Box, Typography } from '@mui/material';

const Announcements: React.FC = () => {
  return (
    <Box>
      <Typography variant="h4" gutterBottom>
        Announcements
      </Typography>
      <Typography variant="body1">
        Announcements page - to be implemented with announcement creation, publishing, and notification system.
      </Typography>
    </Box>
  );
};

export default Announcements; 