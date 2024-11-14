import { useState, useEffect, useRef } from 'react';
// import { client } from '../../utils/fetchWrapper';

import {
  monthDiff,
  getDaysInMonth,
  getDayOfWeek,
  createFormattedDateFromStr,
  createFormattedDateFromDate,
  getDateTimeObject,
  dayDiff,
} from '../../helpers/dateFunctions';
import { months } from '../../constants';

export default function TimeTable({
  timeRange,
  tasks,
  taskDurations,
  setTaskDurations,
}) {
  const containerRef = useRef(null);
  const [taskDurationElDraggedId, setTaskDurationElDraggedId] = useState(null);
  const [sprintDateRanges, setSprintDateRanges] = useState([]);
  const currentDate = getDateTimeObject();
  if (!currentDate) {
    console.log(
      'invalid date. TODO: update where it is used to prevent errors.'
    );
  }

  // for dynamic css styling
  const styles = {
    ganttTimePeriod: {
      display: 'grid',
      gridAutoFlow: 'column',
      gridAutoColumns: 'minmax(30px, 1fr)',
      outline: '0.5px solid var(--color-outline)',
      textAlign: 'center',
      minHeight: 'var(--min-cell-height)',
    },
    ganttTimePeriodSpan: {
      margin: 'auto',
    },
    ganttTimePeriodCell: {
      position: 'relative',
      outline: '0.5px solid var(--color-outline)',
      marginTop: '0.5px',
    },
    taskDuration: {
      position: 'absolute',
      minHeight: 'calc(var(--min-cell-height) - 1px)',
      zIndex: '1',
      background:
        'linear-gradient(90deg, var(--color-primary-light) 0%, var(--color-primary-dark) 100%)',
      borderRadius: 'var(--border-radius)',
      boxShadow: '3px 3px 3px rgba(0, 0, 0, 0.05)',
      cursor: 'move',
    },
  };

  // creating rows
  const startMonth = new Date(
    parseInt(timeRange.fromSelectYear),
    timeRange.fromSelectMonth
  );
  const endMonth = new Date(
    parseInt(timeRange.toSelectYear),
    timeRange.toSelectMonth
  );

  // TODO: get this from the project files
  useEffect(() => {
    let sprintData = {
      sprintLength: 14,
      sprintLengthUnit: 'days',
      sprintStartDay: 1,
      sprintStartMonth: 1,
      sprintStartYear: 2024,
      sprintNamePrefix: 'Sprint - ',
    };

    const createSprintDates = (customSprintData) => {
      let sprintConfig = customSprintData || sprintData;
      let sprintDates = [];
      // Create the first date to start create sprints from
      let yearStart = new Date(
        sprintConfig.sprintStartYear,
        sprintConfig.sprintStartMonth - 1, // since it is 0 indexed
        sprintConfig.sprintStartDay
      );
      // Start on the day of the sprint year with the first sprint
      let sprintStart = new Date(yearStart);
      let sprintStartMod = new Date(sprintStart);
      let sprintEnd = new Date(
        sprintStartMod.setDate(
          sprintStartMod.getDate() + sprintConfig.sprintLength - 1
        )
      );
      let sprintEndMod = new Date(sprintEnd);
      sprintDates.push({
        i: 1,
        start: sprintStart,
        end: sprintEnd,
      });
      // iterate over 25 more times for the moment
      for (let i = 1; i < 26; i++) {
        const { start, end } = JSON.parse(
          JSON.stringify(sprintDates[sprintDates.length - 1])
        );
        // create mutabable copies of the start and end dates
        const startDate = new Date(start);
        const endDate = new Date(end);
        // Create the new start and end date objects
        const newStart = new Date(
          startDate.setDate(startDate.getDate() + sprintConfig.sprintLength)
        );
        const newEnd = new Date(
          endDate.setDate(endDate.getDate() + sprintConfig.sprintLength)
        );
        // push the new sprint object to the sprintDates array
        sprintDates.push({
          i: i + 1,
          start: newStart,
          end: newEnd,
        });
      }
      setSprintDateRanges(sprintDates);
    };

    createSprintDates();
    updateCellHeights();
  }, []);

  /**
   * Find the sprint that this date belongs in.
   *
   * @param {Number} year day's year
   * @param {Number} month day's month
   * @param {Number} day day's day
   * @returns {Number} sprint number
   */
  const determineSprint = (year, month, day) => {
    const testingDate = new Date(year, month, day);
    // make sure that we have a length of sprintDateRanges
    if (!sprintDateRanges?.length) return;
    // find the sprint that the date falls within
    const foundSprint = sprintDateRanges.filter(
      (sprint) => sprint.start <= testingDate && sprint.end >= testingDate
    );
    // Deconstruct the sprint id number
    let sprint = foundSprint[0]?.i;
    // return the sprint number if sprint is found
    if (!sprint) return;
    return sprint;
  };

  const updateCellHeights = () => {
    // const toChange = containerRef.current.querySelectorAll('.task_row_content');
    // toChange.forEach((el) => {
    //   // find relevant header
    //   const target = el.classList[1].split('-')[1];
    //   if (!target) {
    //     console.error('No target found');
    //   }
    //   console.log('target row', target);
    //   // const header = headerRef.querySelector(`.task_row_header-${target}`);
    //   // console.log(header);
    // });
  };

  const numMonths = monthDiff(startMonth, endMonth) + 1;
  let month = new Date(startMonth);

  let monthRows = [];
  let dayRows = [];
  let dayRow = [];
  let weekRows = [];
  let weekRow = [];
  let taskRows = [];
  let taskRow = [];

  for (let i = 0; i < numMonths; i++) {
    // create month rows
    monthRows.push(
      <div
        key={i}
        data-month={startMonth.getMonth() + 1 + i}
        style={{ ...styles.ganttTimePeriod, outline: '1px solid' }}
      >
        <span style={styles.ganttTimePeriodSpan}>
          {months[month.getMonth()] + ' ' + month.getFullYear()}
        </span>
      </div>
    );

    // create day and week rows
    const numDays = getDaysInMonth(month.getFullYear(), month.getMonth() + 1);
    const currYear = month.getFullYear();
    const currMonth = month.getMonth() + 1;

    for (let j = 1; j <= numDays; j++) {
      let mnth = new Date(startMonth);
      const curYear = mnth.getFullYear();
      const curMonth = mnth.getMonth() + 1;
      // color weekend cells differently
      const dayOfTheWeek = getDayOfWeek(curYear, curMonth - 1, j - 1);

      // Create Day of the Month cells
      dayRow.push(
        <div
          key={j}
          data-month={startMonth.getMonth() + 1}
          data-sprint={determineSprint(
            month.getFullYear(),
            startMonth.getMonth(),
            j
          )}
          data-day={j}
          style={{
            ...styles.ganttTimePeriod,
            outline: '1px solid var(--color-transparent-33)', // TODO: Create constant for this color
            backgroundColor:
              j === currentDate.day &&
              startMonth.getMonth() + 1 + i === currentDate.month
                ? 'var(--color-red-transparent-33)' // TODO: Create constant for this color
                : determineSprint(
                    month.getFullYear(),
                    startMonth.getMonth(),
                    j
                  ) %
                    2 ===
                  0
                ? 'var(--color-gray-500)' // TODO: Create constant for this color
                : 'var(--color-gray-400)', // TODO: Create constant for this color
            color: 'var(--color-black)', // TODO: Create constant for this color
          }}
        >
          <span style={styles.ganttTimePeriodSpan}>{j}</span>
        </div>
      );

      // Create Day of the Week rows
      weekRow.push(
        <div
          key={j}
          data-month={startMonth.getMonth() + 1}
          style={{
            ...styles.ganttTimePeriod,
            outline: '1px solid var(--color-transparent-33)', // TODO: Create constant for this color
            fontSize: '0.5rem',
          }}
        >
          <span
            style={{
              ...styles.ganttTimePeriodSpan,
              color: 'var(--color-gray-600)', // TODO: Create constant for this color
            }}
          >
            {getDayOfWeek(currYear, currMonth - 1, j - 1)}
          </span>
        </div>
      );
    }

    // Create Day of the Month cells
    dayRows.push(
      <div
        key={i}
        data-month={startMonth.getMonth() + 1 + i}
        style={{ ...styles.ganttTimePeriod, outline: 'none' }}
      >
        {dayRow}
      </div>
    );

    // Create Day of the Week cells
    weekRows.push(
      <div
        key={i}
        data-month={startMonth.getMonth() + 1 + i}
        style={{ ...styles.ganttTimePeriod, outline: 'none' }}
      >
        {weekRow}
      </div>
    );

    dayRow = [];
    weekRow = [];
    month.setMonth(month.getMonth() + 1);
  }

  // create task rows
  if (tasks) {
    tasks.forEach((task) => {
      let mnth = new Date(startMonth);
      for (let i = 0; i < numMonths; i++) {
        const curYear = mnth.getFullYear();
        const curMonth = mnth.getMonth() + 1;

        const numDays = getDaysInMonth(curYear, curMonth);

        for (let j = 1; j <= numDays; j++) {
          // color weekend cells differently
          const dayOfTheWeek = getDayOfWeek(curYear, curMonth - 1, j - 1);
          // add task and date data attributes
          const formattedDate = createFormattedDateFromStr(
            curYear,
            curMonth,
            j
          );

          taskRow.push(
            <div
              key={`${task.id}-${j}`}
              style={{
                ...styles.ganttTimePeriodCell,
                backgroundColor:
                  j === currentDate.day &&
                  startMonth.getMonth() + 1 + i === currentDate.month
                    ? 'var(--color-red-transparent-33)' // TODO: Create constant for this color
                    : dayOfTheWeek === 'S'
                    ? 'var(--color-tertiary)'
                    : 'var(--color-white)', // TODO: Create constant for this color
              }}
              data-task={task?.id}
              data-month={startMonth.getMonth() + 1}
              data-day={j}
              data-date={formattedDate}
              onDrop={onTaskDurationDrop}
            >
              {taskDurations.map((el, i) => {
                if (el?.task === task?.id && el?.start === formattedDate) {
                  return (
                    <div
                      key={`${i}-${el?.id}`}
                      draggable="true"
                      tabIndex="0"
                      onDragStart={() => handleDragStart(el?.id)}
                      style={{
                        ...styles.taskDuration,
                        width: `calc(${dayDiff(
                          el?.start,
                          el?.end
                        )} * 100% - 1px)`,
                        opacity:
                          taskDurationElDraggedId === el?.id ? '0.5' : '1',
                        color: 'white',
                        fontSize: '0.75rem',
                        display: 'flex',
                        alignItems: 'top',
                        justifyContent: 'center',
                        overflow: 'hidden',
                      }}
                      onDoubleClick={(e) => console.log('Double Clicked', e)}
                      onClick={(e) => viewTask(e, el?.id)}
                      onKeyDown={(e) => deleteTaskDuration(e, el?.id)}
                    >
                      {task?.name}
                    </div>
                  );
                }
              })}
            </div>
          );
        }

        taskRows.push(
          <div
            key={i + '-' + task.id}
            className={`task_row_content task_row_content-${task.id}`}
            style={styles.ganttTimePeriod}
          >
            {taskRow}
          </div>
        );

        taskRow = [];
        mnth.setMonth(mnth.getMonth() + 1);
      }
    });
  }

  function viewTask(e, id) {
    console.log('view task', id);
  }

  function deleteTaskDuration(e, id) {
    if (e.key === 'Delete' || e.key === 'Backspace') {
      // update taskDurations
      const newTaskDurations = taskDurations.filter(
        (taskDuration) => taskDuration.id !== id
      );
      // update state (if data on backend - make API request to update data)
      setTaskDurations(newTaskDurations);
    }
  }

  function handleDragStart(taskDurationId) {
    setTaskDurationElDraggedId(taskDurationId);
  }

  function onTaskDurationDrop(e) {
    const targetCell = e.target;
    // prevent adding on another taskDuration
    if (!targetCell.hasAttribute('draggable')) {
      // find task
      const taskDuration = taskDurations.filter(
        (taskDuration) => taskDuration.id === taskDurationElDraggedId
      )[0];

      const dataTask = targetCell.getAttribute('data-task');
      const dataDate = targetCell.getAttribute('data-date');

      const daysDuration = dayDiff(taskDuration.start, taskDuration.end);

      // get new task values
      // get start, calc end using daysDuration - make Date objects - change taskDurations
      const newTask = parseInt(dataTask);
      const newStartDate = new Date(dataDate);
      let newEndDate = new Date(dataDate);
      newEndDate.setDate(newEndDate.getDate() + daysDuration - 1);

      // update taskDurations
      taskDuration.task = newTask;
      taskDuration.start = createFormattedDateFromDate(newStartDate);
      taskDuration.end = createFormattedDateFromDate(newEndDate);

      const newTaskDurations = taskDurations.filter(
        (taskDuration) => taskDuration.id !== taskDurationElDraggedId
      );
      newTaskDurations.push(taskDuration);

      // update state (if data on backend - make API request to update data)
      setTaskDurations(newTaskDurations);
    }
    setTaskDurationElDraggedId(null);
  }

  // Hightlight current date
  if (typeof window !== 'undefined') {
    const currentDateDiv = document.querySelector(
      '[data-month="' +
        currentDate.month +
        '"][data-day="' +
        currentDate.day +
        '"]'
    );
    // if (currentDateDiv) {
    //   currentDateDiv.style.backgroundColor = 'var(--color-red-transparent-33)'; // TODO: Create constant for this color
    // }
  }

  return (
    <div
      ref={containerRef}
      id="gantt-grid-container__time"
      style={{ gridTemplateColumns: `repeat(${numMonths}, 1fr)` }}
    >
      {monthRows}
      {weekRows}
      {dayRows}
      <div
        id="gantt-time-period-cell-container"
        style={{
          gridColumn: '1/-1',
          display: 'grid',
          gridTemplateColumns: `repeat(${numMonths}, 1fr)`,
          paddingLeft: '0.5px',
        }}
        onDragOver={(e) => e.preventDefault()}
      >
        {taskRows}
      </div>
      <style jsx>{`
        #gantt-grid-container__time {
          display: grid;
          overflow-x: auto;
          outline: 0.5px solid var(--color-outline);
        }

        .taskDuration {
          position: absolute;
          minheight: calc(var(--min-cell-height) / 3);
          top: calc(var(--min-cell-height) / 3);
          z-index: 1;
          background: linear-gradient(
            90deg,
            var(--color-primary-light) 0%,
            var(--color-primary-dark) 100%
          );
          border-radius: 2px;
          box-shadow: 3px 3px 3px rgba(0, 0, 0, 0.05);
          cursor: move;
        }

        .taskDuration:focus {
          outline: 1px solid black;
        }

        .dragging {
          opacity: 0.5;
        }
      `}</style>
    </div>
  );
}
