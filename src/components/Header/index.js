'use client';
import { Box } from "@mui/material";
import 'swiper/css';
import 'swiper/css/pagination';
// Remova ou mantenha esta linha se ainda precisar dos estilos de navegação
// import 'swiper/css/navigation';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination } from 'swiper/modules'; // Remova 'Navigation' daqui

export default function Header() {
    return (
        <Box
            sx={{
                width: '100%',
                height: { md: '70vh', xs: '20vh' },
                mt: { md: '70px', xs: '70px' },
                bgcolor: '#A92529'
            }}
        >
            <Swiper
                spaceBetween={0}
                slidesPerView={1}
                modules={[Autoplay, Pagination]} // Remova 'Navigation' daqui
                autoplay={{ delay: 3000, disableOnInteraction: false }}
                loop={true}
                pagination={{ clickable: true }}
                // Remova ou comente a linha abaixo para desabilitar a navegação
                // navigation={true}
                style={{ height: '100%' }}
            >
                <SwiperSlide>
                    <Box
                        component="img"
                        src="https://xbzbrindes.com.br/img/categorias/tema/banner_outubro-rosa-banner_1920x625px.jpg"
                        alt="Banner Outubro Rosa"
                        sx={{
                            width: '100%',
                            height: '100%',
                            objectFit: 'cover',
                        }}
                    />
                </SwiperSlide>
                <SwiperSlide>
                    <Box
                        component="img"
                        src="https://www.xbzbrindes.com.br/img/banner/bannerprodutoamamos_30d14784B_1920x600px_2.jpg"
                        alt="Banner Produto Amamos"
                        sx={{
                            width: '100%',
                            height: '100%',
                            objectFit: 'cover',
                        }}
                    />
                </SwiperSlide>
                <SwiperSlide>
                    <Box
                        component="img"
                        src="https://www.xbzbrindes.com.br/img/categorias/tema/banner_nov%20blue%20dif.jpg"
                        alt="Banner Nov Blue Dif"
                        sx={{
                            width: '100%',
                            height: '100%',
                            objectFit: 'cover',
                        }}
                    />
                </SwiperSlide>
                <SwiperSlide>
                    <Box
                        component="img"
                        src="https://www.xbzbrindes.com.br/img/categorias/tema/banner_COZINHA-min.jpg"
                        alt="Banner Cozinha"
                        sx={{
                            width: '100%',
                            height: '100%',
                            objectFit: 'cover',
                        }}
                    />
                </SwiperSlide>
                <SwiperSlide>
                    <Box
                        component="img"
                        src="https://www.xbzbrindes.com.br/img/categorias/tema/banner_BANNER.jpg"
                        alt="Banner Principal"
                        sx={{
                            width: '100%',
                            height: '100%',
                            objectFit: 'cover',
                        }}
                    />
                </SwiperSlide>
            </Swiper>
        </Box>
    );
}
