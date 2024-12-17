import React, { useState, useEffect } from 'react';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid2';
import ControlPanel from './_ControlPanel';
import GridHeader from './_GridHeader';

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
  ...theme.applyStyles('dark', {
    backgroundColor: '#1A2027',
  }),
}));

export default function GanttHeader({
  timeRange,
  gridHeaderRef,
  handleXScroll,
}) {
  if (!timeRange) return;
  return (
    <div id="gantt_header">
      <Box sx={{ flexGrow: 1 }}>
        <Grid container>
          <Grid size={3}>
            <ControlPanel />
          </Grid>
          <Grid size={9}>
            <GridHeader
              timeRange={timeRange}
              gridHeaderRef={gridHeaderRef}
              handleXScroll={handleXScroll}
            />
          </Grid>
        </Grid>
      </Box>
    </div>
  );
}
