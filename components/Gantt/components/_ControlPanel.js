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

const Item = styled('div')(({ theme }) => ({
  padding: theme.spacing(1),
  textAlign: 'center',
}));

export default function GanttBody() {
  return (
    <div id="gantt">
      <Box sx={{ flexGrow: 1 }}>
        <Grid container>
          <Grid
            size={10}
            sx={{
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
            }}
          >
            <Button variant="contained" size="large">
              Create New Issue
            </Button>
          </Grid>
          <Grid size={2}>
            <Item>
              <IconButton size="small" aria-label="Zoom In">
                <CiCirclePlus />
              </IconButton>
              <IconButton
                size="small"
                aria-label="Focus around the current issue"
              >
                <BiHorizontalCenter />
              </IconButton>
              <IconButton size="small" aria-label="Zoom Out">
                <CiCircleMinus />
              </IconButton>
            </Item>
          </Grid>
        </Grid>
      </Box>
    </div>
  );
}
