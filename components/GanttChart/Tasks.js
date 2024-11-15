import { useEffect, useState, useRef } from 'react';
import Modal from './Modal';
import Button from './Button';
import Select from './Select';

export default function Tasks({
  tasks,
  setTasks,
  taskDurations,
  setTaskDurations,
  handleTaskDateView,
  headerRef,
  onFilter,
}) {
  const inputRef = useRef([]);
  const indexRef = useRef(null);
  const [updatedTasks, setUpdatedTasks] = useState(tasks);
  const [showModal, setShowModal] = useState(false);
  const [modalData, setModalData] = useState(undefined);
  const [modalID, setModalID] = useState(undefined);

  /**
   * Handle deleting a task event
   * @param {*} e
   */
  function handleDelete(e) {
    const idNum = parseInt(e.target.getAttribute('data-task-id'));
    const newTasks = tasks.filter((task) => task.id !== idNum);
    // update state (if data on backend - make API request to update data)
    setTasks(newTasks);

    setTaskDurations((prevState) => {
      // delete any taskDurations associated with the task
      const newTaskDurations = prevState.filter(
        (taskDuration) => taskDuration.task !== idNum
      );
      return newTaskDurations;
    });
  }

  /**
   * Handle editing a task event
   * @param {*} e
   */
  function handleEdit(e) {
    setModalID('taskEditModal');
    setModalData({ target: e.target.getAttribute('data-task-id') });
    setShowModal(true);
  }

  /**
   * NOTE: No longer used
   * Handle changing a task name
   *
   * TODO: Will get moved to a modal for all of these updates
   *
   * @param {*} e
   * @param {*} i
   */
  function onChange(e, i) {
    const { value } = e.target;
    const idNum = parseInt(e.target.getAttribute('data-task-id'));
    indexRef.current = i;

    let newTasks = tasks.filter((task) => task.id !== idNum);
    newTasks.push({ id: idNum, name: value });
    newTasks = newTasks.sort((a, b) => a.id - b.id);
    // update state (if data on backend - make API request to update data)
    setTasks(newTasks);
  }

  /**
   * Handle the modal state
   *
   * @param {*} val
   */
  function handleModalState(val) {
    if (!val) {
      setShowModal(val);
      setModalID(undefined);
      setModalData(undefined);
    }
  }

  /**
   * When the eyeball icon is clicked then we want to focus our TimeTable on
   * that task and also show any dependencies on that specific task.
   *
   * If we find data then we pass it to the GanntChart component to update the
   * TimeTable component
   *
   * @param {PointerEvent} e event from the mouse click
   * @returns {void}
   */
  function handleTaskView(e) {
    // Prevent any event bubbling
    e.preventDefault();
    e.stopPropagation();
    // If e.target is the image grab its parent element
    console.log(e);
    let targetElement = undefined;
    if (e.target.nodeName === 'path') {
      targetElement = e.target.parentElement.parentElement;
    } else if (e.target.nodeName === 'svg') {
      targetElement = e.target.parentElement;
    } else {
      targetElement = e.target;
    }
    if (!targetElement) {
      console.error('No target element found');
      return;
    }
    // Get the task ID from the element dataset
    const id = JSON.parse(targetElement.getAttribute('data'), null, 2).id;
    // Find the saved task data
    if (id >= 0) {
      // Find the task and task duration data
      const task = tasks.find((tsk) => tsk.id === id);
      const taskDuration = taskDurations.find(
        (taskDuration) => taskDuration.task === id
      );
      // Combine the task data with the task duration data
      const data = {
        ...task,
        ...taskDuration,
      };
      // Pass the data back to the parent component so we can update the Time
      // Table component
      handleTaskDateView(data);
    } else {
      // Log an error if the task ID is not found
      console.error('Task ID not found');
    }
  }

  /**
   * Handle the task selection change based on the dropdown
   *
   * @param {*} data
   */
  function handleTaskSelectionChange(data) {
    if (onFilter) onFilter(data);
  }

  useEffect(() => {
    if (inputRef.current.length && indexRef.current >= 0) {
      inputRef?.current[indexRef.current]?.focus();
    }
  });

  useEffect(() => {
    setUpdatedTasks(tasks);
  }, [setUpdatedTasks, tasks]);

  return (
    <div id="gantt-grid-container__tasks" ref={headerRef}>
      {/* NOTE: Still in progress */}
      <Modal
        options={{
          isOpen: showModal,
          modalID,
          modalData,
        }}
        handleOpenChange={handleModalState}
      />
      {/* Dropdown to filter based on taskType */}
      <div className="gantt-task-row">
        <Select onChange={handleTaskSelectionChange} />
      </div>
      {/* Spacer DIVs, need to clean up */}
      <div className="gantt-task-row"></div>
      <div className="gantt-task-row"></div>
      {/* Iterate over the filtered tasks to display only what is intended */}
      {updatedTasks &&
        updatedTasks.map((tsk, i) => (
          <div
            key={`${i}-${tsk?.id}-${tsk.name}`}
            id={`task_row_header task_row_header-${tsk?.id}`}
            className="gantt-task-row"
          >
            <Button
              modifier="icon_eye"
              className="focusTask"
              type="button"
              data={{
                id: tsk.id,
              }}
              onClick={handleTaskView}
            >
              C
            </Button>
            <button
              className="editTask"
              type="button"
              data-task-id={tsk?.id}
              onClick={handleEdit}
            >
              {tsk?.name}
            </button>
            <button
              className="deleteTask"
              type="button"
              data-task-id={tsk?.id}
              onClick={handleDelete}
            >
              x
            </button>
          </div>
        ))}
      {/* Style Logic for this component TODO: move to stylized components rather than this */}
      <style jsx>{`
        #gantt-grid-container__tasks {
          outline: 0.5px solid var(--color-outline);
        }

        .gantt-task-row {
          display: flex;
          outline: 0.5px solid var(--color-outline);
          text-align: center;
          min-height: var(--min-cell-height);
          border: none;
        }

        input {
          width: 127px;
          border: none;
          outline: none;
          background: none;
        }

        button.editTask {
          background: none;
          border-radius: 5px;
          border: none;
          transition: all 0.2;
        }

        button.deleteTask {
          line-height: 0px;
          color: var(--color-orange);
          background: none;
          border-radius: 5px;
          border: none;
          transition: all 0.2s ease;
        }

        button:focus {
          outline: none;
          transform: scale(1.3);
        }
      `}</style>
    </div>
  );
}
