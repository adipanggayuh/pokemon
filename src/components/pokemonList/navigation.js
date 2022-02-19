import React from 'react';
import { Grid, IconButton } from '@mui/material';
import NavigateNextIcon from '@mui/icons-material/NavigateNext';
import NavigateBeforeIcon from '@mui/icons-material/NavigateBefore';
const NavigationList = ({ onNextData, onPrevData }) => {
    return (
        <>
            <Grid item xs={6}>
                <IconButton onClick={onPrevData}>
                    <NavigateBeforeIcon />
                </IconButton>
            </Grid>
            <Grid item xs={6} textAlign={'right'}>
                <IconButton onClick={onNextData}>
                    <NavigateNextIcon />
                </IconButton>
            </Grid>
        </>
    )
}

export default NavigationList;