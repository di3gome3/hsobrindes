'use client';
import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/autoplay';
import { Autoplay } from 'swiper/modules';
import { Box, Typography, useTheme, Container, Grid, useMediaQuery } from '@mui/material';

const companies = [
  { name: 'Newland', logo: 'https://d1yjjnpx0p53s8.cloudfront.net/styles/logo-thumbnail/s3/0025/0299/brand.gif?itok=Es6EBCBr' },
  { name: 'Nacional Veículos', logo: 'https://static.wixstatic.com/media/9ee565_07fb9a8a19a64868946f3b7a78e65409~mv2.png/v1/fill/w_166,h_148,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/Nacional%20Ve%C3%ADculos%20Logo%20fundo%20transp.png' },
  { name: 'Cafaz Seguros', logo: 'https://cafazcorretora.com.br/wp-content/uploads/2020/03/logo-corretora-png.png' },
  { name: 'Plano da Paz', logo: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTr-b4FB3iYKnxdv1HC1HFEpcOlWtsIP5Ihfw&s' },
  { name: 'Avine', logo: 'https://d273ql64kms4t6.cloudfront.net/local-experts/local-experts_7282020-12425-pm_logo-avine-01-png.png' },
  { name: 'Sebrae', logo: 'https://upload.wikimedia.org/wikipedia/commons/d/d9/Sebrae.svg' },
  { name: 'Unifametro', logo: 'https://www.anuariodoceara.com.br/wp-content/uploads/2023/08/UNIFAMETRO-2-300x211.png' },
  { name: 'Laredo', logo: 'https://media.licdn.com/dms/image/v2/D4D0BAQH8z3qXyyc2-Q/company-logo_200_200/company-logo_200_200/0/1706709764584/grupo_laredo_logo?e=2147483647&v=beta&t=nds3FM3xvUN71AqWr1Hi0m7aidp_H36fO2ZQEW9WLvE' },
  { name: 'Apodi', logo: 'https://www.aecipp.com.br/sites/default/files/associados/logo/apodi_logo_linear_green_dark_rgb_0.png' },
  { name: 'Iguatemi', logo: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRJdRt2on5PBJc9CVpNtJu99E-i2eJ2UM6kRA&s' },
  { name: 'Hotel Gran Marquise', logo: 'https://www.portaleventos.com.br/img3.php?id_imagem=66686' },
  { name: 'Carmel Hotel', logo: 'https://media.omnibees.com/BEImages/22902.jpg' },
];

function TrustedCompanies() {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

  return (
    <Box sx={{ textAlign: 'center', paddingY: theme.spacing(8), mb: 3}}>
      <Container fixed> 
        <Typography variant="h4" gutterBottom sx={{ mb: 5 }}>
          Empresas que confiam em nosso trabalho
        </Typography>
        <Swiper
          spaceBetween={30}
          slidesPerView={1}
          loop
          autoplay={{
            delay: 3000,
            disableOnInteraction: false,
          }}
          modules={[Autoplay]}
        >
          {isMobile
            ? [0, 3, 6, 9].map((startIndex) => ( // Exibe 3 logos por vez no mobile
                <SwiperSlide key={startIndex}>
                  <Grid container spacing={4}>
                    {companies.slice(startIndex, startIndex + 3).map((company) => (
                      <Grid item xs={12} sm={4} key={company.name}>
                        <Box
                          component="img"
                          src={company.logo}
                          alt={`${company.name} logo`}
                          sx={{
                            maxWidth: 140,
                            height: 'auto',
                            margin: '0 auto',
                            padding: theme.spacing(2),
                          }}
                        />
                      </Grid>
                    ))}
                  </Grid>
                </SwiperSlide>
              ))
            : [0, 6].map((startIndex) => ( // Exibe 6 logos por vez em outras larguras
                <SwiperSlide key={startIndex}>
                  <Grid container spacing={4}>
                    {companies.slice(startIndex, startIndex + 6).map((company) => (
                      <Grid item xs={4} key={company.name}>
                        <Box
                          component="img"
                          src={company.logo}
                          alt={`${company.name} logo`}
                          sx={{
                            maxWidth: 140,
                            height: 'auto',
                            margin: '0 auto',
                            padding: theme.spacing(2),
                          }}
                        />
                      </Grid>
                    ))}
                  </Grid>
                </SwiperSlide>
              ))}
        </Swiper>
      </Container>
    </Box>
  );
}

export default TrustedCompanies;
