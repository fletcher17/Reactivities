import { Box, AppBar, Toolbar, IconButton, Typography, Button, Container, MenuItem } from '@mui/material'
import React from 'react'
import { Group, Menu } from "@mui/icons-material"

type Props = {
  openForm: () => void;
}


export default function NavBar({openForm}: Props) {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static" sx={{backgroundImage: 'linear-gradient(135deg, #182a73 0%, #218aae 69%, #20a7ac 89%)'}}>
        <Container maxWidth='xl'>
        <Toolbar sx={{display: 'flex', justifyContent: 'space-between'}}>
          <Box>
            <MenuItem sx={{display: 'flex', gap:2}}>
            <Group fontSize='large' />
            <Typography variant="h4" fontWeight='bold'>Reactivities</Typography>
            </MenuItem>
          </Box>
          <Box sx={{display: 'flex'}}>
            <MenuItem sx={{ fontsize: '1.2rem', textTransform: 'uppercase', fontWeight: 'bold'}}>Activities</MenuItem>
            <MenuItem sx={{ fontsize: '1.2rem', textTransform: 'uppercase', fontWeight: 'bold'}}>About</MenuItem>
            <MenuItem sx={{ fontsize: '1.2rem', textTransform: 'uppercase', fontWeight: 'bold'}}>Contact</MenuItem>
          </Box>
          <Button onClick={openForm} size='large' variant='contained' color='warning'>Create activity</Button>
        </Toolbar>
        </Container>
      </AppBar>
    </Box>
  )
}
