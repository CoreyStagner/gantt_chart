import { Button } from './../Button/Button';

// TODO: Update the styles, and convert to the custom styles
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

export default function TaskRow({ issue }) {
  return (
    <div
      key={`${issue?.id}-${issue.name}`}
      id={`task_row_header task_row_header-${issue?.id}`}
      className="gantt_task_row"
    >
      <style jsx>{styles}</style>
      <div
        className="gantt_task_row-header"
        style={{
          ...customStyles.header,
          flexBasis: '30%',
          flex: '1 0 30%',
          height: '40px',
          marginTop: '0.5px',
        }}
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
    </div>
  );
}
