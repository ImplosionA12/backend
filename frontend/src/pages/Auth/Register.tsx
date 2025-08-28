import React from 'react';
import { Box, Typography, Button } from '@mui/material';
import { useNavigate } from 'react-router-dom';

const Register: React.FC = () => {
  const navigate = useNavigate();

  return (
    <Box sx={{ p: 3, textAlign: 'center' }}>
      <Typography variant="h4" gutterBottom>
        Register
      </Typography>
      <Typography variant="body1" sx={{ mb: 3 }}>
        Registration page - to be implemented
      </Typography>
      <Button variant="contained" onClick={() => navigate('/login')}>
        Back to Login
      </Button>
    </Box>
  );
};

export default Register; 