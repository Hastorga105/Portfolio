import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import { Box, Typography, Grid } from '@mui/material'


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


export default function Contact () {

  const defaultValues = {
    name: "name",
    email: "email",
    message: "message"
  }

  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_fqrhbii', 'template_os2lm1e', form.current, 'uyp-tzctUss3EBPUp')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
  };

  return (
    <>
    
    <Box sx={{ flexGrow: 1, p:{xs:3, xl:10, lg:3} }} align="center" justify = "center" alignItems = "center">
      <Typography variant="h2" sx={{fontWeight: 'bold'}} > (WORK IN PROGRESS) CONTACT ME (WORK IN PROGRESS)</Typography> 
        <Typography variant="h4">(WORK IN PROGRESS) Send me an email! (WORK IN PROGRESS)</Typography>
        <Grid container sx={{ py:10}} xl={10}>
          <Grid container item  xl={6} md={6} sm={12} >
            <form ref={form} onSubmit={sendEmail}>
              <TextField fullWidth label="Your email" disabled sx={{ py:2}} type="text" name="from_name"  />
              <TextField fullWidth label="Your name" disabled sx={{ py:2}}  type="text" name="from_email"  />
              <TextField multiline={true} rows={10}  disabled fullWidth label="Message" margin="normal"  type="text" name="message" />
              <Button variant="contained" endIcon={<SendIcon />} type="submit" value="Send">
                  Send
              </Button>
            </form>
            
          </Grid> 
{/*}
          <Grid item xl={6}>
            <form ref={form} onSubmit={sendEmail}>
              <label>Name</label>
              <input type="text" name="from_name" />
              <label>Email</label>
              <input type="email" name="from_email" />
              <label>Message</label>
              <textarea name="message" />
              <input type="submit" value="Send" />
            </form>
          </Grid>*/}
  </Grid>
        
    </Box>
      
    </>
    
  );
};

