import { Card, CardContent, Typography } from '@mui/material'
import React from 'react'

const RightDragable = () => {
  return (
    <Card sx={{borderRadius:"20px",height: '50vh'}}>
    <CardContent>
      <Typography variant="subtitle1" component="div" sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <span className='font-bold tracking-tighter text-sm'>Graph</span>
        
      </Typography>
      </CardContent>
    </Card>
  )
}

export default RightDragable