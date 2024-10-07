import { Grid, Typography } from "@mui/material";
import CustomButton from "../Button";

export default function CreateSection() {
    return (
        <>
            <Grid 
                container 
                spacing={4} 
                direction="column" 
                justifyContent="center" 
                alignItems="center"
                sx={{mb: '80px'}}
            >
                <Grid item xs={12}>
                    <Typography variant="h4" sx={{ color: '#A92529', textAlign: 'center' }}>
                        Sobre a empresa
                    </Typography>
                </Grid>
                <Grid item xs={12}>
                    <Typography sx={{ textAlign: 'center', maxWidth: '800px' }}>
                        Com a cor vibrante da paixão e o toque criativo, nossos serviços de personalização transformam ideias em brindes únicos que marcam momentos e fortalecem marcas.
                    </Typography>
                </Grid>
                <Grid item xs={12}>
                    <CustomButton>
                        Entre em contato
                    </CustomButton>
                </Grid>
            </Grid>
        </>
    );
}
