// components/Footer.jsx

"use client";
import React from 'react';
import { Box, Stack, IconButton, Container, Typography, Link as MUILink } from '@mui/material';
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';

const Footer = () => {
  return (
    <Box component="footer" sx={{ py: 4, bgcolor: '#A92529' }}>
      <Container>
        <Stack direction="row" spacing={2} justifyContent="center">
          {/* Ícones como antes */}
        </Stack>
        <Typography variant="body2" color="white" align="center" sx={{ mt: 2 }}>
          © {new Date().getFullYear()} HSO Brindes. Todos os direitos reservados.
        </Typography>
        {/* <Typography variant="body2" color="white" align="center" sx={{ mt: 1 }}>
          Desenvolvido por <MUILink href="https://seusite.com" target="_blank" rel="noopener noreferrer">Seu Nome</MUILink>
        </Typography> */}
      </Container>
    </Box>
  );
};

export default Footer;
