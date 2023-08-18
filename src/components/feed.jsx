import React from 'react'
import { Box } from '@mui/material'
import Posts from "./posts"
const Feed = () => {
  return (
    <Box flex={4} p={2}  sx={{padding:5}}>
      <Posts/>
      <Posts/>
      <Posts/>
      <Posts/>
      <Posts/>
      <Posts/>
      <Posts/>
   
    </Box>
  )
}

export default Feed