import React from 'react';
import Grid from '@mui/material/Grid'; 
import Typography from '@mui/material/Typography';
import persionalData from '../data/PersionalData';
import HomeIcon from '@mui/icons-material/Home';
import PhoneIcon from '@mui/icons-material/Phone';
import EmailIcon from '@mui/icons-material/Email';
import { Card ,Box,Paper ,CardActionArea} from '@mui/material'; 
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import CardMedia from '@mui/material/CardMedia';
 
//function
function handelLink(url){
    window.open(url, '_blank').focus();
}

function Project(props) {

    const getProject=persionalData.project.map((data)=>(
        <>
            <Grid item sm={6} lg={3}>
                <Card sx={{ maxWidth: 345 }}>
                    <CardActionArea onClick={()=>handelLink(data.linkProject)}>
                    <CardMedia
                        component="img"
                        height="140"
                        image={data.image}
                        alt={data.projectName}
                    />
                    </CardActionArea>
                    <CardContent>
                        <Typography gutterBottom variant="h5" component="div" align="center">
                            {data.projectName}
                        </Typography>

                        <Typography sx={{mt:2}} variant="body2" color="text.secondary">
                            <Typography variant="h6">Description:</Typography>
                            {data.desc}
                        </Typography>

                        <Typography sx={{mt:2}} variant="body2" color="text.secondary">
                            <Typography variant="h6">Technology:</Typography>
                            <ul>
                                {data.technology.map((tech)=>(
                                    <li >
                                        <Typography align='left' sx={{mt:1}}   gutterBottom   variant='text'
                                        >
                                        {`${tech.caption}: ${tech.name}`}
                                        </Typography>
                                    </li>
                                ))}
                            </ul>
                        </Typography>
                        
                    </CardContent> 
                </Card>
            </Grid> 
        </>
    ))


    return (
        <> 
        <Paper sx={{  my: 5, mx: 'auto', p: 2 }} elevation={6}>
            <Grid   container spacing={2} justifyContent='space-between' alignItems='center'>
                <Grid item xs={12}>
                    <Typography sx={{mb:4, fontWeight:500 ,letterSpacing: 13}}  variant="h4" gutterBottom component="div" align='center'>PROJECT</Typography>
                </Grid>
                      {getProject}
            </Grid>
        </Paper>
        </>
    );
}

export default Project;