import logo from './logo.svg';
import './App.css';
import Header from './components/Header';
import Body from './components/Body';
import Project from './components/Project';
import Grid from '@mui/material/Grid';
import Menu from './components/menuBar';
 
function App() {
  return (
    <> 
      <Grid 
          sx={{backgroundColor:'#eec0c6',backgroundImage:'linear-gradient(315deg, #eec0c6 0%, #7ee8fa 74%)'}}
          container spacing={1} direction='column'
      > 
          <Grid item xs={12} position="fixed" sx={{zIndex:1000}}>
                <Menu />
          </Grid>

          <Grid item xs={12} sx={{mt:8,mb:5}}>
                <Header/>
          </Grid> 

          <Grid item sm={0} lg={2}> </Grid> 
          <Grid item sm={12} lg={8}>
            <Body/>  
          </Grid> 
          <Grid item sm={0} lg={2}> </Grid>

          <Grid item sm={0} lg={2}> </Grid> 
          <Grid item sm={12} lg={8} id='PROJECT'>
            <Project />  
          </Grid> 
          <Grid item sm={0} lg={2}> </Grid>
          
 

      </Grid> 
    </>
  );
}

export default App;
