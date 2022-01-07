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
            <Img alt="Avatar" src="https://i.ibb.co/LJtrvVc/avatar.jpg"/> 
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
              <Typography align='justify' sx={{fontStyle:'italic'}} variant='inherit' gutterBottom>
              About me: My name is DAT and I want to become a web developer, now I am working as a c# developer on both of front-end & Back-end sides. After 6 months researched and learning, I think I have enough knowledge to change the environment and reach a higher level with website development.
                  
              </Typography> 
              <Typography align='justify' sx={{fontStyle:'italic'}} variant='inherit' gutterBottom>
                   For me language is just a tool, people are most important. so if have some language or problem, maybe I am not the first person to find that but I always give you an answer!
              </Typography> 

               
            </Grid>
            
          </Grid> 
        </Grid>
      </Grid>
    </Paper>
    );
}

export default Header;