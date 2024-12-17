// React Imports
import React from 'react';
// Material Imports
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid2';
// Custom Component Imports
import IssueHeader from './_IssueHeader';
import IssueGrid from './_IssueGrid';
// Stylized Components
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

// Exported Components
export default function GanttBody({
  issues,
  timeRange,
  projects,
  gridBodyRef,
  handleXScroll,
}) {
  // Resolved HTML
  return (
    <div id="gantt">
      <Box sx={{ flexGrow: 1 }}>
        <Grid container>
          <Grid size={3}>
            <IssueHeader issues={issues} />
          </Grid>
          <Grid
            id="gantt_grid_body"
            size={9}
            style={{ overflowX: 'scroll' }}
            ref={gridBodyRef}
            onScroll={handleXScroll}
          >
            {projects.map((issue) => (
              <IssueGrid issue={issue} timeRange={timeRange} />
            ))}
          </Grid>
        </Grid>
      </Box>
    </div>
  );
}
