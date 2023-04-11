import React from 'react'
import { Divider, Card, Typography, Box} from '@mui/material'

export default function TitleBlock({title}) {
  return (
    <Box display="inline-block">
        <Divider sx={{mt:3}}>
        </Divider>
        <Card variant="glow squared" sx={{ bgcolor: 'primary.main', py:0, px:2, mb:3}}>
            <Typography sx={{fontWeight: "bold", fontSize: 30, textTransform: "uppercase"}} style={{color: "#0f0e25", display: 'inline-block'}}>{title}</Typography>
        </Card>
    </Box>
  )
}
