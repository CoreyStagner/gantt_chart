import { useState, useEffect } from 'react';
import AddTaskDuration from './AddTaskDuration';
import AddTask from './AddTask';
import Grid from './Grid';
import Settings from './Settings';
import Tasks from './Tasks';
import TimeRange from './TimeRange';
import TimeTable from './TimeTable';
import { client } from '../../utils/fetchWrapper';
import { getCurrentProjectData } from '../../utils/getProjectData';

export default function GanttChart() {
  // NOTE: Still working on the below two values and merging them into one object.
  const [defaultProjectData, setDefaultProjectData] = useState(null);
  const [userProjectData, setUserProjectData] = useState(null);
  const [tasks, setTasks] = useState(null);
  const [taskDurations, setTaskDurations] = useState(null);
  const [timeRange, setTimeRange] = useState({
    fromSelectMonth: 9,
    fromSelectYear: '2024',
    toSelectMonth: 10,
    toSelectYear: '2024',
  });

  useEffect(() => {
    getCurrentProjectData().then((data) => {
      // NOTE: Still working on the below two values and merging them into one object.
      let [defaultProjectData, userProjectData] = data;
      setDefaultProjectData(defaultProjectData);
      setUserProjectData(userProjectData);
    });
    client('data.json').then(
      (data) => {
        setTasks(data?.tasks);
        setTaskDurations(data?.taskDurations);
      },
      (error) => {
        console.error('Error: ', error);
      }
    );
  }, []);

  return (
    <div id="gantt-container">
      <Grid>
        <Tasks
          tasks={tasks}
          setTasks={setTasks}
          setTaskDurations={setTaskDurations}
        />
        <TimeTable
          timeRange={timeRange}
          tasks={tasks}
          taskDurations={taskDurations}
          setTaskDurations={setTaskDurations}
        />
      </Grid>
      <Settings>
        <AddTask setTasks={setTasks} />
        <AddTaskDuration tasks={tasks} setTaskDurations={setTaskDurations} />
        <TimeRange timeRange={timeRange} setTimeRange={setTimeRange} />
      </Settings>

      <style jsx>{`
        #gantt-container {
          --color-text: #272a2e;
          --color-primary-dark: #0195e4;
          --color-primary-light: #9ddcff;
          --color-secondary: #4be35a;
          --color-tertiary: #f7f7f7;
          --color-orange: #ef5350;
          --color-outline: #e9eaeb;
          --border-radius: 5px;
          --cell-height: 40px;
          padding: 1rem;
        }
      `}</style>
    </div>
  );
}
