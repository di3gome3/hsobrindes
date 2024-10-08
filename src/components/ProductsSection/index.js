
import { Grid, Box, Container, Typography } from "@mui/material";
import CustomButton from "../Button";

export default function ProductsSection() {
    return (
        <>
            <Container fixed sx={{ mb: '80px' }}>
                <Grid container spacing={2} justifyContent="center">
                    {/* Primeira coluna (Imagem maior com Swiper) */}

                    <Grid xs={12}>
                        <Typography sx={{fontSize: '30px', textAlign: 'center', mb: '30px'}}>
                            Conheça nossos produtos
                        </Typography>
                    </Grid>
                    <Grid item xs={12} sm={6} md={4}>
                                <Box
                                    component="img"
                                    src="https://www.xbzbrindes.com.br/img/banner/66fc0d6a2492dbannersdestaqueslidelarge-07077_567%20x%20617%20px.jpg"
                                    alt="Image 1"
                                    sx={{
                                        width: '100%',
                                        height: '404px',
                                        borderRadius: '16px',
                                    }}
                                />
                    </Grid>

                    {/* Segunda coluna (Imagens menores empilhadas) */}
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

                    {/* Terceira coluna (Imagem maior com Swiper) */}
                    <Grid item xs={12} md={4}>
                                <Box
                                    component="img"
                                    src="https://www.xbzbrindes.com.br/img/banner/66fc0d6a0bc7abannersdestaqueslidelarge-08041_567%20x%20617%20px.jpg"
                                    alt="Image 5"
                                    sx={{
                                        width: '100%',
                                        height: '404px',
                                        borderRadius: '16px',
                                    }}
                                />
                    </Grid>

                    <Grid item xs={12}>
                            <CustomButton>
                                Baixar catálogo
                            </CustomButton>
                    </Grid>
                </Grid>
            </Container>
        </>
    );
}
