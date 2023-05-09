import React from 'react'
import Typography from '@mui/material/Typography';
import Card from '@mui/material/Card';
import { Box, Grid, Paper } from '@mui/material';


export default function SkillItem({image, name, id}) {
  return (
    <Grid sx={{p:{ xs: 0, sm: 2}, borderRadius: '20px',}}  container justifyContent="center" alignItems="center" className='transparent transformY icon text' >
        <svg xmlns="http://www.w3.org/2000/svg" width="100%"  >{image}</svg><p></p>
          <Typography variant="h5" sx={{ fontSize: {xs:20, sm:40}, mt:1 }}>{name}</Typography>
    </Grid >
  )
}
