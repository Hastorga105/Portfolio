import React from 'react'
import Typography from '@mui/material/Typography';
import Card from '@mui/material/Card';
import { Box, Grid, Paper } from '@mui/material';


export default function SkillItem({image, name, id}) {
  return (
    <Card sx={{p: 2, borderRadius: '20px'}}>
        {image}
          <Typography variant="h5" sx={{ fontSize: 40,  }}>{name}</Typography>
    </Card>
  )
}
