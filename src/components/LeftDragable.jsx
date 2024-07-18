import React from 'react'
import { Card, CardContent, Typography, IconButton, Grid , Divider } from '@mui/material';
import HelpOutlineIcon from '@mui/icons-material/HelpOutline';
import Tooltip from '@mui/material/Tooltip';


const items = [
  { name: "warm up", heights: ["50%"] },
  { name: "Active", heights: ["80%"] },
  { name: "Cool Down", heights: ["40%"] },
  { name: "Two Step Repeats", heights: ["50%", "40%"] },
  { name: "Ramp Up", heights: ["50%", "60%", "70%", "80%"] },
  { name: "Ramp Down", heights: ["80%", "70%", "60%", "50%"] },
];

const LeftDragable = () => {
  return (
 
    <Card sx={{borderRadius:"20px",height: '50vh'}}>
    <CardContent>
      <Typography variant="subtitle1" component="div" sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <span className='font-bold tracking-tighter text-sm'>Click or drag the blocks to build workouts</span>
        <IconButton aria-label="help">
          <HelpOutlineIcon />
        </IconButton>
      </Typography>
      <Divider sx={{ my: 1}} /> 
      <Grid container spacing={1}>
      {items.map((item, index) => (
        <Tooltip title={item.name}>
          
        <Grid key={index} item xs={4}>
          <div style={{ height: '60px', display: 'flex', gap:"2px", alignItems: "flex-end", border: '1px solid #ccc', borderTopLeftRadius: "10px", borderTopRightRadius: "10px", overflow: "hidden", backgroundColor: "#F2F2F2" }}>
            {item.heights.map((height, idx) => (
              <div key={idx} className='w-full bg-[#9b95f2]' style={{ height }} />
            ))}
          </div>
        </Grid>
        </Tooltip>
      ))}
    </Grid>
    </CardContent>
  </Card>
  )
}

export default LeftDragable