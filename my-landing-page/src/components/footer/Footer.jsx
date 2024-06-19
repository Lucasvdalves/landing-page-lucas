import React from 'react';
import { Container, Typography, Box } from '@mui/material';

const Footer = () => {
  return (
    <Box
      component="footer"
      sx={{
        textAlign: 'center',
        background: 'linear-gradient(to right, #006400, #000000)',
        color: '#ffffff',
        padding: '20px 0',
        position: 'fixed',
        left: 0,
        bottom: 0,
        width: '100%',
      }}
    >
      <Container>
        <Typography variant="body1" sx={{ marginBottom: '10px' }}>
          &copy; {new Date().getFullYear()} Meu Portfólio
        </Typography>
      </Container>
    </Box>
  );
};

export default Footer;
