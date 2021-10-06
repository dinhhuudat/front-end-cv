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
       
          <ButtonBase sx={{ width: 128, height: 128 }}>
            <Img alt="Avatar" src="https://scontent.fsgn2-5.fna.fbcdn.net/v/t1.6435-1/p200x200/123393039_2214550022011525_7840320266283577514_n.jpg?_nc_cat=102&ccb=1-5&_nc_sid=7206a8&_nc_ohc=SlffwpnwbI4AX_JXozf&_nc_ht=scontent.fsgn2-5.fna&oh=d2d43f3612f678612e4d64ee4a3815c3&oe=617BB9FD" />
          </ButtonBase>

        </Grid>

        <Grid item xs={8} sm container>
          <Grid item xs container direction="column" spacing={2}>

            <Grid item xs>
              <Typography gutterBottom variant="h4" component="div">
               DINH HUU DAT
              </Typography>
              <Typography   gutterBottom>
                Front-end Developer
              </Typography> 
            </Grid>

            <Grid item> 
              <Typography align='left' sx={{fontStyle:'italic'}} variant='inherit' gutterBottom>
                Hello, my name is Dat and I want to become a Front-end Developer
              </Typography> 

               
            </Grid>
            
          </Grid> 
        </Grid>
      </Grid>
    </Paper>
    );
}

export default Header;