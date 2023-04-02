import Typography from '@mui/material/Typography';
import { useNavigate } from "react-router-dom";
import CardMedia from '@mui/material/CardMedia';
import Card from '@mui/material/Card';
import { Box, Grid, Paper } from '@mui/material';
import React from 'react';

export default function ProjectItem({image, name, id}) {
  const navigate = useNavigate();
  const elsx = {
    boxShadow: 0,
    "&:hover": {
      boxShadow: "0px 0px 100px 1px #E5446D",
      cursor: 'pointer'
    }
  }

  return (
    <Box sx={{backgroundColor: 'primary',}}>
      <Grid container
      direction="column"
      align="left"
      style={{ display: "flex", justifyContent: "flex-end", }}
      sx={{  }}
      >
        <Card onClick={() => {
      navigate("/projects/" + id)
      }} align = "center"
      style={{height: '18vw' }}
      sx={elsx}
      >
        <Grid 
          item
          direction="column"
          align="left" 
          sx= {{py: 3, px: 1}}
          style={{ backgroundImage:`linear-gradient(to bottom, rgba(0, 0, 0, 0), rgba(0, 0, 0, 0.5)), url(${image})`, height: '100%',  backgroundRepeat:"no-repeat", backgroundSize:"cover",  display: "flex", justifyContent: "flex-end", textTransform: "uppercase"}}
          >
          <Typography variant="h5" sx={{ p:2, fontWeight: 'bold'}} color="common.white" >{name}</Typography> 
        </Grid>
        
        {/*<img src={image} style={{ width: "100%"}}></img>*/}
        
       
      </Card>
      </Grid>
    </Box>
      
      
       
  )
}
