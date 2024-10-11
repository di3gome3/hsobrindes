'use client';
import React, { useRef, useEffect } from 'react';
import { Box, Typography, Button, Container } from '@mui/material';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation'; // Import navigation styles
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import CustomButton from '../Button';

const categories = [
  { name: 'Bolsas', image: 'https://www.xbzbrindes.com.br/img/produtos/3/Mochila-de-Nylon-Dobravel-23-Litros-20546-1728313106.jpg' },
  { name: 'Bolsas', image: 'https://www.xbzbrindes.com.br/img/produtos/3/Mochila-de-Nylon-Dobravel-23-Litros-PRETO-20550-1728313111.jpg' },
  { name: 'Bolsas', image: 'https://www.xbzbrindes.com.br/timthumb/timthumb.php?src=/img/produtos/3/Sacola-de-Nylon-18588-1710938984.jpg&w=652' },
  { name: 'Bolsas', image: 'https://www.xbzbrindes.com.br/timthumb/timthumb.php?src=/img/produtos/3/Mini-Bolsa-Transversal-de-rPET-20827-1728309870.jpg&w=652' },
  { name: 'Bolsas', image: 'https://www.xbzbrindes.com.br/timthumb/timthumb.php?src=/img/produtos/3/Bolsa-Esportiva-46-Litros-20290-1726661300.jpg&w=652' },
  { name: 'Bolsas', image: 'https://www.xbzbrindes.com.br/timthumb/timthumb.php?src=/img/produtos/3/Sacola-Plastica-20553-1728071475.jpg&w=652' },
];

const CategoryCarousel = () => {
  const prevRef = useRef(null);
  const nextRef = useRef(null);

  useEffect(() => {
    if (prevRef.current && nextRef.current) {
      prevRef.current.style.display = 'block';
      nextRef.current.style.display = 'block';
    }
  }, []);

  return (
    <Container maxWidth="lg">
      <Box sx={{ textAlign: 'center', padding: '40px 0', background: '#fff', position: 'relative' }}>
        <Typography variant="h4" color="primary" sx={{ mb: 4, color: '#A92529' }}>
          Categorias
        </Typography>
        <Swiper
          modules={[Navigation]}
          spaceBetween={20} // Espaçamento ajustado para melhor separação entre slides
          slidesPerView={4}
          navigation={{
            prevEl: prevRef.current,
            nextEl: nextRef.current,
          }}
          breakpoints={{
            // Definições para responsividade
            0: {
              slidesPerView: 1, // Exibir 1 item por vez em telas pequenas (xs)
            },
            600: {
              slidesPerView: 2, // Exibir 2 itens por vez em telas maiores que 600px
            },
            900: {
              slidesPerView: 3, // Exibir 3 itens por vez em telas maiores que 900px
            },
            1200: {
              slidesPerView: 4, // Exibir 4 itens por vez em telas maiores que 1200px
            },
          }}
          onSwiper={(swiper) => {
            swiper.params.navigation.prevEl = prevRef.current;
            swiper.params.navigation.nextEl = nextRef.current;
            swiper.navigation.init();
            swiper.navigation.update();
          }}
        >
          {categories.map((category, index) => (
            <SwiperSlide key={index}>
              <Box
                sx={{
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                }}
              >
                <Box
                  sx={{
                    width: 150, // Ajuste do tamanho da imagem
                    height: 150,
                    borderRadius: '50%', // Faz a imagem ficar redonda
                    overflow: 'hidden', // Garante que a imagem fique dentro do círculo
                    marginBottom: 2,
                  }}
                >
                  <img
                    src={category.image}
                    alt={category.name}
                    style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                  />
                </Box>
                <Typography variant="body1">{category.name}</Typography>
              </Box>
            </SwiperSlide>
          ))}
        </Swiper>
        {/* Botões de navegação posicionados lateralmente e centralizados verticalmente */}
        <Button
          ref={prevRef}
          sx={{
            position: 'absolute',
            top: '60%',
            left: -20, // Ajuste para afastar o botão da imagem
            transform: 'translateY(-50%)',
            zIndex: 2,
            minWidth: 'auto',
            color: 'black',
          }}
        >
          <ArrowBackIosNewIcon />
        </Button>
        <Button
          ref={nextRef}
          sx={{
            position: 'absolute',
            top: '60%',
            right: -20, // Ajuste para afastar o botão da imagem
            transform: 'translateY(-50%)',
            zIndex: 2,
            minWidth: 'auto',
            color: 'black',
          }}
        >
          <ArrowForwardIosIcon />
        </Button>
      </Box>
      {/* Texto adicional e botão abaixo do carrossel */}
      <Box sx={{ display: 'flex', alignItems: 'flex-end', justifyContent: 'space-between', marginTop: 4, mb: 2 }}>
        <Typography sx={{ fontSize: '20px' }}>
          Dê uma olhada no nosso catálogo completo
        </Typography>
        <CustomButton>
          Ver Catálogo
        </CustomButton>
      </Box>
    </Container>
  );
};

export default CategoryCarousel;
