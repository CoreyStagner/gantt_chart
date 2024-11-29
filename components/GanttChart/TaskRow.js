import { useEffect, useState, useRef } from 'react';
import Modal from './Modal';
import { Button } from './../Button/Button';
import { TimeTable } from './TimeTable';
import {
  monthDiff,
  getDaysInMonth,
  getDayOfWeek,
  createFormattedDateFromStr,
  createFormattedDateFromDate,
  getDateTimeObject,
  dayDiff,
} from '../../helpers/dateFunctions';
// import { TimeDuration } from './TimeDuration';

// import TimeRange from './TimeRange';
import Select from './Select';
import { client } from '../../utils/fetchWrapper';

const styles = `
  .gantt_task_row {
    display: flex;
    flex-direction: row;
    align-items: flex-start;
  }

  .gantt_task_row-header {
    display: flex;
    flex-basis: 30%;
    justify-content: space-between;
  }

  .gantt_task_row-time {
    display: flex;
    flex: 1 0 70%;
  }

  .taskName {
    width: 100%;
  }
`;

// for dynamic css styling
const customStyles = {
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
    width: '30px',
    minHeight: 'var(--min-cell-height)',
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
  header: {
    display: 'flex',
    flexBasis: '30%',
    justifyContent: 'space-between',
  },
};

const TimeDuration = ({ issue, timeRange }) => {
  // TODO: Implement we can use the day for more granular viewing
  // Configure the time range start and end months
  const startMonth = new Date(
    parseInt(timeRange.fromSelectYear),
    timeRange.fromSelectMonth
  );
  const endMonth = new Date(
    parseInt(timeRange.toSelectYear),
    timeRange.toSelectMonth
  );

  // creating rows that span across each month provided in the time range
  let monthRows = [];
  const numMonths = monthDiff(startMonth, endMonth);

  let date_startMonth = new Date(startMonth);
  for (let i = 0; i <= numMonths; i++) {
    const curYear = date_startMonth.getFullYear();
    const curMonth = date_startMonth.getMonth() + 1;

    const currentDate = getDateTimeObject();
    if (!currentDate) {
      console.log(
        'invalid date. TODO: update where it is used to prevent errors.'
      );
    }

    let taskRows = [];
    let taskRow = [];

    const numDays = getDaysInMonth(curYear, curMonth);

    for (let j = 1; j <= numDays; j++) {
      // color weekend cells differently
      const dayOfTheWeek = getDayOfWeek(curYear, curMonth - 1, j - 1);
      // add task and date data attributes
      const formattedDate = createFormattedDateFromStr(curYear, curMonth, j);
      let timelineBlock = false;
      // We will start with one and add how many days the task is so we overcome resolve that we need it to be zero indexed.
      let dateDiff = 1;
      if (issue.startDate && issue.endDate) {
        const startDate = new Date(
          createFormattedDateFromStr(
            issue.startDate.y,
            issue.startDate.m,
            issue.startDate.d - 1
          )
        );
        const endDate = new Date(
          createFormattedDateFromStr(
            issue.endDate.y,
            issue.endDate.m,
            issue.endDate.d
          )
        );
        const currentDate = new Date(formattedDate);
        if (startDate.getTime() === currentDate.getTime()) {
          // Found a timeline block for this issue
          timelineBlock = true;
          dateDiff += issue.endDate.d - issue.startDate.d;
        }
      }
      // && new Date(
      //   createFormattedDateFromStr(
      //     issue.startDate.y,
      //     issue.startDate.m,
      //     issue.startDate.d
      //   )
      // ) <=
      //   formattedDate >=
      //   new Date(
      //     createFormattedDateFromStr(
      //       issue.endDate.y,
      //       issue.endDate.m,
      //       issue.endDate.d
      //     )
      //   );
      taskRow.push(
        <div
          key={`${issue.id}-${j}`}
          style={{
            ...customStyles.ganttTimePeriodCell,
            backgroundColor:
              j === currentDate.day &&
              startMonth.getMonth() + 1 + i === currentDate.month
                ? 'var(--color-red-transparent-33)'
                : dayOfTheWeek === 'S'
                ? 'var(--color-tertiary)'
                : 'var(--color-white)',
          }}
          data-task={issue?.id}
          data-month={startMonth.getMonth() + 1}
          data-day={j}
          data-date={formattedDate}
          // onDrop={onTaskDurationDrop}
        >
          {/* Create task on timeline */}
          {timelineBlock ? (
            <div
              key={`time-druration-${issue.id}-${Math.random()}`}
              draggable="true"
              tabIndex="0"
              // onDragStart={() => handleDragStart(issue?.id)}
              style={{
                ...styles.taskDuration,
                width: `calc(${dateDiff} * 100% - 1px)`,
                // opacity: taskDurationissueDraggedId === issue?.id ? '0.5' : '1',
                color: 'white',
                background: 'blue',
                fontSize: '0.75rem',
                display: 'flex',
                alignItems: 'top',
                // justifyContent: 'center',
                overflow: 'hidden',
                position: 'relative',
                zIndex: '1',
                textOverflow: 'ellipsis',
                // whiteSpace: 'nowrap',
                alignItems: 'center',
                height: '40px', // TODO: Should we make this a variable so one change for all?
              }}
              onDoubleClick={(e) => console.log('Double Clicked', e)}
              // onClick={(e) => viewTask(e, el?.id)}
              // onKeyDown={(e) => deleteTaskDuration(e, el?.id)}
            >
              {issue?.name}
            </div>
          ) : (
            false
          )}
          {/* {issueDurations.map((el, i) => {
            if (el?.task === task?.id && el?.start === formattedDate) {
              return (
                <div
                  key={`${i}-${el?.id}`}
                  draggable="true"
                  tabIndex="0"
                  onDragStart={() => handleDragStart(el?.id)}
                  style={{
                    ...styles.taskDuration,
                    width: `calc(${dayDiff(el?.start, el?.end)} * 100% - 1px)`,
                    opacity: taskDurationElDraggedId === el?.id ? '0.5' : '1',
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
          })} */}
        </div>
      );
    }
    taskRows.push(
      <div key={`table-rows-${i}-${issue.id}`}>
        <div
          className={`task_row_content task_row_content-${issue.id}`}
          style={customStyles.ganttTimePeriod}
        >
          {taskRow}
        </div>
        {/* {task.children?.map((child) => {
          return (
            <div
              key={`child_task-${child.id}-${i}`}
              // style={{
              //   ...styles.ganttTimePeriodCell,
              //   backgroundColor:
              //     j === currentDate.day &&
              //     startMonth.getMonth() + 1 + i === currentDate.month
              //       ? 'var(--color-red-transparent-33)' // TODO: Create constant for this color
              //       : dayOfTheWeek === 'S'
              //       ? 'var(--color-tertiary)'
              //       : 'var(--color-white)', // TODO: Create constant for this color
              // }}
              // data-task={task?.id}
              // data-month={startMonth.getMonth() + 1}
              // data-day={j}
              // data-date={formattedDate}
              // onDrop={onTaskDurationDrop}
            >
              {taskDurations.map((el, i) => {
                if (el?.task === child?.id) {
                  return (
                    <div
                      key={`${i}-${el?.id}`}
                      // draggable="true"
                      // tabIndex="0"
                      // onDragStart={() => handleDragStart(el?.id)}
                      // style={{
                      //   ...styles.taskDuration,
                      //   width: `calc(${dayDiff(
                      //     el?.start,
                      //     el?.end
                      //   )} * 100% - 1px)`,
                      //   opacity:
                      //     taskDurationElDraggedId === el?.id ? '0.5' : '1',
                      //   color: 'white',
                      //   fontSize: '0.75rem',
                      //   display: 'flex',
                      //   alignItems: 'top',
                      //   justifyContent: 'center',
                      //   overflow: 'hidden',
                      // }}
                      // onDoubleClick={(e) => console.log('Double Clicked', e)}
                      // onClick={(e) => viewTask(e, el?.id)}
                      // onKeyDown={(e) => deleteTaskDuration(e, el?.id)}
                    >
                      {child?.name}
                    </div>
                  );
                }
              })}
            </div>
          );
        })} */}
      </div>
    );
    monthRows.push(taskRows);
    taskRow = [];
    date_startMonth.setMonth(date_startMonth.getMonth() + 1);
  }
  return monthRows;
};

export default function TaskRow({ issue, timeRange }) {
  const startMonth = new Date(
    parseInt(timeRange.fromSelectYear),
    timeRange.fromSelectMonth
  );
  const endMonth = new Date(
    parseInt(timeRange.toSelectYear),
    timeRange.toSelectMonth
  );
  const numMonths = monthDiff(startMonth, endMonth) + 1;

  return (
    <div
      key={`${issue?.id}-${issue.name}`}
      id={`task_row_header task_row_header-${issue?.id}`}
      className="gantt_task_row"
    >
      <style jsx>{styles}</style>
      <div
        className="gantt_task_row-header"
        style={{ ...customStyles.header, flexBasis: '30%', flex: '0 0 30%' }}
      >
        <Button
          modifier="icon_eye"
          className="focusTask"
          type="button"
          data={{
            id: issue.id,
          }}
        ></Button>
        <span className="taskName">{issue?.name}</span>
        <button className="deleteTask" type="button" data-task-id={issue?.id}>
          x
        </button>
      </div>
      <div
        className="gantt_task_row-time_container"
        style={{ display: 'flex', flexBasis: '70%' }}
      >
        <div
          className="gantt_task_row-time"
          style={{
            gridTemplateColumns: `repeat(${numMonths}, 1fr)`,
            display: 'grid',
          }}
        >
          <TimeDuration issue={issue} timeRange={timeRange} />
        </div>
      </div>
    </div>
  );
}
