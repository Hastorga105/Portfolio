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
      style={{ backgroundImage:`linear-gradient(to bottom, rgba(0, 0, 0, 0), rgba(0, 0, 0, 0.6)), url(${project.image})`,  backgroundRepeat:"no-repeat", backgroundSize:"cover",  textTransform: "uppercase"}}    
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
            <Button variant="outlined" href={project.link} target="_blank" sx={{fontWeight: "bold"}} disableElevation >
            See it on Github
            </Button>
            
          <Image src={blank} height={"25%"}/>
        </Grid>
        <Grid lg={6} direction="column">
        </Grid>
        </Grid>
      </Grid>
      <Grid container xl={10} lg={12} sx={{p:5}}>
        <Grid>
          <Typography variant="h3">Overview</Typography>
        <Typography variant='h5' >{project.overview}</Typography>
        <Divider sx={{my: 5}}></Divider>
        <Typography variant="h3">Skills used:</Typography>
        <Typography variant='h5'>{project.skills}</Typography>
        </Grid>
        
      </Grid>
        
        
    </Grid>
  )
}
