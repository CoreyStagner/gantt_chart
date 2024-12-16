import React, { useState, useEffect } from 'react';

import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid2';
// import Button from '../../Button/Button';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import { CiCirclePlus, CiCircleMinus } from 'react-icons/ci';
import { BiHorizontalCenter } from 'react-icons/bi';

const Item = styled(Paper)(({ theme }) => ({
  padding: theme.spacing(1),
  textAlign: 'center',
}));

export default function GridHeader() {
  return (
    <div id="gantt_grid-header">
      <Box sx={{ flexGrow: 1 }}>
        <Grid container>
          <Grid size={12}>Months</Grid>
          <Grid size={12}>Sprints</Grid>
          <Grid size={12}>Days</Grid>
        </Grid>
      </Box>
    </div>
  );
}
