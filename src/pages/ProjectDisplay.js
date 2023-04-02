import Typography from '@mui/material/Typography';
import {Box, Button, Paper, Card} from '@mui/material';
import { Image } from 'mui-image'
import React from 'react'
import { useParams } from 'react-router-dom'
import { ProjectList } from '../helpers/ProjectList';
import GitHubIcon from '@mui/icons-material/GitHub';
import Grid from '@mui/material/Grid'
import blank from '../assets/Blank.png'

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
    <Grid sx={{my:5}} lg={12}>
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
        
        <Typography variant="h3">Overview</Typography>
        <Typography >{project.overview}</Typography>
        
        <Typography variant='h6'>{project.skills}</Typography>
        <GitHubIcon/>
    </Grid>
  )
}
