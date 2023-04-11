import React, { useState, useRef, forwardRef } from 'react';
import emailjs from '@emailjs/browser';
import { Box, Typography, Grid, Card } from '@mui/material'


import IconButton from '@mui/material/IconButton';
import Input from '@mui/material/Input';
import FilledInput from '@mui/material/FilledInput';
import OutlinedInput from '@mui/material/OutlinedInput';
import InputLabel from '@mui/material/InputLabel';
import InputAdornment from '@mui/material/InputAdornment';
import FormHelperText from '@mui/material/FormHelperText';
import FormControl from '@mui/material/FormControl';
import TextField from '@mui/material/TextField';

import Button from '@mui/material/Button';
import SendIcon from '@mui/icons-material/Send';

//message notification
import Collapse from '@mui/material/Collapse';
import Alert from '@mui/material/Alert';
import CloseIcon from '@mui/icons-material/Close';
import Popover from '@mui/material/Popover';

import { alpha, styled } from '@mui/material/styles';

export default function Contact () {

  //alert
  const [open, setOpen] = React.useState(false);
  const [ mes, setMes ] = React.useState("")

  //card glow
  const CardGlow = styled(Card)(({ theme }) => ({
    boxShadow: `0px 0px 80px 20px #00CC65`,
  }));

  //email

  const [ name, setName ] = useState("")
  const [ email, setEmail ] = useState("")
  const [ message, setMessage ] = useState("")
  const [ error, setError ] = useState(false)

  const sendEmail = (e) => {
    e.preventDefault();

    if (name == '' || email == '' || message == ''){
      setError(true)
    }

    emailjs.send('service_fqrhbii', 'template_os2lm1e', {
      from_name: name,
      from_email: email,
      message: message,
    }, 'uyp-tzctUss3EBPUp'
    )
      .then((result) => {
          setOpen(true);
          setMes("Message sent!")
          setEmail("")
          setName("")
          setMessage("")
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
          setMes("Message couldn't be sent :(")
      });
  };

  return (
    <>
    
    <Box sx={{ flexGrow: 1, p:{xs:3, xl:0, lg:3} }} align="center" justify = "center" alignItems = "center">
      <Typography variant="h2" sx={{fontWeight: 'bold'}} >CONTACT ME</Typography> 
        <Typography variant="h4">Send me an email!</Typography>
        <Grid container sx={{ py:10}} xl={10}>
          <Grid container item  xl={6} md={6} sm={12} >
            <CardGlow sx={{p:5, borderRadius: 5 }} >
              <form onSubmit={sendEmail} >
                <TextField fullWidth label="Your name"  sx={{ py:2}} type="text" value={name}  required  onChange={e => setName(e.target.value)}/>
                <TextField fullWidth label="Your email"  sx={{ py:2}}  type="email" value={email} required onChange={e => setEmail(e.target.value)}/>
                <TextField multiline={true} rows={10}  sx={{ py:2}} fullWidth label="Message" margin="normal" required type="text" value={message} onChange={e => setMessage(e.target.value)}/>
                <Button variant="glow contained" fullWidth endIcon={<SendIcon />} type="submit" size="large" >SEND
                </Button>
              </form>
            </CardGlow>
          </Grid>
          <Grid item xl={6} sm={12} sx={{px:5}}>
            <Collapse in={open}>
              <Alert
                action={
                  <IconButton
                    aria-label="close"
                    color="inherit"
                    size="small"
                    onClick={() => {
                      setOpen(false);
                    }}
                  >
                    <CloseIcon fontSize="inherit" />
                  </IconButton>
                }
                sx={{ mb: 2 }}
              >
                {mes}
              </Alert>
            </Collapse>
          </Grid> 
        </Grid>
        
    </Box>
      
    </>
    
  );
};

