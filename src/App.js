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
  return (
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
    
  );
}

export default App;
