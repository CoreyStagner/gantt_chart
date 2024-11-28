import { useState, useEffect, useRef } from 'react';
import AddTaskDuration from './AddTaskDuration';
import AddTask from './AddTask';
import Grid from './Grid';
import Settings from './Settings';
import Tasks from './Tasks';
import TimeRange from './TimeRange';
import TimeTable from './TimeTable';
import TaskRow from './TaskRow';
import TaskTableHeader from './TaskTableHeader';
import { client } from '../../utils/fetchWrapper';
import { getCurrentProjectData } from '../../utils/getProjectData';

export default function GanttChart() {
  // NOTE: Still working on the below two values and merging them into one object.
  const [defaultProjectData, setDefaultProjectData] = useState(null);
  const [userProjectData, setUserProjectData] = useState(null);
  const [selection, setSelection] = useState(null);
  const [tasks, setTasks] = useState(null);
  const [updatedTasks, setUpdatedTasks] = useState(tasks);
  const [taskDurations, setTaskDurations] = useState(null);
  const [timeRange, setTimeRange] = useState({
    fromSelectMonth: new Date().getMonth() + 0,
    fromSelectYear: '2024',
    toSelectMonth: new Date().getMonth() + 1,
    toSelectYear: '2024',
  });
  const [issues, setIssues] = useState([]);

  // Get Issues from the API
  useEffect(() => {
    (async () => {
      const results = await fetch('/api/get/issue').then((response) =>
        response.json()
      );
      setIssues(results);
    })();
  }, []);

  useEffect(() => {
    getCurrentProjectData().then((data) => {
      // NOTE: Still working on the below two values and merging them into one object.
      let [defaultProjectData, userProjectData] = data;
      setDefaultProjectData(defaultProjectData);
      setUserProjectData(userProjectData);
    });
    // client({ endpoint: 'data.json' }).then(
    //   (data) => {
    //     setTasks(data?.tasks);
    //     setUpdatedTasks(data?.tasks);
    //     setTaskDurations(data?.taskDurations);
    //   },
    //   (error) => {
    //     console.error('Error: ', error);
    //   }
    // );
  }, []);

  function handleFilterTasks(data) {
    const [taskTypeID, taskTypeName] = data.split('-');
    if (!taskTypeID || data === 'all') {
      setUpdatedTasks(tasks);
    } else {
      const filteredTasks = [];
      tasks.forEach((task) => {
        if (task.taskType == +taskTypeID) {
          filteredTasks.push(task);
        }
      });
      setUpdatedTasks(filteredTasks);
    }
  }

  function handleTaskDateView(data) {
    const { start, end } = data;
    const [startYear, startMonth, startDay] = start.split('-');
    const [endYear, endMonth, endDay] = end.split('-');
    setTimeRange({
      fromSelectMonth: parseInt(startMonth) - 1,
      fromSelectYear: startYear,
      toSelectMonth: parseInt(endMonth) - 1,
      toSelectYear: endYear,
    });
  }
  return (
    <div id="gantt-container" style={{ width: '100%' }}>
      <Grid>
        {/* TODO: To fix the overflow it should be containerized like
          ------------------------------------------------------------------- 
          | Gantt Chart Container                                           |
          | ---------------- -----------------------------------------------|
          | |Task Detail   | | Time Container so that we will overflow-x   ||
          | |Container     | | scroll this container so header and items   ||
          | |              | | move together                               ||
          | ||------------|| ||-------------------------------------------|||
          | ||Task Details|| ||Task Start to End Dates                    |||
          | ||------------|| ||-------------------------------------------|||
          | |{...Mapping   | |{...Mapping Each Issue}                      ||
          | | Each Issue}  | |                                             ||
          | |              | |                                             ||
          | |              | |                                             ||
          | |              | |                                             ||
          | |              | |                                             ||
          | |              | |                                             ||
          | |              | |                                             ||
          | ---------------- -----------------------------------------------|
          -------------------------------------------------------------------
        */}
        <TaskTableHeader />
        {issues.map((issue, i) => (
          <TaskRow key={i} issue={issue} />
        ))}
      </Grid>
      {/* <Settings>
        <AddTask setTasks={setTasks} />
        <AddTaskDuration tasks={tasks} setTaskDurations={setTaskDurations} />
        <TimeRange timeRange={timeRange} setTimeRange={setTimeRange} />
      </Settings> */}
    </div>
  );
}
