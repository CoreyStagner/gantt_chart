import { useState, useEffect, useRef } from 'react';
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

  useEffect(() => {
    getCurrentProjectData().then((data) => {
      // NOTE: Still working on the below two values and merging them into one object.
      let [defaultProjectData, userProjectData] = data;
      setDefaultProjectData(defaultProjectData);
      setUserProjectData(userProjectData);
    });
    client({ endpoint: 'data.json' }).then(
      (data) => {
        setTasks(data?.tasks);
        setUpdatedTasks(data?.tasks);
        setTaskDurations(data?.taskDurations);
      },
      (error) => {
        console.error('Error: ', error);
      }
    );
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
    <div id="gantt-container">
      <Grid>
        <Tasks
          tasks={updatedTasks}
          taskDurations={taskDurations}
          setTasks={setTasks}
          setTaskDurations={setTaskDurations}
          handleTaskDateView={handleTaskDateView}
          onFilter={handleFilterTasks}
        />
        <TimeTable
          timeRange={timeRange}
          tasks={updatedTasks}
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
          --min-cell-height: 40px;
          padding: 1rem;
          // Colors
          --color-red-50: #ffebee;
          --color-red-100: #ffcdd2;
          --color-red-200: #ef9a9a;
          --color-red-300: #e57373;
          --color-red-400: #ef5350;
          --color-red-500: #f44336;
          --color-red-600: #e53935;
          --color-red-700: #d32f2f;
          --color-red-800: #c62828;
          --color-red-900: #b71c1c;
          --color-red-A100: #ff8a80;
          --color-red-A200: #ff5252;
          --color-red-A400: #ff1744;
          --color-red-A700: #d50000;
          --color-pink-50: #fce4ec;
          --color-pink-100: #f8bbd0;
          --color-pink-200: #f48fb1;
          --color-pink-300: #f06292;
          --color-pink-400: #ec407a;
          --color-pink-500: #e91e63;
          --color-pink-600: #d81b60;
          --color-pink-700: #c2185b;
          --color-pink-800: #ad1457;
          --color-pink-900: #880e4f;
          --color-pink-A100: #ff80ab;
          --color-pink-A200: #ff4081;
          --color-pink-A400: #f50057;
          --color-pink-A700: #c51162;
          --color-purple-50: #f3e5f5;
          --color-purple-100: #e1bee7;
          --color-purple-200: #ce93d8;
          --color-purple-300: #ba68c8;
          --color-purple-400: #ab47bc;
          --color-purple-500: #9c27b0;
          --color-purple-600: #8e24aa;
          --color-purple-700: #7b1fa2;
          --color-purple-800: #6a1b9a;
          --color-purple-900: #4a148c;
          --color-purple-A100: #ea80fc;
          --color-purple-A200: #e040fb;
          --color-purple-A400: #d500f9;
          --color-purple-A700: #aa00ff;
          --color-deeppurple-50: #ede7f6;
          --color-deeppurple-100: #d1c4e9;
          --color-deeppurple-200: #b39ddb;
          --color-deeppurple-300: #9575cd;
          --color-deeppurple-400: #7e57c2;
          --color-deeppurple-500: #673ab7;
          --color-deeppurple-600: #5e35b1;
          --color-deeppurple-700: #512da8;
          --color-deeppurple-800: #4527a0;
          --color-deeppurple-900: #311b92;
          --color-deeppurple-A100: #b388ff;
          --color-deeppurple-A200: #7c4dff;
          --color-deeppurple-A400: #651fff;
          --color-deeppurple-A700: #6200ea;
          --color-indigo-50: #e8eaf6;
          --color-indigo-100: #c5cae9;
          --color-indigo-200: #9fa8da;
          --color-indigo-300: #7986cb;
          --color-indigo-400: #5c6bc0;
          --color-indigo-500: #3f51b5;
          --color-indigo-600: #3949ab;
          --color-indigo-700: #303f9f;
          --color-indigo-800: #283593;
          --color-indigo-900: #1a237e;
          --color-indigo-A100: #8c9eff;
          --color-indigo-A200: #536dfe;
          --color-indigo-A400: #3d5afe;
          --color-indigo-A700: #304ffe;
          --color-pink-50: #e3f2fd;
          --color-pink-100: #bbdefb;
          --color-pink-200: #90caf9;
          --color-pink-300: #64b5f6;
          --color-pink-400: #42a5f5;
          --color-pink-500: #2196f3;
          --color-pink-600: #1e88e5;
          --color-pink-700: #1976d2;
          --color-pink-800: #1565c0;
          --color-pink-900: #0d47a1;
          --color-pink-A100: #82b1ff;
          --color-pink-A200: #448aff;
          --color-pink-A400: #2979ff;
          --color-pink-A700: #2962ff;
          --color-lightblue-50: #e1f5fe;
          --color-lightblue-100: #b3e5fc;
          --color-lightblue-200: #81d4fa;
          --color-lightblue-300: #4fc3f7;
          --color-lightblue-400: #29b6f6;
          --color-lightblue-500: #03a9f4;
          --color-lightblue-600: #039be5;
          --color-lightblue-700: #0288d1;
          --color-lightblue-800: #0277bd;
          --color-lightblue-900: #01579b;
          --color-lightblue-A100: #80d8ff;
          --color-lightblue-A200: #40c4ff;
          --color-lightblue-A400: #00b0ff;
          --color-lightblue-A700: #0091ea;
          --color-cyan-50: #e0f7fa;
          --color-cyan-100: #b2ebf2;
          --color-cyan-200: #80deea;
          --color-cyan-300: #4dd0e1;
          --color-cyan-400: #26c6da;
          --color-cyan-500: #00bcd4;
          --color-cyan-600: #00acc1;
          --color-cyan-700: #0097a7;
          --color-cyan-800: #00838f;
          --color-cyan-900: #006064;
          --color-cyan-A100: #84ffff;
          --color-cyan-A200: #18ffff;
          --color-cyan-A400: #00e5ff;
          --color-cyan-A700: #00b8d4;
          --color-teal-50: #e0f2f1;
          --color-teal-100: #b2dfdb;
          --color-teal-200: #80cbc4;
          --color-teal-300: #4db6ac;
          --color-teal-400: #26a69a;
          --color-teal-500: #009688;
          --color-teal-600: #00897b;
          --color-teal-700: #00796b;
          --color-teal-800: #00695c;
          --color-teal-900: #004d40;
          --color-teal-A100: #a7ffeb;
          --color-teal-A200: #64ffda;
          --color-teal-A400: #1de9b6;
          --color-teal-A700: #00bfa5;
          --color-green-50: #e8f5e9;
          --color-green-100: #c8e6c9;
          --color-green-200: #a5d6a7;
          --color-green-300: #81c784;
          --color-green-400: #66bb6a;
          --color-green-500: #4caf50;
          --color-green-600: #43a047;
          --color-green-700: #388e3c;
          --color-green-800: #2e7d32;
          --color-green-900: #1b5e20;
          --color-green-A100: #b9f6ca;
          --color-green-A200: #69f0ae;
          --color-green-A400: #00e676;
          --color-green-A700: #00c853;
          --color-lightgreen-50: #f1f8e9;
          --color-lightgreen-100: #dcedc8;
          --color-lightgreen-200: #c5e1a5;
          --color-lightgreen-300: #aed581;
          --color-lightgreen-400: #9ccc65;
          --color-lightgreen-500: #8bc34a;
          --color-lightgreen-600: #7cb342;
          --color-lightgreen-700: #689f38;
          --color-lightgreen-800: #558b2f;
          --color-lightgreen-900: #33691e;
          --color-lightgreen-A100: #ccff90;
          --color-lightgreen-A200: #b2ff59;
          --color-lightgreen-A400: #76ff03;
          --color-lightgreen-A700: #64dd17;
          --color-lime-50: #f9fbe7;
          --color-lime-100: #f0f4c3;
          --color-lime-200: #e6ee9c;
          --color-lime-300: #dce775;
          --color-lime-400: #d4e157;
          --color-lime-500: #cddc39;
          --color-lime-600: #c0ca33;
          --color-lime-700: #afb42b;
          --color-lime-800: #9e9d24;
          --color-lime-900: #827717;
          --color-lime-A100: #f4ff81;
          --color-lime-A200: #eeff41;
          --color-lime-A400: #c6ff00;
          --color-lime-A700: #aeea00;
          --color-yellow-50: #fffde7;
          --color-yellow-100: #fff9c4;
          --color-yellow-200: #fff59d;
          --color-yellow-300: #fff176;
          --color-yellow-400: #ffee58;
          --color-yellow-500: #ffeb3b;
          --color-yellow-600: #fdd835;
          --color-yellow-700: #fbc02d;
          --color-yellow-800: #f9a825;
          --color-yellow-900: #f57f17;
          --color-yellow-A100: #ffff8d;
          --color-yellow-A200: #ffff00;
          --color-yellow-A400: #ffea00;
          --color-yellow-A700: #ffd600;
          --color-amber-50: #fff8e1;
          --color-amber-100: #ffecb3;
          --color-amber-200: #ffe082;
          --color-amber-300: #ffd54f;
          --color-amber-400: #ffca28;
          --color-amber-500: #ffc107;
          --color-amber-600: #ffb300;
          --color-amber-700: #ffa000;
          --color-amber-800: #ff8f00;
          --color-amber-900: #ff6f00;
          --color-amber-A100: #ffe57f;
          --color-amber-A200: #ffd740;
          --color-amber-A400: #ffc400;
          --color-amber-A700: #ffab00;
          --color-orange-50: #fff3e0;
          --color-orange-100: #ffe0b2;
          --color-orange-200: #ffcc80;
          --color-orange-300: #ffb74d;
          --color-orange-400: #ffa726;
          --color-orange-500: #ff9800;
          --color-orange-600: #fb8c00;
          --color-orange-700: #f57c00;
          --color-orange-800: #ef6c00;
          --color-orange-900: #e65100;
          --color-orange-A100: #ffd180;
          --color-orange-A200: #ffab40;
          --color-orange-A400: #ff9100;
          --color-orange-A700: #ff6d00;
          --color-deeporange-50: #fbe9e7;
          --color-deeporange-100: #ffccbc;
          --color-deeporange-200: #ffab91;
          --color-deeporange-300: #ff8a65;
          --color-deeporange-400: #ff7043;
          --color-deeporange-500: #ff5722;
          --color-deeporange-600: #f4511e;
          --color-deeporange-700: #e64a19;
          --color-deeporange-800: #d84315;
          --color-deeporange-900: #bf360c;
          --color-deeporange-A100: #ff9e80;
          --color-deeporange-A200: #ff6e40;
          --color-deeporange-A400: #ff3d00;
          --color-deeporange-A700: #dd2c00;
          --color-brown-50: #efebe9;
          --color-brown-100: #d7ccc8;
          --color-brown-200: #bcaaa4;
          --color-brown-300: #a1887f;
          --color-brown-400: #8d6e63;
          --color-brown-500: #795548;
          --color-brown-600: #6d4c41;
          --color-brown-700: #5d4037;
          --color-brown-800: #4e342e;
          --color-brown-900: #3e2723;
          --color-gray-50: #fafafa;
          --color-gray-100: #f5f5f5;
          --color-gray-200: #eeeeee;
          --color-gray-300: #e0e0e0;
          --color-gray-400: #bdbdbd;
          --color-gray-500: #9e9e9e;
          --color-gray-600: #757575;
          --color-gray-700: #616161;
          --color-gray-800: #424242;
          --color-gray-900: #212121;
          --color-bluegray-50: #eceff1;
          --color-bluegray-100: #cfd8dc;
          --color-bluegray-200: #b0bec5;
          --color-bluegray-300: #90a4ae;
          --color-bluegray-400: #78909c;
          --color-bluegray-500: #607d8b;
          --color-bluegray-600: #546e7a;
          --color-bluegray-700: #455a64;
          --color-bluegray-800: #37474f;
          --color-bluegray-900: #263238;
          --color-black: #000000;
          --color-white: #ffffff;
          --color-transparent-05: rgba(0, 0, 0, 0.05);
          --color-transparent-33: rgba(0, 0, 0, 0.33);
          --color-red-transparent-33: rgba(255, 0, 0, 0.33);
        }
      `}</style>
    </div>
  );
}
