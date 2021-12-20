import React from "react";
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import { useSelector } from 'react-redux';


function Header(props) {
  const state = useSelector((state) => state);
    // console.log("state" , state);
  return (
        <>
               <Box sx={{ flexGrow: 1 }}  >
      <AppBar position="static">
        <Toolbar variant="dense"s>
        
          <Typography variant="h6"  color="inherit" sx={{ flexGrow: 2 }}>
            OUR STORE
          </Typography>
          <Typography color="inherit">CART ({state.cart.count})</Typography>
        </Toolbar>
      </AppBar>
    </Box>
        </>
    )
}

export default Header;