'use client';
import { Box, Container, Grid } from '@mui/material';
import 'swiper/css';
import 'swiper/css/navigation';
import { Swiper, SwiperSlide } from 'swiper/react';
import CustomButton from '../Button';

export default function ProductsSection() {
  return (
    <Container fixed sx={{ mb: '80px' }}>
      <Grid container spacing={2} justifyContent="center">
        {/* First Column */}
        <Grid item xs={12} sm={6} md={4}>
          <Swiper spaceBetween={50} slidesPerView={1}>
            <SwiperSlide>
              <Box
                component="img"
                src="https://www.xbzbrindes.com.br/img/banner/66e4396d132aabannersdestaqueslide__08106_567%20x%20617%20px_teste%202.jpg"
                alt="Image 1"
                sx={{
                  width: '100%',
                  height: 'auto',
                  borderRadius: '16px',
                }}
              />
            </SwiperSlide>
            <SwiperSlide>
              <Box
                component="img"
                src="https://www.xbzbrindes.com.br/img/banner/66e4396d32499bannersdestaqueslide18781_567%20x%20617%20px.jpg"
                alt="Image 1 Slide 2"
                sx={{
                  width: '100%',
                  height: 'auto',
                  borderRadius: '16px',
                }}
              />
            </SwiperSlide>
          </Swiper>
        </Grid>

        {/* Second Column */}
        <Grid item xs={12} sm={6} md={4}>
          <Grid container spacing={2}>
            <Grid item xs={6}>
              <Box
                component="img"
                src="https://www.xbzbrindes.com.br/img/banner/bannerdestaque_2_07055_268%20x%20330%20px.jpg"
                alt="Image 2"
                sx={{
                  width: '100%',
                  height: 'auto',
                  borderRadius: '16px',
                }}
              />
            </Grid>
            <Grid item xs={6}>
              <Box
                component="img"
                src="https://www.xbzbrindes.com.br/img/banner/bannerdestaque_3_E_08114_268%20x%20330%20px_teste09.jpg"
                alt="Image 3"
                sx={{
                  width: '100%',
                  height: 'auto',
                  borderRadius: '16px',
                }}
              />
            </Grid>
            <Grid item xs={12}>
              <Box
                component="img"
                src="https://www.xbzbrindes.com.br/img/banner/bannerdestaque_4_07087_568%20x%20250%20px.jpg"
                alt="Image 4"
                sx={{
                  width: '100%',
                  height: 'auto',
                  borderRadius: '16px',
                }}
              />
            </Grid>
          </Grid>
        </Grid>

        {/* Third Column */}
        <Grid item xs={12} md={4}>
          <Swiper spaceBetween={10} slidesPerView={1} loop={true}>
            <SwiperSlide>
              <Box
                component="img"
                src="https://www.xbzbrindes.com.br/img/banner/66e4396d32499bannersdestaqueslide18781_567%20x%20617%20px.jpg"
                alt="Image 5"
                sx={{
                  width: '100%',
                  height: 'auto',
                  borderRadius: '16px',
                }}
              />
            </SwiperSlide>
            <SwiperSlide>
              <Box
                component="img"
                src="https://www.xbzbrindes.com.br/img/banner/66e4396d132aabannersdestaqueslide__08106_567%20x%20617%20px_teste%202.jpg"
                alt="Image 5 Slide 2"
                sx={{
                  width: '100%',
                  height: 'auto',
                  borderRadius: '16px',
                }}
              />
            </SwiperSlide>
          </Swiper>

        </Grid>
        <Grid item xs={12}>
                            <CustomButton>
                                Baixar catálogo
                            </CustomButton>
                    </Grid>
      </Grid>
    </Container>
  );
}
