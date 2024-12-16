// React Imports
import React from 'react';
// Material Imports
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid2';
// Custom Component Imports
import IssueHeader from './_IssueHeader';
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
export default function GanttBody({ issues }) {
  // Resolved HTML
  return (
    <div id="gantt">
      <Box sx={{ flexGrow: 1 }}>
        <Grid container>
          <Grid size={3}>
            <IssueHeader issues={issues} />
          </Grid>
          <Grid size={9}>
            <Item>Issue Grid</Item>
          </Grid>
        </Grid>
      </Box>
    </div>
  );
}
