'use client';
import { Box, Container } from "@mui/material";
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination, Navigation } from 'swiper/modules'; // Importa os módulos necessários

export default function Header() {
    return (
        <Box sx={{ width: '100%', height: {md: '70vh', xs: '20vh'}, mt: {md: 0, xs: '70px'}, bgcolor: '#A92529' }}>
            <Swiper
                spaceBetween={0}
                slidesPerView={1}
                modules={[Autoplay, Pagination, Navigation]} // Adiciona os módulos
                autoplay={{ delay: 3000, disableOnInteraction: false }} // Configuração do autoplay (3 segundos)
                loop={true} // Faz o slider em loop
                pagination={{ clickable: true }} // Adiciona paginação clicável
                navigation={true} // Adiciona botões de navegação
                style={{ height: '100%' }} // Garante que o Swiper ocupe 100% da altura do Container
            >
                <SwiperSlide>
                    <Box
                        component="img"
                        src="https://xbzbrindes.com.br/img/categorias/tema/banner_outubro-rosa-banner_1920x625px.jpg"
                        alt="Banner Outubro Rosa"
                        sx={{
                            width: '100%',
                            height: '100%',
                            objectFit: 'cover', // Faz a imagem cobrir todo o espaço do slide
                        }}
                    />
                </SwiperSlide>
                <SwiperSlide>
                    <Box
                        component="img"
                        src="https://www.xbzbrindes.com.br/img/banner/bannerprodutoamamos_30d14784B_1920x600px_2.jpg"
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
                        src="https://www.xbzbrindes.com.br/img/categorias/tema/banner_nov%20blue%20dif.jpg"
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
                        src="https://www.xbzbrindes.com.br/img/categorias/tema/banner_COZINHA-min.jpg"
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
                        src="https://www.xbzbrindes.com.br/img/categorias/tema/banner_BANNER.jpg"
                        alt="Banner Outubro Rosa"
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
