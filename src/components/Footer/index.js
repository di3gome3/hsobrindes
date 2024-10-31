// components/Footer.jsx

"use client";
import React from 'react';
import { Box, Stack, IconButton, Container, Typography, Link as MUILink } from '@mui/material';
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import EmailIcon from '@mui/icons-material/Email';

const Footer = () => {
  return (
    <Box component="footer" sx={{ py: 4, bgcolor: '#A92529' }}>
      <Container>
        <Stack direction="row" spacing={2} justifyContent="center" sx={{ mb: 2 }}>
          <IconButton component="a" href="https://www.instagram.com/hsobrindes/" target="_blank" rel="noopener noreferrer">
            <InstagramIcon sx={{ color: "white" }} />
          </IconButton>
          <IconButton component="a" href="https://wa.me/+558899680514" target="_blank" rel="noopener noreferrer">
            <WhatsAppIcon sx={{ color: "white" }} />
          </IconButton>
          <IconButton component="a" href="mailto:seuemail@dominio.com" target="_blank" rel="noopener noreferrer">
            <EmailIcon sx={{ color: "white" }} />
          </IconButton>
        </Stack>
        <Typography variant="body2" color="white" align="center" sx={{ mt: 2 }}>
          © {new Date().getFullYear()} HSO Brindes. Todos os direitos reservados.
        </Typography>
      </Container>
    </Box>
  );
};

export default Footer;
