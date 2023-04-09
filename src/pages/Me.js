import React from 'react'
import Grid from '@mui/material/Grid'; // Grid version 1
import Box from '@mui/material/Box';
import { Typography } from '@mui/material';
import Button from '@mui/material/Button';
import Me from '../assets/me.jpg';
import CV from '../assets/documents/CV.pdf'

export default function Home() {
    const espacio = " "
  return (

    <Grid style={{ backgroundImage:`url(${"https://i.pinimg.com/originals/c9/84/d6/c984d66728f6dadd828777975e48b3fd.gif"})`, height: '100%',  backgroundRepeat:"no-repeat", backgroundSize:"cover", }}>
        <Grid container sx={{ p: 5  }}>{/*Row*/ }
            <Grid item xl={6} lg={6} md={6} sm={12} xs={12} sx={{ py:{lg:10, md:5, sm:3, xs:1}, pl:{lg:0, md:0, sm:0, xs:5}  }} align="left" order={{md: 1, sm: 2, xs:2}}>{/**Column 2 */}
                <Typography sx={{pr: 2, fontWeight: "bold", fontSize: {lg: 60, md:50, sm:40, xs:40}}} style={{display: 'inline-block'}} >MY NAME IS </Typography>
                <Typography sx={{fontWeight: "bold", fontSize: {lg: 60, md:50, sm:40, xs:40}}} style={{display: 'inline-block', color: "#00CC65"}}>HECTOR</Typography>
                <Typography sx={{fontSize: {lg: 50, md:40, sm:30, xs:30}}} >And I'm a developer!</Typography>
                <Typography sx={{fontSize: {lg: 25, md:25, sm:20, xs:20}}} >I'm about to graduate as a software engineer and I'm really excited to start working and use my knowledge into something important.</Typography>
                
                <Button variant="glow contained"  sx={{my:3, mr:1}}>Contact Me</Button>
                
                <Button variant="outlined glow"  sx={{my:3, mr:1}} href = {CV} target = "_blank">CV</Button>
                <Button variant="outlined glow" disabled sx={{my:3, mr:1}}>About me (ToDo)</Button>
            </Grid>
            <Grid item xl={4} lg={4} md={6} sm={12} xs={12} sx={{ py:{lg:10, md:5, sm:3, xs:1} }} order={{md: 2, sm: 1, xs:1}}>{/**Column 2 */}
                <Box
                    component="img"
                    sx={{
                    width: {sm: "80%", xs: "80%", md:"80%", lg:"70%", xl:"60%" },
                boxShadow: 23 , borderRadius: '20px'   
                }}
                    src={Me}
                    />
            </Grid>
            <Grid item xl={1} lg={1} md={0}></Grid>
        </Grid>
    </Grid>
  )
}
