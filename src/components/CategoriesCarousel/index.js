'use client';
import React, { useRef, useEffect } from 'react';
import { Box, Typography, Button, Container } from '@mui/material';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation'; // Import navigation styles
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import CustomButton from '../Button';
import Link from 'next/link'

const categories = [
  { name: 'Canecas', image: 'https://www.xbzbrindes.com.br/timthumb/timthumb.php?src=/img/produtos/3/Caneca-Magica-de-Ceramica-350ml-VERMELHO-13598-1637768542.jpg&w=652' },
  { name: 'Copos', image: 'https://www.xbzbrindes.com.br/timthumb/timthumb.php?src=/img/produtos/3/Copo-de-Vidro-500ml-AZUL-19394-1718798702.jpg&w=652' },
  { name: 'Garrafas', image: 'https://www.xbzbrindes.com.br/timthumb/timthumb.php?src=/img/produtos/3/Garrafa-Termica-1-Litro-com-Infusor-20057-1724351824.jpg&w=652' },
  { name: 'Blocos e Cadernetas', image: 'https://www.xbzbrindes.com.br/timthumb/timthumb.php?src=/img/produtos/3/Bloco-de-Anotacao-com-Autoadesivos-e-Caneta-21009-1728333169.jpg&w=652' },
  { name: 'Chaveiro', image: 'https://www.xbzbrindes.com.br/img/produtos/3/Chaveiro-Metal-20005d1-1723556331.jpg' },
  { name: 'Tecnologia', image: 'https://www.xbzbrindes.com.br/img/produtos/3/Mouse-Pad-com-Suporte-Celular-e-Canetas-17812-1701350367.jpg' },
  { name: 'Canetas', image: 'https://www.xbzbrindes.com.br/img/produtos/3/Conjunto-Caneta-e-Lapiseira-Metal-VINHO-18817-1712240409.jpg' },
  { name: 'Escritório', image: 'https://www.xbzbrindes.com.br/timthumb/timthumb.php?src=/img/produtos/3/Kit-Escritorio-4-em-1-8070-1533664500.jpg&w=652' },
  { name: 'Uso Pessoal', image: 'https://www.xbzbrindes.com.br/img/produtos/3/Kit-Pincel-8-pecas-21041d1-1728932098.jpg' },
  { name: 'Bolsas e Sacolas', image: 'https://www.xbzbrindes.com.br/img/produtos/3/Sacola-rPET-Termica-10-Litros-17574d2-1699966303.jpg' },
  { name: 'Térmicas e Necessaire', image: 'https://www.xbzbrindes.com.br/img/produtos/3/Necessaire-PU-20076d1-1724878166.jpg' },
  { name: 'Kit Churrasco e Queijo', image: 'https://www.xbzbrindes.com.br/img/produtos/3/Kit-Queijo-2-Pecas-20833-1727877921.jpg' },
];



const CategoryCarousel = () => {
  const whatsappNumber = '85985536208'; // Substitua pelo número real

  const prevRef = useRef(null);
  const nextRef = useRef(null);
  const pdfUrl = '/pdfs/catalogo.pdf'; // Caminho correto para acessar o PDF


  useEffect(() => {
    if (prevRef.current && nextRef.current) {
      prevRef.current.style.display = 'block';
      nextRef.current.style.display = 'block';
    }
  }, []);

  const handleDownloadPDF = () => {
    const link = document.createElement('a');
    link.href = pdfUrl;
    link.download = 'catalogo.pdf'; // Nome do arquivo a ser baixado
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link); // Remove o link após o clique
  };

  const getWhatsAppLink = (productName) => {
    const message = `Olá, vim pelo site e estou interessado nos produtos da categoria de ${productName}.`;
    return `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`;
  };

  return (
    <Container maxWidth="lg">
      <Box sx={{ textAlign: 'center', padding: '40px 0', background: '#fff', position: 'relative' }}>
        <Typography variant="h4" color="primary" sx={{ mb: 4, color: '#A92529' }}>
          Categorias
        </Typography>
        <Swiper
          modules={[Navigation, Autoplay]}
          spaceBetween={20}
          slidesPerView={4}
          autoplay={{ delay: 3000, disableOnInteraction: false }} // Configuração do autoplay (3 segundos)
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
    <Link
      href={getWhatsAppLink(category.name)} // Chama a função passando o nome da categoria
      passHref
      legacyBehavior // Garantindo que o link funcione bem como um wrapper sem breaking changes
    >
      <a target="_blank" style={{ textDecoration: 'none', color: 'inherit' }}>
        <Box
          sx={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
          <Box
            sx={{
              width: 150,
              height: 150,
              borderRadius: '50%',
              overflow: 'hidden',
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
      </a>
    </Link>
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
        <CustomButton onClick={handleDownloadPDF}>
                    Ver Catálogo
        </CustomButton>
      </Box>
    </Container>
  );
};

export default CategoryCarousel;
