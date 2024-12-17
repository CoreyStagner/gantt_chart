import React, { useState, useEffect, useRef } from 'react';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid2';
import GanttHeader from './components/_GanttHeader';
import GanttBody from './components/_GanttBody';

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

export default function Gantt() {
  const [timeRange, setTimeRange] = useState({});
  const [issues, setIssues] = useState([]);
  const [projects, setProjects] = useState([]);

  const gridHeaderRef = useRef();
  const gridBodyRef = useRef();

  const handleGridHeaderScroll = (scroll) => {
    gridBodyRef.current.scrollLeft = scroll.target.scrollLeft;
  };

  const handleGridBodyScroll = (scroll) => {
    gridHeaderRef.current.scrollLeft = scroll.target.scrollLeft;
  };

  // Get Issues from the API
  useEffect(() => {
    // By Default, set the time range to the current month and year to one month in the future.
    (async () => {
      await setTimeRange({
        fromSelectMonth: new Date().getMonth() + 0,
        fromSelectYear: '2024',
        toSelectMonth: new Date().getMonth() + 1,
        toSelectYear: '2024',
      });
    })();
    // Get the issues from the API and handle assigning to the correct project
    (async () => {
      // Fetch the issues from the API
      const results = await fetch('/api/get/issue').then((response) =>
        response.json()
      );
      // Placeholder variable for all projects
      const projects = [];
      // Placeholder project for unassigned issues
      const unassignedProject = {
        id: '0',
        name: 'Project Unassigned',
        children: [],
      };
      // Loop through the results and add the projects to the projects array.
      results.forEach((issue) => {
        if (issue.issue_type === 'PROJ') {
          projects.push(issue);
        }
      });
      // Loop through the projects and add the children to the project.
      projects.forEach((project) => {
        project.children = [];
        // Loop through the returned issues and add them as children to the parent project.
        results.forEach((issue) => {
          // If the issue is a child of the project, add it to the project children array.
          if (issue?.ref_to?.includes(project.id)) {
            project.children.push(issue);
          }
          if (!issue?.ref_to && issue.issue_type !== 'PROJ') {
            // Check to make sure the project is not already in the unassigned project
            const projectExists = unassignedProject.children.find(
              (child) => child.id === issue.id
            );
            // If the project does not exist in the unassigned project, add it.
            if (!projectExists) {
              unassignedProject.children.push(issue);
            }
          }
        });
      });
      // Add the unassigned project to the projects array
      projects.push(unassignedProject);
      const sortedProjects = projects.sort((a, b) => {
        if (!(a?.id?.includes('-') || b?.id?.includes('-'))) {
          return a.id - b.id;
        } else {
          return +a.id.split('-')[1] - +b.id.split('-')[1];
        }
      });
      setProjects(sortedProjects);
      const issueCollection = [];
      // Organize the issues for each Project by the issue number
      sortedProjects.forEach((project) => {
        issueCollection.push(project);
        if (!project.children?.length) return;
        let sortedChildren = [];
        const sortingMethod = 'alpha'; // TODO: Make this changeable by the user
        if (sortingMethod === 'alpha') {
          // Organize them by the project number
          sortedChildren = project.children.sort((a, b) => {
            if (!(a?.id?.includes('-') || b?.id?.includes('-'))) {
              return a.id - b.id;
            } else {
              return +a.id.split('-')[1] - +b.id.split('-')[1];
            }
          });
        } else {
          // TODO: Add sorting logic to be by start date and end date.
        }
        sortedChildren.forEach((childIssue) => {
          issueCollection.push({
            ...childIssue,
            child: true,
            parent: project.id,
          });
        });
      });
      if (issueCollection.length) {
        await setIssues(issueCollection);
      }
    })();
  }, []);

  return (
    <div id="gantt">
      <Box sx={{ flexGrow: 1 }}>
        <Grid container>
          <Grid size={12}>
            <GanttHeader
              timeRange={timeRange}
              gridHeaderRef={gridHeaderRef}
              handleXScroll={handleGridHeaderScroll}
            />
          </Grid>
          <Grid size={12}>
            <GanttBody
              issues={issues}
              projects={projects}
              timeRange={timeRange}
              gridBodyRef={gridBodyRef}
              handleXScroll={handleGridBodyScroll}
            />
          </Grid>
        </Grid>
      </Box>
    </div>
  );
}
