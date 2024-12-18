import { useState } from 'react';
import { Button } from '../Button/Button';
import { CiCirclePlus, CiCircleMinus } from 'react-icons/ci';
import { BiHorizontalCenter } from 'react-icons/bi';

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
    margin: auto;
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
  'task_header-details': {
    display: 'flex',
    margin: 'auto',
  },
};

export default function TaskTableHeader() {
  return (
    <>
      <style jsx>{styles}</style>
      <div
        data-comp="TaskTableHeader"
        className="gantt_task_row"
        style={{
          height: '120px',
          display: 'flex',
        }}
      >
        {/* Show Select component so that the user can change the view */}
        <div>Filter Select</div>
        {/* Show Heading and timeline buttons */}
        <div style={customStyles['task_header-details']}>
          {/* Sprint zoom controls */}
          <div
            style={{
              display: 'flex',
              flexDirection: 'row',
              justifyContent: 'center',
              alignItems: 'center',
            }}
          >
            {/* list of buttons to zoom in, out, and focus the timeline */}
            <Button
              size="large"
              modifier="ghost"
              textContent={
                <>
                  <span>
                    <CiCirclePlus />
                  </span>
                </>
              }
            />
            <Button
              size="large"
              modifier="ghost"
              textContent={
                <>
                  <span>
                    <BiHorizontalCenter />
                  </span>
                </>
              }
            />
            <Button
              size="large"
              modifier="ghost"
              textContent={
                <>
                  <span>
                    <CiCircleMinus />
                  </span>
                </>
              }
            />
          </div>
        </div>
      </div>
    </>
  );
}
