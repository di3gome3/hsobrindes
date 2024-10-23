"use client";
import { useState, useEffect } from "react";
import { AppBar, Container, Toolbar, IconButton, Drawer, List, ListItem, ListItemText, Box } from "@mui/material";
import MenuIcon from '@mui/icons-material/Menu';
import Image from 'next/image'; // Importa o componente Image do Next.js

export default function Navbar() {
    const [scrollPosition, setScrollPosition] = useState(0);
    const [drawerOpen, setDrawerOpen] = useState(false);

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

    const toggleDrawer = (open) => (event) => {
        if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
            return;
        }
        setDrawerOpen(open);
    };

    const menuList = (
        <div
            role="presentation"
            onClick={toggleDrawer(false)}
            onKeyDown={toggleDrawer(false)}
            style={{ width: 250 }}
        >
            <List>
                {['Início', 'Sobre', 'Serviços', 'Contato'].map((text) => (
                    <ListItem button key={text}>
                        <ListItemText primary={text} />
                    </ListItem>
                ))}
            </List>
        </div>
    );

    return (
        <>
            <AppBar
                sx={{
                    height: '70px',
                    width: '100%',
                    bgcolor: '#A92529',
                    transition: 'background-color 0.3s ease',
                    boxShadow: 'none',
                }}
                position="fixed"
            >
                <Container fixed>
                    <Toolbar sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                        {/* Botão de Menu */}
                        <IconButton
                            edge="start"
                            color="inherit"
                            aria-label="menu"
                            onClick={toggleDrawer(true)}
                            sx={{ mr: 2, alignSelf: 'center' }}
                        >
                            <MenuIcon sx={{ fontSize: '30px' }} />
                        </IconButton>

                        {/* Espaço central para outros elementos (como título) */}
                        <Box sx={{ flexGrow: 1 }} />

                        {/* Logo ao lado direito usando o componente Image do Next.js */}
                        <Image
                            src="/pdfs/hsologo.svg" // Caminho relativo a partir da pasta public
                            alt="Logo"
                            width={150} // Defina a largura desejada
                            height={75} // Defina a altura desejada
                            style={{
                                cursor: 'pointer',
                                alignSelf: 'center',
                            }}
                        />
                    </Toolbar>
                </Container>
            </AppBar>

            {/* Drawer (Menu Lateral) */}
            <Drawer
                anchor="left"
                open={drawerOpen}
                onClose={toggleDrawer(false)}
            >
                {menuList}
            </Drawer>
        </>
    );
}
