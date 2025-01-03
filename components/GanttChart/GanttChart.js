import React, { useState, useEffect, useRef } from 'react';
import Grid from './Grid';
import Modal from './Modal';
import TaskRowDates from './TaskRowDates';
import TaskRowHeader from './TaskRowHeader';
import TaskTableHeaderContent from './TaskTableHeaderContent';
import TaskTableHeaderDates from './TaskTableHeaderDates';

export default function GanttChart() {
  const [timeRange, setTimeRange] = useState({});
  const [issues, setIssues] = useState([]);
  const [_modalOptions, _setModalOptions] = useState(false);
  const modalOptions = useRef({});
  // Update the modal options each time the local state changes
  useEffect(() => {
    modalOptions.current = {
      isOpen: _modalOptions.isOpen,
      modalID: _modalOptions,
      set: (v) => _setModalOptions(v),
    };
  }, [_modalOptions, _setModalOptions]);
  // Get Issues from the API
  useEffect(() => {
    // Set the time range to the current month and year to one month in the future.
    (async () => {
      setTimeRange({
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
      projects.push(unassignedProject);
      setIssues(projects);
    })();
  }, []);

  return (
    <div id="gantt-container" style={{ width: '100%' }}>
      <Modal options={_modalOptions} />
      <Grid>
        <div className="header" style={{ flex: '0 0 30%' }}>
          <TaskTableHeaderContent />
          <div
            className="taskName-container"
            style={{ display: 'flex', flexDirection: 'column' }}
          >
            {issues.map((issue, i) => (
              <TaskRowHeader key={i} issue={issue} />
            ))}
          </div>
        </div>
        <div className="times" style={{ flex: '0 0 70%', overflowX: 'scroll' }}>
          <TaskTableHeaderDates timeRange={timeRange} />
          {issues.map((issue, i) => (
            <TaskRowDates
              key={i}
              issue={issue}
              timeRange={timeRange}
              modalOptions={modalOptions}
            />
          ))}
        </div>
      </Grid>
      {/* <Settings>
        <AddTask setTasks={setTasks} />
        <AddTaskDuration tasks={tasks} setTaskDurations={setTaskDurations} />
        <TimeRange timeRange={timeRange} setTimeRange={setTimeRange} />
      </Settings> */}
    </div>
  );
}
