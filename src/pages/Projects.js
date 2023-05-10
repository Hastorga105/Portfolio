import { React, useEffect, } from 'react'
import ProjectItem from '../components/ProjectItem'
import Me from '../assets/me.jpg'
import { ProjectList } from '../helpers/ProjectList'
import { Container, Typography, Grid } from '@mui/material'
import Box from '@mui/material/Box';
import Aos from "aos"
import "aos/dist/aos.css"

import { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import { Pagination, Navigation } from "swiper";

export default function Projects() {

  useEffect(() => {
    Aos.init({duration:1200});
}, [])

  return (

    <Box sx={{ flexGrow: 1, borderRadius: '16px' }} align="center" justify = "center" alignItems = "center">
      
      <Typography data-aos="fade-up" data-aos-delay={200} variant="h2" sx={{fontWeight: 'bold'}} >MY PROJECTS</Typography>

      <Grid container  lg={10} md={12} sx={{borderRadius: '16px'}}>
      <Swiper
        slidesPerView={1}
        spaceBetween={10}
        pagination={{
          type: "fraction"
        }}
        breakpoints={{
          0:{
            slidesPerView: 2,
            spaceBetween: 1,
          },
          600: {
            slidesPerView: 2,
            spaceBetween: 10,
          },
          900: {
            slidesPerView: 3,
            spaceBetween: 20,
          },
          1200: {
            slidesPerView: 4,
            spaceBetween: 30,
          },
        }}
        navigation={true}
        modules={[Pagination, Navigation]}
        className="mySwiper"
      >
      {
      ProjectList.map((project, idx) => { {/*Loops trhough the ProjectList Like a foreach project}*/}
                      return (

                        <Grid item >
                          <SwiperSlide sx={{borderRadius: '16px'}}>
                            <Grid item sx={{ my:10,  }}  data-aos="fade-up" data-aos-delay={idx*500}>
                              <ProjectItem  id={idx} name={project.name} image={project.image} skills={project.skills}/> 
                            </Grid>
                          </SwiperSlide>
                          
                        </Grid>
                      )
                        
                    })}
      </Swiper>

{/*}
        {ProjectList.map((project, idx) => { {/*Loops trhough the ProjectList Like a foreach project}}
                return (
                  <Grid item xs={12} md={6} lg={3} sx={{my:3}}>
                     <ProjectItem  id={idx} name={project.name} image={project.image} /> 
                  </Grid>
                )
                   
              })}*/}
        
      </Grid> 

    </Box>

      

   
      
      
  )
}
