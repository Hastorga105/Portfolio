import Typography from '@mui/material/Typography';
import {Box, Button, Paper, Card} from '@mui/material';
import { Image } from 'mui-image'
import React from 'react'
import { useParams } from 'react-router-dom'
import { ProjectList } from '../helpers/ProjectList';
import Grid from '@mui/material/Grid'
import blank from '../assets/Blank.png'
import Divider from '@mui/material/Divider';


export default function ProjectDisplay() {
  const { id } = useParams();
  const project = ProjectList[id];
  const data = project.info;
  console.log("data es " + data[0].title)
  const glow = {
    boxShadow: 0,
    "&:hover": {
      boxShadow: "0px 0px 100px 1px #E5446D !important",
    }
  }


  return (
    <Grid continer sx={{my:5}} lg={12} align = "center" >
      <Grid 
      direction="row"
      align="center" 
      style={{ backgroundImage:`linear-gradient(to bottom, rgba(0, 0, 0, 0),  rgba(0, 20, 40, 0.8)), url(${project.image})`,  backgroundRepeat:"no-repeat", backgroundSize:"cover",  textTransform: "uppercase"}}    
      height={"50%"}
      >
        <Grid container>
          <Grid  lg={6} direction="column">
          <Image src={blank} height={"25%"}/>
          <Typography variant="h1" sx={{ p:2,  typography: { sm:"h2", xs:"h2", md:"h1"}, fontWeight: { xs: 'bold', sm:"bold", md:"bold", lg:"bold", xl:"bold"}}}
          color="common.white" 
          >
            {project.name}
          </Typography> 
            <Button variant="glow" href={project.link} target="_blank" sx={{fontWeight: "bold"}} disableElevation >
            See it on Github
            </Button>
            
          <Image src={blank} height={"25%"}/>
        </Grid>
        <Grid lg={6} direction="column">
        </Grid>
        </Grid>
      </Grid>
      <Grid container xl={6} lg={12} sx={{p:5}}>
        <Grid>
          <Typography sx={{fontWeight: "bold", fontSize: {md:100,  xs:50},  textTransform: "uppercase" }}>Overview</Typography>
          <Divider sx={{mb: 5}}></Divider>
        <Typography sx={{fontSize: {md:30, sm: 20, xs:15}}} >{project.overview}</Typography>
        <Divider sx={{my: 5}}></Divider>
        <Typography variant="h3">Skills used:</Typography>
        <Typography variant='h5'>{project.skills}</Typography>
        </Grid>
      </Grid>
          {data.map((datax, idx) => {{
            return (
              <>
              <Divider variant='big green'></Divider>
              <Grid 
              direction="row"
              align="center" 
              sx={{py:5}}
              style={{ backgroundImage:`linear-gradient(to bottom,  rgba(16, 14, 37, 0.0), rgba(16, 14, 37, 1)), url(${datax.img})`,  backgroundRepeat:"no-repeat", backgroundSize:"cover", backgroundPosition:"center top"}}    
              >
                <Grid container align="left" sx={{px:3}}>
                  <Grid  lg={6} direction="column">
                    <Box sx={{height: 500}}/>
                    <Typography variant="h1" sx={{ textTransform: "uppercase", typography: { sm:"h2", xs:"h2", md:"h1"}, fontWeight: { xs: 'bold', sm:"bold", md:"bold", lg:"bold", xl:"bold"}}}
                    color="common.white" 
                    >
                    {datax.title}
                    </Typography> 
                    <Typography>{datax.desc}
                    </Typography>
                    <Box sx={{height: 200}}/>
                  </Grid>
                  <Grid lg={6} direction="column">
                  </Grid>
                 </Grid>
                </Grid>
              </>
             
            )
          }}
          )}
         
          
          
      
        
        
    </Grid>
  )
}
