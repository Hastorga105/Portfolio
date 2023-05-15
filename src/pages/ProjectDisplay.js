import Typography from '@mui/material/Typography';
import {Box, Button, Paper, Card} from '@mui/material';
import { Image } from 'mui-image'
import React from 'react'
import { useParams } from 'react-router-dom'
import { ProjectList } from '../helpers/ProjectList';
import Grid from '@mui/material/Grid'
import blank from '../assets/Blank.png'
import Divider from '@mui/material/Divider';
import Aos from "aos"
import "aos/dist/aos.css"
import { useEffect, } from 'react'


export default function ProjectDisplay() {

  
  useEffect(() => {
    Aos.init({duration:1000});
  }, [])

  const { id } = useParams();
  const project = ProjectList[id];
  const data = project.info;
  console.log("data es " + data[0].title)
  const glow = {
    boxShadow: 0,
    "&:hover": {
      boxShadow: "0px 0px 100px 1px #E5446D !important",
    }
  }


  return (
    <Grid continer sx={{my:5}} lg={12} align = "center" >
      <Grid 
      direction="row"
      align="center" 
      style={{ backgroundImage:`linear-gradient(to bottom, rgba(0, 0, 0, 0.2),  rgba(0, 20, 40, 0.9)), url(${project.image})`,  backgroundRepeat:"no-repeat", backgroundSize:"cover",  textTransform: "uppercase"}}    
      height={"50%"}
      data-aos="fade-up">
        <Grid container>
          <Grid  lg={6} direction="column">
          <Image src={blank} height={"25%"}/>
          <Typography variant="h1" sx={{ p:2,  typography: { sm:"h2", xs:"h2", md:"h1"}, fontWeight: { xs: 'bold', sm:"bold", md:"bold", lg:"bold", xl:"bold"}}}
          color="common.white" 
          data-aos="fade-up" data-aos-delay={100}>
            {project.name}
          </Typography> 
            <Button variant="glow" href={project.git} target="_blank" sx={{fontWeight: "bold"}} disableElevation data-aos="fade-up" data-aos-delay={200}>
            See it on Github
            </Button>
            {
              project.link === "" ? (
                <></>
              ) : (
                <Button variant="glow contained" href={project.link} target="_blank" sx={{fontWeight: "bold", mx: 3}} disableElevation data-aos="fade-up" data-aos-delay={200}>
                Live Demonstration
                </Button>
              )
            }
            
          <Image src={blank} height={"25%"}/>
        </Grid>
        <Grid lg={6} direction="column">
        </Grid>
        </Grid>
      </Grid>
      <Grid container xl={6} lg={12} sx={{p:5}}>
        <Grid>
          <Typography sx={{fontWeight: "bold", fontSize: {md:100,  xs:50},  textTransform: "uppercase" }} data-aos="fade-up">Overview</Typography>
          <Divider sx={{mb: 5}} ></Divider>
        <Typography sx={{fontSize: {md:30, sm: 20, xs:15}}} data-aos="fade-up">{project.overview}</Typography>
        <Divider sx={{my: 5}}></Divider>
        <Typography variant="h3" data-aos="fade-up">Skills used:</Typography>
        <Typography variant='h5' data-aos="fade-up" data-aos-delay={200}>{project.skills}</Typography>
        </Grid>
      </Grid>
          {data.map((datax, idx) => {{
            return (
              <>
              {/*<Divider variant='big green'></Divider>*/}
              <Grid 
              direction="row"
              align="left" 
              alignItems="center"
              sx={{py:5}}
              //style={{ backgroundImage:`linear-gradient(to bottom,  rgba(16, 14, 37, 0.1), rgba(16, 14, 37, 1)), url(${datax.img})`,  backgroundRepeat:"no-repeat", backgroundSize:"cover", backgroundPosition:"center top"}}    
              >
                <Grid container >
                  <Grid lg={1} direction="column"></Grid>
                  <Grid  lg={4} direction="column" sx={{p:3}} order={{md: 1, sm: 2, xs:2}} data-aos="fade-right">
                    {/*<Box sx={{height: 500}}/> */}
                    <Typography variant="h2" sx={{ textTransform: "uppercase", typography: { sm:"h2", xs:"h2", md:"h2"}, fontWeight: { xs: 'bold', sm:"bold", md:"bold", lg:"bold", xl:"bold"}}}
                    color="primary" 
                    >
                    {datax.title}
                    </Typography> 
                    <Divider variant='big green' sx={{my:2}}></Divider>
                    <Typography>{datax.desc}
                    </Typography>
                  </Grid>
                  
                  <Grid lg={6} direction="column" sx={{p:3}} order={{md: 2, sm: 1, xs:1}} data-aos="fade-right" data-aos-delay={200} >
                  <Image src={datax.img} width="auto" className=' transformY '/>
                  </Grid>
                  <Grid lg={1} direction="column" order="4"></Grid>
                 </Grid>
                </Grid>
              </>
             
            )
          }}
          )}
         
          
          
      
        
        
    </Grid>
  )
}
