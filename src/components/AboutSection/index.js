import { Container, Grid, Typography } from "@mui/material";

export default function AboutSection() {

    return (
        <>
            <Container fixed sx={{mt: '80px', mb: '80px'}}>

                <Grid container spacing={4}>

                    <Grid item xs={12}>
                        <Typography variant="h4" sx={{ color: '#A92529', textAlign: 'center' }}>Sobre a empresa</Typography>
                    </Grid>

                    <Grid item xs={12} md={5}>
                        <Typography sx={{maxWidth: '500px'}}>Há mais de [X] anos no mercado, nossa empresa se dedica a oferecer produtos personalizados de alta qualidade, atendendo às necessidades e expectativas de nossos clientes. Ao longo desse tempo, nos consolidamos como referência no setor, combinando criatividade e inovação para transformar ideias em brindes e produtos exclusivos. Nosso compromisso é garantir excelência em cada detalhe, desde o design até a entrega, proporcionando soluções personalizadas que ajudam a fortalecer marcas e criar momentos inesquecíveis.</Typography>
                    </Grid>

                    <Grid item xs={12} md={7}>

                    </Grid>

                </Grid>

            </Container>
        </>
    )
}