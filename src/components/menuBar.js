import MenuIcon from '@mui/icons-material/Menu';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Container from '@mui/material/Container';
import IconButton from '@mui/material/IconButton';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import React, { useEffect, useRef, useState } from 'react';

const pages = ['CONTACT', 'SKILLS', 'EDUCATION','EXPERIENCE','PROJECT'];
const settings = ['CONTACT', 'SKILLS', 'EDUCATION', 'EXPERIENCE','PROJECT'];


 

const MenuBar = () => {
  let experience = useRef() 
  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const [anchorElUser, setAnchorElUser] = React.useState(null); 
  const [offset, setOffset] = useState(0);
  const [scrollVal, setScrollVal] = useState('menu');

  useEffect(() => { 
    experience.current=document.getElementById(scrollVal) 
    experience.current.scrollIntoView({behavior: "smooth" });
  }, [scrollVal]);

  function handelScrool(e){ 
    const targetScroll=e 
    setScrollVal(targetScroll)
 
  }

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  return (
    <AppBar sx={{with:"100%"}} id='menu'>
      <Container maxWidth="xl">
        <Toolbar disableGutters>  

          <Box   sx={{ justifyContent: 'flex-start', display: { xs: 'flex', md: 'none' } }}>
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
              onClose={handleCloseNavMenu}
              
              sx={{ 
                display: { xs: 'block', md: 'none' },
              }}
            >
              {pages.map((page) => (
                <MenuItem key={page} onClick={()=>{handelScrool(page)
                 handleCloseNavMenu()}}>
                  <Typography textAlign="center">{page}</Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box>  
         
          <Box sx={{ justifyContent:'center',flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
            {pages.map((page) => (
              <Button
                key={page}
                onClick={()=>{handelScrool(page)}}
                value={page}
                sx={{ my: 2, color: 'white', display: 'block' }}
              >
                {page}
              </Button>
            ))}
          </Box>

          
        </Toolbar>
      </Container>
    </AppBar>
  );
};
export default MenuBar;