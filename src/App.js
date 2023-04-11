import './App.css';
import {BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from './pages/Home';
import Projects from './pages/Projects';
import Experience from './pages/Experience';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import ProjectDisplay from './pages/ProjectDisplay';
import  Box  from '@mui/material/Box';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import "./styles/styles.css"
import { useEffect, useState } from 'react';
import ReactDOM from "react-dom";


import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogTitle from '@mui/material/DialogTitle';
import DialogContent from '@mui/material/DialogContent';
import DialogActions from '@mui/material/DialogActions';

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
  },
  components: {
    MuiCard:{
      variants: [
        {
          props: {variant: 'glow squared'},
          style:{
            boxShadow: `0px 0px 15px 0px #00CC65`,
            borderRadius: '0px',
          }
        }
      ]
    }
    ,
    MuiDivider:{
      variants: [
        {
          props: {variant: 'cool'},
          style: {
            borderBottomWidth: 5,
            borderColor: "#00CC65",
            marginRight: '15%'
          }
        }
      ]
    },
    MuiTypography:{
      variants: [
        {
          props: { variant: 'glow' },
          style: {
            color: "white",
            textShadow: `0px 0px 50px #00CC65`,
          }
        }
      ]
    },
    MuiAppBar:{
      variants: [
        {
          props: {variant: 'blured'},
          style: {
            backdropFilter: "blur(7px)",
            background: `linear-gradient(to bottom, rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0))`
          }
        }
      ]
    },
    MuiButton: {
      variants: [
        {
          props: { variant: 'glow contained' },
          style: {
            boxShadow: `0px 0px 20px 2px #00CC65`,
            fontWeight: 'bold',
            color: "#0f0e25",
            backgroundColor: "#00CC65",
            borderRadius: '11px',

            "&:hover": {
            boxShadow: "0px 0px 35px 2px #00CC65",
            backgroundColor: "#00ff7b",
          }
          },
        },
        {
          props: { variant: 'glow' },
          style: {
            boxShadow: `0px 0px 30px 0px #00CC65`,
            border: "2px solid rgba(0, 204, 101, 0.5)",
            borderRadius: '11px',
            color: "#00CC65",
            borderRadius: '11px',
            backdropFilter: "blur(10px)",
            backgroundColor:'rgba(255,255,255, 0.2)',
            "&:hover": {
            boxShadow: "0px 0px 50px 5px #00CC65",
            
          }
          },
        },
        {
          props: { variant: 'outlined glow' },
          style: {
            boxShadow: `0px 0px 0px 0px #00CC65`,
            border: "2px solid rgba(0, 204, 101, 0.5)",
            borderRadius: '11px',
            color: "#00CC65",
            borderRadius: '11px',
            backdropFilter: "blur(10px)",
            backgroundColor:'rgba(255,255,255, 0.2)',
            "&:hover": {
            boxShadow: "0px 0px 50px 5px #00CC65",
            
          }
          },
        },
      ],
    },
  },
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
            Hi! Welcome to my portfolio
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
