'use client';
import React from 'react';
import { Box, Container } from '@mui/material';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Navigation, Pagination } from 'swiper/modules';

const Banner = () => {
  const mockImages = [
    'https://www.marcabrindes.net.br/content/interfaces/cms/userfiles/produtos/banner-canecas-1920x625-401.jpg',
    'https://www.xbzbrindes.com.br/img/banner/bannerprodutoamamos_30d14784B_1920x600px_2.jpg',
    'https://www.marcabrindes.net.br/content/interfaces/cms/userfiles/produtos/banner-canecas-1920x625-401.jpg'
  ]; // Array de URLs das imagens mockadas

  return (
    <Container fixed>
      <style jsx global>
        {`
          .swiper-pagination {
            left: 0;
            width: 9.98px;
            height: 9.98px;
            right: auto;
            text-align: left;
            border-radius: 9.99px;
          }

          .swiper-pagination-bullet-active {
            background-color: #A92529 !important;
          }

          .swiper-button-prev, .swiper-button-next {
            background: rgba(255, 255, 255, 0.5);
            width: 40px;
            height: 40px;
            position: absolute;
            top: 50%;
            transform: translateY(-50%);
            color: #000;
            z-index: 10;
          }

          .swiper-button-prev {
            left: 0;
          }

          .swiper-button-next {
            right: 0;
          }

          .swiper-button-next::after, .swiper-button-prev::after {
            font-size: 20px;
          }

          @media (max-width: 600px) {
            .swiper-button-next, .swiper-button-prev {
              display: none !important;
            }
          }
        `}
      </style>
      <Swiper
        modules={[Navigation, Autoplay]}
        spaceBetween={0}
        slidesPerView={1}
        navigation
        pagination={{ clickable: true, className: 'swiper-pagination-left' }}
        autoplay={{ delay: 2500 }}
        style={{ width: '100%', height: 'auto', borderRadius: '30px', marginBottom: 10 }} // Ajuste de borda no Swiper
      >
        {mockImages.map((image, index) => (
          <SwiperSlide key={index}>
            <Box
              sx={{
                height: {
                  xs: 120,  // Altura para xs
                  sm: 160,  // Altura para sm
                  md: 220,  // Altura para md
                  lg: 320,  // Altura para lg
                  xl: 380   // Altura para xl
                },
                width: '100%',
                px: 0,
                position: 'relative',
                overflow: 'hidden',
                borderRadius: '30px',  // Ajuste de borda no Box
                '&::before': {
                  content: '""',
                  position: 'absolute',
                  top: 0,
                  left: 0,
                  right: 1,
                  bottom: 5,
                  borderRadius: '30px',  // Ajuste de borda no pseudo-elemento ::before
                  backgroundImage: `url(${image})`,
                  backgroundSize: 'contain',
                  backgroundRepeat: 'no-repeat',
                  backgroundPosition: 'center 50%',
                  transform: 'scaleX(1)',
                },
              }}
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </Container>
  );
};

export default Banner;
