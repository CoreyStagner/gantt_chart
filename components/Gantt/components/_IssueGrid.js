// React Imports
import React, { useState, useEffect } from 'react';
// Material Imports
import { styled } from '@mui/material/styles';
// Helper Function Imports
import {
  dayDiff,
  monthDiff,
  getDaysInMonth,
  getDayOfWeek,
  createFormattedDateFromStr,
  createFormattedDateFromObj,
  createObjFromFormattedDate,
  getDateTimeObject,
} from '../../../helpers/dateFunctions';

// TODO: Move this to a global location
const colorsMap = {
  TASK: 'var(--color-deeporange-200)',
  PROJ: 'var(--color-teal-300)',
  STORY: 'var(--color-tertiary)',
};

// TODO: Move this to a global location
const sprintData = [
  {
    name: 'Sprint 24.1',
    startDate: '2024-12-01',
    endDate: '2024-12-14',
  },
  {
    name: 'Sprint 24.2',
    startDate: '2024-12-15',
    endDate: '2024-12-28',
  },
];

// Stylized Components
// TODO: Update the styles, and convert to custom styles
const styles = `
  .gantt_task_row {
    display: flex;
    flex-direction: row;
    align-items: flex-start;
  }

  .gantt_task_row-time {
    display: flex;
    flex: 1 0 70%;
  }
`;

// TODO: Update the styles
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

const handleUpdateTaskStartEndDates = (issue, newDate) => {
  // Get initial diff in days between start and end date
  const initialDiff = dayDiff(
    createFormattedDateFromObj(issue.startDate),
    createFormattedDateFromObj(issue.endDate)
  );
  // Create new start and end date objects
  const updatedStartDate = createObjFromFormattedDate(newDate);
  const updatedEndDate = createObjFromFormattedDate(newDate, initialDiff);
  // Create new object with updated start and end dates
  const updatedIssue = {
    ...issue,
    startDate: updatedStartDate,
    endDate: updatedEndDate,
  };

  // post data to API
  fetch(`/api/update/issue/`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(updatedIssue),
  }).then((response) => {
    if (response.ok) {
      console.log('Task updated successfully');
    } else {
      console.error('Task update failed');
    }
  });
};

const TimeDuration = ({ issue, timeRange }) => {
  const [dragging, setDragging] = useState(false);
  const [over, setOver] = useState(undefined);
  const handleDrag = (e) => {
    setDragging(true);
  };
  const handleDragOver = (e) => {
    if (!e.target.dataset.date) return;
    setOver({
      task: e.target.dataset.task,
      date: e.target.dataset.date,
    });
    e.stopPropagation();
    e.preventDefault();
  };
  const handleDrop = (e) => {
    e.preventDefault();
    console.log('update issue', issue.id, 'to', over.date);
    handleUpdateTaskStartEndDates(issue, over.date);
    // TODO: Update the issue with the new date
    setDragging(false);
    setOver(undefined);
  };
  /**
   * This function will open the modal for the task that is double clicked.
   *
   * @param {HTMLDoubleClickEvent} e
   * @param {Object} issue reference to the issue
   * @returns {void}
   */
  // const handleTimeDurationDoubleClick = (e, issue) => {
  //   e.preventDefault();
  //   if (!issue) {
  //     console.log('No issue provided');
  //     return;
  //   } else {
  //     console.log('Task found', issue);
  //     modalOptions.current.set({
  //       ...modalOptions.current,
  //       isOpen: true,
  //       modalID: issue.id,
  //     });
  //     // Pass the issue to the modal
  //   }
  // };

  // TODO: Implement the dependency_to and dependency_by
  // dependency_to: Set an alert for the issue that needs to be complete before we start this issue
  // dependency_by: Set an alert for the issue that needs this issue to be completed before we start that issue
  // const { dependency_to, dependency_by } = issue;
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
  // Get iteration that the task belongs too if an iteration is given.
  const iteration =
    issue.issue_type === 'TASK' ? issue?.assigned_iteration : null;
  // Set the initial TimeDuration length
  const iterationStartTime = iteration
    ? sprintData[iteration - 1]?.startDate
    : null;
  const iterationEndTime = iteration
    ? sprintData[iteration - 1]?.endDate
    : null;
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
        let start_y, start_m, start_d, end_y, end_m, end_d;
        if (iterationStartTime) {
          [start_y, start_m, start_d] = iterationStartTime.split('-');
        } else {
          ({ y: start_y, m: start_m, d: start_d } = issue.startDate);
        }
        if (iterationEndTime) {
          [end_y, end_m, end_d] = iterationEndTime.split('-');
        } else {
          ({ y: end_y, m: end_m, d: end_d } = issue.endDate);
        }
        const startDate = new Date(
          createFormattedDateFromStr(start_y, start_m, start_d)
        );

        const endDate = new Date(
          createFormattedDateFromStr(end_y, end_m, end_d)
        );
        const currentDate = new Date(formattedDate);
        if (startDate.getTime() === currentDate.getTime()) {
          // Found a timeline block for this issue
          timelineBlock = true;
          // Calculating the time difference of two dates
          let time_difference = endDate.getTime() - startDate.getTime();
          // Calculating the no. of days between two dates
          let day_difference = Math.round(time_difference / (1000 * 3600 * 24));

          dateDiff += day_difference;
        }
      }
      taskRow.push(
        <div
          data-comp="TimeDuration"
          key={`${issue.id}-${j}`}
          onDragOver={handleDragOver}
          onDrop={handleDrop}
          style={{
            ...customStyles.ganttTimePeriodCell,
            backgroundColor:
              over?.task === issue?.id && over?.date === formattedDate
                ? 'var(--color-red-transparent-33)'
                : j === currentDate.day &&
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
        >
          {/* Create task on timeline */}
          {timelineBlock ? (
            <div
              key={`time-duration-${issue.id}-${Math.random()}`}
              draggable="true"
              onDrag={handleDrag}
              tabIndex="0"
              data-task={issue?.id}
              style={{
                ...styles.taskDuration,
                width: `calc(${dateDiff} * 100% - 1px)`,
                color: 'white',
                background: colorsMap[issue.issue_type],
                fontSize: '0.75rem',
                display: dragging ? 'none' : 'flex',
                alignItems: 'top',
                overflow: 'hidden',
                position: 'relative',
                zIndex: '1',
                textOverflow: 'ellipsis',
                alignItems: 'center',
                height: '40px', // TODO: Should we make this a variable so one change for all?
                border: '3px solid var(--color-white)',
                borderRadius: '7px',
                justifyContent: 'center',
              }}
              onDoubleClick={(e) => handleTimeDurationDoubleClick(e, issue)}
            >
              {issue?.name}
            </div>
          ) : (
            false
          )}
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
      </div>
    );
    monthRows.push(taskRows);
    taskRow = [];
    date_startMonth.setMonth(date_startMonth.getMonth() + 1);
  }
  return monthRows;
};

// Exported Components
/**
 * Display the list of issues in the header of the Gantt Chart. These headers
 * display on the left side of the Gantt Chart and have buttons to focus on
 * the issue, expand/collapse the issue and edit the selected issue.
 *
 * @param {Object} props All the properties passed to the component.
 * @param {Array} props.issues The issues that are being passed to the component.
 * @returns {JSX.Element} The JSX code for the Issue Header.
 */
export default function IssueGrid({ issue, timeRange, parent }) {
  // Helper Functions used by this component

  // Configure the time range start and end months
  const startMonth = new Date(
    parseInt(timeRange.fromSelectYear),
    timeRange.fromSelectMonth
  );
  const endMonth = new Date(
    parseInt(timeRange.toSelectYear),
    timeRange.toSelectMonth
  );
  const numMonths = monthDiff(startMonth, endMonth) + 1;
  // Resolved HTML
  return (
    <div id="gantt_issueGrid">
      <div
        key={`${issue?.id}-${issue.name}`}
        id={`task_row_header task_row_header-${issue?.id}`}
        className={
          parent
            ? `gantt_task_row task_row_header_child_of-${parent?.id} hidden`
            : 'gantt_task_row'
        }
        data-parent={parent?.id}
        data-comp="TaskRow"
      >
        <style jsx>{styles}</style>
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
      {issue?.children?.map((childIssue, idx) => (
        <IssueGrid
          key={idx}
          issue={childIssue}
          timeRange={timeRange}
          parent={issue}
        />
      ))}
    </div>
  );
}
