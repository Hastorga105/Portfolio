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

    <div style={{ backgroundImage:`url(${"https://i.pinimg.com/originals/c9/84/d6/c984d66728f6dadd828777975e48b3fd.gif"})`, height: '100%',  backgroundRepeat:"no-repeat", backgroundSize:"cover", boxShadow: "23 yellow" }}>
        <Grid container sx={{ p: 5 }} >{/*Row*/ }
            <Grid item container direction="column" lg={7} md={6} sm={12} >{/*Column 1*/}
                <Grid item container>{/*Row */}
                    <Grid item container   lg={3} >
        
                    </Grid>
                    <Grid item container  lg={9}>
                        <Card elevation={0}>
                            <CardContent align="left">
                                <Typography variant="h5" color="text.secondary" gutterBottom>
                                    Hi! My name is
                                </Typography>
                                <Typography variant="h1">
                                    Hector!
                                </Typography>
                                <Typography variant="h4">
                                    I love learning and creating new stuff
                                </Typography>
                            </CardContent>
                        </Card>
                    </Grid>
                </Grid>
            </Grid>

            <Grid item container direction="column" lg={5} md={6} sm={12}>{/**Column 2 */}
                <Box
                    component="img"
                    sx={{
                    width: {sm: "75%" },
                    
                    
                boxShadow: 23    
                }}
                    src={Me}
                    />
            </Grid>
        </Grid>
    </div>
  )
}
