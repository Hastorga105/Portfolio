import { Typography, Link, Grid } from '@mui/material'
import React from 'react'
import experience1 from "../assets/MWK.jpg"
import Box from '@mui/material/Box';
import { Image } from 'mui-image'


export default function Experience() {
  return (
    <Grid xl={10} lg={12} > 
      <Typography variant="h2" sx={{fontWeight: 'bold'}} >WORK EXPERIENCE</Typography>
      <Grid container sx={{p: 5}} spacing={4}>
        <Grid item lg={3} md={4} sm={12}>
          <Image src={experience1}  />
      </Grid>

        <Grid item lg={9} md={8} sm={12} align="left" >

          <Typography variant="h4">
          In order to graduate as an IT technician, I had to do an internship, thus, I worked at 
          <Link href="https://www.milwaukeetool.com/es/Contact" underline="hover">{' Milwaukee Tool '}</Link>
          where I was tasked to create a web application that allowed its users to see the current state of the production lines. Although I didn't get to finish the project, I did manage to create a small prototype to showcase how the full application would work.
          </Typography>
          
          <Typography variant="h4">
            In my time at <Link href="https://www.milwaukeetool.com/es/Contact" underline="hover">{' Milwaukee'}</Link> I learned a lot about full stack development, and the general workflow inside a company. Overall It was quite a nice experience that allowed me to grow as a person.
          </Typography>
          <Typography variant="h4">
            You can learn more about my project <Link href="/projects/0" underline="hover">{'here'}</Link>
          </Typography>
        </Grid>  
      </Grid>
          
    </Grid>
  )
}
