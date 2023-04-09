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
    <Box sx={{px:{xs:3, md:1, lg:0}}}>
      <Grid 
      direction="column"
      align="left"
      style={{ display: "flex", justifyContent: "flex-end", }}
      sx={elsx}
      >
        <Card onClick={() => {
      navigate("/projects/" + id)
      }} align = "center"
      
      sx={{height:{xs: "90vw",sm: "40vw", md:"30vw", lg:"18vw", xl:"18vw"}, borderRadius: '16px' }}
      >
        <Grid 
          item
          direction="column"
          align="left" 
          sx= {{py: 3, px: 1, }}
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
