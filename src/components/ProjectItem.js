import Typography from '@mui/material/Typography';
import { useNavigate } from "react-router-dom";
import CardMedia from '@mui/material/CardMedia';
import Card from '@mui/material/Card';
import { Box, Grid, Paper } from '@mui/material';
import React from 'react';

export default function ProjectItem({image, name, id, skills}) {
  const navigate = useNavigate();
  const elsx = {
    transition: '0.2s ease-in-out' ,
    boxShadow: 0,
    borderRadius: '16px',
    "&:hover": {
      boxShadow: "0px 0px 50px 25px #00CC65",
//border: "3px solid rgba(0, 204, 101, 0.8)",
      cursor: 'pointer',
      transform: 'translateY(-30px)',
    }
  }

  return (
    <Box sx={{px:{xs:1, md:1, lg:0}}}>
      <Grid 
      direction="column"
      align="left"
      style={{ display: "flex", justifyContent: "flex-end", }}
      sx={elsx}
      >
        <Card onClick={() => {
      navigate("/projects/" + id)
      }} align = "center"
      
      sx={{height:{xs: "45vw",sm: "40vw", md:"30vw", lg:"18vw", xl:"18vw"}, borderRadius: '16px', }}
      >
        <Grid 
          item
          direction="column"
          align="left" 
          sx= {{py: 3, px: 0, }}
          style={{ backgroundImage:`linear-gradient(to bottom, rgba(0, 0, 0, 0), rgba(0, 20, 40, 0.8)), url(${image})`, height: '100%',  backgroundRepeat:"no-repeat", backgroundSize:"cover",  display: "flex", justifyContent: "flex-end", }}
          
          >
          <Typography style={{textTransform: "uppercase"}} variant="h5" sx={{ px:2, fontWeight: 'bold'}} color="common.white" >{name}</Typography> 
          <Typography sx={{ px: 2, display: { xs: 'none', md: 'block'}}} color="common.white" >{skills}</Typography> 
        </Grid>
        
        {/*<img src={image} style={{ width: "100%"}}></img>*/}
        
       
      </Card>
      </Grid>
    </Box>
      
      
       
  )
}
