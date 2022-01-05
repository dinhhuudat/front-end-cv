import React from 'react';
import { styled } from '@mui/material/styles';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import ButtonBase from '@mui/material/ButtonBase'; 

const Img = styled('img')({
    margin: 'auto',
    display: 'block',
    maxWidth: '100%',
    maxHeight: '100%',
    borderRadius:'50%', 
  });
 

function Header(props) {
    return (
    <Paper sx={{p:4, height: '100%', margin: 'auto'  ,backgroundColor:'rgba(0,0,0,0.8)'    ,color: 'white' }}>

      <Grid container 
            spacing={2}  
            alignItems="center">

        <Grid 
            item
            xs={4} 
            sx={{display:'flex',justifyContent: 'center'}}
        >
       
          <ButtonBase sx={{ width: 128, height: 128 }} >
            <Img alt="Avatar" src="https://i.ibb.co/7t20CMc/avartar.jpg"/> 
          </ButtonBase>

        </Grid>

        <Grid item xs={8} sm container>
          <Grid item xs container direction="column" spacing={2}>

            <Grid item xs>
              <Typography gutterBottom variant="h4" component="div">
               DINH HUU DAT
              </Typography>
              <Typography   gutterBottom>
                Web Developer
              </Typography> 
            </Grid>

            <Grid item> 
              <Typography align='left' sx={{fontStyle:'italic'}} variant='inherit' gutterBottom>
              Hello, my name is Dat and I want to become a web Developer. I always challenge myself to become a better version
              </Typography> 

               
            </Grid>
            
          </Grid> 
        </Grid>
      </Grid>
    </Paper>
    );
}

export default Header;