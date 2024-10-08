"use client"
import { useState, useEffect } from "react";
import { AppBar, Container, Toolbar, IconButton, Drawer, List, ListItem, ListItemText } from "@mui/material";
import MenuIcon from '@mui/icons-material/Menu';

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
                {['Início', 'Sobre', 'Serviços', 'Contato'].map((text, index) => (
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
                    height: '60px',
                    width: '100%',
                    bgcolor: scrollPosition > 0 ? '#A92529' : 'transparent',
                    transition: 'background-color 0.3s ease',
                    boxShadow: 'none',
                }}
                position="fixed"
            >
                <Container fixed>
                    <Toolbar>
                        {/* Botão de Menu */}
                        <IconButton
                            edge="start"
                            color="inherit"
                            aria-label="menu"
                            onClick={toggleDrawer(true)}
                            sx={{ mr: 2 }}
                        >
                            <MenuIcon />
                        </IconButton>

                        {/* Você pode adicionar o título ou logo aqui */}
                        {/* <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                            Meu Site
                        </Typography> */}
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
