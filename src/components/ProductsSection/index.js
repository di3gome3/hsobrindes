'use client';
import { Box, Container, Grid } from '@mui/material';
import 'swiper/css';
import 'swiper/css/navigation';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules'; // Importa o módulo Autoplay
import CustomButton from '../Button';

export default function ProductsSection() {
  const whatsappNumber = '+558899680514'; // Substitua pelo número real

  const getWhatsAppLink = (productName) => {
    const message = `Olá, vim pelo site e estou interessado nas ${productName}`;
    return `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`;
  };

  return (
    <Container fixed sx={{ mb: '80px', mt: '80px' }}>
      <Grid container spacing={2} justifyContent="center">
        {/* Primeira Coluna */}
        <Grid item xs={12} sm={6} md={4}>
          <Swiper
            spaceBetween={50}
            slidesPerView={1}
            modules={[Autoplay]} // Adiciona o módulo Autoplay
            autoplay={{ 
              delay: 3000, // Tempo em milissegundos entre as transições
              disableOnInteraction: false, // Continua o autoplay após interação do usuário
            }}
            loop={true} // Opcional: faz o loop infinito dos slides
          >
            <SwiperSlide>
              <a href={getWhatsAppLink('Garrafas Termicas')} target="_blank" rel="noopener noreferrer">
                <Box
                  component="img"
                  src="https://www.xbzbrindes.com.br/img/banner/66e4396d132aabannersdestaqueslide__08106_567%20x%20617%20px_teste%202.jpg"
                  alt="Produto 1"
                  sx={{
                    width: '100%',
                    height: 'auto',
                    borderRadius: '16px',
                    cursor: 'pointer', // Adiciona o cursor de pointer para indicar clicável
                  }}
                />
              </a>
            </SwiperSlide>
            <SwiperSlide>
              <a href={getWhatsAppLink('Garrafas Termicas')} target="_blank" rel="noopener noreferrer">
                <Box
                  component="img"
                  src="https://www.xbzbrindes.com.br/img/banner/66e4396d32499bannersdestaqueslide18781_567%20x%20617%20px.jpg"
                  alt="Produto 1 Slide 2"
                  sx={{
                    width: '100%',
                    height: 'auto',
                    borderRadius: '16px',
                    cursor: 'pointer',
                  }}
                />
              </a>
            </SwiperSlide>
          </Swiper>
        </Grid>

        {/* Segunda Coluna */}
        <Grid item xs={12} sm={6} md={4}>
          <Grid container spacing={2}>
            <Grid item xs={6}>
              <a href={getWhatsAppLink('Mochilas')} target="_blank" rel="noopener noreferrer">
                <Box
                  component="img"
                  src="https://www.xbzbrindes.com.br/img/banner/bannerdestaque_2_07055_268%20x%20330%20px.jpg"
                  alt="Produto 2"
                  sx={{
                    width: '100%',
                    height: 'auto',
                    borderRadius: '16px',
                    cursor: 'pointer',
                  }}
                />
              </a>
            </Grid>
            <Grid item xs={6}>
              <a href={getWhatsAppLink('Copos Termicos')} target="_blank" rel="noopener noreferrer">
                <Box
                  component="img"
                  src="https://www.xbzbrindes.com.br/img/banner/bannerdestaque_3_E_08114_268%20x%20330%20px_teste09.jpg"
                  alt="Produto 3"
                  sx={{
                    width: '100%',
                    height: 'auto',
                    borderRadius: '16px',
                    cursor: 'pointer',
                  }}
                />
              </a>
            </Grid>
            <Grid item xs={12}>
              <a href={getWhatsAppLink('Bolsas')} target="_blank" rel="noopener noreferrer">
                <Box
                  component="img"
                  src="https://www.xbzbrindes.com.br/img/banner/bannerdestaque_4_07087_568%20x%20250%20px.jpg"
                  alt="Produto 4"
                  sx={{
                    width: '100%',
                    height: 'auto',
                    borderRadius: '16px',
                    cursor: 'pointer',
                  }}
                />
              </a>
            </Grid>
          </Grid>
        </Grid>

        {/* Terceira Coluna */}
        <Grid item xs={12} md={4}>
          <Swiper
            spaceBetween={10}
            slidesPerView={1}
            modules={[Autoplay]} // Adiciona o módulo Autoplay
            autoplay={{ 
              delay: 3000, // Tempo em milissegundos entre as transições
              disableOnInteraction: false, // Continua o autoplay após interação do usuário
            }}
            loop={true} // Opcional: faz o loop infinito dos slides
          >
            <SwiperSlide>
              <a href={getWhatsAppLink('Produto 5')} target="_blank" rel="noopener noreferrer">
                <Box
                  component="img"
                  src="https://www.xbzbrindes.com.br/img/banner/66e4396d32499bannersdestaqueslide18781_567%20x%20617%20px.jpg"
                  alt="Produto 5"
                  sx={{
                    width: '100%',
                    height: 'auto',
                    borderRadius: '16px',
                    cursor: 'pointer',
                  }}
                />
              </a>
            </SwiperSlide>
            <SwiperSlide>
              <a href={getWhatsAppLink('Produto 5 Slide 2')} target="_blank" rel="noopener noreferrer">
                <Box
                  component="img"
                  src="https://www.xbzbrindes.com.br/img/banner/66e4396d132aabannersdestaqueslide__08106_567%20x%20617%20px_teste%202.jpg"
                  alt="Produto 5 Slide 2"
                  sx={{
                    width: '100%',
                    height: 'auto',
                    borderRadius: '16px',
                    cursor: 'pointer',
                  }}
                />
              </a>
            </SwiperSlide>
          </Swiper>
        </Grid>

        {/* Botão Opcional (Descomente se necessário) */}
        {/* 
        <Grid item xs={12}>
          <CustomButton>
            Baixar catálogo
          </CustomButton>
        </Grid> 
        */}
      </Grid>
    </Container>
  );
}
