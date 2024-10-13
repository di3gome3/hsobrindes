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
                    autoplay={{ 
                        delay: 5000, // Tempo entre as transições (em milissegundos)
                        disableOnInteraction: false, // Continua o autoplay após interação do usuário
                    }}
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
                    
                    {/* Se desejar adicionar mais slides, basta duplicar o SwiperSlide abaixo e alterar a imagem */}
                    {/* 
                    <SwiperSlide>
                        <Box
                            component="img"
                            src="URL_DA_SEGUNDA_IMAGEM"
                            alt="Descrição da Segunda Imagem"
                            sx={{
                                width: '100%',
                                height: '100%',
                                objectFit: 'cover',
                            }}
                        />
                    </SwiperSlide>
                    */}
                </Swiper>

        </Box>
    );
}
