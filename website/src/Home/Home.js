import React from 'react'
import './Home.css'
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import Drawer from '@mui/material/Drawer';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import Banner from '../Banner/Banner'
import About from '../About/About';
import Service from '../Service/Service';



const Home = () => {
    const navItems = ['Home', 'Page', 'Blog','Shop','Contact', '|'];
  return (
    <div >Home
      {/* <div className='container'> */}
    <Box sx={{ display: 'flex'}}>
      {/* <CssBaseline /> */}
      <AppBar component="nav" sx={{backgroundColor:'white'}} >
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            sx={{ mr: 2,  display: { sm: 'none' } }}>      
            <MenuIcon />
          </IconButton>
          <Typography
            variant="h6"
            component="div"
            sx={{ flexGrow: 1, display: { xs: 'none', sm: 'block' , color :"black"} }}
          >
            <img src='https://fuodborne-react-next-js.vercel.app/assets/images/logo.png'></img>
          </Typography>
          <Box sx={{ display: { xs: 'none', sm: 'block' } }}>
            {navItems.map((item) => (
              <Button key={item} sx={{ color: '#000' }}>
                {item}
              </Button>
            ))}
          </Box>
        </Toolbar>
      </AppBar>
      <Box component="nav">
        <Drawer
          variant="temporary"
          ModalProps={{
            keepMounted: true, 
          }}
          sx={{
            display: { xs: 'block', sm: 'none' },
            '& .MuiDrawer-paper': { boxSizing: 'border-box'},
          }}
        >
        </Drawer>
      </Box>
      <Box component="main" sx={{ p:3}}>
        <Toolbar />
        <Typography>
          
        </Typography>
      </Box>
    </Box>
    <Banner/>
    <About/>
    <Service/>
    </div>
    // </div>
  )
}

export default Home