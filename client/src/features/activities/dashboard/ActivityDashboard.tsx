import { Grid2, Typography } from '@mui/material'
import React from 'react'
import ActivityList from './ActivityList'

export default function ActivityDashboard() {
    
    
    return (
        <Grid2 container spacing={3}>
            <Grid2 size={7}>
                <ActivityList />
            </Grid2>
            <Grid2 size={5}>
                <Typography>Activity Filters go here</Typography>
            </Grid2>
        </Grid2>
    )
}
