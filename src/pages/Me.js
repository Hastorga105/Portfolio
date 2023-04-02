import React from 'react'
import Grid from '@mui/material/Grid'; // Grid version 1
import Grid2 from '@mui/material/Unstable_Grid2'; // Grid version 2
import { Container } from '@mui/system';
import { Card, CardContent, CardMedia, Typography } from '@mui/material';
import Box from '@mui/material/Box';
import { spacing } from '@mui/system';
import CardActions from '@mui/material/CardActions';
import Button from '@mui/material/Button';
import Me from '../assets/me.jpg'

export default function Home() {
  return (

    <div style={{ backgroundImage:`url(${"https://i.pinimg.com/originals/c9/84/d6/c984d66728f6dadd828777975e48b3fd.gif"})`, height: '100%',  backgroundRepeat:"no-repeat", backgroundSize:"cover", }}>
        <Grid container sx={{ p: 5 }}>{/*Row*/ }
            <Grid item lg={5} md={12} sm={12} xs={12} >{/**Column 2 */}
                <Typography variant='h2' sx={{fontWeight: "bold"}}>MY NAME IS HECTOR</Typography>
            </Grid>
            <Grid item lg={7} md={12} sm={12} xs={12}>{/**Column 2 */}
                <Box
                    component="img"
                    sx={{
                    width: {sm: "100%", xs: "100%", md:"50%", lg:"40%", xl:"40%" },
                boxShadow: 23    
                }}
                    src={Me}
                    />
            </Grid>
        </Grid>
    </div>
  )
}
