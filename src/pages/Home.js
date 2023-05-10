import React from 'react'
import Projects from './Projects';
import Me from './Me'
import Experience from './Experience';
import Divider from '@mui/material/Divider';
import TIKnow from './Skills'
import Contact from './Contact';
import { useRef, useEffect, useState } from 'react'
import { useInView} from 'react-intersection-observer'


export default function Home() {

 
  return (
    <div>
        <div>
        <Me sx={{my: 10}}/>
        <Divider sx={{my: 5}}></Divider>
        <Projects  sx={{my: 10}}></Projects>
        <Divider sx={{my: 5}}></Divider>
        <TIKnow  sx={{m: 10}}></TIKnow>
        <Divider sx={{my: 5}} ></Divider>
        
        <Experience  sx={{m: 10}}></Experience>
        <Divider sx={{my: 5}}></Divider>
        <Contact  sx={{m: 10}}></Contact>
        
      </div>
    </div>
  )
}
