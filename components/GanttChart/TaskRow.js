import { useEffect, useState, useRef } from 'react';
import Modal from './Modal';
import { Button } from './../Button/Button';
import { TimeTable } from './TimeTable';
import { TimeDuration } from './TimeDuration';

import TimeRange from './TimeRange';
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

export default function TaskRow({ issue }) {
  const [updatedIssue, setUpdatedIssue] = useState(issue);
  const [timeRange, setTimeRange] = useState({
    fromSelectMonth: new Date().getMonth() + 0,
    fromSelectYear: '2024',
    toSelectMonth: new Date().getMonth() + 1,
    toSelectYear: '2024',
  });

  return (
    <div
      key={`${updatedIssue?.id}-${updatedIssue.name}`}
      id={`task_row_header task_row_header-${updatedIssue?.id}`}
      className="gantt_task_row"
    >
      <style jsx>{styles}</style>
      <div className="gantt_task_row-header">
        <Button
          modifier="icon_eye"
          className="focusTask"
          type="button"
          data={{
            id: updatedIssue.id,
          }}
        ></Button>
        {/* <button
          className="editTask"
          type="button"
          data-task-id={updatedIssue?.id}
        > */}
        <span className="taskName">{updatedIssue?.name}</span>
        {/* </button> */}
        <button
          className="deleteTask"
          type="button"
          data-task-id={updatedIssue?.id}
        >
          x
        </button>
      </div>
      <div className="gantt_task_row-time">
        {/* <TimeDuration issue={updatedIssue} /> */}
      </div>
    </div>
  );
}
