import React, { useState } from "react";
import AppBar from '@mui/material/AppBar';
import { Box, Button, Container, IconButton, Menu, MenuItem, Toolbar, Typography } from "@mui/material";
import MenuIcon from '@mui/icons-material/Menu';
import ThemeButton from "./ThemeButton";

type Page = {
  pageId : number;
  pageName : string
}


const PAGES : Page[] = [
  {pageId:1,pageName:'Characters'},
  {pageId:2,pageName:'Episodes'},
  {pageId:3,pageName:'Locations'}
];

export default function Navbar() {
  const [anchorElNav, setAnchorElNav] = React.useState<null | HTMLElement>(null);

  const handleOpenNavMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = (page? : number) => {
    setAnchorElNav(null);
    console.log(page)
  };


  return (
    <AppBar position="static" className="min-h-full grid justify-center">
      <Container maxWidth='xl'>
        <Toolbar disableGutters>
          <Typography
            variant="h6"
            noWrap
            component="a"
            href="#app-bar-with-responsive-menu"
            sx={{
              mr: 2,
              display: { xs: 'none', md: 'flex' },
              fontFamily: 'monospace',
              fontWeight: 400,
              letterSpacing: '.1rem',
              color: 'inherit',
              textDecoration: 'none',
            }}
          >
            RICK & MORTY API
          </Typography>
          <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="inherit"
            >
              <MenuIcon />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: 'bottom',
                horizontal: 'left',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'left',
              }}
              open={Boolean(anchorElNav)}
              onClose={()=>handleCloseNavMenu()}
              sx={{ display: { xs: 'block', md: 'none' } }}
            >
              {PAGES.map((page) => (
                <MenuItem key={page.pageId} onClick={()=>handleCloseNavMenu(page.pageId)}>
                  <Typography sx={{ textAlign: 'center' }}>{page.pageName}</Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box>
          <Typography
            variant="h6"
            noWrap
            component="a"
            href="#app-bar-with-responsive-menu"
            sx={{
              mr: 2,
              display: { xs: 'flex', md: 'none' },
              flexGrow: 1,
              fontFamily: 'monospace',
              fontWeight: 700,
              letterSpacing: '.1rem',
              color: 'inherit',
              textDecoration: 'none',
            }}
          >
            RICK AND MORTY API
          </Typography>
          <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' },marginLeft : '10rem', }}>
            {PAGES.map((page) => (
              <Button
                key={page.pageId}
                onClick={()=>handleCloseNavMenu(page.pageId)}
                sx={{ my: 2, color: 'white', display: 'block',mx:2 }}
              >
                {page.pageName}
              </Button>
            ))}
          </Box>
          <Box sx={{ flexGrow: 0 }}>
              <ThemeButton/>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  )
}
