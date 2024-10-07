"use client"
import { useState, useEffect } from "react";
import { AppBar, Container, Toolbar } from "@mui/material";

export default function Navbar() {
    const [scrollPosition, setScrollPosition] = useState(0);

    const handleScroll = () => {
        const position = window.pageYOffset;
        setScrollPosition(position);
    };

    useEffect(() => {
        window.addEventListener("scroll", handleScroll);

        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);

    return (
        <>
            <AppBar
                sx={{
                    height: '60px',
                    width: '100%',
                    bgcolor: scrollPosition > 0 ? '#A92529' : 'transparent',
                    transition: 'background-color 0.3s ease',
                    boxShadow: 'none',
                }}
            >
                <Container fixed>
                    <Toolbar>
                        
                    </Toolbar>
                </Container>
            </AppBar>
        </>
    );
}
