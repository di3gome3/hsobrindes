// components/FloatingWhatsAppButton.jsx

"use client";
import React from 'react';
import { Fab } from '@mui/material';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';

const FloatingWhatsAppButton = () => {
  const whatsappNumber = '+558899680514'; // Substitua pelo seu número de WhatsApp
  const whatsappLink = `https://wa.me/${whatsappNumber}`;

  return (
    <a href={whatsappLink} target="_blank" rel="noopener noreferrer" aria-label="Enviar mensagem pelo WhatsApp">
      <Fab
        color="success"
        aria-label="WhatsApp"
        sx={{
          position: 'fixed',
          bottom: 20,
          right: 20, // Alterado de 'left: 20' para 'right: 20'
          backgroundColor: '#25D366',
          color: '#fff',
          '&:hover': {
            backgroundColor: '#128C7E',
          },
          zIndex: 1000,
          // Animação opcional para destacar o botão
          animation: 'pulse 2s infinite',
          '@keyframes pulse': {
            '0%': {
              transform: 'scale(1)',
              boxShadow: '0 0 0 0 rgba(37, 211, 102, 0.7)',
            },
            '70%': {
              transform: 'scale(1.1)',
              boxShadow: '0 0 0 10px rgba(37, 211, 102, 0)',
            },
            '100%': {
              transform: 'scale(1)',
              boxShadow: '0 0 0 0 rgba(37, 211, 102, 0)',
            },
          },
        }}
      >
        <WhatsAppIcon />
      </Fab>
    </a>
  );
};

export default FloatingWhatsAppButton;
