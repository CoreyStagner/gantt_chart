import { useState } from 'react';

import {
  monthDiff,
  getDaysInMonth,
  getDayOfWeek,
  getDateTimeObject,
} from '../../helpers/dateFunctions';

import { months } from '../../constants';

const styles = `
  .gantt_task_row {
    display: flex;
    flex-direction: row;
    align-items: flex-start;
  }

  .task_header-details {
    display: flex;
    flex-basis: 30%;
    justify-content: space-between;
  }

  .task_header-time {
    display: grid;
    width: 70%;
  }




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

export default function TaskTableHeader({ timeRange }) {
  const [sprintDateRanges, setSprintDateRanges] = useState([]);

  const currentDate = getDateTimeObject();
  if (!currentDate) {
    console.log(
      'invalid date. TODO: update where it is used to prevent errors.'
    );
  }

  // creating rows
  const startMonth = new Date(
    parseInt(timeRange.fromSelectYear),
    timeRange.fromSelectMonth
  );
  const endMonth = new Date(
    parseInt(timeRange.toSelectYear),
    timeRange.toSelectMonth
  );

  const numMonths = monthDiff(startMonth, endMonth) + 1;
  let month = new Date(startMonth);

  let monthRows = [];
  let dayRows = [];
  let dayRow = [];
  let weekRows = [];
  let weekRow = [];
  let TaskTableHeaders = [];
  let TaskTableHeader = [];

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

  for (let i = 0; i < numMonths; i++) {
    // create month rows
    monthRows.push(
      <div
        key={i}
        data-month={startMonth.getMonth() + 1 + i}
        style={{ ...customStyles.ganttTimePeriod, outline: '1px solid' }}
      >
        <span style={customStyles.ganttTimePeriodSpan}>
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
            ...customStyles.ganttTimePeriod,
            outline: '1px solid var(--color-transparent-33)',
            backgroundColor:
              j === currentDate.day &&
              startMonth.getMonth() + 1 + i === currentDate.month
                ? 'var(--color-red-transparent-33)'
                : determineSprint(
                    month.getFullYear(),
                    startMonth.getMonth(),
                    j
                  ) %
                    2 ===
                  0
                ? 'var(--color-gray-500)'
                : 'var(--color-gray-400)',
            color: 'var(--color-black)',
          }}
        >
          <span style={customStyles.ganttTimePeriodSpan}>{j}</span>
        </div>
      );

      // Create Day of the Week rows
      weekRow.push(
        <div
          key={j}
          data-month={startMonth.getMonth() + 1}
          style={{
            ...customStyles.ganttTimePeriod,
            outline: '1px solid var(--color-transparent-33)',
            fontSize: '0.5rem',
          }}
        >
          <span
            style={{
              ...customStyles.ganttTimePeriodSpan,
              color: 'var(--color-gray-600)',
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
        style={{ ...customStyles.ganttTimePeriod, outline: 'none' }}
      >
        {dayRow}
      </div>
    );

    // Create Day of the Week cells
    weekRows.push(
      <div
        key={i}
        data-month={startMonth.getMonth() + 1 + i}
        style={{ ...customStyles.ganttTimePeriod, outline: 'none' }}
      >
        {weekRow}
      </div>
    );

    dayRow = [];
    weekRow = [];
    month.setMonth(month.getMonth() + 1);
  }

  return (
    <>
      <style jsx>{styles}</style>
      <div className="gantt_task_row">
        <div
          className="task_header-time"
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
            {TaskTableHeaders}
          </div>
        </div>
      </div>
    </>
  );
}
