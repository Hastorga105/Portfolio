import { Typography, Card, Grid, Box } from '@mui/material'
import React from 'react'

import { SkillsList } from '../helpers/SkillsList'
import Skill from '../components/SkillItem'

export default function ThingsIKnow
() {
  return (
    <Box sx={{ flexGrow: 1 }} align="center" justify = "center" alignItems = "center">
        <Typography variant="h2" sx={{fontWeight: 'bold'}} >SKILLS</Typography>
        <Typography variant="h4">Some of the tools I have used throught my career are: </Typography>
        <Grid container spacing={3} xl={10} md={12} >

        {SkillsList.map((skill, idx) => { {/*Loops trhough the ProjectList Like a foreach project}*/}
                return (
                  <Grid item xs={6} sm={4}  md={4} lg={4}  xl={3} sx={{my:3}}>
                     <Skill  id={idx} name={skill.name} image={skill.image} /> 
                  </Grid>
                )
                   
              })}
        
      </Grid> 
        
        
        
    </Box>
  )
}
