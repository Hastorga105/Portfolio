import { Typography, Card, Grid, Box } from '@mui/material'
import {React, useEffect} from 'react'
import Aos from "aos"
import "aos/dist/aos.css"

import { SkillsList } from '../helpers/SkillsList'
import Skill from '../components/SkillItem'

export default function ThingsIKnow
() {
  useEffect(() => {
    Aos.init({duration:1000});
}, [])
  return (
    <Box sx={{ flexGrow: 1, p:{xs:3, xl:0, lg:3} }} align="center" justify = "center" alignItems = "center">
        <Typography variant="h2" sx={{fontWeight: 'bold'}} data-aos="fade-up"  >SKILLS</Typography>
        <Typography variant="h4" data-aos="fade-up" data-aos-delay={100} >Some of the tools I have used throught my career are: </Typography>
        <Grid container spacing={3} xl={10} md={12} >

        {SkillsList.map((skill, idx) => { {/*Loops trhough the ProjectList Like a foreach project}*/}
                return (
                  <Grid item xs={4} sm={4}  md={4} lg={4}  xl={3} sx={{mt:4}} data-aos="fade-up" data-aos-delay={idx*200}>
                     <Skill  id={idx} name={skill.name} image={skill.image} /> 
                  </Grid>
                )
                   
              })}
        
      </Grid> 
        
        
        
    </Box>
  )
}
