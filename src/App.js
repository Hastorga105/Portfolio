import './App.css';
import {BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from './pages/Home';
import Projects from './pages/Projects';
import Experience from './pages/Experience';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import ProjectDisplay from './pages/ProjectDisplay';
import Me from './pages/Me';
import Container from '@mui/material/Container';
import  Box  from '@mui/material/Box';
import bg from './assets/bg.avif'
import { ThemeProvider, createTheme } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import "./styles/styles.css"
import { DarkMode } from '@mui/icons-material';

import { useEffect, useState } from 'react';

import { Card } from "@mui/material";

import Button from '@mui/material/Button';
import { styled } from '@mui/material/styles';
import Dialog from '@mui/material/Dialog';
import DialogTitle from '@mui/material/DialogTitle';
import DialogContent from '@mui/material/DialogContent';
import DialogActions from '@mui/material/DialogActions';
import IconButton from '@mui/material/IconButton';
import CloseIcon from '@mui/icons-material/Close';
import Typography from '@mui/material/Typography';

const myTheme = createTheme({
  palette: {
    mode: "dark",
    primary: {
      main: "#00CC65",
      dark: "#00CC65",
    },
    background: {
      default: '#0f0e25',
    },
    typography: {
      h1: {
        fontFamily: 'Bebas Neue',
      },
      body1: {
        fontSize: '2rem',
        fontWeight: 400,
      },
      body2: {
        fontSize: '1.5rem',
      },
    },
  }
});

function App() {

  //variable to display popup
  const [displayPopUp, setDisplayPopUp] = useState(true);
  
  const closePopUp = () => {//when you close the popup
    // already seen the popup
    localStorage.setItem("seenPopUp", true);
    // stop displaying
    setDisplayPopUp(false);
  };

  useEffect(() => {
    // Check the seenPopup variable
    let returningUser = localStorage.getItem("seenPopUp");
    // See if user has seen the popup
    setDisplayPopUp(!returningUser);
  }, []);

  return (
  <>
    <div>
      {/* conditional rendering, if displayPopUp is truthy we will show the modal */}
        {displayPopUp && (
          <Dialog
            open={true}
// once pop-up will close "closePopUp" function will be executed
            onClose={closePopUp}
          >
            
            <DialogTitle onClose={closePopUp}>
            Modal title
            </DialogTitle>
            <DialogContent dividers>
              <Typography >
                This website is still in constant development, some of its content may be unfinished and or broken, please take that in mind.
              </Typography>
              <Typography >
                Thank you so much for visiting my portfolio, I hope you like it!
              </Typography>
            </DialogContent>
            <DialogActions>
              <Button  onClick={closePopUp}>
                Ok, I understand
              </Button>
            </DialogActions>
          
            
                </Dialog>
              )}
            </div>
      {/* this is the main content of this page */}

    <ThemeProvider theme={myTheme}>
      <CssBaseline />
      <Box className="App" sx ={{ pt: 5, px:-2 }}>
    <Router  basename={process.env.PUBLIC_URL}>
      <Navbar/>
        <Routes>
        <Route path="/" element={<Home/>}></Route>
        <Route path="/projects" element={<Projects/>}></Route>
        <Route path="/projects/:id" element={<ProjectDisplay/>}></Route>
        <Route path="/experience" element={<Experience/>}></Route>
      </Routes>      
      <Footer></Footer>
    </Router>
    </Box>
    </ThemeProvider>
  </>
    
  );
}

export default App;
