"use client";
import { useState, useEffect } from "react";
import { AppBar, Container, Toolbar, IconButton, Drawer, List, ListItem, ListItemText, Box } from "@mui/material";
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
                    bgcolor: scrollPosition > 0 ? '#A92529' : 'transparent',
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

                        {/* Logo ao lado direito */}
                        <Box
                            component="img"
                            src="https://s3-alpha-sig.figma.com/img/ddc9/1627/350ebd76932e542cec9bd74833f234dd?Expires=1729468800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=eldRaR94DdfGVwbKUJUFhNcj5nHHl8hOISZrcTDm7bOBFNvhZsDZyqRAPi3EwsqOvqsX3Hok5ooyt7-3sCUHSWn10Wwvwob6saaQxfwQMiONUDeinopvnDha5woTMzVKQLWiR93EUBkuYq8hioWrINFToz5L6ujuP8BjdHnWOpU8f49wxphRP9auUwgwt6xmcDKEcyEMCPpQGqeZkBiYWuWCCxowi~oxK6vvOd-yh57Y~8UQUGB0-PC3D7RqKiwZpjg0zXRyYvVrkJzO68cVyaApGSn~TPlnmGIjuIS~cvyDsCda9CkeNVp~w9BNzegbndm1pwQiuBXi~W57tLa1eA__"
                            alt="Logo"
                            sx={{
                                height: 75, // Altura da logo ajustada para alinhamento com o menu
                                width: 'auto',
                                cursor: 'pointer',
                                alignSelf: 'center', // Centraliza verticalmente no toolbar
                                mb: 0, // Remoção do margin-bottom
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
