import React from 'react'
import ProjectItem from '../components/ProjectItem'
import Me from '../assets/me.jpg'
import { ProjectList } from '../helpers/ProjectList'
import { Container, Typography, Grid } from '@mui/material'
import Box from '@mui/material/Box';

export default function Projects() {
  const fx = 12/ProjectList.length;
  console.log(fx)
  return (

    <Box sx={{ flexGrow: 1 }} align="center" justify = "center" alignItems = "center">
      
      <Typography variant="h2" sx={{fontWeight: 'bold'}} >MY PROJECTS</Typography>

      <Grid container spacing={3} lg={10} md={12} >

        {ProjectList.map((project, idx) => { {/*Loops trhough the ProjectList Like a foreach project}*/}
                return (
                  <Grid item xs={12} md={6} lg={3} sx={{my:3}}>
                     <ProjectItem  id={idx} name={project.name} image={project.image} /> 
                  </Grid>
                )
                   
              })}
        
      </Grid> 

    </Box>

      

   
      
      
  )
}
