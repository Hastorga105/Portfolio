import React from 'react'
import Grid from '@mui/material/Grid'; // Grid version 1
import Box from '@mui/material/Box';
import { Typography, Divider } from '@mui/material';
import Button from '@mui/material/Button';
import Me from '../assets/me.jpg';
import CV from '../assets/documents/CV.pdf'
import Banner from '../assets/Banner.png'
import Laptop from '../assets/laptop.svg'

export default function Home() {
    const espacio = " "
  return (

    <Grid style={{ backgroundImage:`linear-gradient(to bottom,  rgba(16, 14, 37, 0.0), rgba(16, 14, 37, 1)), url(${Banner})`, height: '100%',  backgroundRepeat:"no-repeat", backgroundSize:"cover", }}>
        <Grid container sx={{ p:3 }}>{/*Row*/ }
            <Grid item xl={6} lg={6} md={6} sm={12} xs={12} sx={{ py:{lg:10, md:5, sm:3, xs:1},  }} align="left" order={{md: 1, sm: 2, xs:2}}>{/**Column 2 */}
                <Typography sx={{pr: 2, fontWeight: "bold", fontSize: {lg: 60, md:50, sm:40, xs:40}}} style={{display: 'inline-block'}} >MY NAME IS </Typography>
                <Typography variant="glow" sx={{fontWeight: "bold", fontSize: {lg: 60, md:50, sm:40, xs:40}}} style={{display: 'inline-block', color: "#00CC65"}} >HECTOR</Typography>
                <Divider variant="cool" ></Divider>
                <Typography sx={{fontSize: {lg: 25, md:25, sm:20, xs:20}, pt:2}} >I'm a junior developer obssessed with creating professional looking stuff. 
                I love learning and solving problems, right now I'm learning front end development in React by myself. 
                </Typography>
                <Typography sx={{fontSize: {lg: 25, md:25, sm:20, xs:20}}}>I'm excited to start working and be able to learn more things!
                </Typography >
                <Button variant="glow contained"  sx={{mt:3, mr:1}} href = {CV} target = "_blank">Download CV</Button>
            </Grid>
            <Grid item xl={4} lg={4} md={6} sm={12} xs={12} sx={{ py:{lg:10, md:5, sm:3, xs:1} }} order={{md: 2, sm: 1, xs:1}}>{/**Column 2 */}
                
                {/*<Box
                    component="img"
                    sx={{
                    width: {sm: "80%", xs: "80%", md:"80%", lg:"70%", xl:"60%" },
                boxShadow: 23 , borderRadius: '20px'   
                }}
                    src={Me}
            />*/}
            </Grid>
            <Grid item xl={1} lg={1} md={0}></Grid>
        </Grid>
    </Grid>
  )
}
