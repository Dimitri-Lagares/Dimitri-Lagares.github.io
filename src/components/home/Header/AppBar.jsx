import * as React from 'react';
import { Stack, AppBar, Box, Toolbar, IconButton, Typography, Menu, Container, Button, MenuItem } from '@mui/material';
import { ExpandMore, Translate } from '@mui/icons-material';
import { Send, GitHub, WhatsApp, Email, LinkedIn } from '@mui/icons-material';
import MenuIcon from '@mui/icons-material/Menu';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import CustomizedSwitches from './CustomizedSwitches';
import TemporaryDrawer from './Prueba'


const ResponsiveAppBar = () => {
  const pages = ['¿Quien soy?', 'Tecnologias', 'Proyectos', 'Contactame'];
  const languages = [{"flag":"🇬🇧", "language": "Ingles"},
                     {"flag":"🇪🇸", "language": "Español"},
                     {"flag":"🇨🇳", "language": "Mandarin"}
                    ]
  const navigate = useNavigate();

  const [anchorElNav, setAnchorElNav] = useState(null);
  const [anchorElNav2, setAnchorElNav2] = useState(null);


  const handleOpenNavMenu = (event) => {setAnchorElNav(event.currentTarget);};
  const handleOpenNavMenu2 = (event) => {setAnchorElNav2(event.currentTarget);}  
  const handleCloseNavMenu = () => {setAnchorElNav(null);};
  const handleCloseNavMenu2 = () => {setAnchorElNav2(null);};

  const selected = (event) => {
    let itemSelected = event.currentTarget.innerText;
    let redirection = '#' + itemSelected;
    navigate(redirection);
  }

  const login = () =>{navigate("/login");}

  return (
      <AppBar color='transparent' position='sticky'>
      <Container maxWidth="xl">
        <Toolbar disableGutters>
        <Typography
            noWrap
            component="a"
            variant="h6"
            href="/"
            sx={{
              mr: 2,
              display: { xs: 'none', md: 'flex' },
              flexGrow: 1,
              fontFamily: 'cooper',
              color: 'inherit',
              textDecoration: 'none',
            }}
            >
            Dimitri Lagares
          </Typography>




          <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
            {pages.map((page) => (
              <Button
              key={page}
              onClick={selected}
              color={'inherit'}
              sx={{ my: 2, display: 'block' }}
              >
                {page}
              </Button>
            ))}
          <Box sx={{display:'flex', m:'auto', width: 'fit-content'}} >
            <Typography sx={{m:'auto'}} >|</Typography>
          <IconButton
            size="large"
            aria-label="account of current user"
            aria-controls="menu-appbar"
            aria-haspopup="true"
            onClick={handleOpenNavMenu2}
            color="inherit"
            >
            <Translate />
            <ExpandMore />
            </IconButton>
            <Menu
            id="menu-appbar"
            anchorEl={anchorElNav2}
            anchorOrigin={{
              vertical: 'bottom',
              horizontal: 'left',
            }}
            keepMounted
            transformOrigin={{
              vertical: 'top',
              horizontal: 'left',
            }}
            open={Boolean(anchorElNav2)}
            onClose={handleCloseNavMenu2}
            sx={{
              display: { xs: 'block' },
            }}
            >
            {
              languages.map((language, index)=>(
                <MenuItem key={index} onClick={selected}>
                <Typography fontFamily={'Noto Color Emoji'} textAlign="center" letterSpacing={10}>{language.flag}</Typography>
                <Typography textAlign="center">{language.language}</Typography>
              </MenuItem>
              ))
            }
          </Menu>
          <Typography sx={{m:'auto'}} >|</Typography>
            <CustomizedSwitches />
            <Typography sx={{m:'auto'}} >|</Typography>
          </Box>
          <Stack direction="row" spacing={1} m={'auto'}>
          <IconButton color='inherit' onClick={(e)=> window.open('https://github.com/Dimitri-Lagares/')}>
            <GitHub/>
          </IconButton>
    
          <IconButton color='inherit' onClick={(e)=> window.open('https://api.whatsapp.com/send?phone=573236642619')}>
            <WhatsApp/>
          </IconButton>
    
          <IconButton color='inherit' onClick={(e)=> window.open('https://www.linkedin.com/in/dimitri-lagares/')}>
            <LinkedIn/>
          </IconButton>
    
          <IconButton color='inherit' onClick={(e)=> window.open('mailto:lagares.dimitri@gmail.com')}>
            <Email/>
          </IconButton>
          </Stack>
          </Box>  

          <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
          {/* <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="inherit"
              >
              <MenuIcon />
            </IconButton> */}
              <TemporaryDrawer/>
              </Box>

            <Button variant="outlined" color='inherit' onClick={login}>Iniciar Sesion</Button>
              </Toolbar>
      </Container>
    </AppBar>
  );
}
export default ResponsiveAppBar





          //     {pages.map((page) => (
          //       <MenuItem key={page} onClick={selected}>
          //         <Typography color={'inherit'} textAlign="center">{page}</Typography>
          //       </MenuItem>
          //     ))} 
              
          //     <Box>
          //     <CustomizedSwitches />
          //     </Box>
            
          //     <IconButton
          //     size="large"
          //     aria-label="account of current user"
          //     aria-controls="menu-appbar"
          //     aria-haspopup="true"
          //     onClick={handleOpenNavMenu2}
          //     color="inherit"
          //     >
          //     <Translate />
          //     <ExpandMore />
          //     </IconButton>
          //     <Menu
          //     id="menu-appbar"
          //     anchorEl={anchorElNav2}
          //     anchorOrigin={{
          //       vertical: 'bottom',
          //       horizontal: 'left',
          //     }}
          //     keepMounted
          //     transformOrigin={{
          //       vertical: 'top',
          //       horizontal: 'left',
          //     }}
          //     open={Boolean(anchorElNav2)}
          //     onClose={handleCloseNavMenu2}
          //     sx={{
          //       display: { xs: 'block' },
          //     }}
          //     >

          //     {
          //       languages.map(language=>(
          //         <MenuItem key={language} onClick={selected}>
          //         <Typography fontFamily={'Noto Color Emoji'} textAlign="center" letterSpacing={10}>{language.flag}</Typography>
          //         <Typography textAlign="center">{language.language}</Typography>
          //       </MenuItem>
          //       ))
          //     }
          //     </Menu>

          //   </Menu>
          //   </Box>
          // <Typography
          //   variant="h5"
          //   noWrap
          //   component="a"
          //   href="/"
          //   sx={{
          //     mr: 2,
          //     display: { xs: 'flex', md: 'none' },
          //     flexGrow: 1,
          //     fontFamily: 'cooper',
          //     color: 'inherit',
          //     textDecoration: 'none',
          //   }}
          //   >
          //   Dimitri Lagares

          // </Typography>