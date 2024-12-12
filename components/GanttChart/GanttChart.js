import { useState, useEffect } from 'react';
import Grid from './Grid';
import TaskRowDates from './TaskRowDates';
import TaskRowHeader from './TaskRowHeader';
import TaskTableHeaderContent from './TaskTableHeaderContent';
import TaskTableHeaderDates from './TaskTableHeaderDates';

export default function GanttChart() {
  const [timeRange, setTimeRange] = useState({});
  const [issues, setIssues] = useState([]);

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
    // Get the issues from the API
    (async () => {
      const results = await fetch('/api/get/issue').then((response) =>
        response.json()
      );
      const projects = [];
      results.forEach((issue) => {
        if (issue.issue_type === 'PROJ') {
          projects.push(issue);
        }
      });
      projects.forEach((project) => {
        project.children = [];
        results.forEach((issue) => {
          if (issue?.ref_to?.includes(project.id)) {
            project.children.push(issue);
          }
        });
      });
      setIssues(projects);
    })();
  }, []);

  return (
    <div id="gantt-container" style={{ width: '100%' }}>
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
            <TaskRowDates key={i} issue={issue} timeRange={timeRange} />
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
