import { Button } from "@mui/material";

export default function CustomButton({ children }) { 
    return (
        <Button
            sx={{
                borderRadius: '10px',
                bgcolor: '#A92529',
                textTransform: 'none',
                color: '#FFFFFF',
                width: '180px',
                height: '52px',
                fontSize: '16px'
            }}
        >
            {children} 
        </Button>
    );
}